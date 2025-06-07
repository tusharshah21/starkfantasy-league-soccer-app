import StickyNavbar from "../../components/StickyNavbar";


export default function Rules() {
    return (
        <div className="bg-[#0E0E1A] text-white min-h-screen">
            <StickyNavbar />

            <div className="max-w-6xl mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold mb-6">
                    Game <span className="text-orange-500">Rules</span>
                </h1>

                <div className="grid lg:grid-cols-4 gap-10">
                    {/* Main Content */}
                    <div className="lg:col-span-3 space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold mb-2">Introduction</h2>
                            <p className="text-gray-300">
                                StarkFantasy League is an innovative <span className="text-blue-400">Web3 Fantasy Sports game</span> where players assemble virtual teams,
                                compete in a monthly tournament, and <span className="text-green-400">can receive rewards</span> based on their results...
                                {/* continue the text as seen in the screenshot */}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-2">Cricket Rules</h2>
                            <p className="text-gray-300">
                                Create your team with a max of <span className="text-orange-500">11 players per Cricket team</span>, ...
                            </p>

                            {/* Sample Points Table */}
                            <div className="overflow-x-auto mt-4">
                                <table className="table-auto w-full text-left border border-gray-600">
                                    <thead>
                                        <tr className="bg-indigo-900">
                                            <th className="px-4 py-2 border border-gray-600 text-white">Batsmen</th>
                                            <th className="px-4 py-2 border border-gray-600 text-white">Points</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-gray-800">
                                        <tr><td className="border px-4 py-2">1 run</td><td className="border px-4 py-2">+1 point</td></tr>
                                        <tr><td className="border px-4 py-2">Boundary bonus</td><td className="border px-4 py-2">+4 points</td></tr>
                                        <tr><td className="border px-4 py-2">Six bonus</td><td className="border px-4 py-2">+6 points</td></tr>
                                        <tr><td className="border px-4 py-2">25 run bonus</td><td className="border px-4 py-2">+4 points</td></tr>
                                        <tr><td className="border px-4 py-2">Half-century bonus</td><td className="border px-4 py-2">+8 points</td></tr>
                                        <tr><td className="border px-4 py-2">75 run bonus</td><td className="border px-4 py-2">+12 points</td></tr>
                                        <tr><td className="border px-4 py-2">Century</td><td className="border px-4 py-2">+16 points</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Add other sections: Additional rules, Entry fee, Rewards */}
                    </div>

                    {/* Table of Contents (TOC) */}
                    <div className="hidden lg:block text-sm space-y-2 text-gray-400 pt-2">
                        <div className="border-l border-gray-500 pl-4 space-y-2">
                            <div className="text-orange-400">• Introduction</div>
                            <div>• Cricket Rules</div>
                            <div>• Additional rules</div>
                            <div>• Entry Fee</div>
                            <div>• Rewards</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <Footer /> */}
        </div>
    );
}
