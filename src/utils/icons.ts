import {
  Monitor, Brain, BarChart3, Cpu, Zap, Settings, Building2,
  FlaskConical, Shield, Briefcase, Flame, Target, Palette,
  Rocket, GraduationCap, BookOpen, LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Monitor,
  Brain,
  BarChart3,
  Cpu,
  Zap,
  Settings,
  Building2,
  FlaskConical,
  Shield,
  Briefcase,
  Flame,
  Target,
  Palette,
  Rocket,
  GraduationCap,
  BookOpen,
};

export function getDeptIcon(iconName: string): LucideIcon {
  return iconMap[iconName] ?? BookOpen;
}
