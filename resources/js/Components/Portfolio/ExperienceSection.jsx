import { motion } from 'framer-motion';

export default function ExperienceSection({ experiences }) {
    return (
        <section id="experiencia" className="py-24 bg-dark relative border-t border-primary/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experiência Profissional</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Minha trajetória no desenvolvimento de software e atuação no mercado.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {experiences && experiences.length > 0 ? (
                        experiences.map((exp, index) => (
                            <motion.div 
                                key={exp.id} 
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="relative pl-8 md:pl-0"
                            >
                                <div className="md:grid md:grid-cols-5 md:gap-8 items-start relative">
                                    {/* Timeline dot and line */}
                                    <div className="hidden md:flex flex-col items-center col-span-1 h-full relative">
                                        <div className="w-4 h-4 bg-secondary rounded-full relative z-10 shadow-[0_0_10px_rgba(102,252,241,0.5)]"></div>
                                        <div className="absolute top-4 bottom-[-32px] w-0.5 bg-primary/50"></div>
                                    </div>
                                    
                                    {/* Mobile timeline line */}
                                    <div className="md:hidden absolute left-0 top-2 bottom-[-32px] w-0.5 bg-primary/50"></div>
                                    <div className="md:hidden absolute left-[-7px] top-2 w-4 h-4 bg-secondary rounded-full shadow-[0_0_10px_rgba(102,252,241,0.5)]"></div>

                                    {/* Content box */}
                                    <div className="md:col-span-4 bg-darker p-8 rounded-2xl border border-primary hover:border-secondary/50 transition-colors shadow-xl group">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                                            <h3 className="text-2xl font-bold text-white group-hover:text-secondary transition-colors">{exp.role}</h3>
                                            <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full whitespace-nowrap self-start sm:self-auto">
                                                {exp.period}
                                            </span>
                                        </div>
                                        <h4 className="text-xl text-gray-300 mb-6 flex items-center gap-2">
                                            <i className="fas fa-building text-primary"></i> {exp.company}
                                        </h4>
                                        <ul className="text-gray-400 leading-relaxed space-y-3">
                                            {exp.description.split('\n').map((line, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <span className="text-secondary mt-1.5 text-xs">
                                                        <i className="fas fa-circle"></i>
                                                    </span>
                                                    <span>{line.replace('• ', '')}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <p className="text-gray-500 text-center">Nenhuma experiência cadastrada ainda.</p>
                    )}
                </div>
            </div>
        </section>
    );
}
