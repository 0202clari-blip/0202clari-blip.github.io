import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-t from-dark-red to-background">
      <div className="container max-w-4xl mx-auto text-center">
        <div className="bg-card/50 backdrop-blur-sm border border-coral/20 rounded-3xl p-12" style={{ boxShadow: 'var(--shadow-warm)' }}>
          <h2 className="text-4xl md:text-5xl font-bold text-warm-cream mb-6">
            Ready to Excel in Academic English?
          </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join psychology and neuroscience students across Japan who are mastering scientific English with NeuroLingo
            </p>
          
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-coral hover:bg-coral-dark text-background font-semibold px-8 py-6 text-lg rounded-2xl transition-all duration-300 hover:scale-105">
                Start Your Journey
              </Button>
              <Button variant="outline" size="lg" className="border-warm-yellow text-warm-yellow hover:bg-warm-yellow hover:text-background px-8 py-6 text-lg rounded-2xl transition-all duration-300">
                Schedule Consultation
              </Button>
            </div>
            
            <div className="pt-8 border-t border-coral/20">
              <p className="text-lg font-semibold text-warm-cream mb-2">Claudia Ricci</p>
              <p className="text-muted-foreground">NeuroLingo with Loka - Specialized Academic English</p>
              <div className="space-y-2 mt-4">
                <p className="text-coral">📧 0202.clari@gmail.com</p>
                <p className="text-coral">🇮🇹 +39 3401981805</p>
                <p className="text-coral">🇯🇵 +81 9053942836</p>
                <p className="flex items-center justify-center gap-2">
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src="/facebook.svg" alt="Facebook" width="20" height="20" style={{ display: 'block' }} />
                  </span>
                  <a href="https://www.facebook.com/profile.php?id=61580960042745" target="_blank" rel="noopener noreferrer" className="hover:underline text-coral font-semibold">Facebook Page</a>
                </p>
                <p className="text-muted-foreground text-sm">Professional in: English • Italian • Spanish</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;