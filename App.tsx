import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { DeveloperProfile } from './components/DeveloperProfile';
import { LearningContent } from './components/LearningContent';
import { fetchLearningContent } from './services/geminiService';
import { CATEGORIES, INITIAL_SUGGESTIONS } from './constants';
import { TechPillar, LearningResponse } from './types';

function App() {
  const [selectedPillar, setSelectedPillar] = useState<TechPillar>(TechPillar.REACT);
  const [customSearch, setCustomSearch] = useState('');
  const [content, setContent] = useState<LearningResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [isSwitchingPillar, setIsSwitchingPillar] = useState(false);

  const handleFetchTopic = async (topic: string) => {
    setLoading(true);
    setContent(null);
    try {
      const data = await fetchLearningContent(topic, selectedPillar);
      setContent(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handlePillarChange = (pillar: TechPillar) => {
    if (selectedPillar === pillar || isSwitchingPillar) return;

    setIsSwitchingPillar(true);
    // Clear content immediately for visual feedback
    setContent(null);
    setCustomSearch('');

    // Simulate network/loading delay for suggestions
    setTimeout(() => {
      setSelectedPillar(pillar);
      setIsSwitchingPillar(false);
    }, 600);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (customSearch.trim()) {
      handleFetchTopic(customSearch);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      <main className="flex-grow">
        {/* Hero / Intro Section */}
        <div className="bg-white border-b border-gray-100 pt-10 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-black mb-6">
              Master the <span className="text-brand-blue">5 Pillars</span> of Frontend
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto mb-10">
              Select a technology below and ask anything. Our AI engine, curated by Hamza Khan, will generate a custom lesson just for you.
            </p>

            {/* Pillar Selectors */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handlePillarChange(cat.id)}
                  disabled={isSwitchingPillar}
                  className={`
                    relative p-4 rounded-xl border-2 transition-all duration-300 flex flex-col items-center gap-3 group
                    ${selectedPillar === cat.id 
                      ? `border-brand-blue bg-brand-lightBlue/30 shadow-lg scale-105 ring-2 ring-brand-blue/20` 
                      : 'border-gray-100 bg-white shadow-sm hover:shadow-md hover:bg-gray-50 hover:border-brand-blue/30'}
                    ${isSwitchingPillar ? 'opacity-60 cursor-not-allowed grayscale-[0.5]' : 'cursor-pointer'}
                  `}
                >
                  {/* Icon - ALWAYS COLORED now, as requested */}
                  <div className={`w-12 h-12 flex items-center justify-center transition-transform group-hover:scale-110 ${cat.color}`}>
                    <svg 
                      viewBox={cat.viewBox} 
                      className="w-full h-full fill-current drop-shadow-sm"
                      aria-hidden="true"
                    >
                      <path d={cat.svgPath} />
                    </svg>
                  </div>
                  
                  <span className={`font-bold text-sm ${selectedPillar === cat.id ? 'text-brand-black' : 'text-gray-600'}`}>
                    {cat.name}
                  </span>
                  
                  {selectedPillar === cat.id && !isSwitchingPillar && (
                     <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-blue rounded-full border-2 border-white flex items-center justify-center text-white text-xs shadow-sm">
                        ✓
                     </div>
                  )}
                  
                  {/* Loading spinner overlay for the specific button being clicked (optional, but clean) */}
                  {isSwitchingPillar && selectedPillar === cat.id && (
                     <div className="absolute inset-0 flex items-center justify-center bg-white/50 rounded-xl">
                        <div className="w-5 h-5 border-2 border-brand-blue border-t-transparent rounded-full animate-spin"></div>
                     </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Interaction Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Search & Suggestions */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="text-center mb-8">
               <h3 className="text-lg font-semibold text-gray-400 uppercase tracking-wide mb-4 transition-all">
                 What do you want to learn in <span className="text-brand-black transition-opacity duration-300">{isSwitchingPillar ? '...' : selectedPillar}</span>?
               </h3>
               
               {/* Quick Suggestions with Skeleton Loader */}
               {isSwitchingPillar ? (
                 <div className="flex flex-wrap justify-center gap-2 mb-6 animate-pulse">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-9 w-32 bg-gray-200 rounded-full"></div>
                    ))}
                 </div>
               ) : (
                 <div className="flex flex-wrap justify-center gap-2 mb-6 animate-in fade-in zoom-in duration-300">
                   {INITIAL_SUGGESTIONS[selectedPillar].map((topic) => (
                     <button
                      key={topic}
                      onClick={() => handleFetchTopic(topic)}
                      disabled={loading}
                      className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-600 hover:border-brand-blue hover:text-brand-blue hover:bg-brand-lightBlue/20 transition-all disabled:opacity-50"
                     >
                       {topic}
                     </button>
                   ))}
                 </div>
               )}

               {/* Search Bar - White Background, Black Border, Blue Button */}
               <form onSubmit={handleSearchSubmit} className="relative max-w-xl mx-auto">
                 <div className="relative flex items-center group">
                    <input
                      type="text"
                      value={customSearch}
                      onChange={(e) => setCustomSearch(e.target.value)}
                      placeholder={isSwitchingPillar ? "Loading..." : `Search ${selectedPillar} (e.g., "Best practices")`}
                      disabled={isSwitchingPillar || loading}
                      className="w-full pl-6 pr-16 py-4 rounded-full border-2 border-brand-black bg-white text-brand-black placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-brand-lightBlue/30 shadow-sm transition-all text-lg disabled:bg-gray-50 disabled:text-gray-400"
                    />
                    <button 
                      type="submit"
                      disabled={!customSearch.trim() || loading || isSwitchingPillar}
                      className="absolute right-2 top-2 bottom-2 aspect-square bg-brand-blue text-white rounded-full flex items-center justify-center hover:bg-brand-darkBlue disabled:opacity-70 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg transform active:scale-95"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      )}
                    </button>
                 </div>
               </form>
            </div>
          </div>

          {/* Result Display */}
          <LearningContent 
            content={content} 
            loading={loading} 
            selectedPillar={selectedPillar} 
          />
        </div>

        {/* Developer Profile Section */}
        <DeveloperProfile />
      </main>

      <Footer />
    </div>
  );
}

export default App;