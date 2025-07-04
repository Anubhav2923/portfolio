
import { Heart, Github, Linkedin, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="animate-fade-in-up">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Anubhav Singh
            </div>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer passionate about creating innovative solutions 
              and building exceptional user experiences.
            </p>
          </div>
          
          <div className="animate-fade-in-up " style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y flex items-center gap-4 ">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:translate-x-1">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:translate-x-1">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:translate-x-1">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:translate-x-1">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:translate-x-1">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a target='_blank'
                href="https://github.com/Anubhav2923"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-all duration-200 transform hover:scale-110 animate-bounce-gentle"
              >
                <Github size={20} />
              </a>
              <a target='_blank'
                href="https://www.linkedin.com/in/anubhav-singh-90b02828a/"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-200 transform hover:scale-110 animate-bounce-gentle"
                style={{ animationDelay: '0.1s' }}
              >
                <Linkedin size={20} />
              </a>
              <a target='_blank'
                href=""
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-all duration-200 transform hover:scale-110 animate-bounce-gentle"
                style={{ animationDelay: '0.2s' }}
              >
                <Instagram size={20} />
              </a>
              <a target='_blank'
                href="mailto:anubhavsinghas9@gmail.com"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-all duration-200 transform hover:scale-110 animate-bounce-gentle"
                style={{ animationDelay: '0.3s' }}
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>Made with</span>
            <Heart className="text-red-500 animate-pulse" size={16} />
            <span>by Anubhav Singh</span>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2024 Anubhav Singh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;