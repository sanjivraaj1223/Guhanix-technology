import { Link } from 'react-router-dom';
import { ArrowLeft, Search } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-midnight flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 circuit-bg opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center max-w-md">
        <div className="text-8xl font-bold text-gradient-blue mb-4">404</div>
        <h1 className="text-3xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-silver/60 mb-8">
          The page you're looking for doesn't exist or has been moved.
          Try browsing our programs or returning home.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="btn-primary">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <Link to="/programs" className="btn-secondary">
            <Search size={16} /> Browse Programs
          </Link>
        </div>
      </div>
    </div>
  );
}
