
import { Target, CheckCircle, AlertCircle, TrendingUp, AlertTriangle } from 'lucide-react';

export default function Slide7() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-gradient-to-br from-slate-900 to-slate-700 text-white">
      <div className="flex flex-col w-full h-full">
        {/* Header */}
        <div className="flex-none bg-slate-800/90 p-6 flex items-center gap-4">
          <Target className="text-purple-400" size={48} />
          <h1 className="text-6xl font-bold text-white">SWOT Analysis</h1>
        </div>

        {/* Main Content - 2x2 SWOT Grid */}
        <div className="flex-1 min-h-0 grid grid-cols-2 grid-rows-2 gap-6 p-8">
          {/* Strengths - Top Left */}
          <div className="bg-slate-800/90 border-t-4 border-green-400 rounded-lg p-6">
            <div className="flex items-center gap-4 mb-6">
              <CheckCircle className="text-green-400" size={36} />
              <h3 className="text-4xl font-bold text-green-400">Strengths</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-400 mt-1" size={16} />
                <p className="text-2xl">First and only FDA-approved PD-L1 inhibitor for advanced cSCC</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-400 mt-1" size={16} />
                <p className="text-2xl">Differentiated ADCC mechanism beyond checkpoint blockade</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-400 mt-1" size={16} />
                <p className="text-2xl">Strong clinical data: 47-48% ORR with durable responses</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-400 mt-1" size={16} />
                <p className="text-2xl">Sun Pharma's global commercialization infrastructure</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-400 mt-1" size={16} />
                <p className="text-2xl">Favorable safety profile for immunocompromised patients</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-400 mt-1" size={16} />
                <p className="text-2xl">$1B+ addressable U.S. market opportunity</p>
              </div>
            </div>
          </div>

          {/* Weaknesses - Top Right */}
          <div className="bg-slate-800/90 border-t-4 border-orange-400 rounded-lg p-6">
            <div className="flex items-center gap-4 mb-6">
              <AlertCircle className="text-orange-400" size={36} />
              <h3 className="text-4xl font-bold text-orange-400">Weaknesses</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <AlertCircle className="text-orange-400 mt-1" size={16} />
                <p className="text-2xl">Late market entry vs. established PD-1 competitors (Keytruda, Libtayo)</p>
              </div>
              <div className="flex items-start gap-3">
                <AlertCircle className="text-orange-400 mt-1" size={16} />
                <p className="text-2xl">Limited head-to-head clinical trial data</p>
              </div>
              <div className="flex items-start gap-3">
                <AlertCircle className="text-orange-400 mt-1" size={16} />
                <p className="text-2xl">Historical manufacturing delays (complete response letter)</p>
              </div>
              <div className="flex items-start gap-3">
                <AlertCircle className="text-orange-400 mt-1" size={16} />
                <p className="text-2xl">Pricing parity strategy limits premium positioning</p>
              </div>
              <div className="flex items-start gap-3">
                <AlertCircle className="text-orange-400 mt-1" size={16} />
                <p className="text-2xl">Pre-acquisition company had minimal revenue history</p>
              </div>
            </div>
          </div>

          {/* Opportunities - Bottom Left */}
          <div className="bg-slate-800/90 border-t-4 border-blue-400 rounded-lg p-6">
            <div className="flex items-center gap-4 mb-6">
              <TrendingUp className="text-blue-400" size={36} />
              <h3 className="text-4xl font-bold text-blue-400">Opportunities</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <TrendingUp className="text-blue-400 mt-1" size={16} />
                <p className="text-2xl">Indication expansion: Earlier-stage cSCC, other skin cancers (3-5x population)</p>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="text-blue-400 mt-1" size={16} />
                <p className="text-2xl">European market entry: EMA/UK approvals ($250-400M potential)</p>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="text-blue-400 mt-1" size={16} />
                <p className="text-2xl">Asia-Pacific expansion via Sun Pharma network</p>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="text-blue-400 mt-1" size={16} />
                <p className="text-2xl">Combination therapy protocols with radiation/other agents</p>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="text-blue-400 mt-1" size={16} />
                <p className="text-2xl">Biomarker-driven patient selection improving outcomes</p>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="text-blue-400 mt-1" size={16} />
                <p className="text-2xl">Real-world evidence generation for competitive advantage</p>
              </div>
            </div>
          </div>

          {/* Threats - Bottom Right */}
          <div className="bg-slate-800/90 border-t-4 border-red-400 rounded-lg p-6">
            <div className="flex items-center gap-4 mb-6">
              <AlertTriangle className="text-red-400" size={36} />
              <h3 className="text-4xl font-bold text-red-400">Threats</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <AlertTriangle className="text-red-400 mt-1" size={16} />
                <p className="text-2xl">Intense competition from Keytruda/Libtayo with established market share</p>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="text-red-400 mt-1" size={16} />
                <p className="text-2xl">Potential biosimilar competition post-patent expiration (2036+)</p>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="text-red-400 mt-1" size={16} />
                <p className="text-2xl">Reimbursement challenges and payer utilization management</p>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="text-red-400 mt-1" size={16} />
                <p className="text-2xl">Emerging next-generation checkpoint inhibitors</p>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="text-red-400 mt-1" size={16} />
                <p className="text-2xl">Healthcare reform and drug pricing legislation risks</p>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="text-red-400 mt-1" size={16} />
                <p className="text-2xl">Manufacturing and supply chain vulnerabilities</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex-none p-4 text-right">
          <p className="text-xl text-gray-400">7</p>
        </div>
      </div>
    </div>
  );
}
