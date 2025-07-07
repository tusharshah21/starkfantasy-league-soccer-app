"use client";

import { useState } from "react";
import { X } from "lucide-react";

import backgroundPattern from "../../../assets/Background.png";
import bat from "../../../assets/Bat.svg";
import cricket from "../../../assets/Cricket.svg";
import hand from "../../../assets/Hand.svg";
import modalBg from "../../../assets/modalBg.svg";

interface MatchPool {
    id: string;
    homeTeam: {
        name: string;
        avatar: string;
    };
    awayTeam: {
        name: string;
        avatar: string;
    };
    date: string;
    time: string;
}

interface SpecialPool {
    id: string;
    title: string;
    description: string;
    icon: string;
}

interface Player {
    id: string;
    name: string;
    team: string;
    rewardRate: string;
    secondaryRate: string;
    points: number;
    selected?: boolean;
    stats: {
        goals: number;
        assists: number;
        dribbling: number;
        speed: number;
        hitting: number;
    };
}

export default function PoolsPage() {
    const [activeTab, setActiveTab] = useState<"match" | "special">("match");
    const [selectedMatch, setSelectedMatch] = useState<MatchPool | null>(null);
    const [selectedSpecial, setSelectedSpecial] = useState<SpecialPool | null>(
        null
    );
    const [betPoints, setBetPoints] = useState<string>("");
    const [availablePoints] = useState<number>(12100);

    // Add state for home and away team scores
    const [homeScore, setHomeScore] = useState<number>(0);
    const [awayScore, setAwayScore] = useState<number>(0);

    // Add state for selected player
    const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null);

    const matchPools: MatchPool[] = [
        {
            id: "1",
            homeTeam: { name: "Team Name", avatar: "/api/placeholder/40/40" },
            awayTeam: { name: "Team Name", avatar: "/api/placeholder/40/40" },
            date: "DD-MM-YYYY",
            time: "HH:MM",
        },
        {
            id: "2",
            homeTeam: { name: "Team Name", avatar: "/api/placeholder/40/40" },
            awayTeam: { name: "Team Name", avatar: "/api/placeholder/40/40" },
            date: "DD-MM-YYYY",
            time: "HH:MM",
        },
        {
            id: "3",
            homeTeam: { name: "Team Name", avatar: "/api/placeholder/40/40" },
            awayTeam: { name: "Team Name", avatar: "/api/placeholder/40/40" },
            date: "DD-MM-YYYY",
            time: "HH:MM",
        },
        {
            id: "4",
            homeTeam: { name: "Team Name", avatar: "/api/placeholder/40/40" },
            awayTeam: { name: "Team Name", avatar: "/api/placeholder/40/40" },
            date: "DD-MM-YYYY",
            time: "HH:MM",
        },
        {
            id: "5",
            homeTeam: { name: "Team Name", avatar: "/api/placeholder/40/40" },
            awayTeam: { name: "Team Name", avatar: "/api/placeholder/40/40" },
            date: "DD-MM-YYYY",
            time: "HH:MM",
        },
        {
            id: "6",
            homeTeam: { name: "Team Name", avatar: "/api/placeholder/40/40" },
            awayTeam: { name: "Team Name", avatar: "/api/placeholder/40/40" },
            date: "DD-MM-YYYY",
            time: "HH:MM",
        },
        {
            id: "7",
            homeTeam: { name: "Team Name", avatar: "/api/placeholder/40/40" },
            awayTeam: { name: "Team Name", avatar: "/api/placeholder/40/40" },
            date: "DD-MM-YYYY",
            time: "HH:MM",
        },
        {
            id: "8",
            homeTeam: { name: "Team Name", avatar: "/api/placeholder/40/40" },
            awayTeam: { name: "Team Name", avatar: "/api/placeholder/40/40" },
            date: "DD-MM-YYYY",
            time: "HH:MM",
        },
        {
            id: "9",
            homeTeam: { name: "Team Name", avatar: "/api/placeholder/40/40" },
            awayTeam: { name: "Team Name", avatar: "/api/placeholder/40/40" },
            date: "DD-MM-YYYY",
            time: "HH:MM",
        },
    ];

    const specialPools: SpecialPool[] = [
        {
            id: "1",
            title: "Best Batsman",
            description:
                "Select the batsman whose skill, power, and consistency make them the most outstanding on the field, aiming to score the most runs of the season!",
            icon: "🏏",
        },
        {
            id: "2",
            title: "Best Fielder",
            description:
                "Choose the fielder whose sharp reflexes, safe hands, and game-changing stops make them the most outstanding on the field, striving to be the ultimate defensive asset of the season!",
            icon: "🖐️",
        },
        {
            id: "3",
            title: "Best Bowler",
            description:
                "Select the bowler whose precision, speed, and strategy make them the most outstanding on the field, aiming to dominate with the most wickets of the season!",
            icon: "🏏",
        },
    ];

    const players: Player[] = [
        {
            id: "1",
            name: "Player name",
            team: "TEAM",
            rewardRate: "13.5%",
            secondaryRate: "72.3%",
            points: 310,
            stats: {
                goals: 85,
                assists: 70,
                dribbling: 90,
                speed: 75,
                hitting: 60,
            },
        },
        {
            id: "2",
            name: "Player name",
            team: "TEAM",
            rewardRate: "13.5%",
            secondaryRate: "72.3%",
            points: 310,
            stats: {
                goals: 60,
                assists: 95,
                dribbling: 70,
                speed: 85,
                hitting: 80,
            },
        },
        {
            id: "3",
            name: "Player name",
            team: "TEAM",
            rewardRate: "13.5%",
            secondaryRate: "72.3%",
            points: 310,
            stats: {
                goals: 70,
                assists: 80,
                dribbling: 85,
                speed: 90,
                hitting: 75,
            },
        },
        {
            id: "4",
            name: "Player name",
            team: "TEAM",
            rewardRate: "13.5%",
            secondaryRate: "72.3%",
            points: 310,
            stats: {
                goals: 95,
                assists: 60,
                dribbling: 75,
                speed: 70,
                hitting: 85,
            },
        },
        {
            id: "5",
            name: "Player name",
            team: "TEAM",
            rewardRate: "13.5%",
            secondaryRate: "72.3%",
            points: 310,
            stats: {
                goals: 80,
                assists: 75,
                dribbling: 60,
                speed: 95,
                hitting: 70,
            },
        },
        {
            id: "6",
            name: "Player name",
            team: "TEAM",
            rewardRate: "13.5%",
            secondaryRate: "72.3%",
            points: 310,
            stats: {
                goals: 75,
                assists: 85,
                dribbling: 95,
                speed: 60,
                hitting: 90,
            },
        },
        {
            id: "7",
            name: "Player name",
            team: "TEAM",
            rewardRate: "13.5%",
            secondaryRate: "72.3%",
            points: 310,
            stats: {
                goals: 90,
                assists: 70,
                dribbling: 80,
                speed: 85,
                hitting: 65,
            },
        },
        {
            id: "8",
            name: "Player name",
            team: "TEAM",
            rewardRate: "13.5%",
            secondaryRate: "72.3%",
            points: 310,
            stats: {
                goals: 65,
                assists: 90,
                dribbling: 70,
                speed: 75,
                hitting: 95,
            },
        },
        {
            id: "9",
            name: "Player name",
            team: "TEAM",
            rewardRate: "13.5%",
            secondaryRate: "72.3%",
            points: 310,
            stats: {
                goals: 85,
                assists: 65,
                dribbling: 85,
                speed: 80,
                hitting: 75,
            },
        },
        {
            id: "10",
            name: "Player name",
            team: "TEAM",
            rewardRate: "13.5%",
            secondaryRate: "72.3%",
            points: 310,
            stats: {
                goals: 70,
                assists: 85,
                dribbling: 75,
                speed: 65,
                hitting: 85,
            },
        },
    ];

    const closeMatchModal = () => {
        setSelectedMatch(null);
        setBetPoints("");
        // Reset scores when closing modal
        setHomeScore(0);
        setAwayScore(0);
    };

    const closeSpecialModal = () => {
        setSelectedSpecial(null);
        setBetPoints("");
        setSelectedPlayer(null);
    };

    const handleBetPointsChange = (value: string) => {
        // Only allow numbers
        if (/^\d*$/.test(value)) {
            setBetPoints(value);
        }
    };

    // Functions to handle score changes
    const incrementHomeScore = () => {
        setHomeScore((prev) => prev + 1);
    };

    const decrementHomeScore = () => {
        setHomeScore((prev) => Math.max(0, prev - 1)); // Minimum value is 0
    };

    const incrementAwayScore = () => {
        setAwayScore((prev) => prev + 1);
    };

    const decrementAwayScore = () => {
        setAwayScore((prev) => Math.max(0, prev - 1)); // Minimum value is 0
    };

    // Function to handle player selection
    const handlePlayerSelect = (playerId: string) => {
        setSelectedPlayer((prev) => (prev === playerId ? null : playerId));
    };

    // Function to calculate radar chart coordinates based on stats
    const calculateRadarCoordinates = (stats: any) => {
        if (!stats) return { polygon: "", circles: [] };

        // Convert percentages (0-100) to coordinates
        // Center is at (100, 100), outer radius is 80
        const center = { x: 100, y: 100 };
        const maxRadius = 80;

        // Pentagon vertices angles (starting from top, going clockwise)
        const angles = [
            -Math.PI / 2, // Goals (top)
            -Math.PI / 2 + (2 * Math.PI) / 5, // Assists (top right)
            -Math.PI / 2 + (4 * Math.PI) / 5, // Dribbling (bottom right)
            -Math.PI / 2 + (6 * Math.PI) / 5, // Speed (bottom left)
            -Math.PI / 2 + (8 * Math.PI) / 5, // Hitting (top left)
        ];

        const statValues = [
            stats.goals,
            stats.assists,
            stats.dribbling,
            stats.speed,
            stats.hitting,
        ];

        const coordinates = statValues.map((value, index) => {
            const radius = (value / 100) * maxRadius;
            const x = center.x + radius * Math.cos(angles[index]);
            const y = center.y + radius * Math.sin(angles[index]);
            return { x, y };
        });

        const polygonPoints = coordinates
            .map((coord) => `${coord.x},${coord.y}`)
            .join(" ");

        return {
            polygon: polygonPoints,
            circles: coordinates,
        };
    };

    // Get selected player's stats for radar chart
    const getSelectedPlayerStats = () => {
        if (!selectedPlayer) return null;
        const player = players.find((p) => p.id === selectedPlayer);
        return player ? player.stats : null;
    };

    const radarData = calculateRadarCoordinates(getSelectedPlayerStats());

    return (
        <div
            className="min-h-screen relative overflow-hidden"
            style={{
                backgroundImage: `url(${backgroundPattern})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "repeat",
            }}
        >
            {/* Premier League Background Pattern */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/10 to-orange-500/10"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-orange-500/20 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/15 to-transparent rounded-full blur-2xl"></div>
            </div>

            <div className="relative z-10 p-4 md:p-6 lg:p-8">
                {/* Header */}
                <div className="">
                    <h1 className="text-white text-3xl md:text-4xl font-bold mb-20">
                        Pools
                    </h1>

                    {/* Tabs */}
                    <div className="relative">
                        <div className="flex w-fit pl-5">
                            <button
                                onClick={() => setActiveTab("match")}
                                className={`px-6 py-3 font-medium transition-all duration-200 relative z-10 ${
                                    activeTab === "match"
                                        ? "bg-orange-500 text-white"
                                        : "bg-[#372AAC] text-gray-300 hover:text-white hover:bg-slate-700/50"
                                }`}
                                style={{
                                    borderTopLeftRadius: "12px",
                                    borderTopRightRadius: "12px",
                                    borderBottomLeftRadius: "0px",
                                    borderBottomRightRadius: "0px",
                                }}
                            >
                                Match pools
                            </button>
                            <button
                                onClick={() => setActiveTab("special")}
                                className={`px-6 py-3 font-medium transition-all duration-200 relative z-10 ${
                                    activeTab === "special"
                                        ? "bg-orange-500 text-white"
                                        : "bg-[#372AAC] text-gray-300 hover:text-white hover:bg-slate-700/50"
                                }`}
                                style={{
                                    borderTopLeftRadius: "12px",
                                    borderTopRightRadius: "12px",
                                    borderBottomLeftRadius: "0px",
                                    borderBottomRightRadius: "0px",
                                }}
                            >
                                Special Pools
                            </button>
                        </div>
                    </div>
                </div>

                {/* Content with Connected Border and Fading Sides */}
                <div className="relative">
                    {/* Content Container */}
                    <div
                        className="bg-slate-800/30 p-4 md:p-6 lg:pb-8 lg:px-8 relative"
                        style={{
                            borderTopLeftRadius: "12px",
                            borderTopRightRadius: "12px",
                            borderTop: "2px solid #F54900",
                            borderBottom: "none",
                        }}
                    >
                        {/* Fading Side Borders */}
                        <div
                            className="absolute left-0 top-1.5 w-0.5 h-full"
                            style={{
                                background:
                                    "linear-gradient(to bottom, rgba(245, 73, 22, 0.6) 0%, rgba(245, 73, 22, 0.3) 50%, transparent 100%)",
                            }}
                        ></div>
                        <div
                            className="absolute right-0 top-1.5 w-0.5 h-full"
                            style={{
                                background:
                                    "linear-gradient(to bottom, rgba(249, 115, 22, 0.6) 0%, rgba(249, 115, 22, 0.3) 50%, transparent 100%)",
                            }}
                        ></div>

                        {activeTab === "match" ? (
                            <MatchPoolsView
                                pools={matchPools}
                                onSelectMatch={setSelectedMatch}
                            />
                        ) : (
                            <SpecialPoolsView
                                pools={specialPools}
                                onSelectSpecial={setSelectedSpecial}
                            />
                        )}
                    </div>
                </div>
            </div>

            {/* Match Modal */}
            {selectedMatch && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70">
                    <div className="relative w-[756px] h-[643px] rounded-lg overflow-hidden bg-black">
                        {/* Close button */}
                        <button
                            onClick={closeMatchModal}
                            className="absolute top-4 right-4 text-white hover:text-gray-200 z-10"
                        >
                            <X size={24} />
                        </button>

                        {/* Top 50% - Gradient Background */}
                        <div
                            className="relative h-[320px] bg-cover bg-center rounded-t-lg"
                            style={{
                                background: `
            url(${modalBg}),
            linear-gradient(94.07deg, #F54900 0%, #E17100 49%, #372AAC 49%, #E17100 51%, #372AAC 51%, #0F172B 100%)
        `,
                                backgroundSize: "cover, cover",
                                backgroundPosition: "center, center",
                            }}
                        >
                            <div className="p-8 h-full flex justify-between items-center">
                                {/* Home Team */}
                                <div className="flex flex-col items-center">
                                    <h2 className="text-white text-2xl mb-4">
                                        Home
                                    </h2>
                                    <div className="w-32 h-32 bg-gray-200 rounded-lg mb-4"></div>
                                    <h3 className="text-white text-3xl font-bold">
                                        {selectedMatch.homeTeam.name}
                                    </h3>
                                </div>

                                {/* Away Team */}
                                <div className="flex flex-col items-center">
                                    <h2 className="text-white text-2xl mb-4">
                                        Away
                                    </h2>
                                    <div className="w-32 h-32 bg-gray-200 rounded-lg mb-4"></div>
                                    <h3 className="text-white text-3xl font-bold">
                                        {selectedMatch.awayTeam.name}
                                    </h3>
                                </div>
                            </div>
                        </div>

                        {/* Bottom 50% - Black Background */}
                        <div className="bg-black h-[323px] p-8">
                            <div className="flex flex-col items-center h-full justify-between">
                                <div className="text-white text-xl">
                                    {selectedMatch.date} | {selectedMatch.time}
                                </div>

                                <div className="flex items-center gap-4">
                                    {/* Home Team Selector */}
                                    <div className="bg-[#1E293B] rounded-full flex items-center px-4 py-2 border border-[#E17100] min-w-[120px]">
                                        <span className="text-white flex-1 text-center">
                                            {homeScore}
                                        </span>
                                        <div className="flex flex-col">
                                            <button
                                                onClick={incrementHomeScore}
                                                className="text-[#E17100] hover:text-orange-400 p-0"
                                            >
                                                <svg
                                                    width="20"
                                                    height="17"
                                                    viewBox="0 0 12 12"
                                                    fill="currentColor"
                                                >
                                                    <path d="M6 2L10 8H2L6 2Z" />
                                                </svg>
                                            </button>
                                            <button
                                                onClick={decrementHomeScore}
                                                className="text-[#E17100] mt-[-7px] hover:text-orange-400 p-0"
                                            >
                                                <svg
                                                    width="20"
                                                    height="17"
                                                    viewBox="0 0 12 12"
                                                    fill="currentColor"
                                                >
                                                    <path d="M6 10L2 4H10L6 10Z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    <span className="text-white text-2xl">
                                        -
                                    </span>

                                    {/* Away Team Selector */}
                                    <div className="bg-[#1E293B] rounded-full flex items-center px-4 py-2 border border-[#E17100] min-w-[120px]">
                                        <span className="text-white flex-1 text-center">
                                            {awayScore}
                                        </span>
                                        <div className="flex flex-col">
                                            <button
                                                onClick={incrementAwayScore}
                                                className="text-[#E17100] hover:text-orange-400 p-0"
                                            >
                                                <svg
                                                    width="20"
                                                    height="17"
                                                    viewBox="0 0 12 12"
                                                    fill="currentColor"
                                                >
                                                    <path d="M6 2L10 8H2L6 2Z" />
                                                </svg>
                                            </button>
                                            <button
                                                onClick={decrementAwayScore}
                                                className="text-[#E17100] mt-[-7px] hover:text-orange-400 p-0"
                                            >
                                                <svg
                                                    width="20"
                                                    height="17"
                                                    viewBox="0 0 12 12"
                                                    fill="currentColor"
                                                >
                                                    <path d="M6 10L2 4H10L6 10Z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-[50%] mb-3">
                                    <div className="flex justify-between mb-2">
                                        <span className="text-white text-lg">
                                            Points to bet:
                                        </span>
                                        <span className="text-white text-lg">
                                            {availablePoints} available
                                        </span>
                                    </div>
                                    <div className="w-full h-14 bg-[#1E2939] rounded-full border border-[#E17100] px-4">
                                        <input
                                            type="text"
                                            value={betPoints}
                                            onChange={(e) =>
                                                handleBetPointsChange(
                                                    e.target.value
                                                )
                                            }
                                            className="w-full h-full bg-transparent text-white text-lg focus:outline-none"
                                        />
                                    </div>
                                </div>

                                <button className="w-full bg-[#f54900] hover:bg-orange-600 text-white font-bold py-4 rounded-full transition-colors">
                                    Set as expected result bet
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Special Pool Modal */}
            {selectedSpecial && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70">
                    <div
                        className="relative w-[1200px] h-[700px]  rounded-lg overflow-hidden"
                        style={{
                            background:
                                "linear-gradient(180deg, #1E2939 0%, #020618 100%)",
                        }}
                    >
                        {/* Close button */}
                        <button
                            onClick={closeSpecialModal}
                            className="absolute top-4 right-4 text-white hover:text-gray-200 z-10"
                        >
                            <X size={24} />
                        </button>

                        <div className="flex h-full">
                            {/* Left side - Player details and betting */}
                            <div className="w-[60%] rounded-lg overflow-hidden flex flex-col">
                                <div className=" ml-6 mt-8  rounded-lg p-3 flex bg-[#0F172B] items-start justify-start gap-2">
                                    {/* Player Image */}
                                    <div className="mt-12 bg-gray-500 w-[180px] h-[180px] ml-[10px]  rounded-lg flex items-center justify-center">
                                        <div className="text-gray-400 ">
                                            <svg
                                                width="80"
                                                height="80"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                            >
                                                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="w-[70%]">
                                        <div className="mb-3">
                                            <h2 className="text-white/40 text-center text-4xl font-normal mb-3">
                                                {selectedPlayer
                                                    ? players.find(
                                                          (p) =>
                                                              p.id ===
                                                              selectedPlayer
                                                      )?.name || "Name"
                                                    : "Name"}
                                            </h2>
                                            <div className="w-full h-0.5 bg-[#FF6900]/30"></div>
                                        </div>

                                        {/* STATS */}
                                        <h3 className="text-[#372AAC]/40 text-2xl font-bold mb-3 text-center tracking-wider">
                                            STATS
                                        </h3>

                                        {/* Spider/Radar Chart */}
                                        <div className="flex  flex-col justify-center items-center mb-8">
                                            <div className="relative w-48 h-48">
                                                <svg
                                                    viewBox="0 0 200 200"
                                                    className="w-full h-full"
                                                >
                                                    {/* Pentagon grid lines */}
                                                    <defs>
                                                        <pattern
                                                            id="grid"
                                                            patternUnits="userSpaceOnUse"
                                                            width="40"
                                                            height="40"
                                                        >
                                                            <path
                                                                d="M 40 0 L 0 0 0 40"
                                                                fill="none"
                                                                stroke="#1E2939"
                                                                strokeWidth="1"
                                                            />
                                                        </pattern>
                                                    </defs>

                                                    {/* Outer pentagon */}
                                                    <polygon
                                                        points="100,20 164,68 136,148 64,148 36,68"
                                                        fill="none"
                                                        stroke="#1E2939"
                                                        strokeWidth="1"
                                                    />

                                                    {/* Middle pentagon */}
                                                    <polygon
                                                        points="100,44 140,78 124,132 76,132 60,78"
                                                        fill="none"
                                                        stroke="#1E2939"
                                                        strokeWidth="1"
                                                    />

                                                    {/* Inner pentagon */}
                                                    <polygon
                                                        points="100,68 116,88 112,116 88,116 84,88"
                                                        fill="none"
                                                        stroke="#1E2939"
                                                        strokeWidth="1"
                                                    />

                                                    {/* Connecting lines from center */}
                                                    <line
                                                        x1="100"
                                                        y1="100"
                                                        x2="100"
                                                        y2="20"
                                                        stroke="#1E2939"
                                                        strokeWidth="1"
                                                    />
                                                    <line
                                                        x1="100"
                                                        y1="100"
                                                        x2="164"
                                                        y2="68"
                                                        stroke="#1E2939"
                                                        strokeWidth="1"
                                                    />
                                                    <line
                                                        x1="100"
                                                        y1="100"
                                                        x2="136"
                                                        y2="148"
                                                        stroke="#1E2939"
                                                        strokeWidth="1"
                                                    />
                                                    <line
                                                        x1="100"
                                                        y1="100"
                                                        x2="64"
                                                        y2="148"
                                                        stroke="#1E2939"
                                                        strokeWidth="1"
                                                    />
                                                    <line
                                                        x1="100"
                                                        y1="100"
                                                        x2="36"
                                                        y2="68"
                                                        stroke="#1E2939"
                                                        strokeWidth="1"
                                                    />

                                                    {/* Data polygon (dynamic based on selected player) */}
                                                    {selectedPlayer && (
                                                        <>
                                                            <polygon
                                                                points={
                                                                    radarData.polygon
                                                                }
                                                                fill="rgba(249, 115, 22, 0.2)"
                                                                stroke="#E17100"
                                                                strokeWidth="2"
                                                            />

                                                            {/* Data points */}
                                                            {radarData.circles.map(
                                                                (
                                                                    circle,
                                                                    index
                                                                ) => (
                                                                    <circle
                                                                        key={
                                                                            index
                                                                        }
                                                                        cx={
                                                                            circle.x
                                                                        }
                                                                        cy={
                                                                            circle.y
                                                                        }
                                                                        r="3"
                                                                        fill="#E17100"
                                                                    />
                                                                )
                                                            )}
                                                        </>
                                                    )}

                                                    {/* Default sample data when no player selected */}
                                                    {/* {!selectedPlayer && (
                                                    <>
                                                        <polygon
                                                            points="100,35 150,75 125,135 75,135 50,75"
                                                            fill="rgba(249, 115, 22, 0.2)"
                                                            stroke="#E17100"
                                                            strokeWidth="2"
                                                        />
                                                        
                                                        <circle cx="100" cy="35" r="3" fill="#E17100"/>
                                                        <circle cx="150" cy="75" r="3" fill="#E17100"/>
                                                        <circle cx="125" cy="135" r="3" fill="#E17100"/>
                                                        <circle cx="75" cy="135" r="3" fill="#E17100"/>
                                                        <circle cx="50" cy="75" r="3" fill="#E17100"/>
                                                    </>
                                                )} */}
                                                </svg>

                                                {/* Labels positioned around the pentagon */}
                                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                                                    <span className="text-[#E17100]/40 text-xs font-medium">
                                                        Goals
                                                    </span>
                                                </div>
                                                <div className="absolute top-6 right-0 transform translate-x-2">
                                                    <span className="text-[#E17100]/40 text-xs font-medium">
                                                        Assists
                                                    </span>
                                                </div>
                                                <div className="absolute bottom-6 right-4 transform translate-x-2">
                                                    <span className="text-[#E17100]/40 text-xs font-medium">
                                                        Dribbling
                                                    </span>
                                                </div>
                                                <div className="absolute bottom-6 left-4 transform -translate-x-2">
                                                    <span className="text-[#E17100]/40 text-xs font-medium">
                                                        Speed
                                                    </span>
                                                </div>
                                                <div className="absolute top-6 left-0 transform -translate-x-2">
                                                    <span className="text-[#E17100]/40 text-xs font-medium">
                                                        Hitting
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="w-full h-1  bg-[#000000]/30"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-16 ">
                                    <div className="flex justify-between items-center mx-auto w-[50%] mb-3">
                                        <span className="text-white text-xl">
                                            Points to bet:
                                        </span>
                                        <span className="text-[#979BA1] text-[15px]">
                                            {availablePoints} available
                                        </span>
                                    </div>
                                    <div className="w-[50%] mx-auto h-12 bg-[#1E2939] rounded-full border-2 border-[#E17100] px-4 mb-6">
                                        <input
                                            type="text"
                                            value={betPoints}
                                            onChange={(e) =>
                                                handleBetPointsChange(
                                                    e.target.value
                                                )
                                            }
                                            className="w-full h-full bg-transparent text-white focus:outline-none"
                                        />
                                    </div>
                                    <button className="w-[90%] ml-8 mx-auto mt-3 bg-[#A03305] hover:bg-orange-600 text-white font-medium py-3 rounded-lg transition-colors">
                                        Select Player
                                    </button>
                                </div>
                            </div>
                            {/* Points to bet */}

                            {/* Right side - Player list */}
                            <div className="w-2/3 p-8">
                                <div className="bg-[#101828] rounded-lg overflow-hidden ">
                                    {/* Header */}
                                    <div className="grid grid-cols-4 py-4 bg-[#372AAC] text-white  px-4 text-center font-medium">
                                        <div className="text-start">Player</div>
                                        <div>Selected</div>
                                        <div>Reward rate</div>
                                        <div>Points</div>
                                    </div>

                                    {/* Player rows */}
                                    <div
                                        className="overflow-y-auto"
                                        style={{ height: "calc(100% - 60px)" }}
                                    >
                                        {players.map((player, index) => (
                                            <div
                                                key={player.id}
                                                className="grid grid-cols-4 text-white  mb-3 px-4 text-center items-center  hover:bg-gray-700/30 cursor-pointer"
                                                onClick={() =>
                                                    handlePlayerSelect(
                                                        player.id
                                                    )
                                                }
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="w-9 h-9 rounded-full bg-[#D9D9D9]"></div>
                                                    <div className="text-left">
                                                        <div className="text-white">
                                                            Player name
                                                        </div>
                                                        <div className="text-[#FE9A00]/40 text-xs font-medium">
                                                            TEAM
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* <div className="flex items-center justify-center">
                                                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                                        selectedPlayer === player.id 
                                                            ? 'bg-orange-500 border-orange-500' 
                                                            : 'border-gray-400'
                                                    }`}>
                                                        {selectedPlayer === player.id && (
                                                            <div className="w-2 h-2 rounded-full bg-white"></div>
                                                        )}
                                                    </div>
                                                </div> */}
                                                <div className="flex items-center justify-center">
                                                    <div className="flex flex-col">
                                                        <span>
                                                            {player.rewardRate}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="flex flex-col">
                                                        <span>
                                                            {
                                                                player.secondaryRate
                                                            }
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-center">
                                                    {player.points}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function MatchPoolsView({
    pools,
    onSelectMatch,
}: {
    pools: MatchPool[];
    onSelectMatch: (match: MatchPool) => void;
}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {pools.map((pool) => (
                <div
                    key={pool.id}
                    className="rounded-xl p-4 mb-3 ml-2 hover:shadow-lg transition-all duration-200 relative overflow-hidden cursor-pointer"
                    style={{
                        background:
                            "linear-gradient(94.07deg, #F54900 0%, #E17100 49%, #372AAC 49%, #E17100 51%, #372AAC 51%, #0F172B 100%)",
                    }}
                    onClick={() => onSelectMatch(pool)}
                >
                    <div className="relative z-10 flex items-center justify-between ">
                        {/* HOME Section */}
                        <div className="flex items-center space-x-3">
                            {/* HOME Label - Vertical */}
                            <div className="flex flex-col items-center justify-center h-20">
                                <div className="flex flex-col text-white text-center font-bold text-sm tracking-wider leading-none">
                                    <span>H</span>
                                    <span>O</span>
                                    <span>M</span>
                                    <span>E</span>
                                </div>
                            </div>

                            {/* Home Team Info */}
                            <div className="flex flex-col items-center space-y-2">
                                <div className="w-16 h-16 bg-gray-300 rounded-xl flex items-center justify-center">
                                    <div className="w-16 h-16 bg-gray-300 rounded-lg"></div>
                                </div>
                                <span className="text-white text-sm font-medium">
                                    Team Name
                                </span>
                            </div>
                        </div>

                        {/* Center - Match Info and Make Bet */}
                        <div className="flex flex-col items-center space-y-2 mx-4">
                            <div className="bg-[#020618]/70  text-white text-xs px-4 py-2 rounded-lg font-medium border border-slate-700">
                                {pool.date}
                                <span className="block mt-1 text-center">
                                    {pool.time}
                                </span>
                            </div>
                            <button className="bg-[#020618]/70 hover:bg-slate-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 text-sm border border-slate-700">
                                Make bet
                            </button>
                        </div>

                        {/* AWAY Section */}
                        <div className="flex items-center space-x-3">
                            {/* Away Team Info */}
                            <div className="flex flex-col items-center space-y-2">
                                <div className="w-16 h-16 bg-gray-300 rounded-xl flex items-center justify-center">
                                    <div className="w-16 h-16 bg-gray-300 rounded-lg"></div>
                                </div>
                                <span className="text-white text-sm font-medium">
                                    Team Name
                                </span>
                            </div>

                            {/* AWAY Label - Vertical */}
                            <div className="flex flex-col items-center justify-center h-20">
                                <div className="flex flex-col text-white text-center font-bold text-sm tracking-wider leading-none">
                                    <span>A</span>
                                    <span>W</span>
                                    <span>A</span>
                                    <span>Y</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

function SpecialPoolsView({
    pools,
    onSelectSpecial,
}: {
    pools: SpecialPool[];
    onSelectSpecial: (special: SpecialPool) => void;
}) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {pools.map((pool) => (
                <div
                    key={pool.id}
                    className="bg-[#0F172b] min-w-[500px] min-h-[538px] border border-orange-500/20 rounded-2xl p-6 lg:p-10 hover:border-orange-500/40 transition-all duration-200 flex flex-col cursor-pointer"
                    onClick={() => onSelectSpecial(pool)}
                >
                    {/* Icon */}
                    <div className="text-6xl mb-8 text-center">
                        {pool.id === "1" && (
                            <img
                                src={bat || "/placeholder.svg"}
                                alt="Pool Icon 1"
                                className="w-[100px] h-[100px] mx-auto text-orange-500"
                            />
                        )}
                        {pool.id === "2" && (
                            <img
                                src={hand || "/placeholder.svg"}
                                alt="Pool Icon 2"
                                className="w-[100px] h-[100px] mx-auto text-orange-500"
                            />
                        )}
                        {pool.id === "3" && (
                            <img
                                src={cricket || "/placeholder.svg"}
                                alt="Pool Icon 3"
                                className="w-[100px] h-[100px] mx-auto text-orange-500"
                            />
                        )}
                    </div>

                    {/* Title */}
                    <h3 className="text-white text-5xl leading-loose font-bold mb-8 text-center">
                        {pool.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#D1D5DC] text-xl mb-8 flex-grow text-start">
                        {pool.description}
                    </p>

                    {/* Make Bet Button */}
                    <button className="w-full bg-[#F54900] hover:bg-orange-600 text-white font-medium py-4 rounded-lg transition-colors duration-200">
                        Make bet
                    </button>
                </div>
            ))}
        </div>
    );
}
