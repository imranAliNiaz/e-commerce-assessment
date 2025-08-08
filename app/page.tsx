import Image from "next/image";
import LandingSection from './components/landingSection/LandingSection';
import AboutUs from './components/aboutus/AboutUs';
import Categories from './components/categories/Categories';
import Testimonial from './components/testimonials/Testimonials';
import Footer from './components/footer/Footer';

export default function Home() {
  return (
     <main className="bg-gray-50">
      <LandingSection />
      <AboutUs />
      <Categories />
      <Testimonial />
      <Footer />
    </main>
  );
}
