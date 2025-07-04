import React from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';
import AnimatedBackground from './AnimatedBackground';
import PeekingButton from './PeekingButton';

const Projects = () => {
  const sectionRef = useScrollAnimation();
  const featuredRef = useStaggeredAnimation(300);
  const otherRef = useStaggeredAnimation(150);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Social Media Dashboard",
      description: "A comprehensive analytics dashboard for social media management with real-time data visualization, post scheduling, and engagement tracking.",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Chart.js", "Tailwind CSS"],
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, team collaboration features, and advanced project tracking capabilities.",
      technologies: ["React", "Express.js", "Socket.io", "MySQL"],
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "Real Estate Platform",
      description: "A modern real estate platform with property listings, virtual tours, mortgage calculator, and integrated mapping functionality.",
      technologies: ["React Native", "FastAPI", "PostgreSQL", "Google Maps"],
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "Learning Management System",
      description: "An educational platform with course management, video streaming, progress tracking, and interactive quizzes for online learning.",
      technologies: ["React", "FastAPI", "MongoDB", "WebRTC"],
      image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "Fitness Tracking App",
      description: "A comprehensive fitness application with workout tracking, nutrition logging, progress analytics, and social features for motivation.",
      technologies: ["React Native", "Node.js", "Firebase", "Chart.js"],
      image: "https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "#",
      demo: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 relative overflow-hidden" ref={sectionRef}>
      <AnimatedBackground variant="particles" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work and technical expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16" ref={featuredRef}>
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="stagger-item group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden border border-white/20 dark:border-gray-700/50"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/40 transition-all duration-300"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 leading-tight">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-base">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium transform hover:scale-105 transition-transform duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200 transform hover:scale-105"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200 transform hover:scale-105"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200 scroll-reveal">More Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" ref={otherRef}>
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="stagger-item group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden border border-white/20 dark:border-gray-700/50"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-200 leading-tight">{project.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200 text-sm transform hover:scale-105"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200 text-sm transform hover:scale-105"
                    >
                      <Eye size={16} />
                      <span>View</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center scroll-reveal-up">
          <PeekingButton
            onClick={() => window.open('#', '_blank')}
            peekEmoji="🚀"
            peekColor="from-purple-400 to-pink-500"
            className="inline-flex items-center space-x-2"
          >
            <Github size={20} />
            <span>View All Projects on GitHub</span>
          </PeekingButton>
        </div>
      </div>
    </section>
  );
};

export default Projects;