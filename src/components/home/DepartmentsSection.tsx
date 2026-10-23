import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { departments } from '../../data/departments';
import { courses } from '../../data/courses';
import { getDeptIcon } from '../../utils/icons';

export default function DepartmentsSection() {
  return (
    <section className="section-padding bg-premium-black" aria-labelledby="departments-heading">
      <div className="container-max">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="section-tag mx-auto w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-electric-blue" />
            Training Departments
          </div>
          <h2 id="departments-heading" className="section-heading">
            Explore Our{' '}
            <span className="text-gradient-blue">Training Departments</span>
          </h2>
          <p className="section-subheading mx-auto">
            Specialized programs across 15 departments — from software development and AI to
            engineering, business and career development.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {departments.map((dept, idx) => {
            const Icon = getDeptIcon(dept.icon);
            const deptCourses = courses.filter(c => c.departmentSlug === dept.slug).slice(0, 3);
            return (
              <Link
                key={dept.id}
                to={`/programs/department/${dept.slug}`}
                className="group p-5 rounded-2xl glass-card hover:border-electric-blue/40 card-hover"
                style={{
                  opacity: 0,
                  animation: `slideUp 0.6s ease-out ${0.05 * idx}s forwards`,
                }}
              >
                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${dept.color}18` }}
                  >
                    <Icon size={20} color={dept.color} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white leading-snug group-hover:text-electric-blue transition-colors duration-200">
                      {dept.name}
                    </h3>
                    <span className="text-xs text-silver/40">{dept.courses.length} programs</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-silver/55 leading-relaxed mb-4 line-clamp-2">
                  {dept.description}
                </p>

                {/* Sample courses */}
                <div className="space-y-1.5 mb-4">
                  {deptCourses.map(c => (
                    <div key={c.id} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-electric-blue/50" />
                      <span className="text-xs text-silver/50 line-clamp-1">{c.title}</span>
                    </div>
                  ))}
                  {dept.courses.length > 3 && (
                    <div className="text-xs text-silver/35">+{dept.courses.length - 3} more programs</div>
                  )}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-1.5 text-xs font-medium text-electric-blue group-hover:text-cyan transition-colors duration-200">
                  View Programs <ArrowRight size={12} />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-electric-blue text-white font-semibold rounded-xl hover:bg-blue-500 transition-all duration-200 shadow-lg shadow-electric-blue/20"
          >
            Browse Full Course Catalogue <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
