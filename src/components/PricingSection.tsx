import { Button } from "@/components/ui/button";

const PricingSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-dark-red to-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-coral/10 text-coral px-6 py-3 rounded-full text-lg font-medium mb-6">
            Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-warm-cream mb-6">
            Choose Your Learning Path
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Affordable, recurring revenue with community building and tailored individual support
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Group Subscription */}
          <div className="bg-card border-2 border-coral rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-coral text-background px-6 py-2 rounded-bl-2xl font-semibold">
              Most Popular
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-warm-cream mb-2">Group Subscription</h3>
                <p className="text-muted-foreground">2-3 lessons via Loka per month</p>
              </div>
              
              <div className="space-y-2">
                <div className="text-4xl font-bold text-coral">¥3,000-4,000</div>
                <div className="text-muted-foreground">per month</div>
              </div>
              
              <div className="space-y-3 text-muted-foreground">
                <p className="font-medium text-warm-cream">Perfect for:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral mt-2"></div>
                    <span>Affordable, consistent learning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral mt-2"></div>
                    <span>Community building with peers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral mt-2"></div>
                    <span>Regular practice schedule</span>
                  </li>
                </ul>
              </div>
              
              <Button className="w-full bg-coral hover:bg-coral-dark text-background font-semibold py-6 rounded-2xl text-lg transition-all duration-300 hover:scale-105">
                Join Group Classes
              </Button>
            </div>
          </div>
          
          {/* 1:1 Coaching */}
          <div className="bg-card border border-warm-yellow/20 rounded-3xl p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-warm-cream mb-2">1:1 Coaching</h3>
                <p className="text-muted-foreground">Personalized 60-minute sessions</p>
              </div>
              
              <div className="space-y-2">
                <div className="text-4xl font-bold text-warm-yellow">¥5,000</div>
                <div className="text-muted-foreground">per session</div>
              </div>
              
              <div className="space-y-3 text-muted-foreground">
                <p className="font-medium text-warm-cream">Includes:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-warm-yellow mt-2"></div>
                    <span>Tailored presentation prep</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-warm-yellow mt-2"></div>
                    <span>Thesis defense coaching</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-warm-yellow mt-2"></div>
                    <span>Academic writing review</span>
                  </li>
                </ul>
              </div>
              
              <Button variant="outline" className="w-full border-warm-yellow text-warm-yellow hover:bg-warm-yellow hover:text-background font-semibold py-6 rounded-2xl text-lg transition-all duration-300">
                Book 1:1 Session
              </Button>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            <span className="font-semibold text-coral">Future Scalability:</span> Special workshops for thesis presentations and journal abstracts
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;