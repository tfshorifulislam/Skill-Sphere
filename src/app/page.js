import Banner from '@/components/Banner';
import InstructorsSection from '@/components/InstructorsSection';
import LearningTips from '@/components/LearningTips';
import Top3Courses from '@/components/top3CoursesDataFetch';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Top3Courses />
      <LearningTips />
      <InstructorsSection />
    </div>
  );
};

export default HomePage;