import { useState } from 'react';
import { Building2, Users, BookOpen, Target, ArrowRight, CheckCircle2, X } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';

const benefits = [
  'Department-specific technical workshops',
  'Student batch training programs',
  'Academic project development support',
  'Placement and career readiness sessions',
  'Faculty and student coordination',
  'Customized curriculum alignment',
];

interface CollegeFormData {
  collegeName: string; contactPerson: string; email: string; phone: string;
  department: string; students: string; program: string; period: string; consent: boolean;
}
const initialForm: CollegeFormData = {
  collegeName:'', contactPerson:'', email:'', phone:'',
  department:'', students:'', program:'', period:'', consent: false,
};

export default function CollegePartnership() {
  const [modalOpen, setModalOpen]   = useState(false);
  const [form, setForm]             = useState<CollegeFormData>(initialForm);
  const [submitted, setSubmitted]   = useState(false);
  const [errors, setErrors]         = useState<Partial<CollegeFormData>>({});

  const validate = () => {
    const e: Partial<CollegeFormData> = {};
    if (!form.collegeName.trim())   e.collegeName   = 'Required';
    if (!form.contactPerson.trim()) e.contactPerson = 'Required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
    if (!form.phone.trim())   e.phone   = 'Required';
    if (!form.department.trim()) e.department = 'Required';
    if (!form.program.trim()) e.program = 'Required';
    if (!form.consent)        e.consent = 'Required' as unknown as boolean;
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(true);
  };

  return (
    <section className="section-padding relative overflow-hidden" id="college"
             style={{ background:'linear-gradient(135deg, rgba(5,11,24,1) 0%, rgba(3,6,13,1) 100%)' }}
             aria-labelledby="college-heading">

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px]"
             style={{ background:'radial-gradient(circle, rgba(8,123,255,0.07) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px]"
             style={{ background:'radial-gradient(circle, rgba(34,211,255,0.05) 0%, transparent 70%)' }} />
      </div>

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left text */}
          <AnimatedSection animation="slide-left">
            <div className="section-tag">
              <Building2 size={14} />
              College Partnerships
            </div>
            <h2 id="college-heading" className="section-heading">
              Empowering Colleges Through{' '}
              <span className="text-gradient-blue">Technology Training</span>
            </h2>
            <p className="mt-5 text-silver/65 leading-relaxed">
              Guhanix Technology partners with colleges and institutions to deliver structured
              software training, technical workshops, academic project guidance, internship
              programs and placement preparation for student batches.
            </p>
            <p className="mt-4 text-silver/65 leading-relaxed">
              Programs are designed to complement academic curricula and can be tailored to
              specific departments, year groups and institutional requirements.
            </p>

            <ul className="mt-8 space-y-3" aria-label="Partnership benefits">
              {benefits.map(b => (
                <li key={b} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-electric-blue flex-shrink-0" />
                  <span className="text-sm text-silver/70">{b}</span>
                </li>
              ))}
            </ul>

            <button onClick={() => setModalOpen(true)}
                    className="mt-8 btn-primary">
              Discuss Institutional Training <ArrowRight size={16} />
            </button>
          </AnimatedSection>

          {/* Right stats grid */}
          <AnimatedSection animation="slide-right">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Building2, label: 'College Training Programs',  sub: 'Department-specific delivery',  color:'#087BFF' },
                { icon: Users,     label: 'Student Batch Training',      sub: 'Group and individual formats', color:'#22D3FF' },
                { icon: BookOpen,  label: 'Academic Project Support',    sub: 'Mini and major projects',       color:'#FF6A00' },
                { icon: Target,    label: 'Placement Preparation',       sub: 'Resume, interviews, career',    color:'#FFB000' },
              ].map(({ icon: Icon, label, sub, color }) => (
                <div key={label} className="p-5 rounded-2xl glass-card group cursor-default">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
                       style={{ background:`${color}18` }}>
                    <Icon size={20} style={{ color }} />
                  </div>
                  <div className="text-sm font-semibold text-white leading-snug">{label}</div>
                  <div className="text-xs text-silver/50 mt-1">{sub}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* ── Modal ── */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
             style={{ background:'rgba(0,0,0,0.75)', backdropFilter:'blur(6px)' }}
             role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <div className="w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl"
               style={{
                 background:'rgba(5,11,24,0.92)', backdropFilter:'blur(32px)',
                 border:'1px solid rgba(8,123,255,0.18)',
                 boxShadow:'0 24px 80px rgba(0,0,0,0.6), 0 0 40px rgba(8,123,255,0.08)',
               }}>
            <div className="flex items-center justify-between p-6"
                 style={{ borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
              <h3 id="modal-title" className="text-lg font-semibold text-white">
                College / Institutional Enquiry
              </h3>
              <button onClick={() => { setModalOpen(false); setSubmitted(false); setForm(initialForm); }}
                      className="p-2 rounded-lg text-silver/60 hover:text-white hover:bg-white/5 transition-colors"
                      aria-label="Close">
                <X size={20} />
              </button>
            </div>

            <div className="p-6">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                       style={{ background:'rgba(34,197,94,0.12)', border:'1px solid rgba(34,197,94,0.25)' }}>
                    <CheckCircle2 size={28} className="text-green-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Enquiry Received</h4>
                  <p className="text-sm text-silver/60">
                    Thank you for your interest. A member of our team will reach out to discuss
                    your training requirements shortly.
                  </p>
                  <p className="text-xs text-silver/35 mt-3">
                    Note: This form requires backend integration to deliver submissions.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {([
                    { key:'collegeName',   label:'College / Institution Name', type:'text',   ph:'Enter institution name' },
                    { key:'contactPerson', label:'Contact Person',             type:'text',   ph:'Name and designation' },
                    { key:'email',         label:'Official Email',             type:'email',  ph:'official@institution.edu' },
                    { key:'phone',         label:'Phone Number',               type:'tel',    ph:'+91 XXXXX XXXXX' },
                    { key:'department',    label:'Department',                 type:'text',   ph:'e.g., CS, ECE, Mechanical' },
                    { key:'students',      label:'Approx. Number of Students', type:'number', ph:'e.g., 60' },
                    { key:'program',       label:'Required Training Program',  type:'text',   ph:'Describe the program or topic' },
                    { key:'period',        label:'Preferred Training Period',  type:'text',   ph:'e.g., December 2025 or flexible' },
                  ] as const).map(f => (
                    <div key={f.key}>
                      <label htmlFor={f.key} className="label-dark">{f.label}</label>
                      <input id={f.key} type={f.type} placeholder={f.ph}
                             value={form[f.key as keyof CollegeFormData] as string}
                             onChange={e => { setForm(p=>({...p,[f.key]:e.target.value})); setErrors(p=>({...p,[f.key]:undefined})); }}
                             className={`input-dark ${errors[f.key as keyof CollegeFormData] ? 'border-red-500/60' : ''}`} />
                      {errors[f.key as keyof CollegeFormData] && (
                        <p className="text-xs text-red-400 mt-1">{errors[f.key as keyof CollegeFormData] as string}</p>
                      )}
                    </div>
                  ))}
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" checked={form.consent}
                           onChange={e => setForm(p=>({...p,consent:e.target.checked}))}
                           className="mt-1 accent-electric-blue" />
                    <span className="text-xs text-silver/60">
                      I consent to Guhanix Technology storing and processing this information to respond to my enquiry.
                    </span>
                  </label>
                  {errors.consent && <p className="text-xs text-red-400">Please confirm consent to proceed.</p>}
                  <button type="submit" className="w-full py-3 btn-primary justify-center">
                    Submit Enquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
