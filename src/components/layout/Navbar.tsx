import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, Search, Menu, X, ArrowRight } from 'lucide-react';
import Logo from '../ui/Logo';
import { departments } from '../../data/departments';
import { getDeptIcon } from '../../utils/icons';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const programsBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMegaMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMegaMenuOpen(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/programs?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setMegaMenuOpen(false);
    }
  }, [searchQuery, navigate]);

  const filteredDepts = departments.filter(d =>
    d.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-glass-dark border-b border-white/8 shadow-2xl shadow-black/30'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0" aria-label="Guhanix Technology — Home">
            <Logo size="md" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            <NavLink to="/">Home</NavLink>

            {/* Programs Dropdown */}
            <div className="relative" ref={megaMenuRef}>
              <button
                ref={programsBtnRef}
                onClick={() => setMegaMenuOpen(v => !v)}
                onKeyDown={(e) => e.key === 'Enter' && setMegaMenuOpen(v => !v)}
                aria-expanded={megaMenuOpen}
                aria-haspopup="true"
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-silver/80 hover:text-white rounded-lg transition-colors duration-200 hover:bg-white/5"
              >
                Programs
                <ChevronDown size={14} className={`transition-transform duration-200 ${megaMenuOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/careers">Careers</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/programs"
              className="px-5 py-2.5 bg-electric-blue text-white text-sm font-semibold rounded-lg hover:bg-blue-500 transition-all duration-200 shadow-md hover:shadow-electric-blue/30"
            >
              Explore Programs
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-silver hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(v => !v)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mega Menu */}
        {megaMenuOpen && (
          <div
            className="absolute top-full left-0 right-0 bg-glass-dark border-b border-electric-blue/10 shadow-2xl shadow-black/40 z-50"
            role="region"
            aria-label="Programs menu"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              {/* Search */}
              <form onSubmit={handleSearch} className="mb-6">
                <div className="relative max-w-md">
                  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-silver/40" />
                  <input
                    type="search"
                    placeholder="Search courses and programs..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-silver/40 focus:outline-none focus:border-electric-blue transition-colors"
                    aria-label="Search programs"
                  />
                </div>
              </form>

              {/* Departments Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                {(searchQuery ? filteredDepts : departments).map(dept => {
                  const Icon = getDeptIcon(dept.icon);
                  return (
                    <Link
                      key={dept.id}
                      to={`/programs/department/${dept.slug}`}
                      onClick={() => setMegaMenuOpen(false)}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-electric-blue/20 transition-all duration-200 group"
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: `${dept.color}15` }}
                      >
                        <Icon size={16} color={dept.color} />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white/90 group-hover:text-white leading-tight">
                          {dept.shortName}
                        </div>
                        <div className="text-xs text-silver/50 mt-0.5 line-clamp-1">
                          {dept.courses.length} programs
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="mt-4 pt-4 border-t border-white/8 flex items-center justify-between">
                <p className="text-sm text-silver/50">
                  {departments.reduce((acc, d) => acc + d.courses.length, 0)}+ programs across 15 departments
                </p>
                <Link
                  to="/programs"
                  onClick={() => setMegaMenuOpen(false)}
                  className="flex items-center gap-2 text-sm font-medium text-electric-blue hover:text-cyan transition-colors"
                >
                  View full catalogue <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Click-outside overlay */}
        {megaMenuOpen && (
          <div
            className="fixed inset-0 z-40"
            onClick={() => setMegaMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-glass-dark border-t border-white/8 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            <MobileNavLink to="/" onClick={() => setMobileMenuOpen(false)}>Home</MobileNavLink>

            <button
              onClick={() => setMobileProgramsOpen(v => !v)}
              className="w-full flex items-center justify-between px-4 py-3 text-silver/80 hover:text-white hover:bg-white/5 rounded-xl text-sm font-medium transition-colors"
              aria-expanded={mobileProgramsOpen}
            >
              Programs
              <ChevronDown size={16} className={`transition-transform duration-200 ${mobileProgramsOpen ? 'rotate-180' : ''}`} />
            </button>

            {mobileProgramsOpen && (
              <div className="ml-4 space-y-1 border-l border-white/8 pl-4">
                {departments.map(dept => {
                  const Icon = getDeptIcon(dept.icon);
                  return (
                    <Link
                      key={dept.id}
                      to={`/programs/department/${dept.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 text-silver/70 hover:text-white hover:bg-white/5 rounded-lg text-sm transition-colors"
                    >
                      <Icon size={14} color={dept.color} />
                      {dept.shortName}
                    </Link>
                  );
                })}
                <Link
                  to="/programs"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 px-3 py-2.5 text-electric-blue text-sm font-medium"
                >
                  View all programs <ArrowRight size={14} />
                </Link>
              </div>
            )}

            <MobileNavLink to="/about" onClick={() => setMobileMenuOpen(false)}>About Us</MobileNavLink>
            <MobileNavLink to="/careers" onClick={() => setMobileMenuOpen(false)}>Careers</MobileNavLink>
            <MobileNavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</MobileNavLink>

            <div className="pt-3 border-t border-white/8">
              <Link
                to="/programs"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center px-4 py-3 bg-electric-blue text-white text-sm font-semibold rounded-xl hover:bg-blue-500 transition-colors"
              >
                Explore Programs
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link
      to={to}
      className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
        isActive
          ? 'text-electric-blue bg-electric-blue/10'
          : 'text-silver/80 hover:text-white hover:bg-white/5'
      }`}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ to, children, onClick }: { to: string; children: React.ReactNode; onClick?: () => void }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`block px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
        isActive
          ? 'text-electric-blue bg-electric-blue/10'
          : 'text-silver/80 hover:text-white hover:bg-white/5'
      }`}
    >
      {children}
    </Link>
  );
}
