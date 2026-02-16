
import React from 'react';
import type { CertificationItem } from '../types';

const certificationData: CertificationItem[] = [
    {
        issuer: 'Microsoft',
        issuerColor: 'text-azure-blue',
        name: 'DP-203: Azure Data Engineer Associate',
        logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAE3lJQs620GRQC1-udEcVTDRIW203GbB3mwhJaI2ybnGcEfA9y4LarL_0ZKFetStCETF4CcgnOR9zLE7tODuqKNGYJNpcjTbNs-6V0M4AVhciGwUfhxhxpmHF4l19tcBtCF1ZORrt9w0Z4YRQtU2E10m8dh98JY2wvB_Ot1GV7SSSgdQ0s9asln7JYt5x_pHW4_wBoc-XJrmmyXTEBAPIDNINnLJ31E3WAR_NLg3eDd0VJohDl9VeabvyQ9c7GXYJGnp7PJC4Nrp8',
        validated: 2024,
        glowClass: 'cert-card-glow-azure border-azure-blue',
    },
    {
        issuer: 'Amazon Web Services',
        issuerColor: 'text-aws-orange',
        name: 'AWS Solutions Architect – Associate',
        logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJvOI1MbqNUqIBsSbnPBx8vdh0RFHJ2RKdXUNy5E6k1ImLOScc4PLg2WvQEGNPnlJya42vS34TijhdKQjYYwbDNEeDmijrIqIvbe8WO-JTeBsqJ5bhutV9CG72d4N7X5OGJejLAOxm3sBRqW279CziWn9xlbZSnB1g-2WpHWFoqpy0uhT0G6I1opsnHIu-SeTQaK2BBiOgT2q0IqY_nwPOCmilJb-yxbS8EE7QS_K75rxoORqSwpa4HPIq2QFp-hBY9ZkP2ElKTYk',
        validated: 2023,
        glowClass: 'cert-card-glow-aws border-aws-orange',
    }
]

const CertificationCard: React.FC<{ item: CertificationItem }> = ({ item }) => (
    <div className={`group relative bg-card-charcoal p-8 md:p-10 border-l-4 rounded-r-xl transition-all duration-300 transform hover:-translate-y-2 ${item.glowClass}`}>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="relative">
                <div className={`absolute inset-0 ${item.issuer === 'Microsoft' ? 'bg-azure-blue' : 'bg-aws-orange'} opacity-20 blur-2xl rounded-full group-hover:opacity-40 transition-opacity`}></div>
                <img alt={item.name} className="w-32 h-32 md:w-40 md:h-40 object-contain relative z-10" src={item.logo} />
            </div>
            <div className="flex-1 text-center md:text-left">
                <span className={`${item.issuerColor} font-bold text-sm tracking-widest uppercase`}>{item.issuer}</span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mt-2 mb-4">{item.name}</h3>
                <div className="space-y-3">
                    <div className="flex items-center justify-center md:justify-start gap-2 text-slate-300">
                        <span className="material-symbols-outlined text-sm">calendar_today</span>
                        <span className="text-sm">Validated: {item.validated}</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-2">
                        <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="text-emerald-400 text-sm font-medium tracking-wide uppercase">Actively Maintained Certification</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 bg-slate-dark relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Certifications & Credentials
          </h2>
          <div className="w-24 h-1 bg-azure-blue mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {certificationData.map(cert => <CertificationCard key={cert.name} item={cert} />)}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
