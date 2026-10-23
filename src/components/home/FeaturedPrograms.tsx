import { Link } from 'react-router-dom';
import { ArrowRight, Clock, MessageSquare } from 'lucide-react';
import { courses } from '../../data/courses';

const featuredSlugs = [
  'python-full-stack', 'java-full-stack', 'mern-stack', 'mean-stack',
  'android-app-development', 'machine-learning-python', 'data-analytics-python',
  'ui-ux-design-figma', 'cybersecurity-fundamentals', 'power-bi',
  'final-year-project', 'placement-readiness',
];

export default function FeaturedPrograms() {
  const featured = featuredSlugs
    .map(slug => courses.find(c => c.slug === slug))
    .filter(Boolean) as typeof courses;

  return (
    <section className="section-padding bg-midnight" aria-labelledby="featured-heading">
      <div className="container-max">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="section-tag mx-auto w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-circuit-orange" />
            Featured Programs
          </div>
          <h2 id="featured-heading" className="section-heading">
            <span className="text-gradient-orange">Popular</span> Training Programs
          </h2>
          <p className="section-subheading mx-auto">
            A selection of high-demand programs across software development, AI, data analytics,
            design, and career preparation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((course, idx) => (
            <CourseCard key={course.id} course={course} index={idx} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/15 text-white font-semibold rounded-xl hover:border-electric-blue hover:bg-electric-blue/5 transition-all duration-200"
          >
            View All Programs <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function CourseCard({ course, index = 0 }: { course: typeof courses[0]; index?: number }) {
  return (
    <div
      className="flex flex-col p-5 rounded-2xl glass-card card-hover"
      style={{ opacity: 0, animation: `slideUp 0.6s ease-out ${0.06 * index}s forwards` }}
    >
      {/* Header */}
      <div className="mb-3">
        <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-full bg-electric-blue/10 text-electric-blue border border-electric-blue/20 mb-2">
          {course.department}
        </span>
        <h3 className="text-base font-semibold text-white group-hover:text-electric-blue transition-colors duration-200 leading-snug">
          {course.title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-sm text-silver/60 leading-relaxed mb-4 line-clamp-2 flex-1">
        {course.shortDescription}
      </p>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {course.software.slice(0, 4).map(sw => (
          <span
            key={sw}
            className="px-2 py-0.5 text-xs rounded-md bg-white/5 text-silver/60 border border-white/8"
          >
            {sw}
          </span>
        ))}
        {course.software.length > 4 && (
          <span className="px-2 py-0.5 text-xs rounded-md bg-white/5 text-silver/40 border border-white/8">
            +{course.software.length - 4}
          </span>
        )}
      </div>

      {/* Outcomes */}
      <div className="mb-4 space-y-1">
        {course.projectOutcomes.slice(0, 2).map(outcome => (
          <div key={outcome} className="flex items-start gap-2">
            <div className="w-1 h-1 rounded-full bg-circuit-orange/70 mt-1.5 flex-shrink-0" />
            <span className="text-xs text-silver/50 line-clamp-1">{outcome}</span>
          </div>
        ))}
      </div>

      {/* Duration */}
      {course.duration && (
        <div className="flex items-center gap-2 text-xs text-silver/40 mb-4">
          <Clock size={12} />
          {course.duration}
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-2 mt-auto">
        <Link
          to={`/programs/course/${course.slug}`}
          className="flex-1 text-center px-3 py-2 text-xs font-semibold text-white border border-white/15 rounded-lg hover:border-electric-blue hover:text-electric-blue transition-all duration-200"
        >
          View Course
        </Link>
        <Link
          to={`/contact?course=${encodeURIComponent(course.title)}`}
          className="flex-1 text-center flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-electric-blue rounded-lg hover:bg-blue-500 transition-all duration-200"
        >
          <MessageSquare size={12} />
          Enquire Now
        </Link>
      </div>
    </div>
  );
}
