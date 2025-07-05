import React from "react";
import { Trophy } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

interface PoolsResultsCardProps {
    weeklyData: { name: string; value: number }[];
}

const PoolsResultsCard: React.FC<PoolsResultsCardProps> = ({ weeklyData }) => (
    <div className="bg-black/20 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 p-6 flex flex-col min-h-[280px] relative overflow-visible w-full">
        <div className="flex items-center mb-4">
            <Trophy className="w-6 h-6 text-orange-500 mr-2" />
            <span className="text-white text-lg font-semibold">
                Pools' results
            </span>
        </div>
        <div className="flex-1 flex flex-row">
            <div className="flex-1 flex items-center justify-center">
                <ResponsiveContainer width="100%" height={120}>
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
            {/* Vertical stat blocks */}
            <div className="flex flex-col items-end justify-center ml-4 gap-2">
                <div className="flex flex-col items-end">
                    <span className="text-yellow-400 text-lg font-bold leading-none">
                        57%
                    </span>
                    <span className="text-xs text-gray-300">Acc</span>
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-orange-400 text-lg font-bold leading-none">
                        662
                    </span>
                    <span className="text-xs text-gray-300">STRK</span>
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-blue-400 text-lg font-bold leading-none">
                        48%
                    </span>
                    <span className="text-xs text-gray-300">Pr</span>
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-green-400 text-lg font-bold leading-none">
                        39%
                    </span>
                    <span className="text-xs text-gray-300">Ac</span>
                </div>
            </div>
        </div>
    </div>
);

export default PoolsResultsCard;
