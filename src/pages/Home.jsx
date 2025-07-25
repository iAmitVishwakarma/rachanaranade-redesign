import React from 'react';

// Sabhi naye aur updated section components
import HeroSection from '../components/home/HeroSection';
import FeaturedSection from '../components/home/FeaturedSection';
import WhyLearnSection from '../components/home/WhyLearnSection';
import FeaturedCourses from '../components/FeaturedCourses';
import SuccessStories from '../components/home/SuccessStories';
import MembershipPrice from '../components/MembershipPrice';
import NewsletterCTA from '../components/NewsletterCTA';
import HomeBlogSection from '../components/home/HomeBlogSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturedSection />
      <WhyLearnSection />
      <FeaturedCourses />
      <SuccessStories />
      <MembershipPrice />
      <HomeBlogSection />
      <NewsletterCTA />
    </>
  );
};

export default Home;