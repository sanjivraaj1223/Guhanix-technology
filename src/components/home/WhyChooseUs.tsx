import { Monitor, Layers, Grid, FolderGit2, Github, FileText, Building2, Cpu } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';

const features = [
  {
    icon: Monitor,
    title: 'Software-Oriented Training',
    description: 'All programs are built around software tools and practical applications, not just theory.',
    color: '#087BFF',
  },
  {
    icon: Layers,
    title: 'Practical Learning Approach',
    description: 'Every module includes coding exercises, software tasks or simulation-based activities.',
    color: '#22D3FF',
  },
  {
    icon: Grid,
    title: 'Department-Specific Programs',
    description: 'Tailored programs for CS, ECE, EEE, Mechanical, Civil, Chemical and more engineering domains.',
    color: '#FF6A00',
  },
  {
    icon: FolderGit2,
    title: 'Project Development Guidance',
    description: 'Structured support for building, documenting and presenting mini and major projects.',
    color: '#FFB000',
  },
  {
    icon: Github,
    title: 'Portfolio & GitHub Support',
    description: 'Guidance on building a professional GitHub portfolio that demonstrates your technical work.',
    color: '#087BFF',
  },
  {
    icon: FileText,
    title: 'Resume & Interview Preparation',
    description: 'ATS-friendly resume workshops, mock interviews and HR preparation aligned with your domain.',
    color: '#22D3FF',
  },
  {
    icon: Building2,
    title: 'College Training Partnerships',
    description: 'Dedicated programs for colleges, departments and student batches with customized delivery.',
    color: '#FF6A00',
  },
  {
    icon: Cpu,
    title: 'Emerging Technology Exposure',
    description: 'Programs covering AI, IoT, blockchain, cloud and other emerging technologies across disciplines.',
    color: '#FFB000',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-premium-black" aria-labelledby="why-heading">
      <div className="container-max">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="section-tag mx-auto w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-golden-orange" />
            Why Guhanix
          </div>
          <h2 id="why-heading" className="section-heading">
            Why Choose{' '}
            <span className="text-gradient-orange">Guhanix Technology?</span>
          </h2>
          <p className="section-subheading mx-auto">
            What makes our approach different from conventional training.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map(({ icon: Icon, title, description, color }, i) => (
            <AnimatedSection key={title} animation="fade-up" delay={i * 80}>
              <div
                className="group p-5 rounded-2xl glass-card card-hover h-full"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-400"
                  style={{ background: `${color}18`, boxShadow: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 0 20px ${color}40`)}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
                >
                  <Icon size={20} style={{ color }} />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{title}</h3>
                <p className="text-xs text-silver/55 leading-relaxed">{description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
