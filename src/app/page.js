import Banner from '@/components/Banner';
import InstructorsSection from '@/components/InstructorsSection';
import LearningTips from '@/components/LearningTips';
import Reviews from '@/components/Reviews';
import Top3Courses from '@/components/top3CoursesDataFetch';
import TrendingCourse from '@/components/TrandingCourse';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Top3Courses />
      <LearningTips />
      <InstructorsSection />
      <TrendingCourse />
      <Reviews />
    </div>
  );
};

export default HomePage;