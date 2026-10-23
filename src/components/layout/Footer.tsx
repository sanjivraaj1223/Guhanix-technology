import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Instagram, ArrowRight } from 'lucide-react';
import Logo from '../ui/Logo';
import { departments } from '../../data/departments';

// Configure your real contact details here
const CONTACT = {
  email: 'contact@guhanix.com', // Replace with actual email
  phone: '', // Add when available
  address: '', // Add when available
  linkedin: 'https://linkedin.com/company/guhanix-technology', // Replace with actual URL
  twitter: '',
  instagram: '',
  github: '',
};

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Programs', to: '/programs' },
  { label: 'About Us', to: '/about' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  return (
    <footer className="relative" role="contentinfo"
            style={{ background:'rgba(3,6,13,0.97)', borderTop:'1px solid rgba(8,123,255,0.10)', backdropFilter:'blur(20px)' }}>
      {/* Top glass divider glow */}
      <div className="absolute top-0 left-0 right-0 glass-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo size="md" />
            <p className="mt-5 text-sm text-silver/60 leading-relaxed">
              Industry-oriented software training, practical projects, emerging technology programs,
              and career preparation for students and institutions.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              {CONTACT.linkedin && (
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-electric-blue/20 text-silver/60 hover:text-electric-blue transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
              )}
              {CONTACT.twitter && (
                <a
                  href={CONTACT.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-electric-blue/20 text-silver/60 hover:text-electric-blue transition-all duration-200"
                  aria-label="Twitter"
                >
                  <Twitter size={16} />
                </a>
              )}
              {CONTACT.instagram && (
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-electric-blue/20 text-silver/60 hover:text-electric-blue transition-all duration-200"
                  aria-label="Instagram"
                >
                  <Instagram size={16} />
                </a>
              )}
              {CONTACT.github && (
                <a
                  href={CONTACT.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-electric-blue/20 text-silver/60 hover:text-electric-blue transition-all duration-200"
                  aria-label="GitHub"
                >
                  <Github size={16} />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="flex items-center gap-2 text-sm text-silver/60 hover:text-white transition-colors duration-200"
                  >
                    <ArrowRight size={12} className="text-electric-blue" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Training Departments */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Training Departments</h3>
            <ul className="space-y-2.5">
              {departments.slice(0, 8).map(dept => (
                <li key={dept.id}>
                  <Link
                    to={`/programs/department/${dept.slug}`}
                    className="text-sm text-silver/60 hover:text-white transition-colors duration-200 line-clamp-1"
                  >
                    {dept.shortName}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/programs"
                  className="flex items-center gap-1 text-sm text-electric-blue hover:text-cyan transition-colors duration-200"
                >
                  View all departments <ArrowRight size={12} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Enquiries */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Get In Touch</h3>
            <ul className="space-y-3 mb-6">
              {CONTACT.email && (
                <li>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="flex items-start gap-3 text-sm text-silver/60 hover:text-white transition-colors group"
                  >
                    <Mail size={14} className="mt-0.5 text-electric-blue flex-shrink-0" />
                    <span className="break-all">{CONTACT.email}</span>
                  </a>
                </li>
              )}
              {CONTACT.phone && (
                <li>
                  <a
                    href={`tel:${CONTACT.phone}`}
                    className="flex items-start gap-3 text-sm text-silver/60 hover:text-white transition-colors"
                  >
                    <Phone size={14} className="mt-0.5 text-electric-blue flex-shrink-0" />
                    {CONTACT.phone}
                  </a>
                </li>
              )}
              {CONTACT.address && (
                <li className="flex items-start gap-3 text-sm text-silver/60">
                  <MapPin size={14} className="mt-0.5 text-electric-blue flex-shrink-0" />
                  {CONTACT.address}
                </li>
              )}
            </ul>
            <div className="space-y-2">
              <Link
                to="/contact"
                className="block w-full text-center px-4 py-2.5 bg-electric-blue/10 hover:bg-electric-blue/20 text-electric-blue text-sm font-medium rounded-lg border border-electric-blue/20 transition-all duration-200"
              >
                Student Enquiry
              </Link>
              <Link
                to="/contact#college"
                className="block w-full text-center px-4 py-2.5 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white text-sm font-medium rounded-lg border border-white/10 transition-all duration-200"
              >
                College Partnership
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
             style={{ borderTop:'1px solid rgba(255,255,255,0.06)' }}>
          <p className="text-sm text-silver/40">
            © {new Date().getFullYear()} Guhanix Technology. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-sm text-silver/40 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-silver/40 hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
