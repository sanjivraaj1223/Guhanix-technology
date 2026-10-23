import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MessageSquare, Clock } from 'lucide-react';
import { departments } from '../data/departments';
import { courses } from '../data/courses';
import NotFoundPage from './NotFoundPage';
import { getDeptIcon } from '../utils/icons';

export default function DepartmentPage() {
  const { slug } = useParams<{ slug: string }>();
  const dept = departments.find(d => d.slug === slug);

  if (!dept) return <NotFoundPage />;

  const Icon = getDeptIcon(dept.icon);
  const deptCourses = courses.filter(c => c.departmentSlug === dept.slug);

  return (
    <div className="min-h-screen bg-midnight">
      {/* Header */}
      <div className="pt-28 pb-12 relative overflow-hidden"
           style={{ background:'linear-gradient(135deg, rgba(3,6,13,0.98) 0%, rgba(5,11,24,0.99) 100%)', borderBottom:'1px solid rgba(8,123,255,0.10)' }}>
        <div className="absolute inset-0 circuit-bg opacity-15" />
        <div className="absolute top-0 left-0 right-0 glass-divider" />
        <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/programs" className="inline-flex items-center gap-2 text-sm text-silver/60 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={14} /> All Programs
          </Link>
          <div className="flex items-start gap-5">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: `${dept.color}18` }}
            >
              <Icon size={28} color={dept.color} />
            </div>
            <div>
              <div className="section-tag mb-3" style={{ color: dept.color, borderColor: `${dept.color}30`, background: `${dept.color}10` }}>
                Training Department
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">{dept.name}</h1>
              <p className="text-silver/60 max-w-2xl">{dept.description}</p>
              <p className="text-sm text-silver/40 mt-2">{deptCourses.length} programs available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Courses */}
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {deptCourses.map(course => (
            <div key={course.id} className="flex flex-col p-5 rounded-2xl glass-card card-hover group">
              <div className="mb-3">
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{ color: dept.color, background: `${dept.color}15` }}
                  >
                    {course.level}
                  </span>
                  {course.featured && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-golden-orange/10 text-golden-orange border border-golden-orange/20">
                      Featured
                    </span>
                  )}
                </div>
                <h2 className="text-base font-semibold text-white group-hover:text-electric-blue transition-colors leading-snug">
                  {course.title}
                </h2>
              </div>
              <p className="text-sm text-silver/60 leading-relaxed mb-4 line-clamp-2 flex-1">
                {course.shortDescription}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {course.software.slice(0, 3).map(sw => (
                  <span key={sw} className="px-2 py-0.5 text-xs rounded-md bg-white/5 text-silver/50 border border-white/8">{sw}</span>
                ))}
              </div>
              {course.duration && (
                <div className="flex items-center gap-1.5 text-xs text-silver/40 mb-4">
                  <Clock size={11} />{course.duration.split('—').pop()?.trim()}
                </div>
              )}
              <div className="flex gap-2 mt-auto">
                <Link
                  to={`/programs/course/${course.slug}`}
                  className="flex-1 text-center text-sm font-semibold py-2.5 rounded-xl border border-white/12 text-white/70 hover:border-electric-blue hover:text-electric-blue transition-all duration-200"
                >
                  View Course
                </Link>
                <Link
                  to={`/contact?course=${encodeURIComponent(course.title)}`}
                  className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold bg-electric-blue text-white rounded-xl hover:bg-blue-500 transition-all duration-200"
                >
                  <MessageSquare size={14} />Enquire
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
