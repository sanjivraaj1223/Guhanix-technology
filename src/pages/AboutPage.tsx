import { Link } from 'react-router-dom';
import {
  Eye, Target, Layers, Code2, FolderGit2, Users, Building2,
  ArrowRight, CheckCircle2, LucideIcon, Cpu, GraduationCap, Grid,
} from 'lucide-react';
import { departments } from '../data/departments';
import { getDeptIcon } from '../utils/icons';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-midnight">
      {/* Hero */}
      <div className="relative pt-28 pb-20 overflow-hidden"
           style={{ background:'linear-gradient(135deg, rgba(3,6,13,0.98) 0%, rgba(5,11,24,0.99) 100%)' }}>
        <div className="absolute inset-0 circuit-bg opacity-15" />
        <div className="absolute top-0 left-0 right-0 glass-divider" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric-blue/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="section-tag">
            <span className="w-1.5 h-1.5 rounded-full bg-electric-blue" />
            About Guhanix Technology
          </div>
          <h1 className="section-heading mt-2 mb-5">
            Building Technology Skills<br />
            <span className="text-gradient-blue">for a Digital Future</span>
          </h1>
          <p className="text-silver/65 text-lg max-w-2xl leading-relaxed">
            Guhanix Technology is an education and technology company committed to practical,
            software-focused training that bridges the gap between academic education and
            industry requirements.
          </p>
        </div>
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* Who We Are */}
        <section>
          <SectionHeading icon={Users} title="Who We Are" color="#087BFF" />
          <div className="grid lg:grid-cols-2 gap-10 mt-8 items-start">
            <div className="space-y-4 text-silver/65 text-sm leading-relaxed">
              <p>
                Guhanix Technology is an education and technology company focused on software
                training, technical project development, emerging technology programs, and
                career preparation for students and institutions.
              </p>
              <p>
                We deliver structured training programs that are practical, domain-specific, and
                aligned with real-world software tools and industry workflows. Our programs are
                designed for students across all branches of engineering and technology, as well
                as those in business, design and related fields.
              </p>
              <p>
                We work directly with students, student groups and college departments to provide
                training that develops demonstrable technical skills — not just theoretical
                understanding.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: '15+', label: 'Training Departments' },
                { n: '100+', label: 'Programs Available' },
                { n: 'Practical', label: 'Learning Approach' },
                { n: 'Industry', label: 'Relevant Curriculum' },
              ].map(item => (
                <div key={item.label} className="p-5 rounded-2xl glass-card text-center">
                  <div className="text-2xl font-bold text-gradient-blue">{item.n}</div>
                  <div className="text-xs text-silver/55 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision */}
        <section>
          <SectionHeading icon={Eye} title="Our Vision" color="#22D3FF" />
          <div className="mt-6 p-8 rounded-2xl bg-glass-blue"
               style={{ border:'1px solid rgba(8,123,255,0.18)' }}>
            <p className="text-silver/70 text-base leading-relaxed italic">
              "To make high-quality, software-focused technical education accessible to every
              student — regardless of branch, background or prior experience — and to empower
              the next generation of engineers, developers and technology professionals."
            </p>
          </div>
        </section>

        {/* Mission */}
        <section>
          <SectionHeading icon={Target} title="Our Mission" color="#FF6A00" />
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Deliver structured, software-based technical training across engineering and technology disciplines.',
              'Support students in building hands-on skills through guided project development.',
              'Provide practical career readiness programs including resume, LinkedIn, portfolio and interview preparation.',
              'Partner with colleges and institutions to deliver department-specific training at scale.',
              'Keep programs current with emerging technologies including AI, cloud, IoT and data science.',
              'Bridge the gap between academic curricula and industry expectations.',
            ].map((m, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl glass-card">
                <CheckCircle2 size={16} className="text-circuit-orange mt-0.5 flex-shrink-0" />
                <p className="text-sm text-silver/65">{m}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What We Do */}
        <section>
          <SectionHeading icon={Layers} title="What We Do" color="#087BFF" />
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Code2, title: 'Software Training', desc: 'Hands-on training in programming languages, frameworks, tools and platforms across all technology domains.' },
              { icon: FolderGit2, title: 'Project Development', desc: 'Guided development of mini and major academic projects with documentation, testing and presentation support.' },
              { icon: Building2, title: 'College Programs', desc: 'Customized training programs delivered to college departments, student batches and academic institutions.' },
              { icon: Target, title: 'Career Readiness', desc: 'ATS resume building, LinkedIn optimization, GitHub portfolio development, aptitude and interview preparation.' },
              { icon: Cpu, title: 'Emerging Technology', desc: 'Programs covering AI, machine learning, IoT, cloud, blockchain and other emerging technology areas.' },
              { icon: GraduationCap, title: 'Academic Support', desc: 'Final-year project guidance, viva preparation, research documentation and academic project development.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-5 rounded-2xl glass-card">
                <div className="w-10 h-10 rounded-xl bg-electric-blue/12 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-electric-blue" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{title}</h3>
                <p className="text-xs text-silver/55 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Training Approach */}
        <section>
          <SectionHeading icon={Layers} title="Our Training Approach" color="#FFB000" />
          <div className="mt-6 space-y-4">
            {[
              { step: '01', title: 'Software-First', desc: 'Every program is built around specific software tools and applications, ensuring students gain practical, usable skills.' },
              { step: '02', title: 'Project-Oriented', desc: 'Training progresses from concepts to exercises to real projects, giving students tangible outputs to demonstrate.' },
              { step: '03', title: 'Domain-Specific', desc: 'Programs are designed for specific departments — CS, ECE, EEE, Mechanical, Civil, Chemical and more — with relevant tools and context.' },
              { step: '04', title: 'Career-Aligned', desc: 'Technical training is complemented by career readiness components including portfolio building and interview preparation.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex items-start gap-5 p-5 rounded-2xl glass-card">
                <div className="w-10 h-10 rounded-xl bg-golden-orange/12 flex items-center justify-center flex-shrink-0 font-bold text-golden-orange text-sm">
                  {step}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1">{title}</h3>
                  <p className="text-sm text-silver/55">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Domains */}
        <section>
          <SectionHeading icon={Grid} title="Our Technology Domains" color="#22D3FF" />
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {departments.map(dept => {
              const Icon = getDeptIcon(dept.icon);
              return (
                <Link
                  key={dept.id}
                  to={`/programs/department/${dept.slug}`}
                  className="flex flex-col items-center gap-3 p-4 rounded-xl glass-card card-hover group text-center"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${dept.color}15` }}
                  >
                    <Icon size={20} style={{ color: dept.color }} />
                  </div>
                  <span className="text-xs font-medium text-silver/70 group-hover:text-white transition-colors leading-tight">
                    {dept.shortName}
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Commitment */}
        <section className="p-8 rounded-2xl bg-glass-blue"
                 style={{ border:'1px solid rgba(8,123,255,0.18)' }}>
          <SectionHeading icon={CheckCircle2} title="Our Commitment to Practical Learning" color="#087BFF" />
          <p className="mt-5 text-silver/65 text-sm leading-relaxed max-w-3xl">
            Guhanix Technology is committed to delivering training that produces real, demonstrable
            skills. We do not make claims about placement rates, salaries, certifications or
            partnerships that cannot be verified. Every program is designed to develop honest,
            practical competence — the kind that shows up in your code, your projects, and your
            ability to solve real problems.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/programs" className="btn-primary">
              Browse Programs <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

function SectionHeading({ icon: Icon, title, color }: { icon: LucideIcon; title: string; color: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${color}18` }}>
        <Icon size={18} style={{ color }} />
      </div>
      <h2 className="text-2xl font-bold text-white">{title}</h2>
    </div>
  );
}
