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
                  <p className="text-coral flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="24" height="24" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                      <path fill="#1877F3" d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z"/>
                    </svg>
                    <a href="https://www.facebook.com/profile.php?id=61580960042745" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook Page</a>
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