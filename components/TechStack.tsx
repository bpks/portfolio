
import React from 'react';
import type { SkillCategory, Skill } from '../types';

const skillData: SkillCategory[] = [
  {
    icon: 'database',
    title: 'Data Engineering',
    subtitle: 'Cloud Infrastructure & Warehousing',
    skills: [
      { name: 'Microsoft Fabric', level: 'Expert', progress: 95 },
      { name: 'One Lake', level: 'Expert', progress: 90 },
      { name: 'Azure Data Factory (ADF)', level: 'Expert', progress: 98 },
      { name: 'Power BI', level: 'Advanced', progress: 85 },
    ],
  },
  {
    icon: 'cyclone',
    title: 'Big Data Technologies',
    subtitle: 'Distributed Systems & Real-time',
    skills: [
      { name: 'Databricks', level: 'Expert', progress: 96 },
      { name: 'Apache Spark', level: 'Expert', progress: 94 },
      { name: 'Delta Lake', level: 'Advanced', progress: 88 },
      { name: 'Apache Kafka', level: 'Advanced', progress: 82 },
    ],
  },
  {
    icon: 'terminal',
    title: 'Programming Languages',
    subtitle: 'Functional & Query Languages',
    skills: [
      { name: 'Python', level: 'Expert', progress: 98 },
      { name: 'SQL', level: 'Expert', progress: 100 },
      { name: 'Scala', level: 'Advanced', progress: 75 },
      { name: 'T-SQL', level: 'Expert', progress: 95 },
    ],
  },
  {
    icon: 'cloud_sync',
    title: 'DevOps & Cloud',
    subtitle: 'CI/CD & Containerization',
    skills: [
      { name: 'Azure DevOps', level: 'Expert', progress: 92 },
      { name: 'Git', level: 'Expert', progress: 95 },
      { name: 'CI/CD Pipelines', level: 'Expert', progress: 90 },
      { name: 'Docker', level: 'Advanced', progress: 80 },
    ],
  },
];

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div>
    <div className="flex justify-between items-end mb-1">
      <span className="text-sm font-medium text-slate-300">{skill.name}</span>
      <span className={`text-[10px] font-bold text-azure-blue uppercase tracking-tighter bg-azure-blue/10 px-2 py-0.5 rounded`}>
        {skill.level}
      </span>
    </div>
    <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden mt-1.5">
      <div className="h-full bg-azure-blue rounded-full" style={{ width: `${skill.progress}%` }}></div>
    </div>
  </div>
);

const TechStackCard: React.FC<{ category: SkillCategory }> = ({ category }) => (
  <div className="bg-card-charcoal border-l-4 border-l-azure-blue p-8 rounded-r-xl transition-all duration-300 ease-in-out relative overflow-hidden hover:-translate-y-2 hover:shadow-lg hover:shadow-azure-blue/20">
    <div className="flex items-center gap-4 mb-8">
      <div className="w-14 h-14 rounded-xl bg-azure-blue/10 flex items-center justify-center text-azure-blue">
        <span className="material-symbols-outlined text-4xl">{category.icon}</span>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-white">{category.title}</h3>
        <p className="text-sm text-slate-500 font-medium">{category.subtitle}</p>
      </div>
    </div>
    <div className="space-y-6">
      {category.skills.map((skill) => (
        <SkillBar key={skill.name} skill={skill} />
      ))}
    </div>
  </div>
);

const TechStack: React.FC = () => {
  return (
    <section id="tech-stack" className="bg-slate-dark py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-azure-blue/10 rounded-full blur-[120px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-azure-blue font-bold text-sm tracking-[0.3em] uppercase mb-4">Core Competencies</h2>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">Technical Mastery</h1>
            <p className="max-w-3xl mx-auto text-xl text-slate-400 leading-relaxed font-light">
                Architecting high-performance data ecosystems with 11+ years of expertise in the Azure cloud environment.
            </p>
        </div>
        <div className="max-w-7xl mx-auto pt-16 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {skillData.map(category => (
                    <TechStackCard key={category.title} category={category} />
                ))}
            </div>
        </div>
    </section>
  );
};

export default TechStack;
