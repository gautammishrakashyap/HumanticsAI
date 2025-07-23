import { Shield, Lock, CheckCircle } from "lucide-react";

const Privacy = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Your Privacy is
                <br />
                <span className="text-primary">Our Priority</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Humantics Ai कभी भी आपकी व्यक्तिगत जानकारी नहीं मांगता। आपका स्वास्थ्य डेटा पूरी तरह से सुरक्षित और गोपनीय रहता है।
              </p>
            </div>

            {/* Privacy Features */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-medical-success" />
                <span className="text-foreground font-medium">HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-3">
                <Lock className="w-5 h-5 text-medical-success" />
                <span className="text-foreground font-medium">End-to-End Encryption</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-medical-success" />
                <span className="text-foreground font-medium">GDPR Compliant</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-gradient-card rounded-2xl p-12 shadow-large border border-border/30 text-center">
              <div className="space-y-8">
                <div className="flex justify-center">
                  <div className="p-6 rounded-full bg-primary/10">
                    <Shield className="w-16 h-16 text-primary" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">
                    Bank-Level Security
                  </h3>
                  <p className="text-muted-foreground">
                    Your conversations and health data are protected with military-grade encryption and never stored without your explicit consent.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="p-4 bg-medical-success/10 rounded-lg">
                    <div className="text-2xl font-bold text-medical-success">256-bit</div>
                    <div className="text-xs text-muted-foreground">Encryption</div>
                  </div>
                  <div className="p-4 bg-primary/10 rounded-lg">
                    <div className="text-2xl font-bold text-primary">Zero</div>
                    <div className="text-xs text-muted-foreground">Data Sharing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;