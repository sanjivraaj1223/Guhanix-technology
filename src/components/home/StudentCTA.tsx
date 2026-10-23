import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';

export default function StudentCTA() {
  return (
    <section className="section-padding relative overflow-hidden" aria-labelledby="cta-heading"
             style={{ background:'linear-gradient(135deg, rgba(3,6,13,1) 0%, rgba(5,11,24,1) 100%)' }}>

      {/* Glass dividers */}
      <div className="absolute top-0 left-0 right-0 glass-divider" />
      <div className="absolute bottom-0 left-0 right-0 glass-divider" />

      {/* Glow blobs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full blur-[100px] pointer-events-none"
           style={{ background:'radial-gradient(circle, rgba(8,123,255,0.10) 0%, transparent 70%)' }} />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 rounded-full blur-[100px] pointer-events-none"
           style={{ background:'radial-gradient(circle, rgba(255,106,0,0.07) 0%, transparent 70%)' }} />

      <div className="container-max relative z-10">
        <AnimatedSection animation="scale-in" className="text-center max-w-2xl mx-auto">
          <h2 id="cta-heading" className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Ready to Start Building{' '}
            <span className="text-gradient-blue">Your Future?</span>
          </h2>
          <p className="text-lg text-silver/65 mb-10">
            Find a program that matches your department, interests and career goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/programs"
                  className="group btn-primary text-base px-8 py-4">
              Explore Programs
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link to="/contact"
                  className="btn-secondary text-base px-8 py-4">
              <MessageSquare size={18} />
              Enquire Now
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
