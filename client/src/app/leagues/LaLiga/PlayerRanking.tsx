import backgroundPattern from "../../../assets/ranking-bg.png";
import userAvatarFallback from "../../../assets/User.png";
import goldMedal from "../../../assets/gold.svg";
import silverMedal from "../../../assets/silver.svg";
import bronzeMedal from "../../../assets/Medal.svg";
import starIcon from "../../../assets/star.svg";
import { ReactNode } from "react";

interface Player {
    username: string;
    points: number;
    reward: number;
    avatar: string;
}

const allPlayers: Player[] = [
    {
        username: "Player A",
        points: 13.67,
        reward: 1000,
        avatar: "/user-1.png",
    },
    { username: "Player B", points: 10.21, reward: 750, avatar: "/user-2.png" },
    { username: "Player C", points: 9.89, reward: 500, avatar: "/user-3.png" },
    { username: "Player D", points: 9.23, reward: 250, avatar: "/user-4.png" },
    { username: "Player E", points: 8.641, reward: 100, avatar: "/user-5.png" },
    { username: "Player F", points: 7.918, reward: 0, avatar: "/user-6.png" },
];

const sortedPlayers = [...allPlayers].sort((a, b) => b.points - a.points);
const top3 = sortedPlayers.slice(0, 3);
const remaining = sortedPlayers.slice(3);
const medals = [goldMedal, silverMedal, bronzeMedal];

const podiumOrder = [top3[1], top3[0], top3[2]];

const formatPoints = (points: number) =>
    points.toLocaleString("en-US", {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3,
    });

const formatReward = (reward: number) =>
    reward === 0 ? "-" : `${reward.toLocaleString()} STRK`;

export default function PlayerRanking() {
    return (
        <div className="min-h-screen w-full">
            <div className="h-16 sm:h-20 lg:h-24 xl:h-[6.25rem] w-full bg-gray-800 border-b border-gray-600 flex items-center px-4 sm:px-6 lg:px-8 xl:px-6 fixed top-0 left-0 z-20">
                <div className="text-white text-xl font-semibold">
                    Player Rankings
                </div>
            </div>

            <div className="pt-16 sm:pt-20 lg:pt-24 xl:pt-[6.25rem] flex flex-col lg:flex-row">
                <div className="hidden lg:block w-48 xl:w-[15.625rem] fixed top-24 xl:top-[6.25rem] left-0 h-[calc(100vh-6rem)] xl:h-[calc(100vh-6.25rem)] bg-gray-900 border-r border-gray-600 p-4 z-10">
                    <div className="text-white text-lg font-medium mb-4">
                        Dummy Sidebar
                    </div>
                    <div className="text-gray-300 text-sm">
                        Navigation sidebar
                    </div>
                </div>

                <div
                    className="flex-1 lg:ml-48 xl:ml-[15.625rem] flex flex-col gap-8 sm:gap-12 lg:gap-16 xl:gap-[3.125rem] px-4 sm:px-6 lg:px-8 xl:px-9 py-4 sm:py-6 lg:py-8 xl:py-7 relative bg-cover bg-no-repeat overflow-auto"
                    style={{ backgroundImage: `url(${backgroundPattern})` }}
                >
                    <h1 className="text-white text-4xl-custom font-exo-2 font-semibold text-center sm:text-left">
                        Player rankings
                    </h1>

                    <ContentCard>
                        <Podium />
                    </ContentCard>
                </div>
            </div>
        </div>
    );
}

const ContentCard = ({ children }: { children: ReactNode }) => (
    <div className="rounded-lg sm:rounded-xl lg:rounded-2xl xl:rounded-[1.25rem] bg-dark-800/80 backdrop-blur-[5px] w-full max-w-[87.5rem] mx-auto px-3 sm:px-4 lg:px-6 xl:px-5">
        <div className="flex flex-col items-center">{children}</div>
    </div>
);

