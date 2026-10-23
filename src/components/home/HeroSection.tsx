import { Link } from 'react-router-dom';
import { ArrowRight, Code2, FolderGit2, Target } from 'lucide-react';

const highlights = [
  { icon: Code2,       text: 'Software-Based Practical Learning' },
  { icon: FolderGit2, text: 'Project-Oriented Training' },
  { icon: Target,      text: 'Career & Placement Preparation' },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20" aria-label="Hero">

      {/* Deep dark base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#010608] via-[#050B18] to-[#071022]" />

      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(8,123,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(8,123,255,1) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, black 40%, transparent 100%)',
        }}
      />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] rounded-full blur-[130px] pointer-events-none animate-float"
           style={{ background: 'radial-gradient(circle, rgba(8,123,255,0.12) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 -right-32 w-[500px] h-[500px] rounded-full blur-[110px] pointer-events-none animate-float-delayed"
           style={{ background: 'radial-gradient(circle, rgba(255,106,0,0.08) 0%, transparent 70%)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[100px] pointer-events-none"
           style={{ background: 'radial-gradient(ellipse, rgba(34,211,255,0.05) 0%, transparent 70%)' }} />

      {/* Spinning rings */}
      <div className="absolute right-[4%] top-1/2 -translate-y-1/2 hidden xl:block pointer-events-none">
        {/* Outer ring */}
        <div className="w-[440px] h-[440px] rounded-full animate-spin-slow"
             style={{ border: '1px solid rgba(8,123,255,0.12)', boxShadow: '0 0 40px rgba(8,123,255,0.06) inset' }} />
        {/* Mid ring */}
        <div className="absolute inset-[44px] rounded-full animate-spin-reverse"
             style={{ border: '1px solid rgba(34,211,255,0.10)' }} />
        {/* Inner ring */}
        <div className="absolute inset-[88px] rounded-full"
             style={{ border: '1px solid rgba(8,123,255,0.15)' }} />
        {/* Innermost */}
        <div className="absolute inset-[132px] rounded-full animate-spin-slow"
             style={{ border: '1px solid rgba(255,106,0,0.10)' }} />

        {/* Center glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full animate-glow-pulse flex items-center justify-center"
               style={{ background: 'radial-gradient(circle, rgba(8,123,255,0.3) 0%, rgba(34,211,255,0.1) 60%, transparent 100%)', border: '1px solid rgba(8,123,255,0.4)' }}>
            <div className="w-5 h-5 rounded-full" style={{ background: 'rgba(8,123,255,0.7)', boxShadow: '0 0 16px rgba(8,123,255,0.8)' }} />
          </div>
        </div>

        {/* Orbit dots */}
        {[0,60,120,180,240,300].map((deg, i) => (
          <div key={deg} className="absolute w-2.5 h-2.5 rounded-full"
               style={{
                 background: i%2===0 ? '#087BFF' : '#22D3FF',
                 boxShadow: `0 0 10px ${i%2===0 ? '#087BFF' : '#22D3FF'}`,
                 top: `${50+45*Math.sin((deg*Math.PI)/180)}%`,
                 left:`${50+45*Math.cos((deg*Math.PI)/180)}%`,
                 transform:'translate(-50%,-50%)',
                 opacity: 0.85,
               }} />
        ))}
      </div>

      {/* Floating micro-particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div key={i} className="absolute rounded-full"
               style={{
                 width:  `${1 + Math.random()*2}px`,
                 height: `${1 + Math.random()*2}px`,
                 background: i%3===0 ? 'rgba(255,106,0,0.6)' : i%3===1 ? 'rgba(34,211,255,0.6)' : 'rgba(8,123,255,0.6)',
                 left: `${Math.random()*100}%`,
                 top:  `${Math.random()*100}%`,
                 animation: `float ${4+Math.random()*5}s ease-in-out ${Math.random()*4}s infinite`,
               }} />
        ))}
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8 cursor-default"
               style={{ opacity:0, animation:'slideUp 0.7s ease-out 0.1s forwards',
                 background:'rgba(8,123,255,0.08)', backdropFilter:'blur(12px)',
                 border:'1px solid rgba(8,123,255,0.22)',
                 boxShadow:'0 0 20px rgba(8,123,255,0.10), inset 0 1px 0 rgba(8,123,255,0.15)' }}>
            <span className="w-2 h-2 rounded-full bg-electric-blue animate-pulse-dot" />
            <span className="text-sm font-medium tracking-wide" style={{ color:'rgba(8,123,255,0.95)' }}>
              EdTech · Software Training · Career Development
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.06] tracking-tight mb-6">
            <span className="block text-white"
                  style={{ opacity:0, animation:'slideUp 0.7s ease-out 0.25s forwards' }}>
              Build Skills.
            </span>
            <span className="block text-gradient-blue"
                  style={{ opacity:0, animation:'slideUp 0.7s ease-out 0.4s forwards' }}>
              Develop Solutions.
            </span>
            <span className="block text-white"
                  style={{ opacity:0, animation:'slideUp 0.7s ease-out 0.55s forwards' }}>
              Shape Your Future.
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl mb-10 max-w-2xl leading-relaxed"
             style={{ opacity:0, animation:'slideUp 0.7s ease-out 0.7s forwards', color:'rgba(199,208,221,0.65)' }}>
            Industry-oriented software training, hands-on projects, emerging technology programs,
            and career preparation designed to help students move from learning to building.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-14"
               style={{ opacity:0, animation:'slideUp 0.7s ease-out 0.85s forwards' }}>
            <Link to="/programs"
                  className="group btn-primary text-base px-8 py-4">
              Explore Our Programs
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link to="/contact#college"
                  className="btn-secondary text-base px-8 py-4">
              Partner With Us
            </Link>
          </div>

          {/* Highlight pills */}
          <div className="flex flex-col sm:flex-row gap-3"
               style={{ opacity:0, animation:'slideUp 0.7s ease-out 1s forwards' }}>
            {highlights.map(({ icon: Icon, text }, i) => (
              <div key={text}
                   className="flex items-center gap-3 px-4 py-3 rounded-xl cursor-default group transition-all duration-300 hover:-translate-y-0.5"
                   style={{
                     transitionDelay:`${i*60}ms`,
                     background:'rgba(8,123,255,0.06)',
                     backdropFilter:'blur(16px)',
                     WebkitBackdropFilter:'blur(16px)',
                     border:'1px solid rgba(8,123,255,0.14)',
                     boxShadow:'inset 0 1px 0 rgba(8,123,255,0.10), 0 2px 12px rgba(0,0,0,0.2)',
                   }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                     style={{ background:'rgba(8,123,255,0.18)' }}>
                  <Icon size={16} className="text-electric-blue" />
                </div>
                <span className="text-sm font-medium" style={{ color:'rgba(199,208,221,0.80)' }}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
           style={{ background:'linear-gradient(to top, #050B18, transparent)' }} />
    </section>
  );
}
