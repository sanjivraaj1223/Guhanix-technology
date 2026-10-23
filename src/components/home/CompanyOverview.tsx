import { BookOpen, Wrench, TrendingUp } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';

const pillars = [
  {
    icon: BookOpen,
    title: 'Learn',
    color: '#087BFF',
    description:
      'Build solid technical foundations through structured, industry-relevant training across software, AI, data and engineering domains.',
  },
  {
    icon: Wrench,
    title: 'Build',
    color: '#FF6A00',
    description:
      'Apply knowledge through practical coding exercises, software tools and guided mini and major project development.',
  },
  {
    icon: TrendingUp,
    title: 'Prepare',
    color: '#FFB000',
    description:
      'Strengthen resumes, GitHub portfolios, communication skills and interview readiness to move confidently into the workforce.',
  },
];

export default function CompanyOverview() {
  return (
    <section className="section-padding bg-midnight" aria-labelledby="overview-heading">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <AnimatedSection animation="slide-left">
            <div>
            <div className="section-tag">
              <span className="w-1.5 h-1.5 rounded-full bg-electric-blue" />
              Who We Are
            </div>
            <h2 id="overview-heading" className="section-heading">
              Technology Education Built Around{' '}
              <span className="text-gradient-blue">Real-World Skills</span>
            </h2>
            <div className="mt-6 space-y-4 text-silver/65 text-base leading-relaxed">
              <p>
                Guhanix Technology is an education and technology company that bridges the gap
                between academic learning and industry requirements. We offer software-focused
                training, technical project guidance, and career readiness support for students
                across engineering and technology disciplines.
              </p>
              <p>
                Our programs are designed to be practical and department-specific — covering
                Computer Science, AI & ML, Data Analytics, ECE, EEE, Mechanical, Civil, Chemical,
                Cybersecurity and more. We work directly with students and institutions to deliver
                training that builds real, demonstrable skills.
              </p>
              <p>
                Whether you are pursuing your first project, preparing for placement, or exploring
                an emerging technology, Guhanix Technology provides a structured path from
                learning to building.
              </p>
            </div>
            </div>
          </AnimatedSection>

          {/* Cards */}
          <AnimatedSection animation="slide-right">
            <div className="space-y-4">
            {pillars.map(({ icon: Icon, title, color, description }) => (
              <div
                key={title}
                className="flex gap-5 p-6 rounded-2xl glass-card card-hover group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${color}18` }}
                >
                  <Icon size={22} style={{ color }} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
                  <p className="text-sm text-silver/60 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
