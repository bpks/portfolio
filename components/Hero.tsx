
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero-gradient relative flex items-center justify-center min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
                Azure Data Engineer | <br />
                <span className="text-azure-blue">11+ Years Experience</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed">
              5+ Years Specialized in Microsoft Fabric, Azure Synapse & Data Pipeline Architecture
            </p>
            <div className="flex flex-wrap items-center gap-5 pt-4">
              <a href="#tech-stack" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-azure-blue rounded-lg hover:brightness-110 shadow-lg shadow-azure-blue/20">
                View My Work
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 border-2 border-white rounded-lg hover:bg-white hover:text-slate-dark">
                Download Resume
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-6 pt-6 text-slate-400 font-medium border-t border-white/10 w-fit">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-azure-blue">mail</span>
                <span>hello@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 fill-azure-blue" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
                <span>linkedin.com/in/helloname</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute inset-0 bg-azure-blue rounded-full blur-3xl opacity-20 profile-aura"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] rounded-full p-2 border-2 border-azure-blue/30 backdrop-blur-sm">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl relative">
                  <img alt="Pavan B Professional Portrait" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDW0X9T_DYTjW4WJyF6b_aGWRpYqkmtY5Xi-bu0btues592tOx7lsWFrH0eMYA2SXstTbuC09BlF0_VSin5Ns04f7EsQ17SlOwKULidp1K5sPKSOQxB-GRKh0qMbDh62c1Ig_wpX9PPH-L_PaBfnfmYwaaOwXXqY8UT32ZNEBhYRAJfM0Jeznu8i_eUTzc-lDNQNCJw_T3RAiYPaljgju4VnSzKtU3p21ezPhh3C-LSGqAcn8I3FRjBuK9BEHVPXq-pnwx-Di0fL38" />
                  <div className="absolute inset-0 bg-azure-blue/10 mix-blend-overlay"></div>
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full shadow-xl">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  <span className="text-sm font-bold text-white uppercase tracking-wider">Available for Consulting</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-50">
        <a href="#tech-stack" aria-label="Scroll down">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2 animate-bounce">
                <div className="w-1 h-2 bg-white rounded-full"></div>
            </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
