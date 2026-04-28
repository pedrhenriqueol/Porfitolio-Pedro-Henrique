import { Head } from '@inertiajs/react';
import HeroSection from '@/Components/Portfolio/HeroSection';
import AboutSection from '@/Components/Portfolio/AboutSection';
import ExperienceSection from '@/Components/Portfolio/ExperienceSection';
import SkillsSection from '@/Components/Portfolio/SkillsSection';
import ProjectsSection from '@/Components/Portfolio/ProjectsSection';
import ContactSection from '@/Components/Portfolio/ContactSection';

export default function Index({ projects, skills, experiences }) {
    return (
        <div className="min-h-screen bg-darker text-white font-sans selection:bg-accent selection:text-darker">
            <Head title="Pedro Henrique | Portfólio" />

            {/* Navbar simples */}
            <nav className="fixed top-0 w-full bg-darker/90 backdrop-blur-md border-b border-primary z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex-shrink-0 flex items-center">
                            <span className="text-xl font-bold tracking-wider text-white">PEDRO<span className="text-secondary">.DEV</span></span>
                        </div>
                        <div className="hidden md:flex space-x-8">
                            <a href="#home" className="text-gray-300 hover:text-white transition">Home</a>
                            <a href="#sobre" className="text-gray-300 hover:text-white transition">Sobre</a>
                            <a href="#experiencia" className="text-gray-300 hover:text-white transition">Experiência</a>
                            <a href="#projetos" className="text-gray-300 hover:text-white transition">Projetos</a>
                            <a href="#contato" className="text-gray-300 hover:text-white transition">Contato</a>
                        </div>
                    </div>
                </div>
            </nav>

            <main>
                <HeroSection />
                <AboutSection />
                <ExperienceSection experiences={experiences} />
                <SkillsSection skills={skills} />
                <ProjectsSection projects={projects} />
                <ContactSection />
            </main>

            <footer className="bg-dark py-8 text-center border-t border-primary">
                <p className="text-gray-400">
                    &copy; {new Date().getFullYear()} Pedro Henrique. Todos os direitos reservados.
                </p>
            </footer>
        </div>
    );
}
