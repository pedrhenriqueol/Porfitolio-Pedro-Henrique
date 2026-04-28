import { motion } from 'framer-motion';

export default function ProjectsSection({ projects }) {
    return (
        <section id="projetos" className="py-24 bg-darker relative border-t border-primary/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meus Projetos</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Uma seleção dos meus trabalhos recentes em desenvolvimento front-end, back-end e design de interfaces.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects && projects.length > 0 ? (
                        projects.map((project, index) => (
                            <motion.div 
                                key={project.id} 
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="bg-dark rounded-xl overflow-hidden border border-primary/50 group hover:border-secondary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(31,40,51,0.6)] flex flex-col h-full"
                            >
                                <div className="h-48 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-darker/20 group-hover:bg-transparent transition-colors z-10"></div>
                                    <img 
                                        src={project.image_url} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "https://via.placeholder.com/600x400/1F2833/C5C6C7?text=Imagem+Indisponível";
                                        }}
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">{project.title}</h3>
                                    
                                    {project.tags && (
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.map((tag, idx) => (
                                                <span key={idx} className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                    
                                    <p className="text-gray-400 text-sm mb-6 flex-grow">{project.description}</p>
                                    
                                    <div className="flex gap-4 mt-auto">
                                        {project.repo_link && (
                                            <a href={project.repo_link} target="_blank" rel="noreferrer" className="flex-1 text-center py-2 px-4 bg-primary text-white text-sm font-medium rounded hover:bg-secondary hover:text-darker transition-colors">
                                                <i className="fas fa-code mr-2"></i> Código
                                            </a>
                                        )}
                                        {project.demo_link && (
                                            <a href={project.demo_link} target="_blank" rel="noreferrer" className="flex-1 text-center py-2 px-4 bg-transparent border border-secondary text-secondary text-sm font-medium rounded hover:bg-secondary hover:text-darker transition-colors">
                                                <i className="fas fa-external-link-alt mr-2"></i> Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <p className="text-gray-500 col-span-3 text-center">Nenhum projeto cadastrado ainda.</p>
                    )}
                </div>
            </div>
        </section>
    );
}
