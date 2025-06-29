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
                        <p>Hello</p>
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
