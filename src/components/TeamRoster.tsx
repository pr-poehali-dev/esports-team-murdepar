import PlayerCard from "./PlayerCard";

const TeamRoster = () => {
  const players = [
    {
      name: "Александр Петров",
      nickname: "ShadowKing",
      role: "Капитан / IGL",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      stats: { kd: "1.47", winRate: "78%", rank: "Global" },
    },
    {
      name: "Михаил Сидоров",
      nickname: "FlashMaster",
      role: "Entry Fragger",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
      stats: { kd: "1.52", winRate: "75%", rank: "Global" },
    },
    {
      name: "Денис Иванов",
      nickname: "SnipeGod",
      role: "AWPer",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      stats: { kd: "1.38", winRate: "82%", rank: "Global" },
    },
    {
      name: "Артем Козлов",
      nickname: "TechWiz",
      role: "Support",
      avatar:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face",
      stats: { kd: "1.21", winRate: "80%", rank: "Global" },
    },
    {
      name: "Никита Волков",
      nickname: "RushKing",
      role: "Rifler",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face",
      stats: { kd: "1.33", winRate: "77%", rank: "Global" },
    },
  ];

  return (
    <section className="py-16 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 font-montserrat">
            Состав команды
          </h2>
          <p className="text-gray-400 text-lg">
            Профессиональные игроки мирового уровня
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {players.map((player, index) => (
            <div
              key={player.nickname}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <PlayerCard {...player} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamRoster;
