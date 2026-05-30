'use client';

import { motion } from 'framer-motion';

const timeline = [
  {
    year: '2023',
    title: 'Início na programação',
    description:
      'Primeiros estudos em desenvolvimento de software e lógica de programação.',
  },

  {
    year: '2024',
    title: 'Projetos Fullstack',
    description:
      'Desenvolvimento de aplicações web modernas utilizando React e Node.js.',
  },

  {
    year: '2025',
    title: 'Inteligência Artificial',
    description:
      'Estudos avançados em Deep Learning, CNNs e Visão Computacional.',
  },

  {
    year: '2026',
    title: 'Portfólio e projetos avançados',
    description:
      'Criação de projetos profissionais focados em IA e engenharia de software.',
  },
];

export default function Timeline() {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.3em] text-purple-400 mb-4">
            Minha Jornada
          </p>

          <h2 className="text-5xl font-bold">
            Linha do tempo
          </h2>
        </div>

        <div className="relative border-l border-purple-500/30">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16 ml-8 relative"
            >
              <div className="absolute -left-[41px] top-2 w-5 h-5 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50" />

              <span className="text-purple-400 font-bold text-lg">
                {item.year}
              </span>

              <h3 className="text-2xl font-bold mt-2 mb-4">
                {item.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}