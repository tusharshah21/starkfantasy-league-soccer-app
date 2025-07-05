import React from "react";
import { Link } from "react-router-dom";
import NBAHeaderLogo from "../../../assets/images/leagues/nba/NBAHeaderLogo.png";
import NBAHeaderProfile from "../../../assets/images/leagues/nba/NBAHeaderProfile.png";

const LeagueHeader: React.FC = () => (
    <header className="w-full bg-transparent flex justify-center items-center">
        <div className="w-full max-w-6xl flex items-center justify-between mx-auto px-4">
            {/* Left: NBA Logo */}
            <div className="flex items-center">
                <img src={NBAHeaderLogo} alt="NBA Logo" className="w-32 h-32" />
            </div>
            {/* Center: Navigation Links in rounded bar */}
            <div className="flex-1 flex justify-center">
                <ul className="flex items-center gap-6 bg-[#000000]/90 rounded-full px-8 py-2 shadow-lg border border-[#232232]/80 backdrop-blur-md">
                    <li>
                        <Link
                            to="#"
                            className="text-[#FF9500] font-bold hover:text-[#FFB200] focus:text-[#FFB200] hover:underline transition-colors duration-200"
                        >
                            Help
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="#"
                            className="text-[#FF9500] font-bold hover:text-[#FFB200] focus:text-[#FFB200] hover:underline transition-colors duration-200"
                        >
                            Starkfantasy League
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="#"
                            className="text-[#FF9500] font-bold hover:text-[#FFB200] focus:text-[#FFB200] hover:underline transition-colors duration-200"
                        >
                            Rules
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="#"
                            className="text-[#FF9500] font-bold hover:text-[#FFB200] focus:text-[#FFB200] hover:underline transition-colors duration-200"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="#"
                            className="text-[#FF9500] font-bold hover:text-[#FFB200] focus:text-[#FFB200] hover:underline transition-colors duration-200"
                        >
                            Tournaments
                        </Link>
                    </li>
                </ul>
            </div>
            {/* Right: Balance and User Avatar */}
            <div className="flex items-center gap-3 pr-2 bg-[#000000]/90 rounded-full px-4 py-1 shadow-lg border border-[#232232]/80">
                <button className="bg-[#FF9500]/90 text-white font-bold px-3 py-1 rounded-full text-sm shadow backdrop-blur-md">
                    0.10000 STRK
                </button>
                <div className="w-8 h-8 rounded-full bg-[#232232]/90 flex items-center justify-center border border-yellow-400/40 backdrop-blur-md">
                    <img
                        src={NBAHeaderProfile}
                        alt="User"
                        className="w-6 h-6 rounded-full"
                    />
                </div>
            </div>
        </div>
    </header>
);

export default LeagueHeader;
