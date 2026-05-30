'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import SpaceBackground from '@/components/SpaceBackgroud';
import Nebula from '@/components/Nebula';
import Timeline from '@/components/Timeline';

export default function GalaxyPortfolio() {
  const projects = [
    {
      title: 'Integração com API Pública',
      description:
        'Este projeto implementa um pipeline ETL em Python para integração com a API de Dados Abertos da ANS, realizando o download, processamento e consolidação de dados disponíveis.',
      tech: ['Python', 'Pandas', 'API'],
      github: 'https://github.com/ThiagoRDuarte/Integration-With-Public-API',
    },
    {
      title: 'API integrada a uma interface Web',
      description:
        'Este módulo implementa uma API REST em Python integrada a uma interface web em Vue.js, utilizando dados que já foram tratados.',
      tech: ['Python', 'Vue.js', 'FastAPI'],
      github: 'https://github.com/ThiagoRDuarte/API-and-web-interface-testing',
    },
    {
      title: 'Validador de dados',
      description:
        'Construir um pipeline de validação, enriquecimento e agregação de dados, utilizando Python e arquivos CSV.',
      tech: ['Python', 'Pandas', 'PostgreSQL'],
      github: 'https://github.com/ThiagoRDuarte/Data-Transformation-and-Validation-Test',
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#050816] via-[#090325] to-black text-white">

      <SpaceBackground />
      <Nebula />

      {/* Content */}
      <div className="relative z-10">

        {/* Navbar */}
        <header className="fixed top-0 w-full backdrop-blur-md bg-black/20 border-b border-white/10 z-50">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold tracking-widest text-white">
              THIAGO<span className="text-purple-400">RAMOS</span>
            </h1>
            <div className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
              <a href="#sobre" className="hover:text-purple-400 transition">Sobre</a>
              <a href="#projetos" className="hover:text-purple-400 transition">Projetos</a>
              <a href="#jornada" className="hover:text-purple-400 transition">Minha Jornada</a>
              <a href="#contato" className="hover:text-purple-400 transition">Contato</a>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 text-center">
          <div className="max-w-4xl">
            <p className="uppercase tracking-[0.4em] text-purple-400 mb-6 text-sm">
              Portfólio Desenvolvedor
            </p>
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Construindo
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {' '}Experiências
              </span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              Desenvolvedor focado em Python e interfaces modernas.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/curriculo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl bg-purple-600 hover:bg-purple-500 transition font-semibold shadow-lg shadow-purple-500/30"
              >
                Currículo
              </a>
              <a
                href="curriculo.pdf"
                target="_blank"
                className="px-8 py-4 rounded-2xl border border-white/20 hover:border-purple-400 hover:bg-white/5 transition"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/thiago-ramos-33316722b/"
                target="_blank"
                className="px-8 py-4 rounded-2xl border border-white/20 hover:border-blue-400 hover:bg-white/5 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* Sobre */}
        <section id="sobre" className="py-32 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-purple-400 uppercase tracking-[0.3em] mb-4">
                Sobre Mim
              </p>
              <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8">
                Criando tecnologia
                <br />
                com propósito.
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Sou estudante de Ciência da Computação,
                apaixonado por Inteligência Artificial, engenharia de software e
                experiências digitais modernas.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                Tenho foco no desenvolvimento de aplicações fullstack,
                interfaces futuristas e soluções utilizando IA e visão computacional.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Meu objetivo é transformar problemas complexos em soluções digitais Inteligentes.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                'React',
                'Next.js',
                'TypeScript',
                'Python',
                'Node.js',
                'TensorFlow',
              ].map((skill) => (
                <div
                  key={skill}
                  className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:scale-105 hover:border-purple-500/50 transition duration-300"
                >
                  <h3 className="text-lg font-semibold">{skill}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projetos */}
        <section id="projetos" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-purple-400 uppercase tracking-[0.3em] mb-4">
                Projetos
              </p>
              <h2 className="text-4xl md:text-6xl font-bold">
                Projetos em destaque
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <a
                  key={project.title}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-purple-400/50 hover:scale-[1.03] transition duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-purple-500/0 to-purple-500/10 opacity-0 group-hover:opacity-100 transition" />
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-4 py-2 rounded-full bg-white/10 text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-purple-400 font-semibold">
                      Ver Repositório →
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <Timeline />

        {/* Contato */}
        <section id="contato" className="py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-purple-400 uppercase tracking-[0.3em] mb-4">
              Contato
            </p>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Vamos criar algo incrível.
            </h2>
            <p className="text-gray-300 text-lg mb-12">
              Entre em contato.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="mailto:thiago.duarte2004@yahoo.com"
                className="px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 transition"
              >
                Email
              </a>
              <a
                href="https://github.com/ThiagoRDuarte/SiteThiagoRamos"
                target="_blank"
                className="px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 transition"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/thiago-ramos-33316722b/"
                target="_blank"
                className="px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-8 text-center text-gray-500">
          © 2026 Thiago Ramos — Portfolio Galaxy
        </footer>

      </div>
    </main>
  );
}