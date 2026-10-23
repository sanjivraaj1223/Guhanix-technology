export interface Course {
  id: string;
  slug: string;
  title: string;
  department: string;
  departmentSlug: string;
  description: string;
  shortDescription: string;
  software: string[];
  topics: string[];
  practicalActivities: string[];
  projectOutcomes: string[];
  prerequisites?: string[];
  duration?: string;
  trainingFormat: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  featured?: boolean;
  tags?: string[];
}

export interface Department {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  description: string;
  color: string;
  courses: string[]; // course slugs
}

export interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  workMode: string;
  employmentType: string;
  overview: string;
  responsibilities: string[];
  requiredSkills: string[];
  applicationDeadline?: string;
  isOpen: boolean;
}

export interface EnquiryFormData {
  name: string;
  email: string;
  phone: string;
  college: string;
  degree: string;
  program: string;
  duration: string;
  message: string;
  consent: boolean;
}

export interface CollegeEnquiryFormData {
  institutionName: string;
  contactPerson: string;
  email: string;
  phone: string;
  department: string;
  batchSize: string;
  program: string;
  preferredDates: string;
  requirements: string;
  consent: boolean;
}

export interface ApplicationFormData {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  skills: string;
  experience: string;
  linkedinUrl: string;
  githubUrl: string;
  consent: boolean;
}
