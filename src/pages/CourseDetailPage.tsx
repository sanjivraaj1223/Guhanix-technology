import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft, CheckCircle2, Clock, MessageSquare, BookOpen,
  Wrench, FolderGit2, Code2, Target, Info, LucideIcon,
} from 'lucide-react';
import { courses } from '../data/courses';
import { departments } from '../data/departments';
import NotFoundPage from './NotFoundPage';
import { getDeptIcon } from '../utils/icons';

const levelColors: Record<string, string> = {
  Beginner: '#22D3FF',
  Intermediate: '#FF6A00',
  Advanced: '#FFB000',
  'All Levels': '#087BFF',
};

export default function CourseDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const course = courses.find(c => c.slug === slug);

  if (!course) return <NotFoundPage />;

  const dept = departments.find(d => d.slug === course.departmentSlug);
  const DeptIcon = getDeptIcon(dept?.icon ?? 'BookOpen');
  const related = courses
    .filter(c => c.departmentSlug === course.departmentSlug && c.id !== course.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-midnight">
      {/* Hero */}
      <div className="pt-28 pb-12 relative overflow-hidden"
           style={{ background:'linear-gradient(135deg, rgba(3,6,13,0.98) 0%, rgba(5,11,24,0.99) 100%)', borderBottom:'1px solid rgba(8,123,255,0.10)' }}>
        <div className="absolute inset-0 circuit-bg opacity-15" />
        <div className="absolute top-0 left-0 right-0 glass-divider" />
        <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <Link to={`/programs/department/${course.departmentSlug}`} className="inline-flex items-center gap-2 text-sm text-silver/60 hover:text-white transition-colors">
              <ArrowLeft size={14} /> {dept?.shortName || 'Programs'}
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              {/* Breadcrumb badges */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {dept && (
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border"
                    style={{ color: dept.color, borderColor: `${dept.color}30`, background: `${dept.color}10` }}>
                    <DeptIcon size={12} />
                    {dept.shortName}
                  </div>
                )}
                <span
                  className="px-3 py-1 rounded-full text-xs font-medium border"
                  style={{ color: levelColors[course.level], borderColor: `${levelColors[course.level]}30`, background: `${levelColors[course.level]}10` }}
                >
                  {course.level}
                </span>
                {course.featured && (
                  <span className="px-3 py-1 rounded-full text-xs font-medium border border-golden-orange/30 bg-golden-orange/10 text-golden-orange">
                    Featured
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                {course.title}
              </h1>
              <p className="text-silver/65 text-base leading-relaxed mb-6">
                {course.description}
              </p>

              {course.duration && (
                <div className="flex items-center gap-2 text-sm text-silver/50">
                  <Clock size={14} className="text-electric-blue" />
                  <span>{course.duration}</span>
                </div>
              )}
            </div>

            {/* Sidebar card */}
            <div className="lg:col-span-1">
              <div className="p-6 rounded-2xl glass-card sticky top-24">
                <h3 className="text-base font-semibold text-white mb-4">Get Started</h3>

                {course.duration && (
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/3 mb-3">
                    <Clock size={16} className="text-electric-blue flex-shrink-0" />
                    <div>
                      <div className="text-xs text-silver/50">Duration</div>
                      <div className="text-sm text-white">{course.duration.split('—').pop()?.trim()}</div>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/3 mb-4">
                  <Target size={16} className="text-electric-blue flex-shrink-0" />
                  <div>
                    <div className="text-xs text-silver/50">Training Format</div>
                    <div className="text-sm text-white">{course.trainingFormat}</div>
                  </div>
                </div>

                <Link
                  to={`/contact?course=${encodeURIComponent(course.title)}`}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-electric-blue text-white font-semibold rounded-xl hover:bg-blue-500 transition-all duration-200 mb-3"
                >
                  <MessageSquare size={16} />
                  Enquire Now
                </Link>
                <Link
                  to="/programs"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 text-white/70 font-medium rounded-xl border border-white/10 hover:border-electric-blue hover:text-electric-blue transition-all duration-200 text-sm"
                >
                  Browse More Programs
                </Link>

                <p className="text-xs text-silver/35 mt-4 text-center">
                  Duration and delivery format depend on the selected program configuration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">

            {/* Topics / Modules */}
            <Section icon={BookOpen} title="What You Will Learn">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.topics.map(t => (
                  <li key={t} className="flex items-start gap-3">
                    <CheckCircle2 size={15} className="text-electric-blue mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-silver/70">{t}</span>
                  </li>
                ))}
              </ul>
            </Section>

            {/* Tools */}
            <Section icon={Code2} title="Software and Tools">
              <div className="flex flex-wrap gap-2">
                {course.software.map(sw => (
                  <span key={sw} className="px-3 py-1.5 text-sm rounded-lg bg-white/5 text-silver/70 border border-white/10 hover:border-electric-blue/30 transition-colors">
                    {sw}
                  </span>
                ))}
              </div>
            </Section>

            {/* Practical Activities */}
            <Section icon={Wrench} title="Practical Activities">
              <ul className="space-y-3">
                {course.practicalActivities.map(a => (
                  <li key={a} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-circuit-orange mt-2 flex-shrink-0" />
                    <span className="text-sm text-silver/70">{a}</span>
                  </li>
                ))}
              </ul>
            </Section>

            {/* Project Outcomes */}
            <Section icon={FolderGit2} title="Project Outcomes">
              <ul className="space-y-3">
                {course.projectOutcomes.map(o => (
                  <li key={o} className="flex items-start gap-3">
                    <CheckCircle2 size={15} className="text-golden-orange mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-silver/70">{o}</span>
                  </li>
                ))}
              </ul>
            </Section>

            {/* Prerequisites */}
            {course.prerequisites && course.prerequisites.length > 0 && (
              <Section icon={Info} title="Prerequisites">
                <ul className="space-y-2">
                  {course.prerequisites.map(p => (
                    <li key={p} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-silver/40 mt-2 flex-shrink-0" />
                      <span className="text-sm text-silver/60">{p}</span>
                    </li>
                  ))}
                </ul>
              </Section>
            )}

            {/* Disclaimer */}
            <div className="p-4 rounded-xl bg-white/3 border border-white/8">
              <p className="text-xs text-silver/45 leading-relaxed">
                <strong className="text-silver/60">Note:</strong> Program content, duration, tools and delivery format may vary based on the selected configuration.
                Where software requires a license, students are responsible for obtaining appropriate access.
                Simulation-based programs do not replace physical laboratory practice or professional certification.
              </p>
            </div>
          </div>

          {/* Related courses (sidebar) */}
          {related.length > 0 && (
            <div className="lg:col-span-1">
              <h3 className="text-base font-semibold text-white mb-4">Related Programs</h3>
              <div className="space-y-3">
                {related.map(c => (
                  <Link
                    key={c.id}
                    to={`/programs/course/${c.slug}`}
                    className="block p-4 rounded-xl glass-card card-hover group"
                  >
                    <div className="text-sm font-medium text-white group-hover:text-electric-blue transition-colors mb-1">
                      {c.title}
                    </div>
                    <p className="text-xs text-silver/50 line-clamp-2">{c.shortDescription}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Section({ icon: Icon, title, children }: { icon: LucideIcon; title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="flex items-center gap-3 text-lg font-semibold text-white mb-5">
        <Icon size={20} className="text-electric-blue" />
        {title}
      </h2>
      {children}
    </div>
  );
}
