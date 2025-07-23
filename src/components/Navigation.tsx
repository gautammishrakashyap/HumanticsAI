import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Navigation = () => {
  const navItems = [
    { label: "Stories", href: "#testimonials" },
    { label: "Features", href: "#features" },
    { label: "Tools", href: "#tools" },
    { label: "Health Library", href: "#library" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-background rounded-full px-6 py-2 shadow-soft border border-border/30">
              <span className="text-xl font-bold text-foreground">august.ai</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <Button variant="nav" size="sm" className="rounded-full">
            <MessageCircle className="w-4 h-4" />
            Talk to August
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;