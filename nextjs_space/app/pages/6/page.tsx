
'use client';

import { TrendingUp } from 'lucide-react';
import { Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function Slide6() {
  const revenueProjectionData = {
    labels: ['2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032', '2033', '2034', '2035'],
    datasets: [
      {
        label: 'Conservative',
        data: [15, 60, 150, 300, 500, 700, 800, 850, 800, 750, 700],
        borderColor: '#94a3b8',
        backgroundColor: 'rgba(148, 163, 184, 0.1)',
        borderDash: [5, 5],
        fill: false,
        tension: 0.3
      },
      {
        label: 'Base Case',
        data: [20, 80, 220, 450, 800, 1100, 1300, 1350, 1300, 1200, 1100],
        borderColor: '#3B82F6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderWidth: 3,
        fill: false,
        tension: 0.3
      },
      {
        label: 'Optimistic',
        data: [30, 100, 280, 600, 1000, 1400, 1550, 1600, 1550, 1450, 1350],
        borderColor: '#10B981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        borderDash: [5, 5],
        fill: false,
        tension: 0.3
      }
    ]
  };

  const geographicData = {
    labels: ['US', 'Europe', 'APAC', 'ROW'],
    datasets: [
      {
        data: [65, 20, 12, 3],
        backgroundColor: ['#3B82F6', '#10B981', '#8B5CF6', '#F59E0B'],
        borderColor: ['#111827'],
        borderWidth: 2,
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#e5e7eb',
          font: { size: 16 },
          boxWidth: 20,
        }
      }
    },
    scales: {
      x: {
        ticks: { color: '#d1d5db', font: { size: 14 } },
        grid: { color: '#374151' }
      },
      y: {
        ticks: { color: '#d1d5db', font: { size: 14 } },
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
          color: '#e5e7eb',
          font: { size: 14 },
          boxWidth: 15,
          padding: 15,
        }
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `${context.label}: ${context.raw}%`;
          }
        }
      }
    }
  };

  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-gradient-to-br from-slate-900 to-slate-700 text-white">
      <div className="flex flex-col w-full h-full">
        {/* Header */}
        <div className="flex-none bg-slate-800/90 p-6 flex items-center gap-4">
          <TrendingUp className="text-green-400" size={48} />
          <h1 className="text-6xl font-bold text-white">Revenue Projections &amp; Business Model</h1>
        </div>

        {/* Main Content */}
        <div className="flex-1 min-h-0 grid grid-cols-[3fr_2fr] gap-6 p-8">
          {/* Left Column - Revenue Chart */}
          <div className="bg-slate-800/90 p-6 rounded-lg flex flex-col">
            <h3 className="text-3xl font-bold text-white mb-4 text-center">Revenue Projection Timeline (2025-2035)</h3>
            <div className="flex-1 min-h-0">
              <Line data={revenueProjectionData} options={chartOptions} />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">
            {/* Peak Sales Scenarios */}
            <div className="bg-slate-800/85 p-4 rounded-lg flex-1 flex flex-col">
              <h3 className="text-3xl font-bold text-white mb-3">Peak Sales Scenarios</h3>
              <div className="space-y-3 flex-1 flex flex-col justify-around">
                <div className="p-2 bg-slate-700/50 rounded-lg">
                  <h4 className="text-xl font-bold text-gray-300">Conservative</h4>
                  <p className="text-2xl font-bold text-green-400">$0.8B - $1.0B</p>
                  <p className="text-base text-gray-400">2030-2032 | 20-25% market share</p>
                </div>
                <div className="p-2 bg-slate-700/50 rounded-lg border-l-4 border-blue-400">
                  <h4 className="text-xl font-bold text-white">Base Case</h4>
                  <p className="text-2xl font-bold text-green-400">$1.2B - $1.4B</p>
                  <p className="text-base text-gray-400">2029-2031 | 30-35% market share</p>
                </div>
                <div className="p-2 bg-slate-700/50 rounded-lg">
                  <h4 className="text-xl font-bold text-gray-300">Optimistic</h4>
                  <p className="text-2xl font-bold text-green-400">$1.5B - $1.6B</p>
                  <p className="text-base text-gray-400">2028-2030 | 40-45% market share</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Geographic Revenue Split */}
              <div className="bg-slate-800/85 p-4 rounded-lg flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-2 text-center">Geographic Split</h3>
                <div className="flex-1 min-h-0 relative">
                  <Pie data={geographicData} options={pieOptions} />
                </div>
              </div>

              {/* Business Model */}
              <div className="bg-slate-800/85 p-4 rounded-lg flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-purple-400 mb-2">Business Model</h3>
                <p className="text-xl font-bold text-white mb-2">Direct Sales + Royalty</p>
                <div className="space-y-1 text-base">
                  <p>• Sun Pharma: 97.5% retention</p>
                  <p>• Fortress Bio: 2.5% royalty</p>
                  <p>• CVR: Up to $4.8M (EU)</p>
                </div>
                <div className="mt-2 bg-green-500/20 p-2 rounded-lg">
                  <p className="text-lg font-bold text-green-400 text-center">Margin: 30-45%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex-none px-8 py-2 flex justify-between items-center">
          <p className="text-sm text-gray-400">Projections based on market analysis and competitive benchmarking.</p>
          <p className="text-lg text-gray-400">6</p>
        </div>
      </div>
    </div>
  );
}
