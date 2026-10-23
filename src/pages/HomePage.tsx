import HeroSection from '../components/home/HeroSection';
import CompanyOverview from '../components/home/CompanyOverview';
import StatsSection from '../components/home/StatsSection';
import DepartmentsSection from '../components/home/DepartmentsSection';
import FeaturedPrograms from '../components/home/FeaturedPrograms';
import LearningJourney from '../components/home/LearningJourney';
import TrainingFormats from '../components/home/TrainingFormats';
import WhyChooseUs from '../components/home/WhyChooseUs';
import CollegePartnership from '../components/home/CollegePartnership';
import StudentCTA from '../components/home/StudentCTA';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CompanyOverview />
      <StatsSection />
      <DepartmentsSection />
      <FeaturedPrograms />
      <LearningJourney />
      <TrainingFormats />
      <WhyChooseUs />
      <CollegePartnership />
      <StudentCTA />
    </>
  );
}
