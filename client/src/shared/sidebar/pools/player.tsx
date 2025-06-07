"use client";

interface Player {
  id: string;
  name: string;
  avatar: string;
  position: string;
  team: string;
  stats: {
    runs?: number;
    wickets?: number;
    catches?: number;
  };
}

interface PlayerProps {
  player: Player;
  onSelect?: (player: Player) => void;
  isSelected?: boolean;
}

export default function Player({ player, onSelect, isSelected = false }: PlayerProps) {
  return (
    <div
      className={`
        bg-slate-700/50 backdrop-blur-sm border rounded-xl p-4 cursor-pointer
        transition-all duration-200 hover:scale-105
        ${isSelected 
          ? 'border-orange-500 bg-orange-500/10' 
          : 'border-orange-500/20 hover:border-orange-500/40'
        }
      `}
      onClick={() => onSelect?.(player)}
    >
      {/* Player Avatar */}
      <div className="flex flex-col items-center mb-4">
        <div className="w-16 h-16 bg-gray-300 rounded-full mb-2"></div>
        <h3 className="text-white font-semibold text-center">{player.name}</h3>
        <p className="text-gray-400 text-sm">{player.position}</p>
        <p className="text-orange-400 text-xs">{player.team}</p>
      </div>

      {/* Player Stats */}
      <div className="space-y-2">
        {player.stats.runs !== undefined && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-300">Runs:</span>
            <span className="text-white font-medium">{player.stats.runs}</span>
          </div>
        )}
        {player.stats.wickets !== undefined && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-300">Wickets:</span>
            <span className="text-white font-medium">{player.stats.wickets}</span>
          </div>
        )}
        {player.stats.catches !== undefined && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-300">Catches:</span>
            <span className="text-white font-medium">{player.stats.catches}</span>
          </div>
        )}
      </div>

      {/* Selection Indicator */}
      {isSelected && (
        <div className="mt-3 text-center">
          <span className="inline-block bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
            Selected
          </span>
        </div>
      )}
    </div>
  );
}