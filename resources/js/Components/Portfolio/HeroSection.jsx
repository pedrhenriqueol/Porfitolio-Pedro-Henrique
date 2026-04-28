import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function HeroSection() {
    return (
        <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 bg-dark flex items-center justify-center min-h-screen relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-secondary/20 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-primary/30 blur-[120px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 text-center md:text-left space-y-6"
                    >
                        <h2 className="text-secondary font-semibold tracking-wider uppercase text-sm md:text-base">Olá, eu sou o</h2>
                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight min-h-[120px] md:min-h-[140px]">
                            <TypeAnimation
                                sequence={[
                                    'PEDRO\nHENRIQUE', 
                                    7000, 
                                    '', 
                                    500, 
                                ]}
                                wrapper="span"
                                cursor={true}
                                repeat={Infinity}
                                style={{ whiteSpace: 'pre-line' }}
                                className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent inline-block hover:scale-105 transition-transform cursor-default"
                            />
                        </h1>
                        <h3 className="text-xl md:text-3xl text-gray-400 font-light">
                            Desenvolvedor Back-End
                        </h3>
                        <p className="text-gray-400 max-w-lg mx-auto md:mx-0 text-lg leading-relaxed">
                            Especialista na modernização de sistemas legados e desenvolvimento de soluções escaláveis utilizando <strong className="text-white font-semibold">Delphi (Desktop/UniGui)</strong>, <strong className="text-white font-semibold">PHP/Laravel</strong> e <strong className="text-white font-semibold">React</strong>.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start items-center">
                            <a href="#projetos" className="bg-secondary text-darker font-medium px-8 py-3 rounded hover:bg-accent hover:shadow-[0_0_20px_rgba(102,252,241,0.4)] transition-all duration-300">
                                Ver Projetos
                            </a>
                            <div className="flex justify-center gap-4">
                                <a href="https://github.com/pedrhenriqueol" target="_blank" rel="noreferrer" className="flex items-center justify-center w-12 h-12 bg-primary text-white rounded hover:bg-secondary hover:text-darker transition-colors shadow-lg">
                                    <svg xmlns="http://www.w3.org/.svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/in/pedro-henrique-b0a015391/" target="_blank" rel="noreferrer" className="flex items-center justify-center w-12 h-12 bg-primary text-white rounded hover:bg-secondary hover:text-darker transition-colors shadow-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                        <rect x="2" y="9" width="4" height="12"></rect>
                                        <circle cx="4" cy="4" r="2"></circle>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="flex-1 flex justify-center md:justify-end"
                    >
                        <div className="relative w-64 h-64 md:w-96 md:h-96 group">
                            <div className="absolute inset-0 bg-secondary rounded-full blur-[80px] opacity-20 animate-pulse"></div>
                            <img 
                                src="/_old_version/img/pedrohenrique2.jpg" 
                                alt="Pedro Henrique" 
                                className="w-full h-full object-cover rounded-2xl shadow-2xl relative z-10 border border-primary/50 transition-transform duration-500 group-hover:scale-[1.02]"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
