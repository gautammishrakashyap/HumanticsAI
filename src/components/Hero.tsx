import { Button } from "@/components/ui/button";
import { MessageCircle, Download, Shield, Clock, DollarSign } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const healthCategories = [
    "Cancer", "Thyroid", "Nutrition & Diet", "Mental Health", "Weight Loss",
    "Respiratory", "Pregnancy", "Sexual Health", "Skin Care", "Sleep Health",
    "Diabetes", "Heart Health", "Digestive Health", "Hormonal", "Auto-Immune", "PCOS/PCOD"
  ];

  const features = [
    { icon: Clock, text: "Zero waiting time" },
    { icon: Shield, text: "No insurance needed" },
    { icon: DollarSign, text: "Free of cost" }
  ];

  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Floating Health Categories */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {healthCategories.map((category, index) => (
          <div
            key={category}
            className={`absolute text-xs font-medium text-muted-foreground/40 animate-float`}
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
              animationDelay: `${index * 0.2}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {category}
          </div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">help when you</span>
                <br />
                <span className="text-foreground">need it,</span>
                <br />
                <span className="text-primary">right away.</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Understand any prescription, lab report, or health concern instantly with your personal AI health companion—available for FREE, 24x7, zero waiting time.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Humantics Ai से बात करें
              </Button>
              
              <div className="flex gap-3">
                <Button variant="outline" size="lg" className="flex-1 sm:flex-none">
                  <Download className="w-4 h-4" />
                  App Store
                </Button>
                <Button variant="outline" size="lg" className="flex-1 sm:flex-none">
                  <Download className="w-4 h-4" />
                  Google Play
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <feature.icon className="w-4 h-4 text-primary" />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-large">
              <img
                src={heroImage}
                alt="Humantics Ai स्वास्थ्य साथी का उपयोग करती महिला"
                className="w-full h-auto object-cover"
              />
              
              {/* Floating UI Elements */}
              <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg p-3 shadow-medium animate-float">
                <div className="text-xs font-medium text-primary">Prescription Analysis</div>
                <div className="text-xs text-muted-foreground">Take 1 tablet daily</div>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-3 shadow-medium animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-xs font-medium text-medical-success">Lab Results</div>
                <div className="text-xs text-muted-foreground">Normal range ✓</div>
              </div>
              
              <div className="absolute top-1/2 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-3 shadow-medium animate-float" style={{ animationDelay: '2s' }}>
                <div className="text-xs font-medium text-medical-info">Health Tip</div>
                <div className="text-xs text-muted-foreground">Stay hydrated</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;