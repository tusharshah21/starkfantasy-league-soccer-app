import React from "react";
import { Trophy } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

interface WeeklyProgressCardProps {
    weeklyData: { name: string; value: number }[];
}

const WeeklyProgressCard: React.FC<WeeklyProgressCardProps> = ({
    weeklyData,
}) => (
    <div className="bg-black/20 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 p-6 flex flex-col min-h-[280px] relative overflow-visible w-full">
        <div className="flex items-center mb-4">
            <Trophy className="w-6 h-6 text-orange-500 mr-2" />
            <span className="text-white text-lg font-semibold">
                Weekly Progress
            </span>
        </div>
        <div className="flex-1 flex flex-row">
            <div className="flex-1">
                <ResponsiveContainer width="100%" height={180}>
                    <LineChart data={weeklyData}>
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#9CA3AF", fontSize: 12 }}
                        />
                        <YAxis hide />
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#F59E0B"
                            strokeWidth={3}
                            dot={{ fill: "#F59E0B", strokeWidth: 2, r: 4 }}
                            activeDot={{ r: 6, fill: "#F59E0B" }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            {/* Vertical labels */}
            <div className="flex flex-col items-center ml-4">
                <span
                    className="text-green-400 font-bold text-xs"
                    style={{
                        writingMode: "vertical-rl",
                        letterSpacing: "0.2em",
                    }}
                >
                    Total
                </span>
                <span
                    className="text-gray-400 font-bold text-xs mt-2"
                    style={{
                        writingMode: "vertical-rl",
                        letterSpacing: "0.2em",
                    }}
                >
                    Ranks
                </span>
            </div>
        </div>
    </div>
);

export default WeeklyProgressCard;
