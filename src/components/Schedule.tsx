import MatchCard from "./MatchCard";

const Schedule = () => {
  const matches = [
    {
      opponent: "Team Alpha",
      opponentLogo:
        "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=100&h=100&fit=crop",
      date: "15 Января",
      time: "19:00 МСК",
      tournament: "ESL Pro League",
      status: "live" as const,
      score: "2:1",
    },
    {
      opponent: "Cyber Wolves",
      opponentLogo:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop",
      date: "18 Января",
      time: "20:30 МСК",
      tournament: "Major Championship",
      status: "upcoming" as const,
    },
    {
      opponent: "Digital Storm",
      opponentLogo:
        "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=100&h=100&fit=crop",
      date: "22 Января",
      time: "18:00 МСК",
      tournament: "IEM Katowice",
      status: "upcoming" as const,
    },
    {
      opponent: "Phoenix Gaming",
      opponentLogo:
        "https://images.unsplash.com/photo-1616842829600-3e33bdbc73f0?w=100&h=100&fit=crop",
      date: "12 Января",
      time: "21:00 МСК",
      tournament: "BLAST Premier",
      status: "completed" as const,
      score: "3:0",
    },
  ];

  return (
    <section className="py-16 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 font-montserrat">
            Расписание матчей
          </h2>
          <p className="text-gray-400 text-lg">
            Предстоящие и завершенные игры
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {matches.map((match, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <MatchCard {...match} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
