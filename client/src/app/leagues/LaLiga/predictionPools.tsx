import StickyNavbar from "../../components/StickyNavbar";
import { useState } from "react";
import Background from "../../../assets/Background.png";

const PredictionPools = () => {
    // Only one tab for now, but structure allows for more
    const [activeTab] = useState("score");

    return (
        <div
            className="min-h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${Background})` }}
        >
            <StickyNavbar />
            <div className="px-8 py-8">
                <h2 className="text-white text-3xl font-bold mb-6">Results</h2>
                {/* Tabs (Select Modal) */}
                <div className="flex mb-8 bg-black/15 p-2">
                    <div className="flex flex-row w-full">
                        <button
                            className={`px-8 py-1 font-semibold w-full text-lg  transition-all duration-200 z-10 bg-[#312C85] text-[#D1D5DC]`}
                            style={{
                                background:
                                    activeTab === "score"
                                        ? "#372AAC"
                                        : "#1E1E2F",
                            }}
                            disabled
                        >
                            Score prediction Pools
                        </button>
                        <button
                            className={`px-8   w-full font-semibold text-sm rounded-t-lg transition-all duration-200 z-10 bg-transparent text-gray-400 cursor-not-allowed`}
                            disabled
                        >
                            Special Pools
                        </button>
                    </div>
                </div>

                {/* Results Section Placeholder */}
                <div className=" rounded-2xl  shadow-lg relative overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Left: Prediction Card */}
                        <div className="bg-[#101828] rounded-xl p-6 flex flex-col justify-between min-h-[220px] shadow-md">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-white font-semibold">
                                    Team 1 vs Team 2
                                </span>
                                <span className="bg-orange-500 text-xs text-white px-3 py-1 rounded-full">
                                    Active
                                </span>
                            </div>
                            <div className="text-gray-300 text-sm mb-2">
                                Your prediction
                            </div>
                            <div className="text-2xl font-bold text-white mb-4">
                                123 - 154
                            </div>
                            <div className="flex justify-between text-xs text-gray-400 mb-1">
                                <span>Participants</span>
                                <span>Potential Reward</span>
                            </div>
                            <div className="flex justify-between text-white font-semibold mb-2">
                                <span>43</span>
                                <span>320 STRK</span>
                            </div>
                            <div className="flex justify-between text-xs text-gray-400 mb-1">
                                <span>Your Bet</span>
                                <span>End date</span>
                            </div>
                            <div className="flex justify-between text-white font-semibold">
                                <span>200 STRK</span>
                                <span>--/--/----</span>
                            </div>
                        </div>

                        {/* Center: Weekly Progress Chart Placeholder */}
                        <div className="bg-[#101828] rounded-xl p-6 flex flex-col items-center justify-center min-h-[220px] shadow-md">
                            <div className="text-white text-lg font-semibold mb-4">
                                Weekly Progress
                            </div>
                            <div className="w-full h-32 bg-[#181F36] rounded-lg flex items-center justify-center text-gray-500">
                                {/* Replace with chart component */}
                                Chart Placeholder
                            </div>
                        </div>

                        {/* Right: Pools Results Chart Placeholder */}
                        <div className="bg-[#101828] rounded-xl p-6 flex flex-col items-center justify-center min-h-[220px] shadow-md">
                            <div className="text-white text-lg font-semibold mb-4">
                                Pools' results
                            </div>
                            <div className="w-full h-32 bg-[#181F36] rounded-lg flex items-center justify-center text-gray-500">
                                {/* Replace with chart component */}
                                Chart Placeholder
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PredictionPools;
