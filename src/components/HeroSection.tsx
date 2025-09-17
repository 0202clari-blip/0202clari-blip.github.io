import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-background via-dark-red to-background flex items-center justify-center px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-6 mb-4">
              <img src={logo} alt="NeuroLingo Logo" className="w-16 h-16 md:w-20 md:h-20" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-coral via-warm-yellow to-coral bg-clip-text text-transparent">
                NeuroLingo with Loka
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-warm-cream max-w-3xl mx-auto leading-relaxed">
              Specialized Academic English for Psychology & Neuroscience Students in Japan
            </p>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm border border-coral/20 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto" style={{ boxShadow: 'var(--shadow-warm)' }}>
            <h2 className="text-2xl md:text-3xl font-semibold text-warm-cream mb-6">
              Master scientific English terminology through focused, context-rich lessons
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Bridge everyday understanding with academic precision. Learn to use terms confidently in papers, discussions, and conferences with expert guidance from Claudia Ricci.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-coral hover:bg-coral-dark text-background font-semibold px-8 py-6 text-lg rounded-2xl transition-all duration-300 hover:scale-105"
                onClick={() => window.location.href = "https://thelivingtextbook.lokalingo.com/admin/bookings"}
              >
                Start Learning Today
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-coral text-coral hover:bg-coral hover:text-background px-8 py-6 text-lg rounded-2xl transition-all duration-300"
                onClick={() => {
                  const el = document.getElementById("pricing");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;