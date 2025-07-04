import React from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';
import AnimatedBackground from './AnimatedBackground';
import devConnect from './/../assets/devconnect.png';
import resumeBuilder from './/../assets/resumeBuilder.png';
import uzumakiStore from './/../assets/uzumakiStore.png';
import watchPokemon from './/../assets/watchPokemon.png';

const Projects = () => {
  const sectionRef = useScrollAnimation();
  const featuredRef = useStaggeredAnimation(300);
  const otherRef = useStaggeredAnimation(150);

  const projects = [
    {
      title: "Resume Simplified",
      description: "Created an interactive web application that enables users to create customized resumes seamlessly. Key features include Template Selection: Allows users to choose from multiple professionally designed resume templates. Live Preview: Displays real-time updates of the resume as users input their data, ensuring an intuitive and responsive",
      technologies: ["React", "Node.js","TailwindCss", ],
      image: resumeBuilder,
      demo: "https://resumesimplified.netlify.app/",
      featured: true
    },
    {
      title: "DevConnect",
      description: "Dev Connect is a full-stack social networking platform for developers, built using the MERN stack. Features include user authentication, real-time messaging, and profile customization.",
      technologies: [ "React.js","MongoDB", "Node.js","Express", "Tailwind CSS"],
      image: devConnect,
      github: "https://github.com/Anubhav2923/DecConnect",
      demo: "https://decconnect.onrender.com",
      featured: true
    },
    {
      title: "Uzumaki Store",
      description: " Designed and built an online anime merchandise platform, encompassing a user-friendly interface for browsing andpurchasing figures, apparel, and accessories. Customizable shopping cart functionality, allowing users to add, remove, and modify items.borative project management tool with real-time updates, team collaboration features, and advanced project tracking capabilities.",
      technologies: ["Html", "Css","JavaScript", "Bootstrap"],
      image: uzumakiStore,
      github: "https://github.com/Anubhav2923/Uzumaki-Store-Ecommerce-Anime-stoer",
      demo: "https://uzumakistore.netlify.app/",
      featured: false
    },
    {
      title: "Watch Your Pokemon",
      description: "A modern real estate platform with property listings, virtual tours, mortgage calculator, and integrated mapping functionality.",
      technologies: ["React Native", "FastAPI", "PostgreSQL", "Google Maps"],
      image: watchPokemon,
      demo: "https://watchyourpokemon.netlify.app/",
      featured: false
    },
    // Add more projects here
    // {
    //   title: "Learning Management System",
    //   description: "An educational platform with course management, video streaming, progress tracking, and interactive quizzes for online learning.",
    //   technologies: ["React", "FastAPI", "MongoDB", "WebRTC"],
    //   image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   github: "",
    //   demo: "https://watchyourpokemon.netlify.app/",
    //   featured: false
    // },
    // {
    //   title: "Fitness Tracking App",
    //   description: "A comprehensive fitness application with workout tracking, nutrition logging, progress analytics, and social features for motivation.",
    //   technologies: ["React Native", "Node.js", "Firebase", "Chart.js"],
    //   image: "https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   github: "#",
    //   demo: "#",
    //   featured: false
    // }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section
      id="projects"
      className="py-20 relative overflow-hidden"
      ref={sectionRef}
    >
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
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 leading-tight">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-base">
                  {project.description}
                </p>
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
          <h3 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200 scroll-reveal">
            More Projects
          </h3>
          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            ref={otherRef}
          >
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
                  <h4 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-200 leading-tight">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
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
                      target="_blank"
                      href={project.github}
                      className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200 text-sm transform hover:scale-105"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                    <a
                      target="_blank"
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
          <a
            href=""
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <Github size={20} />
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;