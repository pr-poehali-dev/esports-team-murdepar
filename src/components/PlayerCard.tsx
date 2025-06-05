import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PlayerCardProps {
  name: string;
  nickname: string;
  role: string;
  avatar: string;
  stats: {
    kd: string;
    winRate: string;
    rank: string;
  };
}

const PlayerCard = ({
  name,
  nickname,
  role,
  avatar,
  stats,
}: PlayerCardProps) => {
  return (
    <Card className="bg-slate-800/50 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 group">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-4">
            <img
              src={avatar}
              alt={nickname}
              className="w-20 h-20 rounded-full border-2 border-purple-500/50 group-hover:border-purple-400 transition-colors"
            />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-slate-800"></div>
          </div>

          <h3 className="text-xl font-bold text-white mb-1">{nickname}</h3>
          <p className="text-gray-400 text-sm mb-2">{name}</p>
          <Badge
            variant="secondary"
            className="bg-purple-600/20 text-purple-300 mb-4"
          >
            {role}
          </Badge>

          <div className="grid grid-cols-3 gap-4 w-full">
            <div className="text-center">
              <div className="text-lg font-bold text-purple-400">
                {stats.kd}
              </div>
              <div className="text-xs text-gray-500">K/D</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-pink-400">
                {stats.winRate}
              </div>
              <div className="text-xs text-gray-500">Win Rate</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-purple-400">
                {stats.rank}
              </div>
              <div className="text-xs text-gray-500">Rank</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlayerCard;
