import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold font-montserrat bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent mb-4 animate-fade-in">
            MurDepar
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in">
            Профессиональная киберспортивная команда
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg font-semibold">
            Смотреть матчи
          </Button>
          <Button
            variant="outline"
            className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 text-lg"
          >
            О команде
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-8 text-center">
          <div className="animate-scale-in">
            <div className="text-3xl font-bold text-purple-400">50+</div>
            <div className="text-gray-400">Побед</div>
          </div>
          <div className="animate-scale-in">
            <div className="text-3xl font-bold text-pink-400">12</div>
            <div className="text-gray-400">Турниров</div>
          </div>
          <div className="animate-scale-in">
            <div className="text-3xl font-bold text-purple-400">5</div>
            <div className="text-gray-400">Игроков</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
