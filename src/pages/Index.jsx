import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturedSection from "@/components/FeaturedSection";
import CategorySection from "@/components/CategorySection";
import TestimonialSection from "@/components/TestimonialSection";
import NewsletterSection from "@/components/NewsletterSection";
import ScrollToTop from "@/components/ScrollToTop";
import PageTransition from "@/components/PageTransition";
import AboutSection from "@/components/AboutSection";
import HeroFeatures from "@/components/HeroFeatures";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <HeroSection />

          {/* Feature Highlights */}
          <HeroFeatures />

          <FeaturedSection />

          {/* About Section */}
          <AboutSection />

          <CategorySection />
          <TestimonialSection />
          <NewsletterSection />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </PageTransition>
  );
};

export default Index;
