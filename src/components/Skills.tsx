import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';
import AnimatedBackground from './AnimatedBackground';

const Skills = () => {
  const sectionRef = useScrollAnimation();
  const skillsRef = useStaggeredAnimation(200);

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 75, color: "bg-blue-500" },
        { name: "TypeScript", level: 60, color: "bg-blue-600" },
        { name: "Next.js", level: 65, color: "bg-gray-800" },
        { name: "Tailwind CSS", level: 80, color: "bg-teal-500" },
        { name: "React Native", level: 50, color: "bg-blue-400" },
        { name: "JavaScript", level: 80, color: "bg-yellow-500" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 82, color: "bg-green-600" },
        { name: "Python", level: 70, color: "bg-yellow-500" },
        { name: "Express.js", level: 80, color: "bg-gray-700" },
        { name: "FastAPI", level: 82, color: "bg-teal-600" },
        { name: "GraphQL", level: 68, color: "bg-pink-500" },
        { name: "REST APIs", level: 80, color: "bg-blue-600" }
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "PostgreSQL", level: 60, color: "bg-blue-700" },
        { name: "MongoDB", level: 88, color: "bg-green-500" },
        { name: "Redis", level: 70, color: "bg-red-500" },
        { name: "MySQL", level: 60, color: "bg-blue-600" },
        { name: "Firebase", level: 70, color: "bg-orange-500" },
        { name: "Supabase", level: 60, color: "bg-emerald-500" }
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Git", level: 95, color: "bg-gray-700" },
        { name: "GitHub Actions", level: 80, color: "bg-gray-800" },
        { name: "Vercel", level: 90, color: "bg-black" },
        { name: "Netlify", level: 88, color: "bg-teal-600" },
        { name: "VS Code", level: 95, color: "bg-blue-500" },
        { name: "Postman", level: 90, color: "bg-orange-600" }
      ]
    }
  ];

  const additionalTechnologies = [
    "Webpack", "Vite", "Jest", "Cypress", "Storybook", "Figma", "Adobe XD",
    "Postman", "Swagger", "Jira", "Slack", "Linear", "Notion", "VS Code"
  ];

  const firstRow = additionalTechnologies.slice(0, 7);
  const secondRow = additionalTechnologies.slice(7);

  return (
    <section id="skills" className="py-20 relative overflow-hidden" ref={sectionRef}>
      <AnimatedBackground variant="geometric" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" ref={skillsRef as React.RefObject<HTMLDivElement | null>}>
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="stagger-item bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-white/20 dark:border-gray-700/50"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-3 skill-item">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${skill.color} skill-progress transition-all duration-1000 ease-out relative`}
                        data-width={skill.level}
                        style={{ width: skill.level+ "%" }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center scroll-reveal-up">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 max-w-6xl mx-auto overflow-hidden border border-white/20 dark:border-gray-700/50">
            <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200">Additional Technologies</h3>
            
            <div className="relative mb-6 overflow-hidden">
              <div className="flex animate-scroll-left-to-right">
                {[...firstRow, ...firstRow, ...firstRow].map((tech, index) => (
                  <span
                    key={index}
                    className="flex-shrink-0 mx-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-800/50 dark:hover:to-purple-800/50 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden">
              <div className="flex animate-scroll-right-to-left">
                {[...secondRow, ...secondRow, ...secondRow].map((tech, index) => (
                  <span
                    key={index}
                    className="flex-shrink-0 mx-3 px-6 py-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:from-purple-100 hover:to-pink-100 dark:hover:from-purple-800/50 dark:hover:to-pink-800/50 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;