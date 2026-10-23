import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTop from '../ui/BackToTop';
import RainEffect from '../ui/RainEffect';

export default function Layout() {
  return (
    <div className="min-h-screen bg-midnight text-white flex flex-col relative">
      {/* Global rain / particle effect — behind everything */}
      <RainEffect />

      <Navbar />
      <main id="main-content" className="flex-1 relative z-10" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
