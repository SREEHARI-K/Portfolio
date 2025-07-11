
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Certifications from '@/components/Certifications';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Skills />
      <Education />
      <Projects />
      <Certifications />
      {/* <Experience /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
