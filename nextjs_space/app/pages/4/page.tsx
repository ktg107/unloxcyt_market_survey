
'use client';

import { BarChart3 } from 'lucide-react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function Slide4() {
  const oncologyGrowthData = {
    labels: ['2024', '2027', '2030', '2034'],
    datasets: [
      {
        label: 'Market Size ($B)',
        data: [226.38, 310, 420, 691],
        backgroundColor: '#3B82F6',
        borderColor: '#3B82F6',
        borderWidth: 2
      }
    ]
  };

  const pdl1MarketData = {
    labels: ['2025', '2027', '2029', '2031', '2034'],
    datasets: [
      {
        label: 'Market Value ($B)',
        data: [53.91, 85, 132, 180, 244.28],
        borderColor: '#8B5CF6',
        backgroundColor: 'rgba(139, 92, 246, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4
      }
    ]
  };

  const cSCCRegionalData = {
    labels: ['North America', 'Europe', 'Asia-Pacific', 'Rest of World'],
    datasets: [
      {
        label: 'Market Size ($B)',
        data: [5.5, 3.8, 2.9, 1.5],
        backgroundColor: ['#3B82F6', '#10B981', '#F59E0B', '#8B5CF6'],
        borderColor: ['#1D4ED8', '#059669', '#D97706', '#7C3AED'],
        borderWidth: 2
      }
    ]
  };

  const marketShareData = {
    labels: ['Keytruda (Merck)', 'Libtayo (Regeneron)', 'Other Therapies', 'Unloxcyt Opportunity'],
    datasets: [
      {
        data: [45, 35, 15, 5],
        backgroundColor: ['#3B82F6', '#10B981', '#94a3b8', '#8B5CF6'],
        borderColor: ['#1D4ED8', '#059669', '#64748b', '#7C3AED'],
        borderWidth: 2
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#ffffff',
          font: { size: 14 }
        }
      }
    },
    scales: {
      x: {
        ticks: { color: '#ffffff' },
        grid: { color: '#374151' }
      },
      y: {
        ticks: { color: '#ffffff' },
        grid: { color: '#374151' }
      }
    }
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: '#ffffff',
          font: { size: 12 }
        }
      }
    }
  };

  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-gradient-to-br from-slate-900 to-slate-700 text-white">
      <div className="flex flex-col w-full h-full">
        {/* Header */}
        <div className="flex-none bg-slate-800/90 p-6 flex items-center gap-4">
          <BarChart3 className="text-blue-400" size={48} />
          <h1 className="text-6xl font-bold text-white">Market Size &amp; Opportunity Analysis</h1>
        </div>

        {/* Main Content - 2x2 Grid */}
        <div className="flex-1 min-h-0 grid grid-cols-2 grid-rows-2 gap-6 p-8">
          {/* Top Left - Oncology Immunotherapy Growth */}
          <div className="bg-slate-800/90 p-6 rounded-lg flex flex-col">
            <h3 className="text-3xl font-bold text-white mb-4 text-center">Oncology Immunotherapy Market Growth</h3>
            <div className="flex-1 min-h-0">
              <Bar data={oncologyGrowthData} options={{...chartOptions, plugins: {...chartOptions.plugins, legend: {display: false}}}} />
            </div>
          </div>

          {/* Top Right - PD-1/PD-L1 Market Projection */}
          <div className="bg-slate-800/90 p-6 rounded-lg flex flex-col">
            <h3 className="text-3xl font-bold text-white mb-4 text-center">PD-1/PD-L1 Inhibitors Market Projection</h3>
            <div className="flex-1 min-h-0">
              <Line data={pdl1MarketData} options={{...chartOptions, plugins: {...chartOptions.plugins, legend: {display: false}}}} />
            </div>
          </div>

          {/* Bottom Left - cSCC Market by Region */}
          <div className="bg-slate-800/90 p-6 rounded-lg flex flex-col">
            <h3 className="text-3xl font-bold text-white mb-4 text-center">cSCC Market Size by Region (2024)</h3>
            <div className="flex-1 min-h-0">
              <Bar data={cSCCRegionalData} options={{...chartOptions, plugins: {...chartOptions.plugins, legend: {display: false}}}} />
            </div>
          </div>

          {/* Bottom Right - Market Share */}
          <div className="bg-slate-800/90 p-6 rounded-lg flex flex-col">
            <h3 className="text-3xl font-bold text-white mb-4 text-center">Advanced cSCC Treatment Market Share</h3>
            <div className="flex-1 min-h-0">
              <Pie data={marketShareData} options={pieOptions} />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex-none p-4 flex justify-between items-center">
          <p className="text-base text-gray-400">Source: Market research data 2024-2025</p>
          <p className="text-xl text-gray-400">4</p>
        </div>
      </div>
    </div>
  );
}
