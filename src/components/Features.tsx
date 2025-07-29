import { 
  FileText, 
  Search, 
  Navigation, 
  FlaskConical, 
  UserCheck, 
  Heart, 
  ShoppingBag, 
  Calendar,
  MessageSquare 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      number: "01",
      icon: FileText,
      title: "Medical History Review",
      subtitle: "Your second brain for health—Humantics recalls the details you miss.",
      description: "Humantics quickly scans your health records, highlighting key details—like past conditions, treatments, or allergies—so you get personalised, accurate guidance instantly."
    },
    {
      number: "02", 
      icon: Search,
      title: "Symptom Checking & Differential Diagnosis",
      subtitle: "Understand Symptoms. Explore Causes. Know What to Ask Your Doctor.",
      description: "Not sure what's causing that headache, rash, or stomach pain? Humantics gives you clarity before you panic—helps you decide if it's worth seeing a doctor & what to ask if you do."
    },
    {
      number: "03",
      icon: Navigation,
      title: "Care Navigation & Specialist Guidance", 
      subtitle: "Know exactly where, when and whom to seek care.",
      description: "Humantics assesses your symptoms, determines urgency & quickly connects you with the right provider or specialist."
    },
    {
      number: "04",
      icon: FlaskConical,
      title: "Lab Report & Prescription Analysis",
      subtitle: "Tired of medical jargon? Get clarity when you're confused.",
      description: "Humantics translates complex medical prescriptions, understands scans, highlights information, flags potential medication interactions, and suggests safer alternatives."
    },
    {
      number: "05",
      icon: UserCheck,
      title: "Second Opinion",
      subtitle: "Eliminate doubt; verify your treatment options before you commit.",
      description: "Big, scary, or unclear health decisions? Whether it's a complex diagnosis, major treatment, or avoiding unnecessary procedures, Humantics helps you explore evidence-based options so you have clarity, confidence & peace of mind."
    },
    {
      number: "06",
      icon: Heart,
      title: "Wellness Planning",
      subtitle: "Your health plan, for the whole you—not just what's hurting.",
      description: "From diet & sleep to exercise & stress—Humantics creates a hyper-personalised wellness plan based on your health history, habits, goals & needs. A plan for your healthy life."
    },
    {
      number: "07",
      icon: ShoppingBag,
      title: "Product Recommendations",
      subtitle: "Find exactly what your body needs.",
      description: "Humantics allows you to identify, understand, compare & finalise health products tailored to your needs."
    },
    {
      number: "08",
      icon: Calendar,
      title: "Medication Adherence",
      subtitle: "Never miss your meds again—Humantics remembers, even when you don't.",
description: "From timing, dosage to interactions and refills, Humantics helps you stick to your treatment plan without missing a beat—so your health stays steady, even when life gets busy."
    },
    {
      number: "09",
      icon: MessageSquare,
      title: "Your AI Care Team",
      subtitle: "One AI assistant, many roles—doctor, nurse, dietitian and more. All in one chat.",
      description: "No bouncing between apps, portals, clinics, or calls. Just answers. Just clarity. All in one place. Humantics is your all-in-one health companion—always here to support & assist your health journey."
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">
            The Features
          </h3>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Humantics Ai आपके लिए क्या कर सकता है?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            रिपोर्ट से लेकर उपचार विकल्पों तक, Humantics Ai आपके स्वास्थ्य को सरल बनाता है, ताकि आप निश्चिंत रह सकें।
          </p>
        </div>

        {/* Features Grid */}
        <div className="space-y-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center animate-fade-in ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center gap-4">
                  <span className="text-5xl font-bold text-primary/20">
                    {feature.number}
                  </span>
                  <div className="p-3 rounded-xl bg-primary/10">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-lg font-medium text-primary">
                    {feature.subtitle}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Visual Placeholder */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="bg-gradient-card rounded-2xl p-8 shadow-medium border border-border/30 aspect-square flex items-center justify-center">
                  <feature.icon className="w-24 h-24 text-primary/30" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;