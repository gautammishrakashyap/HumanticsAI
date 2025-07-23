import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const UseCases = () => {
  const [activeCategory, setActiveCategory] = useState("Heart Health");

  const categories = [
    "Heart Health",
    "Diabetes & Endocrine", 
    "Mental Health",
    "Women's Health",
    "Skin Conditions",
    "Digestive Health",
    "Bones, Joints & Muscles",
    "Urinary & Kidney"
  ];

  const useCases = {
    "Heart Health": [
      {
        query: "नमस्ते Humantics Ai, मुझे कभी-कभी सीने में अजीब सा दर्द होता है। क्या मुझे चिंता करनी चाहिए?",
        category: "Symptom Evaluation",
        description: "Distinguishing between chest pain types, palpitations, and shortness of breath."
      },
      {
        query: "I started taking beta-blockers for my heart, but I'm noticing some side effects. Is it normal to feel a bit off with them?",
        category: "Medication Concerns", 
        description: "Managing side effects and understanding the role of beta-blockers, ACE inhibitors, etc."
      },
      {
        query: "Hey August, I'm a bit confused. My HDL is 55, my LDL is 140, and my triglycerides are at 180. What should I do?",
        category: "Diagnostic Clarification",
        description: "Interpreting blood pressure readings, cholesterol levels, and ECG results."
      },
      {
        query: "I recently recovered from a stroke. Please provide me a diet and exercise plan for overall better cardiovascular health.",
        category: "Lifestyle Adjustments",
        description: "Modifying diet (e.g., low-sodium) and exercise routines for heart health."
      }
    ],
    "Diabetes & Endocrine": [
      {
        query: "My blood sugar has been fluctuating a lot lately. What could be causing this?",
        category: "Blood Sugar Management",
        description: "Understanding glucose patterns and managing diabetes effectively."
      }
    ],
    "Mental Health": [
      {
        query: "I've been feeling anxious and having trouble sleeping. What should I do?",
        category: "Mental Wellness",
        description: "Addressing anxiety, depression, and sleep disorders with professional guidance."
      }
    ],
    "Women's Health": [
      {
        query: "I'm experiencing irregular periods and hormonal changes. Should I be concerned?",
        category: "Hormonal Health",
        description: "Understanding menstrual health, PCOS, and hormonal imbalances."
      }
    ],
    "Skin Conditions": [
      {
        query: "I have this persistent rash that won't go away. What could it be?",
        category: "Dermatology",
        description: "Identifying skin conditions, allergies, and treatment options."
      }
    ],
    "Digestive Health": [
      {
        query: "I've been having stomach pain and bloating after meals. What's wrong?",
        category: "Gastrointestinal",
        description: "Understanding digestive issues, IBS, and dietary triggers."
      }
    ],
    "Bones, Joints & Muscles": [
      {
        query: "My knee has been aching after I exercise. Is this normal wear and tear?",
        category: "Orthopedic Health",
        description: "Managing joint pain, arthritis, and musculoskeletal issues."
      }
    ],
    "Urinary & Kidney": [
      {
        query: "I've been having frequent urination and some discomfort. Should I see a doctor?",
        category: "Urological Health",
        description: "Understanding UTIs, kidney function, and urological symptoms."
      }
    ]
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">
            Use cases
          </h3>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            See how others use August
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real people, real questions—see how August supports 2M users on their health journey.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground shadow-medium'
                  : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Use Case Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {(useCases[activeCategory] || []).map((useCase, index) => (
            <div 
              key={index}
              className="bg-gradient-card rounded-xl p-6 shadow-medium border border-border/30 hover:shadow-large transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">AU</span>
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="text-sm font-medium text-foreground">Humantics Ai</div>
                    <div className="text-sm text-muted-foreground leading-relaxed">
                      {useCase.query}
                    </div>
                  </div>
                </div>
                
                <div className="border-l-2 border-primary/20 pl-4 space-y-2">
                  <div className="text-sm font-semibold text-primary">
                    {useCase.category}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {useCase.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="xl">
            <MessageCircle className="w-5 h-5" />
            Humantics Ai से बात करें
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UseCases;