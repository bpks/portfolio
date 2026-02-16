
import React from 'react';

const Contact: React.FC = () => {

    const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

  return (
    <footer id="contact" className="bg-card-charcoal pt-20 pb-10 text-slate-300 border-t border-white/5">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-16">
                <div className="max-w-xl">
                    <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Contact</h3>
                    <h2 className="text-4xl md:text-5xl font-bold text-azure-blue mb-6">Let's Connect</h2>
                    <p className="text-lg text-slate-400 leading-relaxed">
                        Interested in discussing data architecture, cloud migrations, or scalable engineering solutions? I'm currently open to new opportunities and collaborations.
                    </p>
                </div>
                <div className="flex flex-col gap-6 w-full md:w-auto">
                    <a className="flex items-center gap-4 group p-4 bg-white/5 rounded-lg border border-white/10 hover:border-azure-blue hover:bg-white/10 transition-all" href="mailto:hello@gmail.com">
                        <div className="h-12 w-12 rounded-full bg-azure-blue/10 flex items-center justify-center text-azure-blue">
                            <span className="material-symbols-outlined">mail</span>
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 uppercase font-bold tracking-tighter">Email Me</p>
                            <p className="text-white font-medium group-hover:text-azure-blue transition-colors">hello@gmail.com</p>
                        </div>
                    </a>
                    <a className="flex items-center gap-4 group p-4 bg-white/5 rounded-lg border border-white/10 hover:border-azure-blue hover:bg-white/10 transition-all" href="https://linkedin.com/in/helloname">
                        <div className="h-12 w-12 rounded-full bg-azure-blue/10 flex items-center justify-center text-azure-blue">
                            <span className="material-symbols-outlined">link</span>
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 uppercase font-bold tracking-tighter">LinkedIn</p>
                            <p className="text-white font-medium group-hover:text-azure-blue transition-colors">linkedin.com/in/helloname</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-slate-500 text-sm">
                    © 2024 Pavan B. All rights reserved.
                </p>
                <div className="flex space-x-6 text-slate-500 text-sm">
                    <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
                    <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
                </div>
                <a onClick={scrollToTop} className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors cursor-pointer" href="#">
                    Back to top
                    <span className="material-symbols-outlined text-lg group-hover:-translate-y-1 transition-transform">arrow_upward</span>
                </a>
            </div>
        </div>
    </footer>
  );
};

export default Contact;
