import React, { useState, useMemo } from 'react';
import { CalculatorModule } from '../types';
import { BanknoteIcon, HomeIcon } from './Icons';

const TransferTaxView: React.FC<{ module: CalculatorModule }> = ({ module }) => {
  const [price, setPrice] = useState<number>(500000);
  
  // MA Specific Logic
  // 1. Round price UP to nearest $500
  // 2. Divide by $500 (or $1000)
  // 3. Multiply by Rate ($2.28 per $500)
  
  const results = useMemo(() => {
    // 1. Rounding logic
    const remainder = price % 500;
    const roundedPrice = remainder === 0 ? price : price + (500 - remainder);
    
    // 2. Units
    const units = roundedPrice / 500;
    
    // 3. Calculation ($2.28 per $500)
    const tax = units * 2.28;
    
    return { roundedPrice, units, tax };
  }, [price]);

  return (
    <div className="w-full max-w-3xl mx-auto pt-8 pb-20 px-4 md:px-8">
      <div className="mb-8 border-b border-slate-800 pb-6">
        <div className="flex items-center space-x-3 mb-2">
          <div className="p-2 bg-green-500/10 text-green-400 rounded-lg">
            <BanknoteIcon size={24} />
          </div>
          <h1 className="text-2xl font-bold text-slate-50">MA Transfer Stamps</h1>
        </div>
        <p className="text-slate-400">
          Calculate the Massachusetts Deeds Excise Tax (Stamps). 
          The state rate is <strong>$4.56 per $1,000</strong> (or $2.28 per $500).
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Input Section */}
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <label className="block text-sm font-bold text-slate-300 mb-3 flex items-center">
              <HomeIcon size={16} className="mr-2" />
              Sales Price
            </label>
            <div className="relative">
              <span className="absolute left-4 top-3.5 text-slate-500 font-bold">$</span>
              <input 
                type="number"
                value={price}
                onChange={(e) => setPrice(Math.max(0, Number(e.target.value)))}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 pl-8 pr-4 text-lg font-bold text-white focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-all"
                placeholder="500000"
              />
            </div>
            <p className="text-xs text-slate-500 mt-3">
              Enter the full sales price found on the deed.
            </p>
          </div>

          <div className="bg-blue-900/10 border border-blue-500/20 rounded-xl p-4 text-sm text-slate-300">
            <h3 className="font-bold text-blue-400 mb-1">Exam Tip: Rounding</h3>
            <p>
              In Massachusetts, the tax is calculated on the full purchase price. 
              However, you must first <strong>round the price UP</strong> to the nearest $500 increment before multiplying by the rate.
            </p>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-4">
          
          {/* Step 1: Rounding */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 flex justify-between items-center">
            <div>
              <span className="text-xs text-slate-500 uppercase font-bold">Step 1: Round Up</span>
              <div className="text-lg font-medium text-slate-200">
                To nearest $500
              </div>
            </div>
            <div className="text-xl font-bold text-white">
              ${results.roundedPrice.toLocaleString()}
            </div>
          </div>

           {/* Step 2: Calculation */}
           <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 flex justify-between items-center">
            <div>
              <span className="text-xs text-slate-500 uppercase font-bold">Step 2: Multiplier</span>
              <div className="text-lg font-medium text-slate-200">
                {results.units.toLocaleString()} <span className="text-sm text-slate-500">x $2.28</span>
              </div>
            </div>
            <div className="text-sm text-slate-400">
              (Units of $500)
            </div>
          </div>

          {/* Final Result */}
          <div className="bg-gradient-to-br from-green-900/50 to-slate-900 border border-green-500/40 rounded-xl p-6 text-center">
            <h3 className="text-sm font-bold text-green-400 uppercase tracking-widest mb-2">Tax Due</h3>
            <div className="text-4xl font-bold text-white">
              ${results.tax.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <p className="text-xs text-slate-500 mt-2">Paid by the Seller (Grantor) at closing.</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TransferTaxView;