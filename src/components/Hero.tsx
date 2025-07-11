
import React from 'react';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in-up">
          <img
            src="/profile.jpg"
            alt="Sreehari K"
            className="w-32 h-32 rounded-full mx-auto mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Hi, I'm <span className="text-primary">Sreehari K</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Python Fullstack Developer
          </p>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Enthusiastic and detail-oriented recent graduate with a strong foundation in statistics, machine learning, and Python programming. Seeking a data science internship or entry-level position to apply analytical and technical skills to solve real-world problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToProjects}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium"
            >
              View My Work
            </button>
            <a
              href="/Sreehari K - Resume.pdf"
              download
              className="border border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-200 font-medium"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
