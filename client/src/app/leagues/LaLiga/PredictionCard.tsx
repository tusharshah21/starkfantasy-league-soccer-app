import React from "react";
import { Trophy } from "lucide-react";

interface PredictionCardProps {
    team1: string;
    team2: string;
    prediction: string;
    participants: number;
    reward: string;
    bet: string;
    endDate: string;
    status: string;
}

const PredictionCard: React.FC<PredictionCardProps> = ({
    team1,
    team2,
    prediction,
    participants,
    reward,
    bet,
    endDate,
    status,
}) => (
    <div className="bg-black/20 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 p-6 flex flex-col justify-between min-h-[280px] relative w-full">
        <div className="flex items-center justify-between mb-4">
            <span className="text-white font-semibold text-lg">
                {team1} vs {team2}
            </span>
            <span className="bg-orange-500 text-xs text-white px-3 py-1 rounded-full font-medium">
                {status}
            </span>
        </div>
        <div className="flex items-center justify-between mb-4">
            <span className="text-white font-semibold text-lg flex flex-row">
                <Trophy className="w-6 h-6 text-orange-500 mr-3" />
                Your prediction
            </span>
            <span className="text-xl text-white px-3 py-1 rounded-full font-medium">
                {prediction}
            </span>
        </div>
        <div className="space-y-4">
            <div className="flex justify-between text-xs text-gray-400 mb-1">
                <span>Participants</span>
                <span>Potential Reward</span>
            </div>
            <div className="flex justify-between text-white font-semibold mb-4">
                <span>{participants}</span>
                <span className="text-green-400">{reward}</span>
            </div>
            <div className="flex justify-between text-xs text-gray-400 mb-1">
                <span>Your Bet</span>
                <span>End date</span>
            </div>
            <div className="flex justify-between text-white font-semibold">
                <span className="text-orange-400">{bet}</span>
                <span>{endDate}</span>
            </div>
        </div>
    </div>
);

export default PredictionCard;
