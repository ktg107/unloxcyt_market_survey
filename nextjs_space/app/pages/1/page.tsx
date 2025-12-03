
import Image from 'next/image';

export default function Slide1() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-gradient-to-br from-slate-900 to-slate-700">
      {/* Background Image */}
      <Image
        src="https://static.abacusaicdn.net/images/ad1b9c07-b69b-4b4c-948e-84cc9a1161fe.jpg"
        alt="Modern pharmaceutical research laboratory"
        fill
        className="object-cover"
        style={{ filter: 'brightness(0.4) saturate(0.8)' }}
      />
      
      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-8">
        {/* Main Content */}
        <div className="bg-slate-900/95 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-10 max-w-7xl mx-auto text-center shadow-2xl">
          <h1 className="text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Unloxcyt Market Survey
          </h1>
          <h2 className="text-5xl font-bold text-white mb-4">
            Comprehensive Market Analysis of Cosibelimab-ipdl
          </h2>
          <h3 className="text-3xl text-gray-200 mb-8">
            PD-L1 Inhibitor for Advanced Cutaneous Squamous Cell Carcinoma
          </h3>
          <p className="text-2xl text-gray-300 mb-2">
            Checkpoint Therapeutics | Sun Pharmaceutical Industries
          </p>
          <p className="text-2xl text-blue-400 mb-8">
            November 2025
          </p>
          <p className="text-base text-gray-400">
            Prepared By: Strategic Market Intelligence
          </p>
        </div>
        
        {/* Footer */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <p className="text-base text-gray-400/60">
            Confidential | Strategic Analysis
          </p>
        </div>
      </div>
    </div>
  );
}