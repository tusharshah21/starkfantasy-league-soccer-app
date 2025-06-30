import backgroundPattern from "../../../assets/ranking-bg.png";
import userAvatarFallback from "../../../assets/User.png";
import goldMedal from "../../../assets/gold.svg";
import silverMedal from "../../../assets/silver.svg";
import bronzeMedal from "../../../assets/Medal.svg";
import starIcon from "../../../assets/star.svg";
import { ReactNode, useState, useEffect } from "react";

interface Player {
    username: string;
    points: number;
    reward: number;
    avatar: string;
    rank: number;
}

const mockPlayers: Omit<Player, "rank">[] = [
    {
        username: "Username",
        points: 13.67,
        reward: 1000,
        avatar: "/user-1.png",
    },
    { username: "Username", points: 10.21, reward: 750, avatar: "/user-2.png" },
    { username: "Username", points: 9.89, reward: 500, avatar: "/user-3.png" },
    { username: "Username", points: 9.23, reward: 250, avatar: "/user-4.png" },
    { username: "Username", points: 8.641, reward: 100, avatar: "/user-5.png" },
    { username: "Username", points: 7.918, reward: 0, avatar: "/user-6.png" },
];

const medals = [goldMedal, silverMedal, bronzeMedal];

const formatPoints = (points: number) =>
    points.toLocaleString("en-US", {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3,
    });

const formatReward = (reward: number) =>
    reward === 0 ? "-" : `${reward} STRK`;

