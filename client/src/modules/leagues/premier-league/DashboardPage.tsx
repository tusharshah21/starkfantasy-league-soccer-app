import premierLeague from "../../../assets/images/premierLeague.png";

function DashboardPage() {
    return (
        <div
            className="relative w-full h-screen bg-cover bg-center overflow-hidden "
            style={{ backgroundImage: `url(${premierLeague})` }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />

            {/* Dynamic Light reflections */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Purple line relfections */}

                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-10 -left-20 w-96 h-2 bg-gradient-to-r from-transparent via-purple-500 to-transparent rotate-45 opacity-80 animate-pulse" />
                    <div className="absolute top-32 -right-20 w-80 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent rotate-45 opacity-60" />
                    <div className="absolute bottom-40 -left-32 w-72 h-1 bg-gradient-to-r from-transparent via-purple-600 to-transparent rotate-45 opacity-70" />
                </div>

                {/* green line relfections */}

                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-20 right-10 w-64 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent -rotate-45 opacity-80" />
                    <div className="absolute top-60 -left-16 w-88 h-2 bg-gradient-to-r from-transparent via-green-500 to-transparent rotate-45 opacity-90 animate-pulse" />
                    <div className="absolute bottom-32 right-20 w-56 h-1 bg-gradient-to-r from-transparent via-green-300 to-transparent -rotate-45 opacity-70" />
                </div>

                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-40 left-20 w-72 h-1 bg-gradient-to-r from-transparent via-cyan-300 to-transparent rotate-45 opacity-60" />
                    <div className="absolute bottom-20 -right-24 w-64 h-1 bg-gradient-to-r from-transparent via-white to-transparent rotate-45 opacity-80" />
                    <div className="absolute top-80 -left-12 w-48 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent -rotate-45 opacity-50" />
                </div>
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
                {/* Main Text */}
                <div className="text-white space-y-4">
                    <div>
                        <h2 className="text-xl opacity-90">Welcome to</h2>
                        <h1 className="text-6xl md:text-8xl font-bold tracking-wider">
                            Premier League
                        </h1>
                    </div>
                    <p className="text-xl md:text-2xl font-light tracking-[1em] opacity-90">
                        TOURNAMENT
                    </p>
                </div>
            </div>

            {/* Additional Light Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-green-400/20 rounded-full blur-xl animate-pulse" />
                <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse" />
                <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-cyan-300/30 rounded-full blur-lg animate-ping" />
            </div>
        </div>
    );
}

export default DashboardPage;
