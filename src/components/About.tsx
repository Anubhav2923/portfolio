import React from 'react';
import { Code, Coffee, Lightbulb, Rocket } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';
import AnimatedBackground from './AnimatedBackground';

const About = () => {
  const sectionRef = useScrollAnimation();
  const highlightsRef = useStaggeredAnimation(150);

  const highlights = [
    {
      icon: <Code className="text-blue-600 dark:text-blue-400" size={24} />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices"
    },
    {
      icon: <Lightbulb className="text-yellow-600 dark:text-yellow-400" size={24} />,
      title: "Problem Solving",
      description: "Turning complex challenges into elegant solutions"
    },
    {
      icon: <Rocket className="text-purple-600 dark:text-purple-400" size={24} />,
      title: "Innovation",
      description: "Staying ahead with the latest technologies and trends"
    },
    {
      icon: <Coffee className="text-brown-600 dark:text-orange-400" size={24} />,
      title: "Dedication",
      description: "Committed to delivering exceptional user experiences"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden" ref={sectionRef}>
      <AnimatedBackground variant="waves" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate full stack developer with 1+ year of experience building modern web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 scroll-reveal-left">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a passionate full stack developer who loves creating digital solutions that make a real impact. 
              My journey in tech started with curiosity about how things work, and it's evolved into a career 
              focused on building scalable, user-friendly applications.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, 
              or mentoring fellow developers. I'm always excited to take on new challenges and collaborate on 
              innovative projects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" ref={highlightsRef}>
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="stagger-item p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-white/20 dark:border-gray-700/50"
              >
                <div className="mb-4 animate-bounce-gentle">{highlight.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{highlight.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center scroll-reveal-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-red-600 dark:text-orange-400 mb-2 counter-animation">5+</div>
              <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2 counter-animation">1+</div>
              <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2 counter-animation">24/7</div>
              <div className="text-gray-600 dark:text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;