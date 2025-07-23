import { X, Check } from "lucide-react";

const BeforeAfter = () => {
  const oldWayIssues = [
    "Confusing medical reports & prescriptions",
    "Expensive doctor visits for simple clarifications", 
    "No guidance on daily health, nutrition, or medication",
    "Waiting hours or days for a response to simple health questions",
    "No personalized recommendations to help prevent health issues before they arise"
  ];

  const newWayBenefits = [
    "Instantly understand prescriptions & reports—just upload a photo",
    "Free, AI-powered health guidance available 24/7",
    "Personalized nutrition plans & medication reminders", 
    "Immediate responses for your health queries",
    "AI-driven insights help you prevent potential health issues before they happen"
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">
            Before And After
          </h3>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Why Settle for Less? Upgrade to August
          </h2>
          <p className="text-xl text-muted-foreground">
            Have a medical companion right in your pocket.
          </p>
        </div>

        {/* Before/After Comparison */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Old Way */}
          <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Old Way</h3>
              <p className="text-lg text-muted-foreground">traditional System</p>
            </div>
            
            <div className="space-y-4">
              {oldWayIssues.map((issue, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-destructive/5 border border-destructive/20"
                >
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{issue}</span>
                </div>
              ))}
            </div>
          </div>

          {/* New Way */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-primary">August Way</h3>
              <p className="text-lg text-muted-foreground">Your Health, Your Control</p>
            </div>
            
            <div className="space-y-4">
              {newWayBenefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20"
                >
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;