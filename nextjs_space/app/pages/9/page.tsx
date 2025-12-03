
import { Compass, Target, Zap, TrendingUp, Globe, Users } from 'lucide-react';

export default function Slide9() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-gradient-to-br from-slate-900 to-slate-700 text-white">
      <div className="flex flex-col w-full h-full">
        {/* Header */}
        <div className="flex-none bg-slate-800/90 p-6 flex items-center gap-4">
          <Compass className="text-purple-400" size={48} />
          <h1 className="text-6xl font-bold text-white">Strategic Recommendations</h1>
        </div>

        {/* Main Content */}
        <div className="flex-1 min-h-0 flex flex-col p-6 gap-4">
          {/* Context Section */}
          <div className="flex-none text-center">
            <p className="text-2xl text-gray-300">
              Prioritized action plan for successful market entry and sustained competitive advantage
            </p>
            <p className="text-xl font-bold text-blue-400 mt-1">
              2025-2030 Strategic Roadmap
            </p>
          </div>

          {/* Recommendations Grid */}
          <div className="flex-1 min-h-0 flex flex-col gap-4 justify-around">
            {/* Priority 1: Critical */}
            <div className="flex gap-6 bg-slate-800/90 p-4 rounded-lg border-l-4 border-red-400 items-center">
              <div className="flex-none flex flex-col items-center w-32">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                  <p className="text-3xl font-bold">1</p>
                </div>
                <p className="text-lg font-bold text-red-400 mt-2">Critical</p>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-3xl font-bold text-white mb-2">Commercialization &amp; Market Access</h3>
                <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                  <p className="text-xl">Aggressive U.S. launch with "first-and-only" messaging.</p>
                  <p className="text-xl">Robust patient assistance for &lt;30-day prescription-to-infusion.</p>
                  <p className="text-xl">Secure favorable formulary position with value-based contracts.</p>
                  <p className="text-xl">Build real-world evidence registries for diverse populations.</p>
                </div>
                <div className="mt-2 bg-red-500/20 px-3 py-1 rounded-md inline-block">
                  <p className="text-base font-bold text-red-300">Timeline: 2025-2026</p>
                </div>
              </div>
            </div>

            {/* Priority 2: High Priority */}
            <div className="flex gap-6 bg-slate-800/90 p-4 rounded-lg border-l-4 border-blue-400 items-center">
              <div className="flex-none flex flex-col items-center w-32">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                  <p className="text-3xl font-bold">2</p>
                </div>
                <p className="text-lg font-bold text-blue-400 mt-2">High Priority</p>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-3xl font-bold text-white mb-2">Geographic &amp; Indication Expansion</h3>
                <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                  <p className="text-xl">Submit for EU/UK approval for +$250M peak sales.</p>
                  <p className="text-xl">Launch trials in earlier-stage cSCC to expand population 3-5x.</p>
                  <p className="text-xl">Explore combination therapies with radiation & other inhibitors.</p>
                  <p className="text-xl">Leverage Sun Pharma network for APAC entry (Japan, Australia).</p>
                </div>
                <div className="mt-2 bg-blue-500/20 px-3 py-1 rounded-md inline-block">
                  <p className="text-base font-bold text-blue-300">Timeline: 2026-2028</p>
                </div>
              </div>
            </div>

            {/* Priority 3: Strategic */}
            <div className="flex gap-6 bg-slate-800/90 p-4 rounded-lg border-l-4 border-green-400 items-center">
              <div className="flex-none flex flex-col items-center w-32">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                  <p className="text-3xl font-bold">3</p>
                </div>
                <p className="text-lg font-bold text-green-400 mt-2">Strategic</p>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-3xl font-bold text-white mb-2">Long-Term Competitive Positioning</h3>
                <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                  <p className="text-xl">Develop AI biomarker tools for patient selection.</p>
                  <p className="text-xl">Partner for companion diagnostic co-development.</p>
                  <p className="text-xl">Invest in lifecycle management to mitigate biosimilar competition.</p>
                  <p className="text-xl">Build loyalty via digital engagement platforms.</p>
                </div>
                <div className="mt-2 bg-green-500/20 px-3 py-1 rounded-md inline-block">
                  <p className="text-base font-bold text-green-300">Timeline: 2027-2030</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex-none p-4 text-right">
          <p className="text-xl text-gray-400">9</p>
        </div>
      </div>
    </div>
  );
}
