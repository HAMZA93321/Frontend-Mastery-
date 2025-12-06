import React from 'react';
import { LearningResponse, TechPillar } from '../types';

interface LearningContentProps {
  content: LearningResponse | null;
  loading: boolean;
  selectedPillar: TechPillar;
}

export const LearningContent: React.FC<LearningContentProps> = ({ content, loading, selectedPillar }) => {
  if (loading) {
    return (
      <div className="w-full max-w-4xl mx-auto p-8 text-center">
        <div className="animate-spin inline-block w-12 h-12 border-4 border-current border-t-transparent text-brand-blue rounded-full mb-4" role="status" aria-label="loading"></div>
        <p className="text-xl text-gray-600 font-medium animate-pulse">Consulting the AI for {selectedPillar} knowledge...</p>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="w-full max-w-4xl mx-auto p-12 text-center border-2 border-dashed border-gray-200 rounded-xl bg-gray-50">
        <span className="text-4xl block mb-4">👆</span>
        <h3 className="text-xl font-bold text-gray-700 mb-2">Ready to Learn?</h3>
        <p className="text-gray-500">Select a suggested topic above or type your own query to generate a lesson.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
      <div className="bg-brand-black p-6 md:p-8 text-white">
        <div className="flex items-center gap-3 mb-2">
            <span className="px-2 py-1 rounded bg-brand-blue text-xs font-bold text-white uppercase">{selectedPillar}</span>
        </div>
        <h2 className="text-3xl font-bold">{content.title}</h2>
      </div>

      <div className="p-6 md:p-8 space-y-8">
        {/* Explanation Section */}
        <section>
          <h3 className="text-lg font-bold text-brand-black mb-3 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-brand-lightBlue text-brand-blue flex items-center justify-center text-sm">1</span>
            Explanation
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            {content.explanation}
          </p>
        </section>

        {/* Code Example Section */}
        <section className="relative group">
          <h3 className="text-lg font-bold text-brand-black mb-3 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-brand-lightBlue text-brand-blue flex items-center justify-center text-sm">2</span>
            Code Example
          </h3>
          <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto shadow-inner border border-slate-700">
            <pre className="text-sm font-mono text-gray-100 whitespace-pre-wrap">
              <code>{content.codeExample}</code>
            </pre>
          </div>
        </section>

        {/* Key Takeaways Section */}
        <section>
          <h3 className="text-lg font-bold text-brand-black mb-3 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-brand-lightBlue text-brand-blue flex items-center justify-center text-sm">3</span>
            Key Takeaways
          </h3>
          <ul className="grid gap-3 sm:grid-cols-3">
            {content.keyTakeaways.map((point, index) => (
              <li key={index} className="bg-brand-lightBlue/30 border border-brand-lightBlue p-4 rounded-lg text-brand-darkBlue font-medium text-sm">
                ✅ {point}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};