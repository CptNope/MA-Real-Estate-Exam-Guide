import React, { useState, useMemo } from 'react';
import { CalculatorModule } from '../types';
import { RefreshIcon, CalculatorIcon, HomeIcon } from './Icons';

interface PropertyStats {
  price: number;
  beds: number;
  baths: number;
  sqft: number;
}

interface CompStats extends PropertyStats {
  id: number;
}

const CMACalculatorView: React.FC<{ module: CalculatorModule }> = ({ module }) => {
  // Adjustment Values (Estimates for study purposes)
  const [adjustments, setAdjustments] = useState({
    bed: 15000,
    bath: 10000,
    sqft: 100
  });

  // Subject Property
  const [subject, setSubject] = useState<PropertyStats>({
    price: 0, // Not used for calc, but good for reference
    beds: 3,
    baths: 2,
    sqft: 1800
  });

  // Comparables
  const [comps, setComps] = useState<CompStats[]>([
    { id: 1, price: 450000, beds: 3, baths: 2, sqft: 1800 },
    { id: 2, price: 475000, beds: 4, baths: 2.5, sqft: 2100 },
    { id: 3, price: 430000, beds: 3, baths: 1, sqft: 1600 },
  ]);

  // Calculate Adjusted Price for a single comp
  const calculateAdjustment = (comp: CompStats) => {
    const bedAdj = (subject.beds - comp.beds) * adjustments.bed;
    const bathAdj = (subject.baths - comp.baths) * adjustments.bath;
    const sqftAdj = (subject.sqft - comp.sqft) * adjustments.sqft;
    const totalAdj = bedAdj + bathAdj + sqftAdj;
    const adjustedPrice = comp.price + totalAdj;
    
    return { bedAdj, bathAdj, sqftAdj, totalAdj, adjustedPrice };
  };

  const results = useMemo(() => {
    const calculatedComps = comps.map(c => ({ ...c, ...calculateAdjustment(c) }));
    const totalAdjustedPrice = calculatedComps.reduce((sum, c) => sum + c.adjustedPrice, 0);
    const avgValue = totalAdjustedPrice / calculatedComps.length;
    return { calculatedComps, avgValue };
  }, [subject, comps, adjustments]);

  const updateComp = (id: number, field: keyof CompStats, value: number) => {
    setComps(comps.map(c => c.id === id ? { ...c, [field]: value } : c));
  };

  return (
    <div className="w-full max-w-5xl mx-auto pt-8 pb-20 px-4 md:px-8">
      {/* Header */}
      <div className="mb-8 border-b border-slate-800 pb-6">
        <div className="flex items-center space-x-3 mb-2">
          <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg">
            <CalculatorIcon size={24} />
          </div>
          <h1 className="text-2xl font-bold text-slate-50">CMA Worksheet</h1>
        </div>
        <p className="text-slate-400 max-w-2xl">
          Use the <strong>Sales Comparison Approach</strong>. Enter your Subject Property details and adjust Comparables to find the market value.
          Remember: <em>CBS (Comp Better Subtract)</em> and <em>CPA (Comp Poorer Add)</em>.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        
        {/* Left Column: Inputs */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Subject Property */}
          <div className="bg-slate-800/50 border border-blue-500/30 rounded-xl overflow-hidden">
            <div className="bg-blue-900/20 px-6 py-3 border-b border-blue-500/20 flex items-center justify-between">
              <h3 className="font-bold text-blue-100 flex items-center">
                <HomeIcon size={18} className="mr-2" />
                Subject Property
              </h3>
              <span className="text-xs text-blue-300 bg-blue-900/50 px-2 py-1 rounded">The Standard</span>
            </div>
            <div className="p-6 grid grid-cols-3 gap-4">
              <div>
                <label className="block text-xs text-slate-400 uppercase font-bold mb-2">Beds</label>
                <input 
                  type="number" 
                  value={subject.beds}
                  onChange={(e) => setSubject({...subject, beds: Number(e.target.value)})}
                  className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2 text-white focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-400 uppercase font-bold mb-2">Baths</label>
                <input 
                  type="number" 
                  value={subject.baths}
                  onChange={(e) => setSubject({...subject, baths: Number(e.target.value)})}
                  className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2 text-white focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-400 uppercase font-bold mb-2">Sq Ft</label>
                <input 
                  type="number" 
                  value={subject.sqft}
                  onChange={(e) => setSubject({...subject, sqft: Number(e.target.value)})}
                  className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2 text-white focus:border-blue-500 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Comparables List */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider ml-1">Comparables</h3>
            
            {results.calculatedComps.map((comp, index) => (
              <div key={comp.id} className="bg-slate-900 border border-slate-800 rounded-xl p-5 transition-all hover:border-slate-700">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-bold text-slate-200">Comparable #{index + 1}</h4>
                  <div className="text-right">
                    <span className="block text-xs text-slate-500 uppercase">Sold Price</span>
                    <div className="flex items-center">
                      <span className="text-slate-400 mr-1">$</span>
                      <input 
                        type="number" 
                        value={comp.price}
                        onChange={(e) => updateComp(comp.id, 'price', Number(e.target.value))}
                        className="w-32 bg-transparent text-right font-bold text-white border-b border-slate-700 focus:border-emerald-500 outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6 text-sm">
                  {/* Beds Column */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-slate-400">Beds</span>
                      <input 
                        type="number" 
                        value={comp.beds}
                        onChange={(e) => updateComp(comp.id, 'beds', Number(e.target.value))}
                        className="w-12 bg-slate-800 text-center rounded text-slate-200 text-xs p-1"
                      />
                    </div>
                    <div className={`text-right text-xs font-mono ${comp.bedAdj > 0 ? 'text-emerald-400' : comp.bedAdj < 0 ? 'text-red-400' : 'text-slate-600'}`}>
                      {comp.bedAdj > 0 ? '+' : ''}{comp.bedAdj.toLocaleString()}
                    </div>
                  </div>

                  {/* Baths Column */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-slate-400">Baths</span>
                      <input 
                        type="number" 
                        value={comp.baths}
                        onChange={(e) => updateComp(comp.id, 'baths', Number(e.target.value))}
                        className="w-12 bg-slate-800 text-center rounded text-slate-200 text-xs p-1"
                      />
                    </div>
                    <div className={`text-right text-xs font-mono ${comp.bathAdj > 0 ? 'text-emerald-400' : comp.bathAdj < 0 ? 'text-red-400' : 'text-slate-600'}`}>
                      {comp.bathAdj > 0 ? '+' : ''}{comp.bathAdj.toLocaleString()}
                    </div>
                  </div>

                  {/* SqFt Column */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-slate-400">Sq Ft</span>
                      <input 
                        type="number" 
                        value={comp.sqft}
                        onChange={(e) => updateComp(comp.id, 'sqft', Number(e.target.value))}
                        className="w-16 bg-slate-800 text-center rounded text-slate-200 text-xs p-1"
                      />
                    </div>
                    <div className={`text-right text-xs font-mono ${comp.sqftAdj > 0 ? 'text-emerald-400' : comp.sqftAdj < 0 ? 'text-red-400' : 'text-slate-600'}`}>
                      {comp.sqftAdj > 0 ? '+' : ''}{comp.sqftAdj.toLocaleString()}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex justify-between items-center">
                   <span className="text-xs text-slate-500">Net Adjustment</span>
                   <div className="flex items-center space-x-4">
                      <span className={`font-mono text-sm ${comp.totalAdj >= 0 ? 'text-emerald-500' : 'text-red-500'}`}>
                        {comp.totalAdj > 0 ? '+' : ''}{comp.totalAdj.toLocaleString()}
                      </span>
                      <div className="bg-slate-800 px-3 py-1 rounded border border-slate-700">
                        <span className="text-xs text-slate-500 mr-2">Adjusted Value:</span>
                        <span className="font-bold text-blue-400">${comp.adjustedPrice.toLocaleString()}</span>
                      </div>
                   </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Right Column: Settings & Result */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Result Card */}
          <div className="bg-gradient-to-br from-blue-900/40 to-slate-900 border border-blue-500/30 rounded-xl p-6 shadow-lg sticky top-8">
            <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-1">Indicated Value</h2>
            <div className="text-4xl font-bold text-white mb-2">
              ${Math.round(results.avgValue).toLocaleString()}
            </div>
            <p className="text-xs text-blue-200/70 mb-6">
              Based on the average adjusted price of {comps.length} comparables.
            </p>

            <div className="border-t border-blue-500/20 pt-4">
              <h3 className="text-xs font-bold text-slate-400 uppercase mb-3">Adjustment Settings</h3>
              <div className="space-y-3">
                <div>
                  <label className="flex justify-between text-xs text-slate-300 mb-1">
                    <span>Per Bedroom</span>
                    <span>${adjustments.bed.toLocaleString()}</span>
                  </label>
                  <input 
                    type="range" min="5000" max="50000" step="1000" 
                    value={adjustments.bed}
                    onChange={(e) => setAdjustments({...adjustments, bed: Number(e.target.value)})}
                    className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                </div>
                <div>
                  <label className="flex justify-between text-xs text-slate-300 mb-1">
                    <span>Per Bathroom</span>
                    <span>${adjustments.bath.toLocaleString()}</span>
                  </label>
                  <input 
                    type="range" min="1000" max="25000" step="1000" 
                    value={adjustments.bath}
                    onChange={(e) => setAdjustments({...adjustments, bath: Number(e.target.value)})}
                    className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                </div>
                <div>
                  <label className="flex justify-between text-xs text-slate-300 mb-1">
                    <span>Per Sq Ft</span>
                    <span>${adjustments.sqft.toLocaleString()}</span>
                  </label>
                  <input 
                    type="range" min="10" max="500" step="10" 
                    value={adjustments.sqft}
                    onChange={(e) => setAdjustments({...adjustments, sqft: Number(e.target.value)})}
                    className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                </div>
              </div>
              <div className="mt-4 bg-blue-500/10 p-3 rounded text-[10px] text-blue-300 leading-tight">
                <strong>Tip:</strong> In the actual exam, you don't pick these values. The problem will say "Assume a bedroom is worth $15,000". This tool helps you visualize the math.
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CMACalculatorView;