export default function PlayerRanking() {
    const [players, setPlayers] = useState<Player[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchPlayers = async () => {
        try {
            setLoading(true);
            setError(null);
            await new Promise((resolve) => setTimeout(resolve, 1000));
            const rankedPlayers = mockPlayers
                .sort((a, b) => b.points - a.points)
                .map((p, i) => ({ ...p, rank: i + 1 }));
            setPlayers(rankedPlayers);
        } catch (err) {
            setError("Failed to fetch player rankings");
            console.error("Error fetching players:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPlayers();
    }, []);

    const top3 = players.slice(0, 3);
    const remaining = players.slice(3);
    const podiumOrder = top3.length >= 3 ? [top3[1], top3[0], top3[2]] : [];

    if (loading) {
        return (
            <div className="min-h-screen w-full flex items-center justify-center">
                <div className="text-white text-xl">
                    Loading player rankings...
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen w-full flex items-center justify-center">
                <div className="text-red-500 text-xl">{error}</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen w-full">
            <div
                className="flex-1 flex flex-col gap-8 sm:gap-12 lg:gap-16 xl:gap-[3.125rem] px-4  lg:px-6 xl:px-9 py-4  lg:py-6 xl:py-7 relative bg-cover bg-no-repeat overflow-auto"
                style={{ backgroundImage: `url(${backgroundPattern})` }}
            >
                <h1 className="text-white text-2xl-custom sm:text-3xl-custom text-left lg:text-4xl-custom font-exo-2 font-semibold ">
                    Player rankings
                </h1>

                <ContentCard>
                    {top3.length > 0 && (
                        <Podium top3={top3} podiumOrder={podiumOrder} />
                    )}
                    {remaining.length > 0 && (
                        <RankingTable remaining={remaining} />
                    )}
                </ContentCard>
            </div>
        </div>
    );
}

function ContentCard({ children }: { children: ReactNode }) {
    return (
        <div className="rounded-lg sm:rounded-xl lg:rounded-2xl xl:rounded-[1.25rem] bg-dark-800/80 backdrop-blur-[5px] w-full max-w-[87.5rem] mx-auto px-3 sm:px-4 lg:px-6 xl:px-5">
            <div className="flex flex-col items-center">{children}</div>
        </div>
    );
}

function PodiumPlayer({
    player,
    position,
}: {
    player: Player;
    position: number;
}) {
    const responsiveHeights = [
        "min-[800px]:h-[15.625rem] h-[12.5rem]",
        "min-[800px]:h-[12.5rem] h-[12.5rem]",
        "min-[800px]:h-[9.375rem] h-[12.5rem]",
    ];
    const podiumPosition = position - 1;

    return (
        <div className="flex flex-col max-w-[14.375rem] w-full items-center gap-8 xl:gap-[3.125rem] relative">
            <div className="flex flex-col w-[12.5rem] items-center gap-2.5 relative">
                <div className="relative w-[6.25rem] h-[6.25rem]">
                    <div className="relative w-full h-full flex items-center justify-center bg-gray-200 rounded-lg sm:rounded-xl lg:rounded-2xl xl:rounded-[0.625rem] border-2 sm:border-[3px] border-solid border-orange-500 shadow-avatar overflow-hidden">
                        <div className="w-12 h-12 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-[3.125rem] xl:h-[3.125rem]">
                            <img
                                className="w-full h-full object-cover"
                                src={player.avatar}
                                alt={`${player.username} avatar`}
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src =
                                        userAvatarFallback;
                                }}
                            />
                        </div>
                    </div>
                </div>
                <h3 className="text-white text-3xl lg:text-2xl-custom font-exo-2 font-medium text-center">
                    {player.username}
                </h3>
            </div>

            <div className="flex flex-col items-center relative self-stretch w-full">
                <div
                    className={`relative self-stretch w-full ${responsiveHeights[podiumPosition]} border-t-2 sm:border-t-[3px] border-t-gray-300 border-r border-r-gray-300 border-l border-l-gray-300 sm:border-r-2 sm:border-l-2 border-b-transparent [border-image:linear-gradient(180deg,#D1D5DC_0%,rgba(209,213,220,0)_100%)_1] bg-[linear-gradient(180deg,#372AAC_0%,rgba(49,44,133,0)_100%)]`}
                />

                <div className="flex items-center gap-2 lg:justify-between absolute top-11 left-8">
                    <img
                        className="relative w-[1.875rem] h-[1.875rem]"
                        alt="Star"
                        src={starIcon}
                    />
                    <div className="text-white text-3xl xl:text-2xl-custom xl:min-w-[8.1875rem] w-full text-center font-exo-2 font-medium">
                        {formatPoints(player.points)}
                    </div>
                </div>

                <div className="inline-flex items-center gap-2.5 px-5 py-1 left-1/2 -translate-x-1/2 absolute top-[-1.875rem] bg-purple-700 rounded-[3.125rem] border-[3px] border-solid border-gray-300">
                    <img
                        className="relative w-[3.125rem] h-[3.125rem]"
                        alt={`Position ${position}`}
                        src={medals[podiumPosition]}
                    />
                </div>

                <div className="absolute min-w-[8.8125rem] w-full top-[94px] text-orange-600 text-center font-open-sans text-xl-custom font-semibold leading-[150%]">
                    {formatReward(player.reward)}
                </div>
            </div>
        </div>
    );
}

function Podium({
    top3,
    podiumOrder,
}: {
    top3: Player[];
    podiumOrder: Player[];
}) {
    const renderPodiumPlayer = (player: Player) => (
        <PodiumPlayer
            key={player.points}
            player={player}
            position={player.rank}
        />
    );

    return (
        <div className="w-full py-12 xl:py-[3.125rem] relative">
            <div className="flex flex-col items-center gap-8 min-[500px]:hidden">
                {top3.map(renderPodiumPlayer)}
            </div>

            <div className="hidden min-[500px]:flex min-[800px]:hidden flex-col items-center gap-8">
                <div className="flex justify-center">
                    {renderPodiumPlayer(top3[0])}
                </div>
                <div className="flex items-end justify-center gap-14">
                    {top3.slice(1).map(renderPodiumPlayer)}
                </div>
            </div>

            <div className="hidden min-[800px]:flex items-end justify-center gap-8 sm:gap-16 lg:gap-20 xl:gap-[6.25rem]">
                {podiumOrder.map(renderPodiumPlayer)}
            </div>
        </div>
    );
}

function RankingTable({ remaining }: { remaining: Player[] }) {
    return (
        <div className="rounded-lg sm:rounded-xl lg:rounded-2xl xl:rounded-[0.9375rem] overflow-hidden w-full max-w-[81.25rem] mx-auto mb-4 sm:mb-5">
            <div className="overflow-x-auto sm:overflow-x-visible">
                <table className="w-full sm:w-full border-collapse">
                    <thead>
                        <tr className="flex justify-between bg-slate-700 px-4 sm:px-8 lg:px-12 xl:px-[3.125rem] py-2 sm:py-3 lg:py-3 xl:py-[0.625rem]">
                            {["Position", "Username", "Points", "Reward"].map(
                                (header, index) => (
                                    <th
                                        key={header}
                                        className={`font-open-sans font-bold text-white text-base sm:text-lg xl:text-xl leading-[1.875rem] text-left ${
                                            index === 1
                                                ? "min-w-[12.5rem]"
                                                : "min-w-[6.25rem]"
                                        }`}
                                    >
                                        {header}
                                    </th>
                                )
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {remaining.map((player) => (
                            <tr
                                key={player.points}
                                className="flex justify-between text-base sm:text-lg xl:text-xl font-normal text-gray-300 leading-[1.875rem] font-open-sans bg-slate-800 px-4 sm:px-8 lg:px-12 xl:px-[3.125rem] py-3 sm:py-4 lg:py-4 xl:py-[0.9375rem]"
                            >
                                <td className=" min-w-[6.25rem]">
                                    {player.rank}º
                                </td>
                                <td className="min-w-[12.5rem] truncate">
                                    {player.username}
                                </td>
                                <td className=" min-w-[6.25rem]">
                                    {formatPoints(player.points)}
                                </td>
                                <td className=" min-w-[6.25rem] font-bold">
                                    {formatReward(player.reward)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