const PodiumPlayer = ({
    player,
    position,
}: {
    player: Player;
    position: number;
}) => {
    
    const responsiveHeights = [
        "h-40 sm:h-40 lg:h-52 xl:h-[15.625rem]", 
        "h-36 sm:h-36 lg:h-44 xl:h-[12.5rem]", 
        "h-32 sm:h-32 lg:h-36 xl:h-[9.375rem]", 
    ];

    return (
        <div className="flex flex-col max-w-[14.375rem] w-full items-center gap-[3.125rem] relative">
            <div className="flex flex-col w-[12.5rem] items-center gap-2 sm:gap-2.5 relative">
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
                <h3 className="text-white text-2xl-custom font-exo-2 font-medium text-center">
                    {player.username}
                </h3>
            </div>

            <div className="flex flex-col items-center relative self-stretch w-full">
                <div
                    className={`relative self-stretch w-full ${
                        responsiveHeights[position - 1]
                    } border-t-2 sm:border-t-[3px] border-t-gray-300 border-r border-r-gray-300 border-l border-l-gray-300 sm:border-r-2 sm:border-l-2 border-b-transparent [border-image:linear-gradient(180deg,#D1D5DC_0%,rgba(209,213,220,0)_100%)_1] bg-[linear-gradient(180deg,#372AAC_0%,rgba(49,44,133,0)_100%)]`}
                />

                <div className="flex items-center justify-between absolute top-3 left-2 sm:top-6 sm:left-4 lg:top-8 lg:left-6 xl:top-11 xl:left-8">
                    <img
                        className="relative w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 xl:w-[1.875rem] xl:h-[1.875rem]"
                        alt="Star"
                        src={starIcon}
                    />
                    <div className="text-white text-2xl-custom min-w-[8.1875rem] w-full text-center font-exo-2 font-medium">
                        {formatPoints(player.points)}
                    </div>
                </div>

                <div className="inline-flex items-center gap-1 sm:gap-2 lg:gap-2 xl:gap-2.5 px-3 sm:px-3 lg:px-4 xl:px-5 py-1 sm:py-[0.3125rem] absolute top-[-1rem] sm:top-[-1rem] lg:top-[-1.25rem] xl:top-[-1.875rem] left-1/2 transform -translate-x-1/2 lg:left-[3.5rem] xl:left-[4.375rem] lg:transform-none xl:transform-none bg-purple-700 rounded-full sm:rounded-2xl lg:rounded-3xl xl:rounded-[3.125rem] border-2 sm:border-[3px] border-solid border-gray-300">
                    <img
                        className="relative w-8 h-8 sm:w-8 sm:h-8 lg:w-10 lg:h-10 xl:w-[3.125rem] xl:h-[3.125rem]"
                        alt={`Position ${position}`}
                        src={medals[position - 1]}
                    />
                </div>

                <div className="absolute min-w-[8.8125rem] w-full top-24 text-orange-600 text-center font-open-sans text-xl-custom font-semibold leading-[150%]">
                    {formatReward(player.reward)}
                </div>
            </div>
        </div>
    );
};

const Podium = () => (
    <div className="w-full py-6 sm:py-8 lg:py-12 xl:py-[3.125rem] relative">
        <div className="flex flex-col items-center gap-8 min-[500px]:hidden">
            {top3.map((player, index) => (
                <PodiumPlayer
                    key={player.username}
                    player={player}
                    position={index + 1}
                />
            ))}
        </div>

        <div className="hidden min-[500px]:flex min-[800px]:hidden flex-col items-center gap-8">
            <div className="flex justify-center">
                <PodiumPlayer
                    key={top3[0].username}
                    player={top3[0]}
                    position={1}
                />
            </div>
            <div className="flex items-end justify-center gap-12">
                <PodiumPlayer
                    key={top3[1].username}
                    player={top3[1]}
                    position={2}
                />
                <PodiumPlayer
                    key={top3[2].username}
                    player={top3[2]}
                    position={3}
                />
            </div>
        </div>

        <div className="hidden min-[800px]:flex items-end justify-center gap-8 sm:gap-16 lg:gap-20 xl:gap-[6.25rem]">
            {podiumOrder.map((player) => {
                const position =
                    top3.findIndex((p) => p.username === player.username) + 1;
                return (
                    <PodiumPlayer
                        key={player.username}
                        player={player}
                        position={position}
                    />
                );
            })}
        </div>
    </div>
);
