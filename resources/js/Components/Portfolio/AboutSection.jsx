import { motion } from 'framer-motion';

export default function AboutSection() {
    return (
        <section id="sobre" className="py-24 bg-darker relative border-t border-primary/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row gap-16 items-center"
                >
                    
                    <div className="flex-1 w-full relative">
                        <div className="absolute inset-0 bg-secondary blur-[100px] opacity-10"></div>
                        <div className="relative bg-dark border border-primary/50 p-8 md:p-12 rounded-2xl shadow-xl">
                            <i className="fas fa-quote-left text-4xl text-secondary/30 absolute top-6 left-6"></i>
                            <h2 className="text-3xl font-bold text-white mb-6 relative z-10 flex items-center gap-4">
                                <span className="w-12 h-[2px] bg-secondary inline-block"></span>
                                Sobre Mim
                            </h2>
                            <div className="space-y-4 text-gray-400 leading-relaxed relative z-10">
                                <h3 className="text-2xl font-bold text-white mb-2">Resumo Profissional</h3>
                                <p>
                                    Desenvolvedor back-end em estágio com 10 meses de experiência prática em sistemas legados e modernização de aplicações (PDV/ERP).
                                </p>
                                <p>
                                    Especializado em <strong className="text-white">Delphi (desktop e web UniGui), PHP/Laravel e stack moderna (React, TypeScript)</strong>. Demonstro impacto mensurável através de otimizações de banco de dados, refatoração de código crítico e integração de componentes fiscais em ambiente de produção.
                                </p>
                                
                                <div className="pt-6 mt-6 border-t border-primary/20">
                                    <h3 className="text-2xl font-bold text-white mb-4">Educação & Formação</h3>
                                    <div className="space-y-4">
                                        <div className="bg-darker/50 p-4 rounded-lg border border-primary/20">
                                            <h4 className="font-bold text-white">Bacharelado em Eng. de Software</h4>
                                            <p className="text-sm text-secondary mb-1">UNIFANOR WYDEN • Abril 2026 - Previsão: Dez 2030</p>
                                        </div>
                                        <div className="bg-darker/50 p-4 rounded-lg border border-primary/20">
                                            <h4 className="font-bold text-white">Técnico em Informática</h4>
                                            <p className="text-sm text-secondary mb-1">EEEP LUIZA DE TEODORO VIEIRA • Janeiro 2023 - Dez 2025</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 space-y-8">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-dark border border-primary/30 p-6 rounded-xl hover:border-secondary/50 transition-colors">
                                <i className="fas fa-code text-3xl text-secondary mb-4"></i>
                                <h3 className="text-xl font-semibold text-white mb-2">Front-end</h3>
                                <p className="text-sm text-gray-500">Interfaces dinâmicas e responsivas com React, HTML e CSS moderno.</p>
                            </div>
                            <div className="bg-dark border border-primary/30 p-6 rounded-xl hover:border-secondary/50 transition-colors">
                                <i className="fas fa-server text-3xl text-secondary mb-4"></i>
                                <h3 className="text-xl font-semibold text-white mb-2">Back-end</h3>
                                <p className="text-sm text-gray-500">APIs e regras de negócio com PHP/Laravel, Python e Java.</p>
                            </div>
                            <div className="bg-dark border border-primary/30 p-6 rounded-xl hover:border-secondary/50 transition-colors">
                                <i className="fas fa-database text-3xl text-secondary mb-4"></i>
                                <h3 className="text-xl font-semibold text-white mb-2">Database</h3>
                                <p className="text-sm text-gray-500">Modelagem e consultas eficientes em MySQL e SQLite.</p>
                            </div>
                            <div className="bg-dark border border-primary/30 p-6 rounded-xl hover:border-secondary/50 transition-colors">
                                <i className="fas fa-mobile-alt text-3xl text-secondary mb-4"></i>
                                <h3 className="text-xl font-semibold text-white mb-2">Design</h3>
                                <p className="text-sm text-gray-500">Foco em UI/UX, prototipação ágil e mobile first.</p>
                            </div>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
