import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface MatchCardProps {
  opponent: string;
  opponentLogo: string;
  date: string;
  time: string;
  tournament: string;
  status: "upcoming" | "live" | "completed";
  score?: string;
}

const MatchCard = ({
  opponent,
  opponentLogo,
  date,
  time,
  tournament,
  status,
  score,
}: MatchCardProps) => {
  const getStatusColor = () => {
    switch (status) {
      case "live":
        return "bg-red-500 animate-pulse";
      case "upcoming":
        return "bg-blue-500";
      case "completed":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusText = () => {
    switch (status) {
      case "live":
        return "В ЭФИРЕ";
      case "upcoming":
        return "ПРЕДСТОЯЩИЙ";
      case "completed":
        return "ЗАВЕРШЕН";
      default:
        return "";
    }
  };

  return (
    <Card className="bg-slate-800/50 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <Badge className={`text-white text-xs ${getStatusColor()}`}>
            {getStatusText()}
          </Badge>
          <span className="text-gray-400 text-sm">{tournament}</span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
              MD
            </div>
            <span className="text-white font-semibold">MurDepar</span>
          </div>

          <div className="text-center">
            {score ? (
              <div className="text-2xl font-bold text-purple-400">{score}</div>
            ) : (
              <div className="text-gray-400 text-lg">VS</div>
            )}
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-white font-semibold">{opponent}</span>
            <img
              src={opponentLogo}
              alt={opponent}
              className="w-12 h-12 rounded-full"
            />
          </div>
        </div>

        <div className="text-center border-t border-gray-700 pt-3">
          <div className="text-white font-semibold">{date}</div>
          <div className="text-gray-400 text-sm">{time}</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MatchCard;
