import { useRef, useEffect, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-in';
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
}

export default function AnimatedSection({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  as: Tag = 'div',
}: AnimatedSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const animations: Record<string, { from: React.CSSProperties; to: React.CSSProperties }> = {
    'fade-up':    { from: { opacity: 0, transform: 'translateY(40px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
    'fade-in':    { from: { opacity: 0 },                                to: { opacity: 1 } },
    'slide-left': { from: { opacity: 0, transform: 'translateX(-50px)' }, to: { opacity: 1, transform: 'translateX(0)' } },
    'slide-right':{ from: { opacity: 0, transform: 'translateX(50px)' },  to: { opacity: 1, transform: 'translateX(0)' } },
    'scale-in':   { from: { opacity: 0, transform: 'scale(0.88)' },       to: { opacity: 1, transform: 'scale(1)' } },
  };

  const style: React.CSSProperties = {
    ...(visible ? animations[animation].to : animations[animation].from),
    transition: `opacity 0.75s ease, transform 0.75s ease`,
    transitionDelay: `${delay}ms`,
  };

  // @ts-expect-error polymorphic ref
  return <Tag ref={ref} className={className} style={style}>{children}</Tag>;
}
