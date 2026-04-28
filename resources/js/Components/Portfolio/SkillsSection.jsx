import { motion } from 'framer-motion';

export default function SkillsSection({ skills }) {
    return (
        <section id="conhecimentos" className="py-24 bg-dark relative">
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meus Conhecimentos</h2>
                <p className="text-gray-400 max-w-2xl mx-auto mb-16">
                    Tecnologias e linguagens com as quais tenho experiência e estudo continuamente.
                </p>

                {skills && skills.length > 0 ? (
                    <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                        {skills.map((skill, index) => (
                            <motion.div 
                                key={skill.id} 
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative w-24 h-24 md:w-32 md:h-32 flex flex-col items-center justify-center bg-darker rounded-2xl border border-primary hover:border-secondary hover:bg-dark transition-all duration-300 hover:-translate-y-3 hover:scale-110 hover:shadow-[0_0_25px_rgba(69,162,158,0.4)] cursor-pointer"
                            >
                                <i className={`${skill.icon_class} text-4xl md:text-5xl text-gray-400 group-hover:text-secondary transition-colors mb-3`}></i>
                                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                                    {skill.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500">Nenhuma habilidade cadastrada.</p>
                )}
            </motion.div>

            {/* Marquee Animation (opcional, replicando a versão HTML anterior mas melhorada) */}
            <div className="mt-20 overflow-hidden w-full bg-primary/20 py-4 border-y border-primary/50 flex opacity-50">
                <div className="flex animate-[marquee_20s_linear_infinite] whitespace-nowrap gap-12 px-6">
                    {/* Renderizamos 3 vezes para criar o loop contínuo perfeitamente */}
                    {[1, 2, 3].map((set) => (
                        <div key={set} className="flex gap-12">
                            {skills?.map((skill) => (
                                <span key={`${set}-${skill.id}`} className="text-gray-400 text-lg flex items-center gap-3">
                                    <i className={skill.icon_class}></i> {skill.name}
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            
            <style jsx="true">{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
            `}</style>
        </section>
    );
}
