import NewsCard from "./NewsCard";

const NewsFeed = () => {
  const news = [
    {
      title: "MurDepar побеждает в финале чемпионата!",
      summary:
        "Команда одержала уверенную победу со счетом 3:1 в напряженном финальном матче против Team Alpha.",
      date: "2 дня назад",
      category: "Турнир",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=400&fit=crop",
      isHighlight: true,
    },
    {
      title: "Новый спонсор команды",
      summary:
        "Рады объявить о партнерстве с HyperX - теперь наша команда использует их периферию.",
      date: "5 дней назад",
      category: "Спонсорство",
      image:
        "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=400&h=200&fit=crop",
    },
    {
      title: "Интервью с капитаном",
      summary:
        "ShadowKing рассказал о подготовке к предстоящему турниру и планах команды.",
      date: "1 неделю назад",
      category: "Интервью",
      image:
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=200&fit=crop",
    },
    {
      title: "Bootcamp завершен",
      summary:
        "Команда успешно завершила недельный тренировочный лагерь перед важными матчами.",
      date: "2 недели назад",
      category: "Тренировки",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=200&fit=crop",
    },
  ];

  return (
    <section className="py-16 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 font-montserrat">
            Новости команды
          </h2>
          <p className="text-gray-400 text-lg">
            Последние достижения и события
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {news.map((article, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <NewsCard {...article} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsFeed;
