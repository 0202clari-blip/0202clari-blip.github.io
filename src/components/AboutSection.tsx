import claudiaPhoto from "@/assets/claudia-photo.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-dark-red">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-coral/10 text-coral px-4 py-2 rounded-full text-sm font-medium">
              UVP - Unique Value Proposition
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-warm-cream">
              Meet Claudia Ricci
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                I help psychology and neuroscience students in Japan master scientific English 
                terminology through focused, context-rich lessons that bridge everyday understanding 
                with academic precision.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-3"></div>
                  <p>
                    <span className="text-coral font-semibold">Specialized Focus:</span> English schools in Japan are 
                    everywhere, but few specialize in academic/scientific English.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-3"></div>
                  <p>
                    <span className="text-coral font-semibold">Beyond Memorization:</span> Students don't just memorize—they 
                    learn to use terms in papers, discussions, and conferences.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-3"></div>
                  <p>
                    <span className="text-coral font-semibold">Unique Combination:</span> Language expertise + 
                    neuroscience/psychology background creates unmatched learning experience.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-3"></div>
                  <p>
                    <span className="text-coral font-semibold">Multilingual Expert:</span> Professional proficiency in 
                    English, Italian, and Spanish for comprehensive language support.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-coral to-warm-yellow rounded-3xl blur-lg opacity-20"></div>
              <img 
                src={claudiaPhoto}
                alt="Claudia Ricci - Academic English Specialist"
                className="relative w-80 h-80 object-cover rounded-3xl border-4 border-coral/30"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;