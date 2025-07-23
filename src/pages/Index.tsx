import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import Features from "@/components/Features";
import UseCases from "@/components/UseCases";
import Comparison from "@/components/Comparison";
import Benchmarks from "@/components/Benchmarks";
import BeforeAfter from "@/components/BeforeAfter";
import Privacy from "@/components/Privacy";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Statistics />
      <Features />
      <UseCases />
      <Comparison />
      <Benchmarks />
      <BeforeAfter />
      <Privacy />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
