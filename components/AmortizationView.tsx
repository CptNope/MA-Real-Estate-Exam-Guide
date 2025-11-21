import React, { useState, useMemo } from 'react';
import { CalculatorModule } from '../types';
import { PercentIcon, HomeIcon } from './Icons';

const AmortizationView: React.FC<{ module: CalculatorModule }> = ({ module }) => {
  const [loanAmount, setLoanAmount] = useState(400000);
  const [rate, setRate] = useState(6.5);
  const [years, setYears] = useState(30);

  const results = useMemo(() => {
    // Monthly Interest Rate
    const r = rate / 100 / 12;
    // Total Payments (Months)
    const n = years * 12;
    
    // Monthly Payment Formula: M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1 ]
    // Handle 0 rate edge case
    let monthlyPayment = 0;
    if (rate === 0) {
        monthlyPayment = loanAmount / n;
    } else {
        monthlyPayment = loanAmount * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    }

    // First Month Breakdown
    const firstMonthInterest = loanAmount * r;
    const firstMonthPrincipal = monthlyPayment - firstMonthInterest;

    return { monthlyPayment, firstMonthInterest, firstMonthPrincipal, totalInterest: (monthlyPayment * n) - loanAmount };
  }, [loanAmount, rate, years]);

  return (
    <div className="w-full max-w-3xl mx-auto pt-8 pb-20 px-4 md:px-8">
      <div className="mb-8 border-b border-slate-800 pb-6">
        <div className="flex items-center space-x-3 mb-2">
          <div className="p-2 bg-purple-500/10 text-purple-400 rounded-lg">
            <PercentIcon size={24} />
          </div>
          <h1 className="text-2xl font-bold text-slate-50">Amortization Calculator</h1>
        </div>
        <p className="text-slate-400">
          Calculate monthly Principal & Interest (PI) payments. Focus on how much of the <strong>first payment</strong> goes toward interest vs. principal.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Inputs */}
        <div className="space-y-5">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
            
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Loan Amount</label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-slate-500">$</span>
                <input 
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full bg-slate-800 border border-slate-700 rounded px-3 pl-7 py-2 text-white focus:border-purple-500 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Interest Rate (%)</label>
              <input 
                type="number" step="0.1"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full bg-slate-800 border border-slate-700 rounded px-3 py-2 text-white focus:border-purple-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Term (Years)</label>
              <select 
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full bg-slate-800 border border-slate-700 rounded px-3 py-2 text-white focus:border-purple-500 outline-none appearance-none"
              >
                <option value="30">30 Years</option>
                <option value="25">25 Years</option>
                <option value="20">20 Years</option>
                <option value="15">15 Years</option>
                <option value="10">10 Years</option>
              </select>
            </div>

          </div>
        </div>

        {/* Outputs */}
        <div className="space-y-6">
          
          {/* Monthly Payment */}
          <div className="bg-slate-800 border border-purple-500/20 rounded-xl p-6 text-center">
            <span className="text-xs text-slate-500 uppercase font-bold">Monthly P&I Payment</span>
            <div className="text-4xl font-bold text-white mt-2">
              ${results.monthlyPayment.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
          </div>

          {/* Breakdown Chart */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <h3 className="text-sm font-bold text-slate-300 mb-4">First Month Breakdown</h3>
            
            <div className="flex items-center mb-2 text-sm">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
              <span className="text-slate-400 flex-1">Interest Payment</span>
              <span className="font-mono text-red-400 font-bold">${results.firstMonthInterest.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
            </div>
            
            <div className="flex items-center text-sm mb-4">
              <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></div>
              <span className="text-slate-400 flex-1">Principal Payment</span>
              <span className="font-mono text-emerald-400 font-bold">${results.firstMonthPrincipal.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
            </div>

            {/* Progress Bar */}
            <div className="h-4 w-full bg-slate-800 rounded-full overflow-hidden flex">
               <div 
                 className="h-full bg-red-500 transition-all duration-500"
                 style={{ width: `${(results.firstMonthInterest / results.monthlyPayment) * 100}%` }}
               ></div>
               <div 
                 className="h-full bg-emerald-500 transition-all duration-500"
                 style={{ width: `${(results.firstMonthPrincipal / results.monthlyPayment) * 100}%` }}
               ></div>
            </div>
            <div className="flex justify-between mt-1 text-[10px] text-slate-500">
              <span>Interest portion starts high</span>
              <span>Principal portion starts low</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AmortizationView;