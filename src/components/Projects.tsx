import { ExternalLink, Github, Eye } from 'lucide-react';
import {
  useScrollAnimation,
  useStaggeredAnimation,
} from '../hooks/useScrollAnimation';
import AnimatedBackground from './AnimatedBackground';

// ✅  Fixed: relative paths (no extra “.//”)
import devConnect from '../assets/devconnect.png';
import resumeBuilder from '../assets/resumeBuilder.png';
import uzumakiStore from '../assets/uzumakiStore.png';
import watchPokemon from '../assets/watchPokemon.png';

const Projects = () => {
  const sectionRef   = useScrollAnimation();
  const featuredRef  = useStaggeredAnimation(300);
  const otherRef     = useStaggeredAnimation(150);

  // ——————————————————————————————————————————————————
  // ⚠️  NOTE: add or remove properties freely—anchors
  //           below render only when a value exists.
  // ——————————————————————————————————————————————————
  const projects = [
    {
      title: 'Resume Simplified',
      description:
        'Interactive web app that lets users build customised resumes with live preview and multiple templates.',
      technologies: ['React', 'Node.js', 'Tailwind CSS'],
      image: resumeBuilder,
      demo: 'https://resumesimplified.netlify.app/',
      github: 'https://github.com/Anubhav2923/resume-simplified', // <— added
      featured: true,
    },
    {
      title: 'DevConnect',
      description:
        'Full‑stack social network for developers (MERN) with auth, real‑time chat and profile customisation.',
      technologies: ['React', 'MongoDB', 'Node.js', 'Express', 'Tailwind CSS'],
      image: devConnect,
      github: 'https://github.com/Anubhav2923/DevConnect',
      demo: 'https://devconnect.onrender.com',
      featured: true,
    },
    {
      title: 'Uzumaki Store',
      description:
        'Single‑page e‑commerce site for anime merchandise with a fully‑functional shopping cart.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      image: uzumakiStore,
      github:
        'https://github.com/Anubhav2923/Uzumaki-Store-Ecommerce-Anime-store',
      demo: 'https://uzumakistore.netlify.app/',
      featured: false,
    },
    {
      title: 'Watch Your Pokémon',
      description:
        'Mobile‑first PWA that streams Pokémon episodes with search and bookmarking.',
      technologies: ['React', 'Node.js', 'Tailwind CSS'],
      image: watchPokemon,
      demo: 'https://watchyourpokemon.netlify.app/',
      github: 'https://github.com/Anubhav2923/WatchYourPokemon',
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects    = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="py-20 relative overflow-hidden"
      ref={sectionRef}
    >
      <AnimatedBackground variant="particles" />

      <div className="container mx-auto px-6 relative z-10">
        {/* ----------------  Section header  ---------------- */}
        <header className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work and technical expertise
          </p>
        </header>

        {/* ----------------  Featured grid  ---------------- */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16" ref={featuredRef as React.RefObject<HTMLDivElement | null>}>
          {featuredProjects.map((project, idx) => (
            <article
              key={idx}
              className="stagger-item group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden border border-white/20 dark:border-gray-700/50"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/40 transition-all duration-300" />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 leading-tight">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-transform duration-200 hover:scale-105"
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-transform duration-200 hover:scale-105"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ----------------  Other projects grid  ---------------- */}
        <h3 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200 scroll-reveal">
          More Projects
        </h3>

        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          ref={otherRef as React.RefObject<HTMLDivElement | null>}
        >
          {otherProjects.map((project, idx) => (
            <article
              key={idx}
              className="stagger-item group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden border border-white/20 dark:border-gray-700/50"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />

              <div className="p-6">
                <h4 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-200">
                  {project.title}
                </h4>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 text-sm transition-transform duration-200 hover:scale-105"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm transition-transform duration-200 hover:scale-105"
                    >
                      <Eye size={16} />
                      <span>View</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ----------------  GitHub CTA  ---------------- */}
        <div className="text-center scroll-reveal-up">
          <a
            href="https://github.com/Anubhav2923" // ← update as needed
            target="_blank"
            rel="noopener noreferrer"
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
