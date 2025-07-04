import React from "react";
import NBASideBarImg from "../../../assets/images/leagues/nba/NBASideBarImg.png";
import NBAMyTeam from "../../../assets/images/leagues/nba/NBAMyTeam.png";
import NBALeaderBoard from "../../../assets/images/leagues/nba/NBALeaderBoard.png";
import NBAFriendsLeague from "../../../assets/images/leagues/nba/NBAFriendsLeague.png";
import NBAResults from "../../../assets/images/leagues/nba/NBAResults.png";
import NBAPlayerRank from "../../../assets/images/leagues/nba/NBAPlayerRank.png";
import NBAHistory from "../../../assets/images/leagues/nba/NBAHistory.png";
import NBASettings from "../../../assets/images/leagues/nba/NBASettings.png";

const sidebarItems = [
    { label: "My team", icon: NBAMyTeam },
    { label: "Leaderboard", icon: NBALeaderBoard },
    { label: "Friends League", icon: NBAFriendsLeague },
    { label: "Results", icon: NBAResults },
    { label: "Player Rankings", icon: NBAPlayerRank },
    { label: "History", icon: NBAHistory },
    { label: "Settings", icon: NBASettings },
];

const orangeText = "text-[#FF9500]"; 
const yellowLine = <div className="h-[0.14rem] w-full bg-[#FFB200] my-1" />;

const Sidebar: React.FC = () => (
    <aside className="w-60 h-full bg-[#232323] flex flex-col py-2">
        {/* NBA Logo */}
        <div className="flex flex-col items-center mb-6 mt-1">
            <img
                src={NBASideBarImg}
                alt="NBA Logo"
                className="w-14 h-28 mb-3"
            />
        </div>
        <nav className="flex-1 flex flex-col">
            {sidebarItems.map((item) => (
                <React.Fragment key={item.label}>
                    {/* Add orange line above each item */}
                    {yellowLine}
                    <div
                        className={`flex items-center gap-6 px-6 py-3 ${orangeText} font-bold text-lg hover:bg-yellow-900/10 cursor-pointer transition`}
                    >
                        <span className="w-10 h-10 flex items-center justify-center bg-yellow-400/10 rounded-lg">
                            <img
                                src={item.icon}
                                alt={item.label + " icon"}
                                className="w-10 h-10"
                            />
                        </span>
                        <span className="ml-2">{item.label}</span>
                    </div>
                    {/* Add orange line below Settings */}
                    {item.label === "Settings" && yellowLine}
                </React.Fragment>
            ))}
        </nav>
    </aside>
);

export default Sidebar;
