import React, { useState } from "react";
import Sidebar from "./Sidebar";
import PredictionCard from "./PredictionCard";
import WeeklyProgressCard from "./WeeklyProgressCard";
import PoolsResultsCard from "./PoolsResultsCard";
import { Home, Users, Coins, ShoppingCart, Trophy } from "lucide-react";
import StickyNavbar from "../../components/StickyNavbar";
import Background from "../../../assets/Background.png";

const PredictionPools = () => {
    const [activeTab] = useState("score");
    const [activeSidebarItem, setActiveSidebarItem] = useState("Results");

    // Mock data for charts
    const weeklyData = [
        { name: "Mon", value: 120 },
        { name: "Tue", value: 190 },
        { name: "Wed", value: 150 },
        { name: "Thu", value: 220 },
        { name: "Fri", value: 180 },
        { name: "Sat", value: 250 },
        { name: "Sun", value: 200 },
    ];

    const sidebarItems = [
        { name: "League", icon: Home },
        { name: "Team", icon: Users },
        { name: "Pools", icon: Coins },
        { name: "Market", icon: ShoppingCart },
        { name: "Results", icon: Trophy },
    ];

    return (
        <div
            className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${Background})` }}
        >
            <StickyNavbar />
            <div className="flex  w-full">
                {/* Sidebar: vertical on desktop, horizontal on mobile */}
                <Sidebar
                    sidebarItems={sidebarItems}
                    activeSidebarItem={activeSidebarItem}
                    setActiveSidebarItem={setActiveSidebarItem}
                />
                {/* Main Content */}
                <main className="flex-1 flex flex-col w-full lg:ml-56">
                    <div className="px-4 md:px-8 py-8 w-full">
                        <h2 className="text-white text-4xl md:text-7xl font-semibold mb-6">
                            Results
                        </h2>
                        {/* Tabs */}
                        <div className="flex mb-8 bg-black/15 p-2 rounded-lg w-full">
                            <div className="flex flex-row w-full gap-2">
                                <button
                                    className="px-4 md:px-8 py-2 font-semibold w-full text-lg transition-all duration-200 z-10 rounded-lg"
                                    style={{
                                        background:
                                            activeTab === "score"
                                                ? "#372AAC"
                                                : "#1E1E2F",
                                        color:
                                            activeTab === "score"
                                                ? "#D1D5DC"
                                                : "#9CA3AF",
                                    }}
                                    disabled
                                >
                                    Score prediction Pools
                                </button>
                                <button
                                    className="px-4 md:px-8 py-2 w-full font-semibold text-lg rounded-lg transition-all duration-200 z-10 text-gray-400 cursor-not-allowed"
                                    disabled
                                >
                                    Special Pools
                                </button>
                            </div>
                        </div>
                        {/* Results Section */}
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            <PredictionCard
                                team1="Team 1"
                                team2="Team 2"
                                prediction="123 - 154"
                                participants={43}
                                reward="320 STRK"
                                bet="200 STRK"
                                endDate="--/--/----"
                                status="Active"
                            />
                            <WeeklyProgressCard weeklyData={weeklyData} />
                            <PoolsResultsCard weeklyData={weeklyData} />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default PredictionPools;
