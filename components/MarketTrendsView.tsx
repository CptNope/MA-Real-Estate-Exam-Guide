import React, { useState, useMemo } from 'react';
import { MarketModule, MarketDataPoint } from '../types';

interface MarketTrendsViewProps {
  module: MarketModule;
}

const MarketTrendsView: React.FC<MarketTrendsViewProps> = ({ module }) => {
  const [activeDatasetId, setActiveDatasetId] = useState(module.datasets[0].id);
  const [hoverData, setHoverData] = useState<MarketDataPoint | null>(null);
  const [hoverX, setHoverX] = useState(0);

  const dataset = module.datasets.find(d => d.id === activeDatasetId) || module.datasets[0];
  
  // Chart Dimensions
  const height = 300;
  const width = 800;
  const padding = { top: 40, right: 20, bottom: 40, left: 20 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  // Scales
  const dataMax = Math.max(...dataset.data.map(d => d.value));
  const dataMin = Math.min(...dataset.data.map(d => d.value));
  // Add some buffer to min/max for visual breathing room
  const yMax = dataMax * 1.05;
  const yMin = dataMin * 0.95;

  const getX = (index: number) => padding.left + (index / (dataset.data.length - 1)) * chartWidth;
  const getY = (value: number) => height - padding.bottom - ((value - yMin) / (yMax - yMin)) * chartHeight;

  // Generate Path
  const pathD = useMemo(() => {
    return dataset.data.reduce((path, point, i) => {
      const x = getX(i);
      const y = getY(point.value);
      return i === 0 ? `M ${x},${y}` : `${path} L ${x},${y}`;
    }, '');
  }, [dataset, yMax, yMin]);

  // Generate Area Fill Path (closed shape)
  const areaD = `${pathD} L ${getX(dataset.data.length - 1)},${height - padding.bottom} L ${padding.left},${height - padding.bottom} Z`;

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    
    // Find closest data point based on X position
    // Convert mouseX to index
    // mouseX - padding.left = (index / length) * chartWidth
    let index = Math.round(((mouseX - padding.left) / chartWidth) * (dataset.data.length - 1));
    index = Math.max(0, Math.min(index, dataset.data.length - 1));
    
    setHoverData(dataset.data[index]);
    setHoverX(getX(index));
  };

  return (
    <div className="w-full max-w-4xl mx-auto pt-8 pb-20 px-4 md:px-8">
      <div className="mb-8 border-b border-slate-800 pb-6">
        <h1 className="text-3xl font-bold text-slate-50 mb-4">{module.title}</h1>
        <p className="text-slate-400 text-lg">{module.description}</p>
      </div>

      {/* Controls */}
      <div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
        {module.datasets.map(ds => (
          <button
            key={ds.id}
            onClick={() => setActiveDatasetId(ds.id)}
            className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${
              activeDatasetId === ds.id 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/30' 
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
            }`}
          >
            {ds.name}
          </button>
        ))}
      </div>

      {/* Chart Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 md:p-8 shadow-xl relative overflow-hidden">
        
        <div className="flex justify-between items-end mb-6">
          <div>
             <h3 className="text-slate-400 text-sm font-bold uppercase tracking-wider">{dataset.name}</h3>
             <div className="text-2xl md:text-4xl font-bold text-white mt-1">
               {hoverData ? (
                 <span>
                   {dataset.unit === '$' ? '$' : ''}
                   {hoverData.value.toLocaleString()}
                   {dataset.unit === '%' ? '%' : ''}
                 </span>
               ) : (
                <span>
                  {dataset.unit === '$' ? '$' : ''}
                  {dataset.data[dataset.data.length-1].value.toLocaleString()}
                  {dataset.unit === '%' ? '%' : ''}
                </span>
               )}
             </div>
             <div className="text-sm text-slate-500 mt-1 min-h-[20px]">
                {hoverData ? hoverData.label : 'Latest Data (' + dataset.data[dataset.data.length-1].label + ')'}
             </div>
          </div>
          {hoverData?.detail && (
            <div className="bg-blue-500/20 text-blue-300 text-xs font-bold px-3 py-1 rounded-full animate-pulse">
              {hoverData.detail}
            </div>
          )}
        </div>

        {/* Responsive SVG Container */}
        <div className="w-full overflow-x-auto">
            <div className="min-w-[600px]">
                <svg 
                    width="100%" 
                    height="100%" 
                    viewBox={`0 0 ${width} ${height}`}
                    className="w-full h-auto touch-none"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => { setHoverData(null); setHoverX(0); }}
                    style={{ cursor: 'crosshair' }}
                >
                    <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor={dataset.color} stopOpacity={0.3} />
                            <stop offset="100%" stopColor={dataset.color} stopOpacity={0} />
                        </linearGradient>
                    </defs>

                    {/* Grid Lines (Y-Axis) */}
                    {[0, 0.25, 0.5, 0.75, 1].map((t) => {
                         const y = padding.top + t * chartHeight;
                         return (
                            <line key={t} x1={padding.left} y1={y} x2={width - padding.right} y2={y} stroke="#334155" strokeDasharray="4" strokeWidth="1" opacity="0.5" />
                         )
                    })}

                    {/* Area Fill */}
                    <path d={areaD} fill="url(#chartGradient)" />

                    {/* Line */}
                    <path d={pathD} fill="none" stroke={dataset.color} strokeWidth="3" strokeLinecap="round" />

                    {/* Data Points (Dots) - Only visible on hover or endpoints to keep it clean? Let's show endpoints. */}
                    <circle cx={getX(0)} cy={getY(dataset.data[0].value)} r="4" fill={dataset.color} />
                    <circle cx={getX(dataset.data.length - 1)} cy={getY(dataset.data[dataset.data.length - 1].value)} r="4" fill={dataset.color} />

                    {/* Hover Indicator */}
                    {hoverData && (
                        <g>
                            <line 
                                x1={hoverX} y1={padding.top} 
                                x2={hoverX} y2={height - padding.bottom} 
                                stroke="#94a3b8" strokeWidth="1" strokeDasharray="4" 
                            />
                            <circle 
                                cx={hoverX} cy={getY(hoverData.value)} 
                                r="6" fill="#ffffff" stroke={dataset.color} strokeWidth="2" 
                            />
                        </g>
                    )}
                    
                    {/* X Axis Labels (Select few) */}
                    {dataset.data.map((d, i) => {
                        // Show every 3rd label roughly, or just start/end/middle
                        if (i === 0 || i === dataset.data.length - 1 || i % 4 === 0) {
                            return (
                                <text 
                                    key={i} 
                                    x={getX(i)} 
                                    y={height - 10} 
                                    textAnchor="middle" 
                                    fill="#64748b" 
                                    fontSize="12"
                                >
                                    {d.label}
                                </text>
                            )
                        }
                        return null;
                    })}

                </svg>
            </div>
        </div>
        
        <div className="mt-4 text-xs text-slate-600 text-center">
            Source: Freddie Mac PMMS & MA Association of Realtors (Approximate Historical Data)
        </div>

      </div>
      
      {/* Analysis Text */}
      <div className="mt-10 grid md:grid-cols-2 gap-6">
         <div className="bg-slate-800 p-6 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-bold text-slate-200 mb-2">Interest Rate Impact</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
               Notice the inverse relationship between rates and buying power. 
               When rates dropped in 2020-2021, buying power surged, driving prices up. 
               As rates climbed in 2023, "Lock-in Effect" occurred—sellers didn't want to trade their 3% rate for a 7% rate, reducing inventory.
            </p>
         </div>
         <div className="bg-slate-800 p-6 rounded-lg border-l-4 border-emerald-500">
            <h4 className="font-bold text-slate-200 mb-2">Appreciation Trends</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
               Real estate has historically appreciated over the long term. 
               Despite short-term fluctuations, the limited land supply in MA combined with high demand (DUST) keeps the long-term trend positive.
            </p>
         </div>
      </div>

    </div>
  );
};

export default MarketTrendsView;