import { useForm } from '@inertiajs/react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        message: '',
    });
    const [successMessage, setSuccessMessage] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        post(route('portfolio.message'), {
            onSuccess: () => {
                reset();
                setSuccessMessage(true);
                setTimeout(() => setSuccessMessage(false), 5000);
            },
        });
    };

    return (
        <section id="contato" className="py-24 bg-dark relative">
            <div className="absolute inset-0 bg-primary/5"></div>
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
            >
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Vamos Conversar?</h2>
                    <p className="text-gray-400">
                        Caso tenha interesse em conversar ou colaborar em algum projeto, me envie uma mensagem.
                    </p>
                </div>

                <div className="bg-darker p-8 md:p-10 rounded-2xl border border-primary shadow-2xl">
                    {successMessage && (
                        <div className="mb-6 p-4 bg-secondary/20 border border-secondary text-secondary rounded-lg flex items-center gap-3">
                            <i className="fas fa-check-circle text-xl"></i>
                            <p>Sua mensagem foi enviada com sucesso! Entrarei em contato em breve.</p>
                        </div>
                    )}

                    <form onSubmit={submit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Seu nome</label>
                                <input
                                    id="name"
                                    type="text"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    className="w-full bg-dark border border-primary/50 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                                    placeholder="João Silva"
                                />
                                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Seu e-mail</label>
                                <input
                                    id="email"
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    className="w-full bg-dark border border-primary/50 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                                    placeholder="joao@exemplo.com"
                                />
                                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Sua mensagem</label>
                            <textarea
                                id="message"
                                value={data.message}
                                onChange={(e) => setData('message', e.target.value)}
                                rows="5"
                                className="w-full bg-dark border border-primary/50 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all resize-none"
                                placeholder="Olá, gostaria de conversar sobre..."
                            ></textarea>
                            {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full bg-secondary text-darker font-bold py-4 rounded-lg hover:bg-accent transition-colors flex justify-center items-center gap-2 disabled:opacity-50"
                        >
                            {processing ? (
                                <i className="fas fa-spinner fa-spin"></i>
                            ) : (
                                <>
                                    <i className="fas fa-paper-plane"></i> Enviar Mensagem
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </motion.div>
        </section>
    );
}
