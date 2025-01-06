import ServiceSection from '@/components/home/service-section';
import ExperienceSection from '@/components/home/experience-section'
import Footer from '@/components/ui/footer';

import React from 'react';
import TeamSection from '@/components/home/team-section';
import DigitalPartnerSection from '@/components/home/digital-partner-section';
import HeaderSection from '@/components/home/header-section';

const HomePage = () => {
  return (
    <div>
      <HeaderSection/>
      <DigitalPartnerSection/>
      <TeamSection/>
      <ExperienceSection/>
      <ServiceSection/>
      <Footer/>
    </div>
  );
};

export default HomePage;