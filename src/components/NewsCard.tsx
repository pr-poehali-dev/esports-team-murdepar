import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface NewsCardProps {
  title: string;
  summary: string;
  date: string;
  category: string;
  image: string;
  isHighlight?: boolean;
}

const NewsCard = ({
  title,
  summary,
  date,
  category,
  image,
  isHighlight = false,
}: NewsCardProps) => {
  return (
    <Card
      className={`bg-slate-800/50 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 ${isHighlight ? "md:col-span-2 md:row-span-2" : ""}`}
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className={`w-full object-cover rounded-t-lg ${isHighlight ? "h-48 md:h-64" : "h-32"}`}
        />
        <Badge className="absolute top-3 left-3 bg-purple-600/90 text-white">
          {category}
        </Badge>
      </div>

      <CardHeader className="pb-2">
        <h3
          className={`font-bold text-white hover:text-purple-400 transition-colors cursor-pointer ${isHighlight ? "text-xl md:text-2xl" : "text-lg"}`}
        >
          {title}
        </h3>
      </CardHeader>

      <CardContent>
        <p
          className={`text-gray-400 mb-3 ${isHighlight ? "text-base" : "text-sm"}`}
        >
          {summary}
        </p>
        <div className="text-xs text-gray-500">{date}</div>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
