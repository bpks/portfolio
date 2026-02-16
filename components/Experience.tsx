
import React from 'react';
import type { ExperienceItem } from '../types';

const experienceData: ExperienceItem[] = [
  {
    date: '2021 — Present',
    company: 'HRA-NHS',
    role: 'Senior Data Engineer',
    description: 'Led end-to-end insurance data pipeline development, engineered real-time API-based data integrations, optimized ETL performance for healthcare analytics.',
    tags: ['Azure Data Factory', 'Databricks', 'Healthcare APIs', 'ETL Optimization'],
    isPrimary: true,
  },
  {
    date: '2013 — 2021',
    company: 'WIPRO',
    role: 'Senior Data Engineer',
    description: 'Managed large-scale data infrastructure projects, architected enterprise data solutions, led team of data engineers on mission-critical implementations.',
    tags: ['Enterprise Architecture', 'SQL Server', 'Cloud Migration', 'Team Leadership'],
  },
];

const ExperienceCard: React.FC<{ item: ExperienceItem; reverse?: boolean }> = ({ item, reverse }) => (
    <div className={`relative flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center group`}>
        <div className="hidden md:block md:w-1/2 md:pr-16 text-right">
            {!reverse && <span className={`text-2xl font-bold ${item.isPrimary ? 'text-azure-blue' : 'text-light-azure opacity-80'}`}>{item.date}</span>}
        </div>
        <div className={`hidden md:block md:w-1/2 md:pl-16 ${reverse ? 'text-left' : ''}`}>
            {reverse && <span className={`text-2xl font-bold ${item.isPrimary ? 'text-azure-blue' : 'text-light-azure opacity-80'}`}>{item.date}</span>}
        </div>

        <div className={`absolute left-[-2px] md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 rounded-full z-20 ${item.isPrimary ? 'pulse-node bg-azure-blue' : 'bg-light-azure'}`}></div>
        
        <div className={`w-full pl-10 md:w-1/2 ${reverse ? 'md:pr-16 md:pl-0' : 'md:pl-16'}`}>
            <div className="md:hidden mb-2">
                <span className={`text-lg font-bold ${item.isPrimary ? 'text-azure-blue' : 'text-light-azure'}`}>{item.date}</span>
            </div>
            <article className={`bg-card-charcoal p-8 rounded-2xl border-l-4 ${reverse ? 'md:border-l-0 md:border-r-4' : ''} ${item.isPrimary ? 'border-azure-blue' : 'border-light-azure'} card-glow transition-all duration-300`}>
                <div className="flex flex-col mb-4">
                    <h3 className="text-2xl font-bold text-white">{item.company}</h3>
                    <p className="text-light-azure font-semibold text-lg">{item.role}</p>
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed text-lg">
                    {item.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700">
                    {item.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded bg-slate-dark/50 text-xs font-medium text-slate-400 border border-slate-700">{tag}</span>
                    ))}
                </div>
            </article>
        </div>
    </div>
);

const Experience: React.FC = () => {
  return (
    <section id="experience" className="bg-slate-dark text-slate-200 py-24">
        <header className="w-full max-w-6xl mx-auto px-6 pb-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
                Career Experience
            </h1>
            <p className="text-xl md:text-2xl font-medium text-azure-blue tracking-wide uppercase">
                My Professional Journey
            </p>
            <div className="mt-8 inline-flex items-center gap-4 bg-card-charcoal/50 px-6 py-3 rounded-full border border-slate-700">
                <span className="text-3xl font-bold text-white">11+</span>
                <span className="text-xs text-slate-400 uppercase tracking-widest leading-tight text-left">Years of Professional<br/>Data Engineering</span>
            </div>
        </header>

        <div className="w-full max-w-6xl mx-auto px-6 relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-azure-blue/50 shadow-lg shadow-azure-blue/30 transform md:-translate-x-1/2 z-0"></div>
            <div className="space-y-16 md:space-y-24 relative z-10">
                {experienceData.map((item, index) => (
                    <ExperienceCard key={item.company} item={item} reverse={index % 2 !== 0} />
                ))}
            </div>
        </div>
    </section>
  );
};

export default Experience;
