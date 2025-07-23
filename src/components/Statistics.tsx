import { Users, Stethoscope, FileText } from "lucide-react";

const Statistics = () => {
  const stats = [
    {
      icon: Users,
      number: "2.5M+",
      label: "Active Users",
      color: "text-primary"
    },
    {
      icon: Stethoscope,
      number: "100K+",
      label: "Doctors using actively",
      color: "text-medical-success"
    },
    {
      icon: FileText,
      number: "6.2M+",
      label: "Reports analysed",
      color: "text-medical-info"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-card rounded-3xl p-8 shadow-large border border-border/30">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center space-y-4 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex justify-center">
                  <div className={`p-4 rounded-2xl bg-accent/30 ${stat.color}`}>
                    <stat.icon className="w-8 h-8" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-foreground">
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;