import React from 'react';
import { CREATOR_NAME, CREATOR_TAGLINE, CREATOR_IMAGE_URL } from '../constants';

export const Header: React.FC = () => {
  const scrollToProfile = () => {
    // Simple scroll to profile section if it exists, otherwise just smooth scroll down
    const profileSection = document.getElementById('developer-profile');
    if (profileSection) {
        profileSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-brand-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🚀</span>
            <h1 className="text-2xl font-bold text-brand-black tracking-tight">
              Frontend<span className="text-brand-blue">Mastery</span>
            </h1>
          </div>
          
          {/* Navigation / Dropdown */}
          <nav className="flex items-center">
            <div className="relative group">
                <button className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors text-brand-black font-semibold">
                    <span>About Me</span>
                    <svg className="w-4 h-4 text-gray-500 group-hover:text-brand-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                {/* Dropdown Content */}
                <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                    <div className="p-5">
                        <p className="text-xs font-bold text-brand-blue uppercase tracking-wider mb-3">
                            The Developer
                        </p>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200 flex-shrink-0">
                                <img 
                                    src={CREATOR_IMAGE_URL} 
                                    onError={(e) => {
                                        e.currentTarget.src = "https://ui-avatars.com/api/?name=Hamza+Khan&background=0ea5e9&color=fff";
                                    }}
                                    alt={CREATOR_NAME}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 leading-tight">{CREATOR_NAME}</h3>
                                <span className="text-xs text-gray-500">Frontend Engineer</span>
                            </div>
                        </div>
                        <p className="text-sm text-gray-600 italic mb-4 leading-relaxed">
                            "{CREATOR_TAGLINE}"
                        </p>
                        <button 
                            onClick={scrollToProfile}
                            className="w-full py-2 bg-brand-black text-white text-sm font-semibold rounded-lg hover:bg-brand-blue transition-colors"
                        >
                            View Full Profile & CV
                        </button>
                    </div>
                </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};