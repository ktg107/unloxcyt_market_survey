
import { Zap, Users, Target, GitMerge, Globe, DollarSign, Smartphone } from 'lucide-react';

export default function Slide8() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-gradient-to-br from-slate-900 to-slate-700 text-white">
      <div className="flex flex-col w-full h-full">
        {/* Header */}
        <div className="flex-none bg-slate-800/90 p-6 flex items-center gap-4">
          <Zap className="text-orange-400" size={48} />
          <h1 className="text-6xl font-bold text-white">Market Trends &amp; Growth Drivers</h1>
        </div>

        {/* Main Content */}
        <div className="flex-1 min-h-0 flex flex-col p-8 gap-6">
          {/* Section Header */}
          <div className="flex-none text-center">
            <h2 className="text-4xl font-bold text-blue-400 border-b-2 border-blue-400 inline-block pb-2">
              Key Catalysts Shaping the Oncology Immunotherapy Landscape
            </h2>
          </div>

          {/* Trends Grid - 3x2 */}
          <div className="flex-1 min-h-0 grid grid-cols-3 grid-rows-2 gap-6">
            {/* Rising Cancer Incidence */}
            <div className="bg-slate-800/85 p-6 rounded-lg flex flex-col items-center text-center">
              <Users className="text-blue-400 mb-4" size={48} />
              <h3 className="text-3xl font-bold text-white mb-3">Rising Cancer Incidence</h3>
              <p className="text-xl text-gray-300 mb-4 flex-1">
                2.04M new U.S. cases in 2025, 77% global increase projected by 2050 (WHO)
              </p>
              <div className="mt-auto">
                <p className="text-5xl font-bold text-green-400">+77%</p>
                <p className="text-lg text-gray-400">by 2050</p>
              </div>
            </div>

            {/* Precision Medicine Evolution */}
            <div className="bg-slate-800/85 p-6 rounded-lg flex flex-col items-center text-center">
              <Target className="text-purple-400 mb-4" size={48} />
              <h3 className="text-3xl font-bold text-white mb-3">Precision Medicine Evolution</h3>
              <p className="text-xl text-gray-300 mb-4 flex-1">
                AI-powered biomarker discovery and personalized treatment algorithms improving patient selection
              </p>
              <div className="mt-auto">
                <p className="text-5xl font-bold text-purple-400">60+</p>
                <p className="text-lg text-gray-400">Novel checkpoint inhibitors in development</p>
              </div>
            </div>

            {/* Combination Therapy Innovation */}
            <div className="bg-slate-800/85 p-6 rounded-lg flex flex-col items-center text-center">
              <GitMerge className="text-orange-400 mb-4" size={48} />
              <h3 className="text-3xl font-bold text-white mb-3">Combination Therapy Innovation</h3>
              <p className="text-xl text-gray-300 mb-4 flex-1">
                Synergistic approaches combining checkpoint inhibitors with chemotherapy, radiation, and targeted therapies
              </p>
              <div className="mt-auto">
                <p className="text-4xl font-bold text-orange-400">Multi-modal</p>
                <p className="text-lg text-gray-400">Treatment protocols</p>
              </div>
            </div>

            {/* Geographic Expansion */}
            <div className="bg-slate-800/85 p-6 rounded-lg flex flex-col items-center text-center">
              <Globe className="text-blue-400 mb-4" size={48} />
              <h3 className="text-3xl font-bold text-white mb-3">Geographic Expansion</h3>
              <p className="text-xl text-gray-300 mb-4 flex-1">
                Asia-Pacific fastest-growing region (16-18% CAGR) driven by China and India healthcare modernization
              </p>
              <div className="mt-auto">
                <p className="text-5xl font-bold text-green-400">16-18%</p>
                <p className="text-lg text-gray-400">CAGR Asia-Pacific</p>
              </div>
            </div>

            {/* Value-Based Pricing Models */}
            <div className="bg-slate-800/85 p-6 rounded-lg flex flex-col items-center text-center">
              <DollarSign className="text-green-400 mb-4" size={48} />
              <h3 className="text-3xl font-bold text-white mb-3">Value-Based Pricing Models</h3>
              <p className="text-xl text-gray-300 mb-4 flex-1">
                Outcomes-based agreements and risk-sharing arrangements improving market access
              </p>
              <div className="mt-auto">
                <p className="text-3xl font-bold text-green-400">New Paradigm</p>
                <p className="text-lg text-gray-400">Payer relationships</p>
              </div>
            </div>

            {/* Digital Health Integration */}
            <div className="bg-slate-800/85 p-6 rounded-lg flex flex-col items-center text-center">
              <Smartphone className="text-purple-400 mb-4" size={48} />
              <h3 className="text-3xl font-bold text-white mb-3">Digital Health Integration</h3>
              <p className="text-xl text-gray-300 mb-4 flex-1">
                Telemedicine, remote monitoring, and AI diagnostics reducing barriers to care
              </p>
              <div className="mt-auto">
                <p className="text-3xl font-bold text-purple-400">Transformative</p>
                <p className="text-lg text-gray-400">Patient access</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex-none p-4 text-right">
          <p className="text-xl text-gray-400">8</p>
        </div>
      </div>
    </div>
  );
}
