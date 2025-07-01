import { KeysClause, ToriiQueryBuilder } from "@dojoengine/sdk";
import { Routes, Route } from "react-router-dom";
import Support from "./app/landing/support/Support";
import { Link } from "react-router-dom";
import Footer from "./app/components/Footer";
import Rules from "./app/landing/rules/Rules";


import { ModelsMapping } from "./typescript/models.gen.ts";
import { useSystemCalls } from "./useSystemCalls.ts";
import { useAccount } from "@starknet-react/core";
import { WalletAccount } from "./wallet-account.tsx";
import { HistoricalEvents } from "./historical-events.tsx";
import {
    useDojoSDK,
    useEntityId,
    useEntityQuery,
    useModel,
} from "@dojoengine/sdk/react";
import { addAddressPadding, CairoCustomEnum } from "starknet";
import { Events } from "./events.tsx";
import PoolsPage from "./shared/sidebar/pools/page.tsx";
import LigueOne from "./app/leagues/ligueOne/ligueOne";

function GameUI() {
    const { useDojoStore, client } = useDojoSDK();
    const { account } = useAccount();
    const entities = useDojoStore((state) => state.entities);
    const { spawn } = useSystemCalls();
    const entityId = useEntityId(account?.address ?? "0");

    useEntityQuery(
        new ToriiQueryBuilder()
            .withClause(
                KeysClause(
                    [ModelsMapping.Moves, ModelsMapping.Position],
                    [account?.address ? addAddressPadding(account.address) : undefined],
                    "FixedLen"
                ).build()
            )
            .includeHashedKeys()
    );

    const moves = useModel(entityId as string, ModelsMapping.Moves);
    const position = useModel(entityId as string, ModelsMapping.Position);

    return (
        <>
            <WalletAccount />

            <div className="mt-4 md:mb-2 flex space-x-2">
                <Link to="/landing/support">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded">
                        Support
                    </button>
                </Link>
                <Link to="/landing/rules">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded">
                        Rules
                    </button>
                </Link>
            </div>

            {/* Existing game UI layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {/* ... rest of your grid code */}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {/* Spawn + Info Box */}
                <div className="bg-gray-700 p-4 rounded-lg shadow-inner">
                    <div className="grid grid-cols-3 gap-2 w-full h-48">
                        <div className="col-start-2">
                            <button
                                className="h-12 w-12 bg-gray-600 rounded-full shadow-md active:shadow-inner active:bg-gray-500 focus:outline-none text-2xl font-bold text-gray-200"
                                onClick={async () => await spawn()}
                            >
                                +
                            </button>
                        </div>
                        <div className="col-span-3 text-center text-base text-white">
                            Moves Left: {moves ? moves.remaining : "Need to Spawn"}
                        </div>
                        <div className="col-span-3 text-center text-base text-white">
                            {position
                                ? `x: ${position?.vec?.x}, y: ${position?.vec?.y}`
                                : "Need to Spawn"}
                        </div>
                        <div className="col-span-3 text-center text-base text-white">
                            {moves && moves.last_direction.isSome()
                                ? moves.last_direction.unwrap()
                                : ""}
                        </div>
                    </div>
                </div>

                {/* Move Buttons */}
                <div className="bg-gray-700 p-4 rounded-lg shadow-inner">
                    <div className="grid grid-cols-3 gap-2 w-full h-48">
                        {[
                            { direction: new CairoCustomEnum({ Up: "()" }), label: "↑", col: "col-start-2" },
                            { direction: new CairoCustomEnum({ Left: "()" }), label: "←", col: "col-start-1" },
                            { direction: new CairoCustomEnum({ Right: "()" }), label: "→", col: "col-start-3" },
                            { direction: new CairoCustomEnum({ Down: "()" }), label: "↓", col: "col-start-2" },
                        ].map(({ direction, label, col }, idx) => (
                            <button
                                key={idx}
                                className={`${col} h-12 w-12 bg-gray-600 rounded-full shadow-md active:shadow-inner active:bg-gray-500 focus:outline-none text-2xl font-bold text-gray-200`}
                                onClick={async () => {
                                    await client.actions.move(account!, direction);
                                }}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Entity Table */}
            <div className="mt-8 overflow-x-auto">
                <table className="w-full border-collapse border border-gray-700">
                    <thead>
                        <tr className="bg-gray-800 text-white">
                            <th className="border border-gray-700 p-2">Entity ID</th>
                            <th className="border border-gray-700 p-2">Player</th>
                            <th className="border border-gray-700 p-2">Position X</th>
                            <th className="border border-gray-700 p-2">Position Y</th>
                            <th className="border border-gray-700 p-2">Can Move</th>
                            <th className="border border-gray-700 p-2">Last Direction</th>
                            <th className="border border-gray-700 p-2">Remaining Moves</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(entities).map(([entityId, entity]) => {
                            const position = entity.models.dojo_starter.Position;
                            const moves = entity.models.dojo_starter.Moves;
                            const lastDirection = moves?.last_direction?.isSome()
                                ? moves.last_direction.unwrap()
                                : "N/A";
                            return (
                                <tr key={entityId} className="text-gray-300">
                                    <td className="border border-gray-700 p-2">{addAddressPadding(entityId)}</td>
                                    <td className="border border-gray-700 p-2">{position?.player ?? "N/A"}</td>
                                    <td className="border border-gray-700 p-2">{position?.vec?.x?.toString() ?? "N/A"}</td>
                                    <td className="border border-gray-700 p-2">{position?.vec?.y?.toString() ?? "N/A"}</td>
                                    <td className="border border-gray-700 p-2">{moves?.can_move?.toString() ?? "N/A"}</td>
                                    <td className="border border-gray-700 p-2">{lastDirection}</td>
                                    <td className="border border-gray-700 p-2">{moves?.remaining?.toString() ?? "N/A"}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <Events />
            <HistoricalEvents />
        </>
    );
}

function App() {
    return (
        <div className="bg-black min-h-screen w-full p-4 sm:p-8">
            <div className="max-w-7xl mx-auto">
                <Routes>
                    <Route path="/landing/rules" element={<Rules />} />
                    <Route path="/landing/support" element={<Support />} />
                    <Route path="/leagues/ligueOne" element={<LigueOne />} />
                    <Route path="*" element={<GameUI />} />
                </Routes>
            </div>
            <PoolsPage />
             <Footer />
        </div>
    );
}

export default App;
