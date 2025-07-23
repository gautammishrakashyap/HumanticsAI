import { Check, X, Star } from "lucide-react";

const Comparison = () => {
  const comparisonData = [
    {
      aspect: "How does it make you feel?",
      august: "Like a close friend who gets you. Warm, real, human.",
      google: "Anxious, alone, stressed. You figure it out!",
      telehealth: "Like explaining yourself to a stranger every time."
    },
    {
      aspect: "Quality of Care",
      august: "Feels like a friend & a doctor. Actually helpful. Real support when it matters!",
      google: "Fear-based info dump.",
      telehealth: "Cold, clinical & generic. Like talking to someone who doesn't know you."
    },
    {
      aspect: "Lab Report & Prescription Analysis",
      august: "Translates medical jargon into clear, helpful actions.",
      google: "You read, you guess, you stress.",
      telehealth: "Basic info. Hard to know what to do next."
    },
    {
      aspect: "Personalized Care & Guidance",
      august: "Keeps you ahead with personalized nudges & habits.",
      google: "One-size-fits-none, basic tips. No follow-up.",
      telehealth: "Reactive. Only acts when there's a problem."
    },
    {
      aspect: "24/7 Active Care",
      august: "Always available. Human-like support on WhatsApp - even at 2 AM.",
      google: "Static articles. No real help when you're panicking late at night.",
      telehealth: "Wait till morning. Support ends with business hours"
    },
    {
      aspect: "Speed (Can I get faster answers?)",
      august: "Answers when you need them - instantly",
      google: "Tons of results, no real-time help.",
      telehealth: "Delayed, general advice. Takes time to respond - often hours or days."
    },
    {
      aspect: "All in one support",
      august: "All your care in one place - 40+ specialties, integrated.",
      google: "Info spread across pages & articles. You piece it all together.",
      telehealth: "One appointment at a time."
    },
    {
      aspect: "Follow-Ups & Continuous Care",
      august: "Automatically does regular check-ins & nudges you forward.",
      google: "No reminders. No continuity. You're on your own!",
      telehealth: "You need to remember to book again."
    },
    {
      aspect: "Cost",
      august: "FREE - multiple services & care, no hidden costs.",
      google: "Free to search, but not built for real care, support or value",
      telehealth: "Charges per visit, extra fees adds up"
    },
    {
      aspect: "Accessibility & Multilingual Support",
      august: "Speaks your language with context.",
      google: "Generic & often incorrect translation, not personal",
      telehealth: "Limited language support."
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">
            Comparison
          </h3>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            What You Actually Care About: August vs. Others
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            How does August compare to Google and Telehealth? Here's why August is the future of personal healthcare.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-gradient-card rounded-2xl shadow-large border border-border/30 overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-4 gap-4 p-6 bg-primary/5 border-b border-border/30">
            <div className="font-semibold text-foreground">Features</div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 font-semibold text-primary">
                <Star className="w-5 h-5 fill-current" />
                August AI
              </div>
            </div>
            <div className="text-center font-semibold text-muted-foreground">Google</div>
            <div className="text-center font-semibold text-muted-foreground">Telehealth</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-border/30">
            {comparisonData.map((row, index) => (
              <div 
                key={index} 
                className="grid grid-cols-4 gap-4 p-6 hover:bg-muted/10 transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="font-medium text-foreground">{row.aspect}</div>
                <div className="text-sm text-foreground bg-primary/10 rounded-lg p-3">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{row.august}</span>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground bg-muted/30 rounded-lg p-3">
                  <div className="flex items-start gap-2">
                    <X className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                    <span>{row.google}</span>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground bg-muted/30 rounded-lg p-3">
                  <div className="flex items-start gap-2">
                    <X className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                    <span>{row.telehealth}</span>
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

export default Comparison;