const ServicesSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-warm-yellow/10 text-warm-yellow px-4 py-2 rounded-full text-sm font-medium mb-4">
            ICP - Ideal Customer Profile
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-warm-cream mb-6">
            Perfect for You If...
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-card border border-coral/20 rounded-3xl p-8" style={{ boxShadow: 'var(--shadow-soft)' }}>
            <h3 className="text-2xl font-bold text-warm-cream mb-6">Target Students</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Undergraduate and graduate psychology/neuroscience students in Japan (ages 18-30) 
              with basic English skills but struggling with academic papers, reports, or presentations.
            </p>
            
            <h4 className="text-xl font-semibold text-coral mb-4">Pain Points:</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-coral mt-2"></div>
                <span>Difficulty reading papers due to unfamiliar terminology</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-coral mt-2"></div>
                <span>Need to present in seminars or submit papers in English</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-coral mt-2"></div>
                <span>Want to stand out for scholarships, exchanges, or research jobs abroad</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-card border border-warm-yellow/20 rounded-3xl p-8" style={{ boxShadow: 'var(--shadow-soft)' }}>
            <h3 className="text-2xl font-bold text-warm-cream mb-6">Buying Motivation</h3>
            <ul className="space-y-4 text-lg text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-3 h-3 rounded-full bg-warm-yellow mt-2"></div>
                <div>
                  <span className="font-semibold text-warm-yellow block">Academic Success & Confidence</span>
                  <span>Excel in your field with precise scientific communication</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-3 h-3 rounded-full bg-warm-yellow mt-2"></div>
                <div>
                  <span className="font-semibold text-warm-yellow block">International Collaboration Readiness</span>
                  <span>Prepare for global research opportunities</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-3 h-3 rounded-full bg-warm-yellow mt-2"></div>
                <div>
                  <span className="font-semibold text-warm-yellow block">Competitive Edge Over Peers</span>
                  <span>Stand out in applications and academic presentations</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;