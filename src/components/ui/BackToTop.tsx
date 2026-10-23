import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 z-50 p-3 rounded-full text-white transition-all duration-300 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-electric-blue"
      style={{
        background:'linear-gradient(135deg, rgba(8,123,255,0.8) 0%, rgba(34,211,255,0.6) 100%)',
        backdropFilter:'blur(12px)',
        border:'1px solid rgba(8,123,255,0.4)',
        boxShadow:'0 0 20px rgba(8,123,255,0.4), 0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
      }}
      aria-label="Back to top"
    >
      <ChevronUp size={20} />
    </button>
  );
}
