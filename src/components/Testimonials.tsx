import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Joel Samberg",
      role: "Humantics Ai User",
      avatar: "JS",
      rating: 5,
      text: "Humantics Ai ने मेरी स्वास्थ्य देखभाल को पूरी तरह बदल दिया है। इसकी त्वरित प्रिस्क्रिप्शन विश्लेषण ने मुझे एक संभावित दवा इंटरैक्शन से बचाया जो मेरे डॉक्टर ने मिस कर दिया था। यह मेरे लिए 24/7 एक मेडिकल एक्सपर्ट जैसा है।"
    },
    {
      name: "Sarah Chen",
      role: "Working Mother",
      avatar: "SC", 
      rating: 5,
      text: "As a busy mom, I don't have time to wait for doctor appointments for every little health concern. August gives me peace of mind and helps me decide when something actually needs immediate attention."
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Family Physician",
      avatar: "MR",
      rating: 5,
      text: "I recommend August to my patients. It helps them come to appointments more informed and prepared with better questions. The accuracy is impressive and it complements clinical care beautifully."
    },
    {
      name: "Emily Johnson",
      role: "Chronic Condition Patient",
      avatar: "EJ",
      rating: 5,
      text: "Managing diabetes used to be overwhelming with all the numbers and adjustments. August explains everything in simple terms and helps me track patterns I never noticed before."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">
            Testimonials
          </h3>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            What Users are Saying
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Answers to common questions about how August works, its accuracy, and your data privacy.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-card rounded-xl p-6 shadow-medium border border-border/30 hover:shadow-large transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                {/* Quote Icon */}
                <div className="flex justify-center">
                  <Quote className="w-8 h-8 text-primary/30" />
                </div>

                {/* Rating */}
                <div className="flex justify-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-sm text-muted-foreground leading-relaxed text-center">
                  "{testimonial.text}"
                </p>

                {/* User Info */}
                <div className="flex flex-col items-center space-y-2 pt-4 border-t border-border/30">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;