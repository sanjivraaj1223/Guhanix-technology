import AnimatedCounter from '../ui/AnimatedCounter';
import AnimatedSection from '../ui/AnimatedSection';

const stats = [
  { value: 15,  suffix: '+', label: 'Training Departments',   color: '#087BFF' },
  { value: 180, suffix: '+', label: 'Programs Available',     color: '#22D3FF' },
  { value: 7,   suffix: '',  label: 'Engineering Domains',    color: '#FF6A00' },
  { value: 50,  suffix: '+', label: 'Tools & Technologies',   color: '#FFB000' },
];

export default function StatsSection() {
  return (
    <section className="py-14 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(3,6,13,0.95) 0%, rgba(5,11,24,0.98) 100%)' }}>
      {/* Glass divider lines */}
      <div className="absolute top-0 left-0 right-0 glass-divider" />
      <div className="absolute bottom-0 left-0 right-0 glass-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ value, suffix, label, color }, i) => (
            <AnimatedSection key={label} animation="scale-in" delay={i * 120}>
              <div className="text-center group cursor-default">
                <div
                  className="text-4xl sm:text-5xl font-extrabold mb-2 tabular-nums"
                  style={{
                    background: `linear-gradient(135deg, ${color}, ${color}99)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: `drop-shadow(0 0 12px ${color}50)`,
                  }}
                >
                  <AnimatedCounter value={value} suffix={suffix} duration={1800} />
                </div>
                <div className="text-sm text-silver/55 font-medium group-hover:text-silver/80 transition-colors duration-300">
                  {label}
                </div>
                {/* Underline accent */}
                <div
                  className="mx-auto mt-3 h-0.5 w-10 rounded-full opacity-40 group-hover:opacity-100 group-hover:w-16 transition-all duration-500"
                  style={{ background: color }}
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
