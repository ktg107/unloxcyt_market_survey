
import { Award, Target, Zap, TrendingUp, Globe } from 'lucide-react';

export default function Slide10() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-gradient-to-br from-slate-900 to-slate-700 text-white">
      <div className="flex flex-col w-full h-full">
        {/* Header */}
        <div className="flex-none bg-slate-800/90 p-6 flex items-center gap-4">
          <Award className="text-orange-400" size={48} />
          <h1 className="text-6xl font-bold text-white">Investment Thesis &amp; Conclusion</h1>
        </div>

        {/* Main Content */}
        <div className="flex-1 min-h-0 grid grid-cols-[3fr_2fr] gap-6 p-8">
          {/* Left Column - Investment Thesis */}
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold text-white">Investment Thesis</h2>
            <div className="bg-slate-800/90 p-4 rounded-lg border-l-4 border-blue-400">
              <p className="text-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">
                Unloxcyt offers a compelling opportunity in the cSCC market with a first-in-class mechanism, backed by Sun Pharma's global infrastructure.
              </p>
            </div>

            <h3 className="text-4xl font-bold text-white mt-2">Why Unloxcyt Succeeds</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-slate-800/90 p-3 rounded-lg">
                <Target className="text-blue-400 mt-1 flex-shrink-0" size={28} />
                <div>
                  <h4 className="text-2xl font-bold text-white">Market Validation</h4>
                  <p className="text-xl text-gray-300">FDA approved; $1B+ U.S. market with strong annual growth.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-slate-800/90 p-3 rounded-lg">
                <Zap className="text-purple-400 mt-1 flex-shrink-0" size={28} />
                <div>
                  <h4 className="text-2xl font-bold text-white">Differentiation Advantage</h4>
                  <p className="text-xl text-gray-300">First-and-only PD-L1 inhibitor for cSCC with a unique ADCC mechanism.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-slate-800/90 p-3 rounded-lg">
                <TrendingUp className="text-green-400 mt-1 flex-shrink-0" size={28} />
                <div>
                  <h4 className="text-2xl font-bold text-white">Revenue Potential</h4>
                  <p className="text-xl text-gray-300">Peak sales projection of $1.2-1.4B with 30-35% market share capture.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-slate-800/90 p-3 rounded-lg">
                <Globe className="text-blue-400 mt-1 flex-shrink-0" size={28} />
                <div>
                  <h4 className="text-2xl font-bold text-white">Global Infrastructure</h4>
                  <p className="text-xl text-gray-300">Sun Pharma provides commercial capabilities and global expansion pathways.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Cards */}
          <div className="flex flex-col gap-4">
            {/* Valuation Snapshot */}
            <div className="bg-slate-800/90 p-4 rounded-lg">
              <h3 className="text-3xl font-bold text-orange-400 mb-3">Valuation Snapshot</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <p className="text-xl text-gray-300">Acquisition Value</p>
                  <p className="text-2xl font-bold text-green-400">$416M</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xl text-gray-300">Peak Sales (Base)</p>
                  <p className="text-2xl font-bold text-green-400">$1.2-1.4B</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xl text-gray-300">Risk-Adjusted NPV</p>
                  <p className="text-2xl font-bold text-green-400">$3.0-5.5B</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xl text-gray-300">Time to Peak</p>
                  <p className="text-2xl font-bold text-green-400">4-6 years</p>
                </div>
              </div>
            </div>

            {/* Risk-Reward Assessment */}
            <div className="bg-slate-800/90 p-4 rounded-lg">
              <h3 className="text-3xl font-bold text-white mb-3">Risk-Reward Profile</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <p className="text-xl text-gray-300">Risk Level</p>
                  <p className="text-xl font-bold text-orange-400">Moderate-High</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xl text-gray-300">Reward Potential</p>
                  <p className="text-xl font-bold text-green-400">Substantial</p>
                </div>
                <p className="text-base text-gray-400 pt-1">Key Risks: Competition, market capture execution</p>
                <p className="text-base text-gray-400">Key Rewards: Billion-dollar revenue, global expansion</p>
              </div>
            </div>

            {/* Call-to-Action */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-500 p-4 rounded-lg flex-grow flex flex-col">
              <h3 className="text-3xl font-bold text-white mb-2">Strategic Imperative</h3>
              <p className="text-xl text-white mb-3">
                Execute flawless commercialization to capture market share and build a foundation for global growth.
              </p>
              <div className="space-y-1 mt-auto">
                <p className="text-base text-purple-100">• Immediate: U.S. market establishment</p>
                <p className="text-base text-purple-100">• Near-term: European approvals</p>
                <p className="text-base text-purple-100">• Long-term: Asia-Pacific expansion</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Footer */}
        <div className="flex-none p-4 flex justify-between items-center bg-slate-800/50">
          <p className="text-base text-gray-400">For inquiries: strategic.intelligence@pharma.com</p>
          <p className="text-lg text-gray-300 font-bold">Unloxcyt: Transforming Advanced cSCC Treatment</p>
          <p className="text-base text-gray-400">10</p>
        </div>
      </div>
    </div>
  );
}
