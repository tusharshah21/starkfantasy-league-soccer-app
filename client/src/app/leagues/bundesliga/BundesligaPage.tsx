import { useState } from "react";
import Sidebar from "../components/Sidebar";
import LeagueHeader from "../components/LeagueHeader";
import Footer from "../components/Footer";
import bundesligaBg from "../../../assets/images/leagues/bundesliga/Bundesliga.png";

const SIDEBAR_WIDTH = 240;
const HEADER_HEIGHT = 160;
const FOOTER_HEIGHT = 130;

const BundesligaPage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="h-screen w-full flex flex-row bg-black overflow-hidden">
            {/* Sidebar for desktop, overlay for mobile */}
            <button
                className="md:hidden fixed top-4 left-4 z-30 bg-gray-900 bg-opacity-80 p-2 rounded focus:outline-none"
                onClick={() => setSidebarOpen(true)}
                aria-label="Open sidebar"
            >
                <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>
            <div
                className="h-full hidden md:block"
                style={{ width: SIDEBAR_WIDTH }}
            >
                <Sidebar />
            </div>
            {sidebarOpen && (
                <div className="fixed inset-0 z-40 flex md:hidden">
                    <div
                        className="bg-black bg-opacity-80 w-full h-full"
                        onClick={() => setSidebarOpen(false)}
                    />
                    <div
                        className="relative bg-black h-full shadow-lg"
                        style={{ width: SIDEBAR_WIDTH }}
                    >
                        <button
                            className="absolute top-4 right-4 z-50 text-white"
                            onClick={() => setSidebarOpen(false)}
                            aria-label="Close sidebar"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <Sidebar />
                    </div>
                </div>
            )}
            {/* Main area */}
            <div className="flex flex-col h-full flex-1 min-w-0">
                <div
                    className="relative bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(${bundesligaBg})`,
                        height: `calc(100vh - ${FOOTER_HEIGHT}px)`,
                        width: "100%",
                    }}
                >
                    <div
                        className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none"
                        style={{
                            background:
                                "linear-gradient(to bottom, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%)",
                        }}
                    />
                    {/* Header */}
                    <div
                        className="absolute top-0 left-0 w-full z-20"
                        style={{ height: HEADER_HEIGHT }}
                    >
                        <LeagueHeader />
                    </div>
                    {/* Bundesliga content goes here */}
                    <div
                        className="w-full h-full px-2 sm:px-4 md:px-8 lg:px-16 flex items-center justify-center relative"
                        style={{ paddingTop: HEADER_HEIGHT }}
                    >
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-30 pointer-events-none">
                            <div className="pointer-events-auto flex flex-col items-center">
                                <h2 className="text-2xl md:text-4xl text-white tracking-widest drop-shadow-lg text-center">
                                    Welcome to
                                </h2>
                                <span className="text-5xl md:text-8xl text-white tracking-wide font-semibold">
                                    Bundesliga
                                </span>
                                <p className="mt-4 text-2xl md:text-3xl text-white tracking-[20px] md:tracking-[60px] text-center">
                                    Tournament
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer */}
                <div style={{ height: FOOTER_HEIGHT }}>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default BundesligaPage;
