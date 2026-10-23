import { useState } from 'react';
import { MapPin, Briefcase, Clock, ChevronDown, ChevronUp, CheckCircle2, X, Upload } from 'lucide-react';
import { jobs } from '../data/jobs';
import { JobListing } from '../types';

interface AppForm {
  fullName: string; email: string; phone: string; position: string;
  skills: string; experience: string; linkedinUrl: string; githubUrl: string; consent: boolean;
}
const initForm: AppForm = { fullName: '', email: '', phone: '', position: '', skills: '', experience: '', linkedinUrl: '', githubUrl: '', consent: false };

export default function CareersPage() {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  const [applyJob, setApplyJob] = useState<JobListing | null>(null);
  const [form, setForm] = useState<AppForm>(initForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<AppForm>>({});

  const openJobs = jobs.filter(j => j.isOpen);

  const validate = () => {
    const e: Partial<AppForm> = {};
    if (!form.fullName.trim()) e.fullName = 'Required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
    if (!form.phone.trim()) e.phone = 'Required';
    if (!form.position.trim()) e.position = 'Required';
    if (!form.skills.trim()) e.skills = 'Required';
    if (!form.consent) e.consent = 'Required' as unknown as boolean;
    return e;
  };

  const handleApply = (job: JobListing) => {
    setApplyJob(job);
    setForm({ ...initForm, position: job.title });
    setSubmitted(false);
    setErrors({});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-midnight">
      {/* Hero */}
      <div className="relative pt-28 pb-16 overflow-hidden"
           style={{ background:'linear-gradient(135deg, rgba(3,6,13,0.98) 0%, rgba(5,11,24,0.99) 100%)' }}>
        <div className="absolute inset-0 circuit-bg opacity-15" />
        <div className="absolute top-0 left-0 right-0 glass-divider" />
        <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="section-tag">
            <span className="w-1.5 h-1.5 rounded-full bg-electric-blue" />
            Careers
          </div>
          <h1 className="section-heading mt-2 mb-4">
            Grow Your Career With<br />
            <span className="text-gradient-blue">Guhanix Technology</span>
          </h1>
          <p className="text-silver/60 max-w-xl text-base">
            Join a team focused on technology, learning, innovation and student career development.
          </p>
        </div>
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-1">Open Positions</h2>
          <p className="text-sm text-silver/50">{openJobs.length} position{openJobs.length !== 1 ? 's' : ''} currently open</p>
        </div>

        {openJobs.length === 0 ? (
          <div className="text-center py-20">
            <Briefcase size={40} className="text-silver/20 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">No open positions right now</h3>
            <p className="text-sm text-silver/50">Check back soon or send us your details via our contact form.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {openJobs.map(job => (
              <div key={job.id} className="rounded-2xl glass-card overflow-hidden">
                {/* Job header */}
                <button
                  className="w-full flex flex-col sm:flex-row sm:items-center justify-between p-6 text-left gap-4"
                  onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                  aria-expanded={expandedJob === job.id}
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-white mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 text-xs text-silver/55">
                      <span className="flex items-center gap-1.5"><Briefcase size={12} />{job.department}</span>
                      <span className="flex items-center gap-1.5"><MapPin size={12} />{job.location}</span>
                      <span className="flex items-center gap-1.5"><Clock size={12} />{job.employmentType}</span>
                      <span className="px-2 py-0.5 rounded-full bg-electric-blue/10 text-electric-blue border border-electric-blue/20">
                        {job.workMode}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <button
                      onClick={(e) => { e.stopPropagation(); handleApply(job); }}
                      className="px-4 py-2 text-sm font-semibold bg-electric-blue text-white rounded-lg hover:bg-blue-500 transition-all"
                    >
                      Apply Now
                    </button>
                    {expandedJob === job.id ? <ChevronUp size={16} className="text-silver/50" /> : <ChevronDown size={16} className="text-silver/50" />}
                  </div>
                </button>

                {/* Expanded details */}
                {expandedJob === job.id && (
                  <div className="px-6 pb-6 border-t border-white/6 pt-5 space-y-5">
                    <p className="text-sm text-silver/65 leading-relaxed">{job.overview}</p>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <h4 className="text-xs font-semibold text-silver/50 uppercase tracking-wider mb-3">Responsibilities</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map(r => (
                            <li key={r} className="flex items-start gap-2 text-sm text-silver/60">
                              <div className="w-1 h-1 rounded-full bg-electric-blue/60 mt-2 flex-shrink-0" />
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-silver/50 uppercase tracking-wider mb-3">Required Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.requiredSkills.map(s => (
                            <span key={s} className="px-2.5 py-1 text-xs rounded-lg bg-white/5 text-silver/60 border border-white/8">{s}</span>
                          ))}
                        </div>
                        {job.applicationDeadline && (
                          <p className="text-xs text-silver/40 mt-4">Application deadline: {job.applicationDeadline}</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Culture note */}
        <div className="mt-16 p-8 rounded-2xl bg-glass-blue"
             style={{ border:'1px solid rgba(8,123,255,0.18)' }}>
          <h3 className="text-lg font-semibold text-white mb-3">Working With Guhanix Technology</h3>
          <p className="text-sm text-silver/60 leading-relaxed max-w-2xl">
            Guhanix Technology is a growing edtech company focused on practical technology education.
            We value people who are passionate about learning, teaching, technology and student
            success. If you believe in making education practical and career-ready, we would love
            to hear from you.
          </p>
        </div>
      </div>

      {/* Application Modal */}
      {applyJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
             style={{ background:'rgba(0,0,0,0.75)', backdropFilter:'blur(8px)' }}
             role="dialog" aria-modal="true" aria-labelledby="apply-title">
          <div className="w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl"
               style={{
                 background:'rgba(5,11,24,0.93)', backdropFilter:'blur(32px)',
                 border:'1px solid rgba(8,123,255,0.18)',
                 boxShadow:'0 24px 80px rgba(0,0,0,0.6), 0 0 40px rgba(8,123,255,0.08)',
               }}>
            <div className="flex items-center justify-between p-6 border-b border-white/8">
              <div>
                <h3 id="apply-title" className="text-lg font-semibold text-white">Apply for</h3>
                <p className="text-sm text-electric-blue">{applyJob.title}</p>
              </div>
              <button
                onClick={() => { setApplyJob(null); setSubmitted(false); }}
                className="p-2 hover:bg-white/5 rounded-lg text-silver/60 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={28} className="text-green-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Application Submitted</h4>
                  <p className="text-sm text-silver/60 mb-3">
                    Thank you for your interest in joining Guhanix Technology. We will review your
                    application and get back to you.
                  </p>
                  <p className="text-xs text-silver/35">
                    Note: This form requires backend integration to deliver submissions.
                    Please also email us directly if needed.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {([
                    { key: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Your full name' },
                    { key: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
                    { key: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+91 XXXXX XXXXX' },
                    { key: 'position', label: 'Position Applying For', type: 'text', placeholder: 'Role title' },
                    { key: 'skills', label: 'Relevant Skills', type: 'text', placeholder: 'List your key skills' },
                    { key: 'experience', label: 'Relevant Experience', type: 'text', placeholder: 'Brief description of relevant experience' },
                    { key: 'linkedinUrl', label: 'LinkedIn Profile URL', type: 'url', placeholder: 'https://linkedin.com/in/...' },
                    { key: 'githubUrl', label: 'GitHub or Portfolio URL', type: 'url', placeholder: 'https://github.com/...' },
                  ] as const).map(field => (
                    <div key={field.key}>
                      <label htmlFor={field.key} className="label-dark">{field.label}</label>
                      <input
                        id={field.key}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={form[field.key as keyof AppForm] as string}
                        onChange={e => { setForm(f => ({ ...f, [field.key]: e.target.value })); setErrors(er => ({ ...er, [field.key]: undefined })); }}
                        className={`input-dark ${errors[field.key as keyof AppForm] ? 'border-red-500/60' : ''}`}
                      />
                      {errors[field.key as keyof AppForm] && (
                        <p className="text-xs text-red-400 mt-1">{errors[field.key as keyof AppForm] as string}</p>
                      )}
                    </div>
                  ))}

                  {/* Resume upload note */}
                  <div className="p-3 rounded-lg bg-white/3 border border-white/8 flex items-start gap-3">
                    <Upload size={14} className="text-silver/40 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-silver/50">
                      Resume upload requires backend integration. Please mention your portfolio or
                      LinkedIn URL above, and attach your resume when you hear from us.
                    </p>
                  </div>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.consent}
                      onChange={e => setForm(f => ({ ...f, consent: e.target.checked }))}
                      className="mt-1 accent-electric-blue"
                    />
                    <span className="text-xs text-silver/60">
                      I consent to Guhanix Technology storing and processing my application data
                      for recruitment purposes.
                    </span>
                  </label>
                  {errors.consent && <p className="text-xs text-red-400">Please confirm consent to proceed.</p>}

                  <button type="submit" className="w-full py-3 bg-electric-blue text-white font-semibold rounded-xl hover:bg-blue-500 transition-all duration-200">
                    Submit Application
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
