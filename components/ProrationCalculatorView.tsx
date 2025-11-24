import React, { useState, useMemo } from 'react';
import { CalculatorModule } from '../types';
import { DivideIcon } from './Icons';

const ProrationCalculatorView: React.FC<{ module: CalculatorModule }> = () => {
  // Defaults for a typical exam question
  const [totalAmount, setTotalAmount] = useState(3600);
  const [closingDay, setClosingDay] = useState(15);
  const [closingMonth, setClosingMonth] = useState(5); // May (1-based index for UI)
  const [sellerOwnsClosingDay, setSellerOwnsClosingDay] = useState(true);
  const [isPrepaid, setIsPrepaid] = useState(false); // Typically taxes are prepaid? Or arrears? Exam questions vary.

  // Helper: 360 day year (Banker's Year) = 30 days per month
  // This is standard for most real estate exams unless specified otherwise.
  
  const results = useMemo(() => {
    const dailyRate = totalAmount / 360; // Exam standard
    
    // Days used by Seller (Jan 1 to Closing Date)
    // (Month - 1) * 30 + Days
    const totalDaysInYear = 360;
    const closingDateNumber = ((closingMonth - 1) * 30) + closingDay;
    
    let sellerDays = closingDateNumber;
    if (!sellerOwnsClosingDay) {
        sellerDays = closingDateNumber - 1;
    }

    const buyerDays = totalDaysInYear - sellerDays;
    
    // Scenario A: Expense is PAID in Advance (Prepaid)
    // Seller paid for whole year. Buyer owes Seller for buyer's portion.
    // Credit Seller / Debit Buyer
    const prepaidCredit = buyerDays * dailyRate;

    // Scenario B: Expense is PAID in Arrears (Not paid yet)
    // Seller owes Buyer for time used.
    // Credit Buyer / Debit Seller
    const arrearsCredit = sellerDays * dailyRate;

    return { dailyRate, sellerDays, buyerDays, prepaidCredit, arrearsCredit };
  }, [totalAmount, closingDay, closingMonth, sellerOwnsClosingDay]);

  return (
    <div className="w-full max-w-3xl mx-auto pt-8 pb-20 px-4 md:px-8">
      <div className="mb-8 border-b border-slate-800 pb-6">
        <div className="flex items-center space-x-3 mb-2">
          <div className="p-2 bg-orange-500/10 text-orange-400 rounded-lg">
            <DivideIcon size={24} />
          </div>
          <h1 className="text-2xl font-bold text-slate-50">Proration Wizard</h1>
        </div>
        <p className="text-slate-400">
          Calculate closing credits using the <strong>360-Day Banker's Year</strong> (30 days/month). 
          Common for taxes, water, and condo fees on the exam.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        
        {/* Inputs */}
        <div className="space-y-5">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
            
            <div>
              <label htmlFor="annual-amount" className="block text-xs font-bold text-slate-400 uppercase mb-2">Annual Expense Amount</label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-slate-500">$</span>
                <input 
                  id="annual-amount"
                  type="number"
                  value={totalAmount}
                  onChange={(e) => setTotalAmount(Number(e.target.value))}
                  className="w-full bg-slate-800 border border-slate-700 rounded px-3 pl-7 py-2 text-white focus:border-orange-500 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="closing-month" className="block text-xs font-bold text-slate-400 uppercase mb-2">Closing Month</label>
                <select 
                  id="closing-month"
                  value={closingMonth}
                  onChange={(e) => setClosingMonth(Number(e.target.value))}
                  className="w-full bg-slate-800 border border-slate-700 rounded px-3 py-2 text-white focus:border-orange-500 outline-none"
                >
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((m, i) => (
                    <option key={m} value={i+1}>{m}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="closing-day" className="block text-xs font-bold text-slate-400 uppercase mb-2">Day</label>
                <input 
                  id="closing-day"
                  type="number" min="1" max="30"
                  value={closingDay}
                  onChange={(e) => setClosingDay(Number(e.target.value))}
                  className="w-full bg-slate-800 border border-slate-700 rounded px-3 py-2 text-white focus:border-orange-500 outline-none"
                />
              </div>
            </div>

            <div className="flex items-center justify-between py-2 border-t border-slate-800">
              <label className="text-sm text-slate-300">Seller Owns Day of Closing?</label>
              <button 
                onClick={() => setSellerOwnsClosingDay(!sellerOwnsClosingDay)}
                className={`w-12 h-6 rounded-full p-1 transition-colors ${sellerOwnsClosingDay ? 'bg-blue-600' : 'bg-slate-600'}`}
                aria-label={`Seller owns closing day: ${sellerOwnsClosingDay ? 'Yes' : 'No'}`}
                role="switch"
                aria-checked={sellerOwnsClosingDay ? 'true' : 'false'}
              >
                <div className={`w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${sellerOwnsClosingDay ? 'translate-x-6' : ''}`} />
              </button>
            </div>

            <div className="flex items-center justify-between py-2 border-t border-slate-800">
              <label className="text-sm text-slate-300">Has Seller Paid Yet?</label>
               <div className="flex bg-slate-800 rounded p-1">
                  <button 
                    onClick={() => setIsPrepaid(false)}
                    className={`px-3 py-1 text-xs rounded ${!isPrepaid ? 'bg-red-500/20 text-red-400 font-bold' : 'text-slate-400'}`}
                    aria-label="No (Arrears)"
                  >
                    No (Arrears)
                  </button>
                  <button 
                    onClick={() => setIsPrepaid(true)}
                    className={`px-3 py-1 text-xs rounded ${isPrepaid ? 'bg-green-500/20 text-green-400 font-bold' : 'text-slate-400'}`}
                    aria-label="Yes (Prepaid)"
                  >
                    Yes (Prepaid)
                  </button>
               </div>
            </div>

          </div>

          <div className="bg-orange-900/10 border border-orange-500/20 p-4 rounded-lg text-sm text-orange-200">
             <strong className="block mb-1">Math Tip:</strong>
             Daily Rate = ${totalAmount} ÷ 360 = <span className="font-mono">${results.dailyRate.toFixed(2)}</span>/day.
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          
          {/* Timeline Viz */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-slate-700"></div>
             <div className="flex justify-between text-xs text-slate-500 mb-6">
                <span>Jan 1</span>
                <span>Dec 30</span>
             </div>
             
             {/* Bar */}
             <div className="h-4 bg-slate-700 rounded-full w-full flex overflow-hidden relative" role="img" aria-label={`Timeline: Seller ${results.sellerDays} days, Buyer ${results.buyerDays} days`}>
                <div className="bg-blue-500 h-full" style={{ width: `${(results.sellerDays / 360) * 100}%` }}></div>
                <div className="bg-green-500 h-full flex-1"></div>
                
                {/* Marker */}
                <div 
                  className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                  style={{ left: `${(results.sellerDays / 360) * 100}%` }}
                  aria-hidden="true"
                ></div>
             </div>
             
             <div className="flex justify-between mt-2 text-sm font-bold">
                <span className="text-blue-400">Seller: {results.sellerDays} Days</span>
                <span className="text-green-400">Buyer: {results.buyerDays} Days</span>
             </div>
          </div>

          {/* Final Result Card */}
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center shadow-lg">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Settlement Statement Entry</h3>
            
            {isPrepaid ? (
              // Prepaid: Buyer owes Seller
              <div className="space-y-2">
                 <div className="text-lg text-slate-300">Seller Paid in Advance. Buyer must reimburse.</div>
                 <div className="text-3xl font-bold text-green-400">
                    Credit Seller ${results.prepaidCredit.toFixed(2)}
                 </div>
                 <div className="text-xl font-bold text-red-400">
                    Debit Buyer ${results.prepaidCredit.toFixed(2)}
                 </div>
              </div>
            ) : (
              // Arrears: Seller owes Buyer
              <div className="space-y-2">
                 <div className="text-lg text-slate-300">Bill not paid yet. Seller owes for time used.</div>
                 <div className="text-3xl font-bold text-green-400">
                    Credit Buyer ${results.arrearsCredit.toFixed(2)}
                 </div>
                 <div className="text-xl font-bold text-red-400">
                    Debit Seller ${results.arrearsCredit.toFixed(2)}
                 </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProrationCalculatorView;