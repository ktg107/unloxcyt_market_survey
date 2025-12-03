
import { FileText, CheckCircle, DollarSign, TrendingUp, Target, Activity } from 'lucide-react';

export default function Slide2() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-gradient-to-br from-slate-900 to-slate-700 text-white">
      <div className="flex flex-col w-full h-full">
        {/* Header */}
        <div className="flex-none bg-slate-800/90 p-6 flex items-center gap-4">
          <FileText className="text-blue-400" size={48} />
          <h1 className="text-6xl font-bold text-white">Executive Summary</h1>
        </div>

        {/* Main Content */}
        <div className="flex-1 min-h-0 grid grid-cols-[1fr_1fr] grid-rows-[auto_1fr] gap-8 p-8">
          {/* Summary Statement - Spans both columns */}
          <div className="col-span-2 bg-slate-800 p-6 border-l-4 border-blue-400 rounded-lg">
            <p className="text-3xl leading-relaxed">
              Unloxcyt (cosibelimab-ipdl) is the first and only FDA-approved PD-L1 inhibitor for metastatic or locally advanced cutaneous squamous cell carcinoma, entering a U.S. market exceeding $1 billion annually with peak sales potential of $1.0-1.6 billion.
            </p>
          </div>

          {/* Key Metrics Dashboard */}
          <div className="flex flex-col gap-6">
            <div className="bg-slate-800/80 p-4 rounded-lg flex items-center gap-4">
              <CheckCircle className="text-green-400" size={36} />
              <div>
                <p className="text-xl text-gray-300">FDA Approval Date</p>
                <p className="text-4xl font-bold text-white">December 13, 2024</p>
              </div>
            </div>

            <div className="bg-slate-800/80 p-4 rounded-lg flex items-center gap-4">
              <DollarSign className="text-blue-400" size={36} />
              <div>
                <p className="text-xl text-gray-300">Acquisition Value</p>
                <p className="text-4xl font-bold text-white">$416M</p>
              </div>
            </div>

            <div className="bg-slate-800/80 p-4 rounded-lg flex items-center gap-4">
              <TrendingUp className="text-green-400" size={36} />
              <div>
                <p className="text-xl text-gray-300">U.S. Market Size</p>
                <p className="text-4xl font-bold text-white">$1B+</p>
              </div>
            </div>

            <div className="bg-slate-800/80 p-4 rounded-lg flex items-center gap-4">
              <Target className="text-purple-400" size={36} />
              <div>
                <p className="text-xl text-gray-300">Peak Sales Potential</p>
                <p className="text-4xl font-bold text-white">$1.0-1.6B</p>
              </div>
            </div>

            <div className="bg-slate-800/80 p-4 rounded-lg flex items-center gap-4">
              <Activity className="text-green-400" size={36} />
              <div>
                <p className="text-xl text-gray-300">Objective Response Rate</p>
                <p className="text-4xl font-bold text-white">47-48%</p>
              </div>
            </div>
          </div>

          {/* Key Strategic Highlights */}
          <div className="bg-slate-800/80 p-6 rounded-lg">
            <h3 className="text-4xl font-bold text-purple-400 mb-6">Key Strategic Highlights</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-blue-400 mt-1" size={20} />
                <p className="text-2xl">First-in-class PD-L1 mechanism with ADCC activity providing differentiation from PD-1 inhibitors</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-blue-400 mt-1" size={20} />
                <p className="text-2xl">Strong clinical efficacy with durable responses in Phase 1 trial (47% ORR, not reached median duration)</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-blue-400 mt-1" size={20} />
                <p className="text-2xl">Sun Pharma acquisition provides global commercialization infrastructure and dermatology expertise</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-blue-400 mt-1" size={20} />
                <p className="text-2xl">Competitive landscape dominated by Keytruda and Libtayo presents both challenges and opportunities</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-blue-400 mt-1" size={20} />
                <p className="text-2xl">European expansion planned with EMA/UK MHRA submissions adding $250-400M peak sales potential</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex-none p-4 text-right">
          <p className="text-xl text-gray-400">2</p>
        </div>
      </div>
    </div>
  );
}
