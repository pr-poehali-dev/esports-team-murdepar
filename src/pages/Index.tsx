import Hero from "@/components/Hero";
import TeamRoster from "@/components/TeamRoster";
import NewsFeed from "@/components/NewsFeed";
import Schedule from "@/components/Schedule";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Hero />
      <TeamRoster />
      <NewsFeed />
      <Schedule />
    </div>
  );
};

export default Index;
