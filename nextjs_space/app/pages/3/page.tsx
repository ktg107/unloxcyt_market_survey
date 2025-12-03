
import { Building2, CheckCircle } from 'lucide-react';

export default function Slide3() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-gradient-to-br from-slate-900 to-slate-700 text-white">
      <div className="flex flex-col w-full h-full">
        {/* Header */}
        <div className="flex-none bg-slate-800/90 p-6 flex items-center gap-4">
          <Building2 className="text-blue-400" size={48} />
          <h1 className="text-6xl font-bold text-white">Company & Product Overview</h1>
        </div>

        {/* Main Content */}
        <div className="flex-1 min-h-0 grid grid-cols-[2fr_3fr] gap-8 p-8">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {/* Corporate Evolution Timeline */}
            <div className="bg-slate-800/85 p-6 rounded-lg">
              <h3 className="text-4xl font-bold text-white mb-6">Corporate Evolution</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center">
                    <p className="text-xl font-bold">2014</p>
                  </div>
                  <p className="text-2xl">Checkpoint Therapeutics founded by Fortress Biotech</p>
                </div>
                <div className="ml-8 w-0.5 h-8 bg-blue-400"></div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center">
                    <p className="text-lg font-bold">Dec 2024</p>
                  </div>
                  <p className="text-2xl">Unloxcyt FDA approval for advanced cSCC</p>
                </div>
                <div className="ml-8 w-0.5 h-8 bg-blue-400"></div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center">
                    <p className="text-lg font-bold">May 2025</p>
                  </div>
                  <p className="text-2xl">Sun Pharma acquisition ($416M total value)</p>
                </div>
              </div>
              <p className="text-xl text-gray-300 mt-6">
                <strong>Headquarters:</strong> Waltham, Massachusetts, USA
              </p>
            </div>

            {/* Acquisition Details */}
            <div className="bg-slate-800/85 p-6 rounded-lg">
              <h3 className="text-4xl font-bold text-orange-400 mb-6">Acquisition Structure</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <p className="text-2xl text-gray-300">Upfront Cash:</p>
                  <p className="text-2xl font-bold">$355M ($4.10/share)</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-2xl text-gray-300">Contingent CVR:</p>
                  <p className="text-2xl font-bold">Up to $4.8M (EU approvals)</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-2xl text-gray-300">Fortress Royalty:</p>
                  <p className="text-2xl font-bold">2.5% on net sales</p>
                </div>
              </div>
              <p className="text-xl text-gray-300 italic mt-4">
                Sun Pharma gains specialty oncology-dermatology asset with global commercialization infrastructure
              </p>
            </div>
          </div>

          {/* Right Column - Product Profile */}
          <div className="bg-slate-800/85 p-6 rounded-lg">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Unloxcyt (cosibelimab-ipdl)
            </h2>
            <h3 className="text-3xl text-green-400 mb-8">
              First and Only FDA-Approved PD-L1 Inhibitor for Advanced cSCC
            </h3>

            {/* Mechanism of Action */}
            <h4 className="text-4xl font-bold text-white mb-4">Mechanism of Action</h4>
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-blue-400 mt-1" size={20} />
                <p className="text-2xl">Human IgG1 monoclonal antibody targeting PD-L1</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-blue-400 mt-1" size={20} />
                <p className="text-2xl">Dual action: Blocks PD-L1/PD-1 and PD-L1/B7.1 interactions</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-blue-400 mt-1" size={20} />
                <p className="text-2xl">Induces antibody-dependent cell-mediated cytotoxicity (ADCC)</p>
              </div>
            </div>

            {/* Clinical Efficacy */}
            <h4 className="text-4xl font-bold text-white mb-4">Clinical Efficacy (Study CK-301-101)</h4>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <p className="text-xl text-gray-300">Metastatic cSCC ORR</p>
                <p className="text-3xl font-bold text-green-400">47%</p>
              </div>
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <p className="text-xl text-gray-300">Locally Advanced ORR</p>
                <p className="text-3xl font-bold text-green-400">48%</p>
              </div>
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <p className="text-xl text-gray-300">Median Duration (Met)</p>
                <p className="text-2xl font-bold text-green-400">Not reached</p>
              </div>
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <p className="text-xl text-gray-300">12-Month Response</p>
                <p className="text-2xl font-bold text-green-400">75.4% / 88.2%</p>
              </div>
            </div>

            {/* Indication & Dosing */}
            <div className="space-y-4">
              <div>
                <p className="text-2xl font-bold text-white mb-2">Indication:</p>
                <p className="text-xl text-gray-300">Metastatic or locally advanced cutaneous squamous cell carcinoma in adults not candidates for curative surgery or radiation</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white mb-2">Dosing:</p>
                <p className="text-xl text-gray-300">1,200 mg IV infusion every 3 weeks</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex-none p-4 text-right">
          <p className="text-xl text-gray-400">3</p>
        </div>
      </div>
    </div>
  );
}
