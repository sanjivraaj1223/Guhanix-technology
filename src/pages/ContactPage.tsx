import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, MessageSquare, Building2, CheckCircle2, AlertCircle, LucideIcon } from 'lucide-react';
import { courses } from '../data/courses';

// Update these with actual company contact details when available
const CONTACT_INFO = {
  email: 'contact@guhanix.com', // Replace with actual email
  phone: '', // Add phone when available
};

type Tab = 'student' | 'college';

interface StudentForm {
  name: string; email: string; phone: string; college: string;
  degree: string; program: string; duration: string; message: string; consent: boolean;
}
interface CollegeForm {
  institution: string; contact: string; email: string; phone: string;
  department: string; batchSize: string; program: string; dates: string;
  requirements: string; consent: boolean;
}

const initStudent: StudentForm = { name: '', email: '', phone: '', college: '', degree: '', program: '', duration: '', message: '', consent: false };
const initCollege: CollegeForm = { institution: '', contact: '', email: '', phone: '', department: '', batchSize: '', program: '', dates: '', requirements: '', consent: false };

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const [tab, setTab] = useState<Tab>('student');
  const [studentForm, setStudentForm] = useState<StudentForm>(initStudent);
  const [collegeForm, setCollegeForm] = useState<CollegeForm>(initCollege);
  const [studentErrors, setStudentErrors] = useState<Partial<StudentForm>>({});
  const [collegeErrors, setCollegeErrors] = useState<Partial<CollegeForm>>({});
  const [studentSubmitted, setStudentSubmitted] = useState(false);
  const [collegeSubmitted, setCollegeSubmitted] = useState(false);

  useEffect(() => {
    const course = searchParams.get('course');
    if (course) setStudentForm(f => ({ ...f, program: course }));
    if (searchParams.get('tab') === 'college' || window.location.hash === '#college') setTab('college');
  }, [searchParams]);

  const validateStudent = () => {
    const e: Partial<StudentForm> = {};
    if (!studentForm.name.trim()) e.name = 'Required';
    if (!studentForm.email.trim() || !/\S+@\S+\.\S+/.test(studentForm.email)) e.email = 'Valid email required';
    if (!studentForm.phone.trim()) e.phone = 'Required';
    if (!studentForm.consent) e.consent = 'Required' as unknown as boolean;
    return e;
  };

  const validateCollege = () => {
    const e: Partial<CollegeForm> = {};
    if (!collegeForm.institution.trim()) e.institution = 'Required';
    if (!collegeForm.contact.trim()) e.contact = 'Required';
    if (!collegeForm.email.trim() || !/\S+@\S+\.\S+/.test(collegeForm.email)) e.email = 'Valid email required';
    if (!collegeForm.phone.trim()) e.phone = 'Required';
    if (!collegeForm.consent) e.consent = 'Required' as unknown as boolean;
    return e;
  };

  const handleStudentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validateStudent();
    if (Object.keys(errs).length > 0) { setStudentErrors(errs); return; }
    setStudentSubmitted(true);
  };

  const handleCollegeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validateCollege();
    if (Object.keys(errs).length > 0) { setCollegeErrors(errs); return; }
    setCollegeSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-midnight">
      {/* Hero */}
      <div className="relative pt-28 pb-14 overflow-hidden"
           style={{ background:'linear-gradient(135deg, rgba(3,6,13,0.98) 0%, rgba(5,11,24,0.99) 100%)' }}>
        <div className="absolute inset-0 circuit-bg opacity-15" />
        <div className="absolute top-0 left-0 right-0 glass-divider" />
        <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="section-tag">
            <span className="w-1.5 h-1.5 rounded-full bg-electric-blue" />
            Contact & Enquiries
          </div>
          <h1 className="section-heading mt-2 mb-4">
            Let's Start a<br />
            <span className="text-gradient-blue">Conversation</span>
          </h1>
          <p className="text-silver/60 max-w-xl">
            Whether you're a student exploring programs or a college seeking institutional training,
            we're here to help.
          </p>
        </div>
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="flex gap-2 mb-8 p-1 bg-white/4 rounded-xl border border-white/8 w-fit">
              <TabButton active={tab === 'student'} onClick={() => setTab('student')} icon={MessageSquare}>
                Student Enquiry
              </TabButton>
              <TabButton active={tab === 'college'} onClick={() => setTab('college')} icon={Building2}>
                College Partnership
              </TabButton>
            </div>

            {/* Student Form */}
            {tab === 'student' && (
              <div>
                <h2 className="text-xl font-semibold text-white mb-6">Student Enquiry</h2>
                {studentSubmitted ? (
                  <SuccessMessage type="student" />
                ) : (
                  <form onSubmit={handleStudentSubmit} noValidate className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <FormField label="Full Name" id="s-name" required error={studentErrors.name as string}>
                        <input id="s-name" type="text" placeholder="Your name" value={studentForm.name}
                          onChange={e => { setStudentForm(f => ({ ...f, name: e.target.value })); setStudentErrors(er => ({ ...er, name: undefined })); }}
                          className={`input-dark ${studentErrors.name ? 'border-red-500/60' : ''}`} />
                      </FormField>
                      <FormField label="Email Address" id="s-email" required error={studentErrors.email as string}>
                        <input id="s-email" type="email" placeholder="your@email.com" value={studentForm.email}
                          onChange={e => { setStudentForm(f => ({ ...f, email: e.target.value })); setStudentErrors(er => ({ ...er, email: undefined })); }}
                          className={`input-dark ${studentErrors.email ? 'border-red-500/60' : ''}`} />
                      </FormField>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <FormField label="Phone Number" id="s-phone" required error={studentErrors.phone as string}>
                        <input id="s-phone" type="tel" placeholder="+91 XXXXX XXXXX" value={studentForm.phone}
                          onChange={e => { setStudentForm(f => ({ ...f, phone: e.target.value })); setStudentErrors(er => ({ ...er, phone: undefined })); }}
                          className={`input-dark ${studentErrors.phone ? 'border-red-500/60' : ''}`} />
                      </FormField>
                      <FormField label="College / University" id="s-college">
                        <input id="s-college" type="text" placeholder="Your institution" value={studentForm.college}
                          onChange={e => setStudentForm(f => ({ ...f, college: e.target.value }))}
                          className="input-dark" />
                      </FormField>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <FormField label="Degree / Department" id="s-degree">
                        <input id="s-degree" type="text" placeholder="e.g., B.Tech CSE" value={studentForm.degree}
                          onChange={e => setStudentForm(f => ({ ...f, degree: e.target.value }))}
                          className="input-dark" />
                      </FormField>
                      <FormField label="Interested Program" id="s-program">
                        <select id="s-program" value={studentForm.program}
                          onChange={e => setStudentForm(f => ({ ...f, program: e.target.value }))}
                          className="input-dark">
                          <option value="">Select a program</option>
                          {courses.map(c => (
                            <option key={c.id} value={c.title}>{c.title}</option>
                          ))}
                        </select>
                      </FormField>
                    </div>
                    <FormField label="Preferred Duration / Format" id="s-duration">
                      <input id="s-duration" type="text" placeholder="e.g., 1 month, workshop, flexible"
                        value={studentForm.duration}
                        onChange={e => setStudentForm(f => ({ ...f, duration: e.target.value }))}
                        className="input-dark" />
                    </FormField>
                    <FormField label="Message" id="s-message">
                      <textarea id="s-message" rows={4} placeholder="Anything specific you'd like to share or ask..."
                        value={studentForm.message}
                        onChange={e => setStudentForm(f => ({ ...f, message: e.target.value }))}
                        className="input-dark resize-none" />
                    </FormField>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" checked={studentForm.consent}
                        onChange={e => setStudentForm(f => ({ ...f, consent: e.target.checked }))}
                        className="mt-1 accent-electric-blue" />
                      <span className="text-xs text-silver/60">
                        I consent to Guhanix Technology storing and processing this information
                        to respond to my enquiry. <span className="text-red-400">*</span>
                      </span>
                    </label>
                    {studentErrors.consent && <p className="text-xs text-red-400 -mt-2">Please confirm consent to proceed.</p>}
                    <button type="submit" className="btn-primary w-full sm:w-auto justify-center px-10 py-3.5">
                      Send Enquiry
                    </button>
                    <FormNote />
                  </form>
                )}
              </div>
            )}

            {/* College Form */}
            {tab === 'college' && (
              <div>
                <h2 className="text-xl font-semibold text-white mb-6">College / Institutional Partnership Enquiry</h2>
                {collegeSubmitted ? (
                  <SuccessMessage type="college" />
                ) : (
                  <form onSubmit={handleCollegeSubmit} noValidate className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <FormField label="Institution Name" id="c-inst" required error={collegeErrors.institution as string}>
                        <input id="c-inst" type="text" placeholder="College / Institution name"
                          value={collegeForm.institution}
                          onChange={e => { setCollegeForm(f => ({ ...f, institution: e.target.value })); setCollegeErrors(er => ({ ...er, institution: undefined })); }}
                          className={`input-dark ${collegeErrors.institution ? 'border-red-500/60' : ''}`} />
                      </FormField>
                      <FormField label="Contact Person" id="c-contact" required error={collegeErrors.contact as string}>
                        <input id="c-contact" type="text" placeholder="Name and designation"
                          value={collegeForm.contact}
                          onChange={e => { setCollegeForm(f => ({ ...f, contact: e.target.value })); setCollegeErrors(er => ({ ...er, contact: undefined })); }}
                          className={`input-dark ${collegeErrors.contact ? 'border-red-500/60' : ''}`} />
                      </FormField>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <FormField label="Official Email" id="c-email" required error={collegeErrors.email as string}>
                        <input id="c-email" type="email" placeholder="official@institution.edu"
                          value={collegeForm.email}
                          onChange={e => { setCollegeForm(f => ({ ...f, email: e.target.value })); setCollegeErrors(er => ({ ...er, email: undefined })); }}
                          className={`input-dark ${collegeErrors.email ? 'border-red-500/60' : ''}`} />
                      </FormField>
                      <FormField label="Phone Number" id="c-phone" required error={collegeErrors.phone as string}>
                        <input id="c-phone" type="tel" placeholder="+91 XXXXX XXXXX"
                          value={collegeForm.phone}
                          onChange={e => { setCollegeForm(f => ({ ...f, phone: e.target.value })); setCollegeErrors(er => ({ ...er, phone: undefined })); }}
                          className={`input-dark ${collegeErrors.phone ? 'border-red-500/60' : ''}`} />
                      </FormField>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <FormField label="Department" id="c-dept">
                        <input id="c-dept" type="text" placeholder="e.g., CS, ECE, Mechanical"
                          value={collegeForm.department}
                          onChange={e => setCollegeForm(f => ({ ...f, department: e.target.value }))}
                          className="input-dark" />
                      </FormField>
                      <FormField label="Number of Students" id="c-batch">
                        <input id="c-batch" type="number" placeholder="Approximate batch size"
                          value={collegeForm.batchSize}
                          onChange={e => setCollegeForm(f => ({ ...f, batchSize: e.target.value }))}
                          className="input-dark" />
                      </FormField>
                    </div>
                    <FormField label="Required Training Program" id="c-program">
                      <input id="c-program" type="text" placeholder="Describe the training program or topic"
                        value={collegeForm.program}
                        onChange={e => setCollegeForm(f => ({ ...f, program: e.target.value }))}
                        className="input-dark" />
                    </FormField>
                    <FormField label="Preferred Training Period" id="c-dates">
                      <input id="c-dates" type="text" placeholder="e.g., December 2025 or flexible"
                        value={collegeForm.dates}
                        onChange={e => setCollegeForm(f => ({ ...f, dates: e.target.value }))}
                        className="input-dark" />
                    </FormField>
                    <FormField label="Additional Requirements" id="c-req">
                      <textarea id="c-req" rows={3} placeholder="Any specific requirements or notes..."
                        value={collegeForm.requirements}
                        onChange={e => setCollegeForm(f => ({ ...f, requirements: e.target.value }))}
                        className="input-dark resize-none" />
                    </FormField>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" checked={collegeForm.consent}
                        onChange={e => setCollegeForm(f => ({ ...f, consent: e.target.checked }))}
                        className="mt-1 accent-electric-blue" />
                      <span className="text-xs text-silver/60">
                        I consent to Guhanix Technology storing and processing this information
                        to respond to our partnership enquiry. <span className="text-red-400">*</span>
                      </span>
                    </label>
                    {collegeErrors.consent && <p className="text-xs text-red-400 -mt-2">Please confirm consent to proceed.</p>}
                    <button type="submit" className="btn-primary w-full sm:w-auto justify-center px-10 py-3.5">
                      Submit Enquiry
                    </button>
                    <FormNote />
                  </form>
                )}
              </div>
            )}
          </div>

          {/* Contact info sidebar */}
          <div>
            <div className="sticky top-24 space-y-5">
              <h3 className="text-base font-semibold text-white">Contact Information</h3>
              <div className="space-y-4">
                {CONTACT_INFO.email && (
                  <div className="flex items-start gap-3 p-4 rounded-xl glass-card">
                    <Mail size={16} className="text-electric-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-silver/50 mb-1">Email</div>
                      <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm text-white hover:text-electric-blue transition-colors break-all">
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-4 rounded-xl bg-glass-blue"
                   style={{ border:'1px solid rgba(8,123,255,0.18)' }}>
                <h4 className="text-sm font-semibold text-white mb-2">Response Time</h4>
                <p className="text-xs text-silver/60 leading-relaxed">
                  We aim to respond to all student and college enquiries within 2 business days.
                </p>
              </div>

              <div className="p-4 rounded-xl glass-card">
                <h4 className="text-xs font-semibold text-silver/50 uppercase tracking-wider mb-3">Popular Programs</h4>
                <div className="space-y-2">
                  {['Python Full Stack Development', 'Machine Learning with Python', 'Power BI', 'Final-Year Project Training', 'Placement Readiness Program'].map(p => (
                    <div key={p} className="text-xs text-silver/55 py-1 border-b border-white/5 last:border-0">{p}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TabButton({ active, onClick, icon: Icon, children }: {
  active: boolean; onClick: () => void;
  icon: LucideIcon;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
        active ? 'bg-electric-blue text-white' : 'text-silver/60 hover:text-white'
      }`}
    >
      <Icon size={15} />{children}
    </button>
  );
}

function FormField({ label, id, required, error, children }: {
  label: string; id: string; required?: boolean; error?: string; children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="label-dark">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-red-400 mt-1 flex items-center gap-1"><AlertCircle size={11} />{error}</p>}
    </div>
  );
}

function SuccessMessage({ type }: { type: 'student' | 'college' }) {
  return (
    <div className="text-center py-12">
      <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-5">
        <CheckCircle2 size={32} className="text-green-400" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">Enquiry Received</h3>
      <p className="text-sm text-silver/60 max-w-md mx-auto mb-4">
        {type === 'student'
          ? "Thank you for your interest. We'll review your enquiry and get back to you soon."
          : "Thank you for reaching out. A member of our team will contact you to discuss your training requirements."}
      </p>
      <p className="text-xs text-silver/35">
        Note: This form currently requires backend integration to deliver submissions.
        Please also email us at <span className="text-electric-blue">contact@guhanix.com</span> for direct contact.
      </p>
    </div>
  );
}

function FormNote() {
  return (
    <p className="text-xs text-silver/35 mt-1">
      * Note: Form submission requires backend or email service integration.
      Your data will not be sent until that is configured.
    </p>
  );
}
