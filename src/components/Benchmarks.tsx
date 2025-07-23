import { Button } from "@/components/ui/button";
import { ExternalLink, Trophy, Target, Brain } from "lucide-react";

const Benchmarks = () => {
  const benchmarks = [
    {
      icon: Trophy,
      title: "Most Accurate AI Health Engine",
      subtitle: "25% higher diagnostic accuracy than human doctors.",
      color: "text-medical-success"
    },
    {
      icon: Target,
      title: "#1 in AI Medical Exams", 
      subtitle: "Scored 94.8% in USMLE—outperforming OpenAI's GPT-4 and Google MedPaLM 2.",
      color: "text-primary"
    },
    {
      icon: Brain,
      title: "Smartest AI for Conversations",
      subtitle: "86.75% accuracy in medical discussions—sets a new industry standard.",
      color: "text-medical-info"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">
            The Benchmarks
          </h3>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Why choose August AI?
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            August AI outperforms industry benchmarks, delivering expert-level accuracy, real world diagnostic precision, and unmatched triaging across medical specialities.
          </p>
        </div>

        {/* Benchmarks Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {benchmarks.map((benchmark, index) => (
            <div 
              key={index}
              className="bg-gradient-card rounded-2xl p-8 shadow-medium border border-border/30 hover:shadow-large transition-all duration-300 text-center animate-fade-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className={`p-4 rounded-2xl bg-accent/30 ${benchmark.color} group-hover:scale-110 transition-transform duration-300`}>
                    <benchmark.icon className="w-8 h-8" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">
                    {benchmark.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benchmark.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Research Link */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="group">
            <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
            Read full report
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Benchmarks;