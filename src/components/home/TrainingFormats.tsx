import { Calendar, Clock, BookOpen, FolderGit2, Briefcase, Target, Building2 } from 'lucide-react';

const formats = [
  {
    icon: Calendar,
    title: '1–5 Day Software Workshops',
    description: 'Focused, intensive workshops on specific tools, technologies or skills. Ideal for quick exposure and hands-on practice.',
    color: '#087BFF',
  },
  {
    icon: Clock,
    title: '2–4 Week Foundation Courses',
    description: 'Short programs covering fundamentals and practical basics of a specific domain or technology.',
    color: '#22D3FF',
  },
  {
    icon: BookOpen,
    title: '1–3 Month Technical Training',
    description: 'In-depth technical programs combining theoretical understanding, software practice and project development.',
    color: '#FF6A00',
  },
  {
    icon: FolderGit2,
    title: 'Software-Based Mini & Major Projects',
    description: 'Guided project development sessions for academic mini and major projects across all technology domains.',
    color: '#FFB000',
  },
  {
    icon: Briefcase,
    title: 'Project-Oriented Internship Programs',
    description: 'Extended internship-style programs focusing on building and documenting a complete project portfolio.',
    color: '#087BFF',
  },
  {
    icon: Target,
    title: 'Placement Readiness Programs',
    description: 'End-to-end programs covering resume, LinkedIn, aptitude, mock interviews and job search strategy.',
    color: '#22D3FF',
  },
  {
    icon: Building2,
    title: 'College-Specific Department Training',
    description: 'Customized training programs delivered to colleges for specific departments, student batches and academic requirements.',
    color: '#FF6A00',
  },
];

export default function TrainingFormats() {
  return (
    <section className="section-padding bg-midnight" aria-labelledby="formats-heading">
      <div className="container-max">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="section-tag mx-auto w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-electric-blue" />
            Training Formats
          </div>
          <h2 id="formats-heading" className="section-heading">
            Flexible{' '}
            <span className="text-gradient-blue">Training Formats</span>
          </h2>
          <p className="section-subheading mx-auto">
            Programs available in multiple formats to match your learning goals and schedule.
            Actual duration, modules, tools and delivery depend on the selected program.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {formats.map(({ icon: Icon, title, description, color }) => (
            <div
              key={title}
              className="p-5 rounded-2xl glass-card card-hover"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${color}18` }}
              >
                <Icon size={20} style={{ color }} />
              </div>
              <h3 className="text-sm font-semibold text-white mb-2">{title}</h3>
              <p className="text-xs text-silver/55 leading-relaxed">{description}</p>
            </div>
          ))}

          {/* Note card */}
          <div className="p-5 rounded-2xl bg-glass-blue border border-electric-blue/15 flex flex-col justify-center">
            <p className="text-xs text-silver/65 leading-relaxed italic">
              "Actual duration, modules, tools and delivery format are configured per program.
              Contact us to discuss your specific training requirements."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
