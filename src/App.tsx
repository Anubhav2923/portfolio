import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Initialize scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Handle different animation types
          if (entry.target.classList.contains('scroll-reveal')) {
            entry.target.classList.add('animate-in-view');
          }
          if (entry.target.classList.contains('scroll-reveal-left')) {
            entry.target.classList.add('animate-in-view');
          }
          if (entry.target.classList.contains('scroll-reveal-right')) {
            entry.target.classList.add('animate-in-view');
          }
          if (entry.target.classList.contains('scroll-reveal-up')) {
            entry.target.classList.add('animate-in-view');
          }

          // Handle skill progress bars
          const skillItems = entry.target.querySelectorAll('.skill-item');
          skillItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('animate-in-view');
              const progressBar = item.querySelector('.skill-progress');
              if (progressBar) {
                const width = progressBar.getAttribute('data-width');
                progressBar.style.setProperty('--skill-width', `${width}%`);
                progressBar.style.width = `${width}%`;
              }
            }, index * 100);
          });

          // Handle counter animations
          const counters = entry.target.querySelectorAll('.counter-animation');
          counters.forEach((counter, index) => {
            setTimeout(() => {
              counter.classList.add('animate-in-view');
            }, index * 200);
          });

          // Handle contact items
          const contactItems = entry.target.querySelectorAll('.contact-item');
          contactItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('animate-in-view');
            }, index * 150);
          });

          // Handle form fields
          const formFields = entry.target.querySelectorAll('.form-field');
          formFields.forEach((field, index) => {
            setTimeout(() => {
              field.classList.add('animate-in-view');
            }, index * 100);
          });
        }
      });
    }, observerOptions);

    // Observe all scroll reveal elements
    const scrollElements = document.querySelectorAll(
      '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-up, [data-scroll-reveal]'
    );
    
    scrollElements.forEach((el) => observer.observe(el));

    return () => {
      scrollElements.forEach((el) => observer.unobserve(el));
    };
  }, [isLoading]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;