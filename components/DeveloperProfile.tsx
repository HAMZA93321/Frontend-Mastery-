import React from 'react';
import { CREATOR_NAME, CREATOR_TITLE, CREATOR_IMAGE_URL } from '../constants';

export const DeveloperProfile: React.FC = () => {
  return (
    <section id="developer-profile" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-gradient-to-br from-brand-black to-gray-900 p-8 md:p-12 overflow-hidden shadow-2xl">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-brand-blue/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-brand-white/10 blur-3xl"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-white p-1.5 shadow-xl overflow-hidden ring-4 ring-brand-blue/30">
                 <img 
                    src={CREATOR_IMAGE_URL} 
                    onError={(e) => {
                        e.currentTarget.src = "https://ui-avatars.com/api/?name=Hamza+Khan&background=0ea5e9&color=fff&size=200";
                    }}
                    alt={CREATOR_NAME}
                    className="w-full h-full rounded-full object-cover"
                 />
              </div>
            </div>

            <div className="text-center md:text-left flex-1 text-white">
              <div className="inline-block px-3 py-1 rounded-full bg-brand-blue/20 border border-brand-blue/40 text-brand-blue text-xs font-bold uppercase tracking-widest mb-4">
                Creator & Engineer
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">{CREATOR_NAME}</h2>
              <p className="text-xl text-gray-300 font-light mb-6">{CREATOR_TITLE}</p>
              
              <p className="text-gray-400 leading-relaxed mb-6 text-lg">
                Passionate about bridging the gap between design and functionality. 
                With expertise in the core pillars of frontend development, I build 
                responsive, accessible, and performant web solutions tailored to client needs.
              </p>

              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {['React', 'TypeScript', 'Tailwind', 'AI Integration', 'UX Design'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-800 rounded text-sm text-gray-300 border border-gray-700">
                        {skill}
                    </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};