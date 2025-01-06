


import ServiceSection from '@/components/home/service-section';
import ExperienceSection from '@/components/home/experience-section'
import Footer from '@/components/ui/footer';

import React from 'react';
import TeamSection from '@/components/home/team-section';

const HomePage = () => {
  return (
    <div>
      <TeamSection/>
      <ExperienceSection/>
      <ServiceSection/>
      <Footer/>
    </div>
  );
};

export default HomePage;