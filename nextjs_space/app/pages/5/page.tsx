
import { Users, CheckCircle } from 'lucide-react';

export default function Slide5() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-gradient-to-br from-slate-900 to-slate-700 text-white">
      <div className="flex flex-col w-full h-full">
        {/* Header */}
        <div className="flex-none bg-slate-800/90 p-6 flex items-center gap-4">
          <Users className="text-blue-400" size={48} />
          <h1 className="text-6xl font-bold text-white">Competitive Landscape Analysis</h1>
        </div>

        {/* Main Content */}
        <div className="flex-1 min-h-0 flex flex-col p-8 gap-6">
          {/* Intro Section */}
          <div className="flex-none">
            <h2 className="text-4xl font-bold text-white mb-2">Direct Competition: Advanced cSCC Treatment Market</h2>
            <p className="text-2xl text-gray-300">Unloxcyt enters a market dominated by established PD-1 inhibitors with proven track records</p>
          </div>

          {/* Comparison Table */}
          <div className="flex-1 min-h-0 overflow-hidden">
            <div className="bg-slate-800/90 rounded-lg overflow-hidden h-full">
              <table className="w-full h-full">
                <thead>
                  <tr className="bg-slate-700 border-b-2 border-blue-400">
                    <th className="text-2xl font-bold text-white p-4 text-left">Product</th>
                    <th className="text-2xl font-bold text-white p-4 text-left">Company</th>
                    <th className="text-2xl font-bold text-white p-4 text-left">Mechanism</th>
                    <th className="text-2xl font-bold text-white p-4 text-left">Approval Year</th>
                    <th className="text-2xl font-bold text-white p-4 text-left">Metastatic cSCC ORR</th>
                    <th className="text-2xl font-bold text-white p-4 text-left">Key Advantage</th>
                    <th className="text-2xl font-bold text-white p-4 text-left">Weakness</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-slate-800 border-l-4 border-purple-400">
                    <td className="text-2xl p-4 font-bold text-purple-400">Unloxcyt</td>
                    <td className="text-2xl p-4">Sun Pharma</td>
                    <td className="text-2xl p-4">PD-L1 + ADCC</td>
                    <td className="text-2xl p-4">2024</td>
                    <td className="text-2xl p-4 font-bold text-green-400">47%</td>
                    <td className="text-2xl p-4 text-green-300">First PD-L1, ADCC activity</td>
                    <td className="text-2xl p-4 text-orange-300">Late market entry</td>
                  </tr>
                  <tr className="bg-slate-700/50">
                    <td className="text-2xl p-4 font-bold">Keytruda</td>
                    <td className="text-2xl p-4">Merck</td>
                    <td className="text-2xl p-4">PD-1</td>
                    <td className="text-2xl p-4">2020</td>
                    <td className="text-2xl p-4">35%</td>
                    <td className="text-2xl p-4 text-green-300">Market leader, brand trust</td>
                    <td className="text-2xl p-4 text-orange-300">Lower ORR vs Unloxcyt</td>
                  </tr>
                  <tr className="bg-slate-800">
                    <td className="text-2xl p-4 font-bold">Libtayo</td>
                    <td className="text-2xl p-4">Regeneron</td>
                    <td className="text-2xl p-4">PD-1</td>
                    <td className="text-2xl p-4">2018</td>
                    <td className="text-2xl p-4">Variable</td>
                    <td className="text-2xl p-4 text-green-300">First-mover, durability data</td>
                    <td className="text-2xl p-4 text-orange-300">Limited differentiation</td>
                  </tr>
                  <tr className="bg-slate-700/50">
                    <td className="text-2xl p-4 font-bold">Opdivo</td>
                    <td className="text-2xl p-4">Bristol-Myers</td>
                    <td className="text-2xl p-4">PD-1</td>
                    <td className="text-2xl p-4">2014 (other)</td>
                    <td className="text-2xl p-4">N/A for cSCC</td>
                    <td className="text-2xl p-4 text-green-300">Broad oncology portfolio</td>
                    <td className="text-2xl p-4 text-orange-300">Not cSCC-specific</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Insights */}
          <div className="flex-none bg-slate-800/90 p-6 rounded-lg border border-slate-700">
            <h3 className="text-3xl font-bold text-white mb-4">Competitive Positioning Insights</h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-blue-400 mt-1" size={20} />
                <p className="text-xl"><strong>Market Concentration:</strong> Top 3 brands captured 91% of global PD-1/PD-L1 sales in 2021</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-blue-400 mt-1" size={20} />
                <p className="text-xl"><strong>Differentiation Opportunity:</strong> Unloxcyt's PD-L1 mechanism and ADCC provide legitimate clinical differentiation</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-blue-400 mt-1" size={20} />
                <p className="text-xl"><strong>Market Size Justification:</strong> $1B+ U.S. cSCC market supports multiple successful competitors</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex-none p-4 text-right">
          <p className="text-xl text-gray-400">5</p>
        </div>
      </div>
    </div>
  );
}
