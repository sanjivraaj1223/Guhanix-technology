import { BookOpen, Monitor, FolderGit2, Trophy, Target } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';

const steps = [
  {
    number: '01',
    icon: BookOpen,
    title: 'Learn the Fundamentals',
    description:
      'Start with structured, concept-clear training guided by industry-relevant modules and learning objectives.',
    color: '#087BFF',
  },
  {
    number: '02',
    icon: Monitor,
    title: 'Practice With Software Tools',
    description:
      'Apply concepts using professional software tools, IDEs, and platforms relevant to your domain.',
    color: '#22D3FF',
  },
  {
    number: '03',
    icon: FolderGit2,
    title: 'Develop Mini and Major Projects',
    description:
      'Build real projects — from focused mini exercises to comprehensive major projects that demonstrate domain competence.',
    color: '#FF6A00',
  },
  {
    number: '04',
    icon: Trophy,
    title: 'Build a Technical Portfolio',
    description:
      'Document your work, publish code to GitHub, and create a portfolio that showcases your practical skills to recruiters.',
    color: '#FFB000',
  },
  {
    number: '05',
    icon: Target,
    title: 'Prepare for Interviews and Careers',
    description:
      'Refine your resume, optimize your LinkedIn, practice aptitude and interview scenarios, and develop your job search strategy.',
    color: '#087BFF',
  },
];

export default function LearningJourney() {
  return (
    <section className="section-padding bg-premium-black" aria-labelledby="journey-heading">
      <div className="container-max">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-tag mx-auto w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-electric-blue" />
            How It Works
          </div>
          <h2 id="journey-heading" className="section-heading">
            How Our{' '}
            <span className="text-gradient-blue">Programs Work</span>
          </h2>
          <p className="section-subheading mx-auto">
            A clear, structured learning journey from foundations to career readiness.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-electric-blue/20 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative flex flex-col items-center text-center group">
                  {/* Mobile connector */}
                  {idx < steps.length - 1 && (
                    <div className="lg:hidden absolute left-1/2 -translate-x-1/2 top-20 w-0.5 h-8 bg-gradient-to-b from-electric-blue/40 to-transparent" />
                  )}

                  {/* Icon bubble */}
                  <AnimatedSection animation="scale-in" delay={idx * 150}>
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 relative z-10 border border-white/8 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(8,123,255,0.3)] transition-all duration-500"
                      style={{ background: `${step.color}15` }}
                    >
                      <Icon size={28} style={{ color: step.color }} />
                      <span
                        className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center shadow-md"
                        style={{ background: step.color, color: '#050B18' }}
                      >
                        {idx + 1}
                      </span>
                    </div>
                  </AnimatedSection>

                  {/* Content */}
                  <AnimatedSection animation="fade-up" delay={idx * 150 + 100}>
                    <h3 className="text-sm font-semibold text-white mb-2 leading-snug">{step.title}</h3>
                    <p className="text-xs text-silver/55 leading-relaxed">{step.description}</p>
                  </AnimatedSection>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
