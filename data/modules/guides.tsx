import React from 'react';
import { GuideModule } from '../../types';
// Term import removed - handled by TextHighlighter
import { 
  InfoIcon, BookIcon, ScaleIcon, ChartIcon, GavelIcon, UsersIcon, 
  KeyIcon, LeafIcon, ShieldCheckIcon, LandmarkIcon, FileTextIcon,
  BuildingIcon, ReceiptIcon, BriefcaseIcon, PieChartIcon, HammerIcon, MegaphoneIcon, MapIcon, AlertTriangleIcon, StoreIcon, CompassIcon, UserCheckIcon, FlagIcon, DivideIcon
} from '../../components/Icons';

export const guideModules: GuideModule[] = [
  {
    id: 'exam-info',
    title: '0. Exam Info & PSI Guide',
    description: 'Official exam requirements, structure, passing scores, and day-of procedures.',
    icon: <InfoIcon size={20} />,
    type: 'guide',
    sections: [
      {
        id: 'eligibility',
        title: '0.1 Eligibility & Requirements',
        content: (
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-slate-800 p-5 rounded-lg border border-blue-900/50 shadow-sm">
              <h5 className="font-bold text-blue-400 mb-3 flex items-center">
                <span className="bg-blue-500/20 p-1 rounded mr-2">S</span> Salesperson
              </h5>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start"><span className="mr-2 text-blue-500">•</span>Must be at least 18 years old.</li>
                <li className="flex items-start"><span className="mr-2 text-blue-500">•</span>Complete 40 hours of education at an approved school.</li>
                <li className="flex items-start"><span className="mr-2 text-blue-500">•</span>Obtain the "Candidate Handbook" from the school (stamped).</li>
                <li className="flex items-start"><span className="mr-2 text-blue-500">•</span>Pass the exam within 2 years of completing education.</li>
                <li className="flex items-start"><span className="mr-2 text-blue-500">•</span><strong>Fee:</strong> ~$85 (Exam) + ~$103-$150 (License) - <em>fees subject to change.</em></li>
              </ul>
            </div>
            <div className="bg-slate-800 p-5 rounded-lg border border-purple-900/50 shadow-sm">
              <h5 className="font-bold text-purple-400 mb-3 flex items-center">
                <span className="bg-purple-500/20 p-1 rounded mr-2">B</span> Broker
              </h5>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start"><span className="mr-2 text-purple-500">•</span>Must be at least 18 years old.</li>
                <li className="flex items-start"><span className="mr-2 text-purple-500">•</span>Three (3) years of experience as a Salesperson (min 25 hrs/week).</li>
                <li className="flex items-start"><span className="mr-2 text-purple-500">•</span>Complete 40 hours of Broker education.</li>
                <li className="flex items-start"><span className="mr-2 text-purple-500">•</span><strong>Bond:</strong> $5,000 Surety Bond required at licensure.</li>
              </ul>
            </div>
          </div>
        )
      },
      {
        id: 'structure',
        title: '0.2 Exam Structure & Scoring',
        content: (
          <>
            <p className="mb-4 text-slate-300">The examination is administered by PSI. It consists of two portions: <strong>General</strong> (National) and <strong>State</strong> (Massachusetts specific).</p>
            
            <div className="overflow-hidden rounded-lg border border-slate-700 mb-6">
              <table className="w-full text-sm text-left text-slate-400">
                <thead className="text-xs text-slate-200 uppercase bg-slate-800">
                  <tr>
                    <th scope="col" className="px-4 py-3">Feature</th>
                    <th scope="col" className="px-4 py-3 text-blue-400">Salesperson</th>
                    <th scope="col" className="px-4 py-3 text-purple-400">Broker</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  <tr className="bg-slate-900">
                    <td className="px-4 py-3 font-medium text-slate-200">Total Questions</td>
                    <td className="px-4 py-3">120 (80 Gen / 40 State)</td>
                    <td className="px-4 py-3">120 (80 Gen / 40 State)</td>
                  </tr>
                  <tr className="bg-slate-800/50">
                    <td className="px-4 py-3 font-medium text-slate-200">Time Allowed</td>
                    <td className="px-4 py-3">240 Minutes (4 Hours)</td>
                    <td className="px-4 py-3">240 Minutes (4 Hours)</td>
                  </tr>
                  <tr className="bg-slate-900">
                    <td className="px-4 py-3 font-medium text-slate-200">Passing Score</td>
                    <td className="px-4 py-3 font-bold text-green-400">70%</td>
                    <td className="px-4 py-3 font-bold text-green-400">75%</td>
                  </tr>
                  <tr className="bg-slate-800/50">
                    <td className="px-4 py-3 font-medium text-slate-200">Result Timing</td>
                    <td className="px-4 py-3">Immediate (On Screen)</td>
                    <td className="px-4 py-3">Immediate (On Screen)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-3 bg-yellow-900/20 border border-yellow-700/50 rounded text-sm text-yellow-200/80">
              <strong>Crucial:</strong> You must pass <em>both</em> portions. If you fail one part, you must retake only that part. You have 2 years from your education date to pass both.
            </div>
          </>
        )
      },
      {
        id: 'outline',
        title: '0.3 Content Outline (What to Study)',
        content: (
          <div className="space-y-6">
            <div>
              <h5 className="text-lg font-semibold text-slate-200 mb-2 border-b border-slate-700 pb-2">General Portion (Approx. 80 Questions)</h5>
              <ul className="grid sm:grid-cols-2 gap-2 text-sm text-slate-400">
                <li>• Property Ownership (Deed, Estate)</li>
                <li>• Land Use Controls (Zoning)</li>
                <li>• Valuation & Market Analysis (Appraisal)</li>
                <li>• Financing (Mortgage, Clauses)</li>
                <li>• General Agency Principles</li>
                <li>• Property Disclosures</li>
                <li>• Contracts (Offer, P&S)</li>
                <li>• Transfer of Title</li>
                <li>• Practice of Real Estate</li>
                <li>• Real Estate Calculations</li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold text-slate-200 mb-2 border-b border-slate-700 pb-2">State Portion (Approx. 40 Questions)</h5>
              <ul className="grid sm:grid-cols-2 gap-2 text-sm text-slate-400">
                <li>• Duties of the Board (Registration)</li>
                <li>• Licensing Requirements</li>
                <li>• Mass. Fair Housing (MGL c. 151B)</li>
                <li>• Tenant/Landlord Law</li>
                <li>• Consumer Protection (Ch. 93A)</li>
                <li>• Environmental (Title V, Lead Paint)</li>
                <li>• Mass. Homestead Act</li>
                <li>• Taxes & Stamps</li>
              </ul>
            </div>
          </div>
        )
      },
      {
        id: 'exam-day',
        title: '0.4 Exam Day Rules',
        content: (
          <ul className="space-y-4 list-none">
            <li className="bg-slate-800 p-4 rounded-md border-l-4 border-red-500">
              <strong className="block text-slate-200 mb-1">Identification (Strict)</strong>
              <span className="text-sm text-slate-400">You need TWO forms of ID. 
              1. Government-issued photo ID (Driver's License, Passport). 
              2. ID with signature (Credit Card, Debit Card). 
              Names must match exactly.</span>
            </li>
            <li className="bg-slate-800 p-4 rounded-md border-l-4 border-yellow-500">
              <strong className="block text-slate-200 mb-1">Arrival Time</strong>
              <span className="text-sm text-slate-400">Arrive at least 30 minutes before your scheduled appointment. Late arrivals forfeit fees.</span>
            </li>
            <li className="bg-slate-800 p-4 rounded-md border-l-4 border-blue-500">
              <strong className="block text-slate-200 mb-1">Calculators</strong>
              <span className="text-sm text-slate-400">Simple, non-programmable, silent, battery-operated calculators are allowed. No phones.</span>
            </li>
            <li className="bg-slate-800 p-4 rounded-md border-l-4 border-green-500">
              <strong className="block text-slate-200 mb-1">Upon Passing</strong>
              <span className="text-sm text-slate-400">You will receive your license application immediately at the test center. You may pay the license fee on the spot and receive your license (Salesperson only, Brokers usually mailed).</span>
            </li>
          </ul>
        )
      }
    ]
  },
  {
    id: 'contracts',
    title: '1. Contract Flow',
    description: 'Offer, Acceptance, P&S, and Closing procedures in Massachusetts.',
    icon: <BookIcon size={20} />,
    type: 'guide',
    sections: [
      {
        id: 'otp',
        title: '1.1 Offer to Purchase (OTP)',
        content: (
          <>
            <ul className="space-y-3 list-disc list-outside ml-4 marker:text-slate-500">
              <li>Must be in writing to be enforceable (Statute of Frauds).</li>
              <li>Becomes a binding Contract when signed and delivered.</li>
              <li>Counteroffer acts as a <strong>rejection</strong> of the prior Offer and creates a new offer.</li>
              <li>
                <span className="block mb-2">Common terms included:</span>
                <ul className="list-disc list-outside ml-6 space-y-1 text-slate-400 text-sm marker:text-slate-600">
                  <li>Purchase price & Deposit details (Earnest Money)</li>
                  <li>Inspection Contingency (typically 7-10 days)</li>
                  <li>Financing and appraisal contingencies</li>
                  <li>Target Closing date and occupancy details</li>
                </ul>
              </li>
            </ul>
            
            <div className="mt-6 relative pl-4 border-l-4 border-blue-500 bg-slate-750/30 rounded-r-lg p-4">
              <p className="text-slate-200">
                <strong className="text-blue-400 font-semibold block mb-1">2025 Rule Update:</strong> 
                Buyer must receive the <span className="italic text-white">Mandatory Home Inspection Disclosure</span> before submitting the first written offer.
              </p>
            </div>
          </>
        )
      },
      {
        id: 'seller-response',
        title: '1.2 Seller Response',
        content: (
          <ul className="space-y-3 list-disc list-outside ml-4 marker:text-slate-500">
            <li><strong>Accept:</strong> The offer creates a binding contract (Acceptance).</li>
            <li><strong>Reject:</strong> The offer is dead.</li>
            <li><strong>Counter:</strong> A counter-offer voids the original offer. The buyer is now the offeree and can accept, reject, or counter back.</li>
          </ul>
        )
      },
      {
        id: 'pas',
        title: '1.3 Purchase & Sale (P&S)',
        content: (
          <>
            <p className="mb-3">Usually signed 10-14 days after the accepted offer. It replaces the OTP as the primary document.</p>
            <ul className="space-y-3 list-disc list-outside ml-4 marker:text-slate-500">
              <li>Drafted typically by the seller's attorney; negotiated by the buyer's attorney (Bilateral Contract).</li>
              <li><strong>Second Deposit:</strong> Usually brings the total to 5% of the purchase price.</li>
              <li>
                Clarifies and expands contingencies:
                <ul className="list-disc list-outside ml-6 mt-2 space-y-1 text-slate-400 text-sm marker:text-slate-600">
                  <li>Title and defect cure periods (typically 30 days)</li>
                  <li>Precise closing logistics and default remedies</li>
                </ul>
              </li>
            </ul>
          </>
        )
      },
      {
        id: 'closing',
        title: '1.4 Closing Procedures',
        content: (
          <ul className="space-y-3 list-disc list-outside ml-4 marker:text-slate-500">
            <li><strong>Walk-through:</strong> Buyer verifies property condition (broom clean, no new damage).</li>
            <li><strong>Settlement:</strong> Note and Mortgage signed. HUD-1 / ALTA statement reviewed.</li>
            <li><strong>Recording:</strong> The deed is recorded at the Registry of Deeds.</li>
            <li><strong>Key Handoff:</strong> Only happens <em>after</em> recording is confirmed.</li>
          </ul>
        )
      },
      {
        id: 'listings',
        title: '1.5 Types of Listing Agreements',
        content: (
           <div className="space-y-4">
              <div className="p-3 bg-slate-800 rounded border-l-2 border-green-500">
                 <h6 className="font-bold text-slate-200">Exclusive Right to Sell</h6>
                 <p className="text-sm text-slate-400">Broker gets paid regardless of who finds the buyer (even if the seller finds the buyer). Most common and preferred type.</p>
              </div>
              <div className="p-3 bg-slate-800 rounded border-l-2 border-yellow-500">
                 <h6 className="font-bold text-slate-200">Exclusive Agency</h6>
                 <p className="text-sm text-slate-400">Broker is the sole agent, BUT if the seller finds the buyer themselves, the broker gets <strong>$0</strong>. Risky for agents.</p>
              </div>
              <div className="p-3 bg-slate-800 rounded border-l-2 border-red-500">
                 <h6 className="font-bold text-slate-200">Open Listing</h6>
                 <p className="text-sm text-slate-400">Non-exclusive. Seller can hire 10 brokers. Only the one who brings the buyer gets paid. If seller finds buyer, no one gets paid.</p>
              </div>
              <div className="mt-2 text-xs text-slate-500 italic">
                 *Net Listings (where broker keeps everything above a set price) are technically legal in MA but highly discouraged due to conflict of interest.
              </div>
           </div>
        )
      },
      {
        id: 'remedies',
        title: '1.6 Remedies for Breach',
        content: (
           <div className="grid gap-4 md:grid-cols-3">
             <div className="bg-slate-800 p-3 rounded border border-slate-700">
               <strong className="text-blue-400 block mb-1">Specific Performance</strong>
               <p className="text-xs text-slate-400">
                 A court order forcing the breaching party to follow through with the sale. Commonly used by Buyers to force Sellers to sell.
               </p>
             </div>
             <div className="bg-slate-800 p-3 rounded border border-slate-700">
               <strong className="text-red-400 block mb-1">Liquidated Damages</strong>
               <p className="text-xs text-slate-400">
                 Pre-agreed compensation. In Real Estate, this is usually the <strong>Buyer's Deposit</strong>. If buyer defaults, seller keeps the deposit.
               </p>
             </div>
             <div className="bg-slate-800 p-3 rounded border border-slate-700">
               <strong className="text-yellow-400 block mb-1">Rescission</strong>
               <p className="text-xs text-slate-400">
                 Canceling the contract and returning everyone to their original position (returning deposits).
               </p>
             </div>
           </div>
        )
      },
      {
        id: 'options',
        title: '1.7 Options & Special Contracts',
        content: (
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold text-slate-200">Option Contracts</h5>
              <p className="text-sm text-slate-400">A Unilateral Contract. The Seller (Optionor) MUST sell if the Buyer (Optionee) decides to buy. The Buyer is NOT obligated to buy. The Option Fee is kept by the seller regardless.</p>
            </div>
            <div>
              <h5 className="font-semibold text-slate-200">Right of First Refusal</h5>
              <p className="text-sm text-slate-400">Does NOT give the right to buy immediately. It gives the right to match an offer IF the owner decides to sell in the future.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
               <div className="bg-slate-800 p-3 rounded border border-slate-700">
                 <strong className="text-slate-200 text-sm">Assignment</strong>
                 <p className="text-xs text-slate-400 mt-1">Transferring contract rights to a new party. The original signer remains liable if the new party defaults.</p>
               </div>
               <div className="bg-slate-800 p-3 rounded border border-slate-700">
                 <strong className="text-slate-200 text-sm">Novation</strong>
                 <p className="text-xs text-slate-400 mt-1">Substituting a new contract (or party) for an old one. The original party is released from liability.</p>
               </div>
            </div>
          </div>
        )
      }
    ]
  },
  {
    id: 'agency',
    title: '2. Agency Relationships',
    description: 'Fiduciary duties, types of agency, and mandatory disclosures.',
    icon: <ScaleIcon size={20} />,
    type: 'guide',
    sections: [
      {
        id: 'fiduciary',
        title: '2.1 Fiduciary Duties (OLD CAR)',
        content: (
          <>
            <p className="mb-4">Agents owe these duties to their clients (Principal):</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { l: 'O', t: 'Obedience', d: 'Follow lawful instructions.' },
                { l: 'L', t: 'Loyalty', d: 'Put client interest above all others.' },
                { l: 'D', t: 'Disclosure', d: 'Reveal all material facts.' },
                { l: 'C', t: 'Confidentiality', d: 'Keep price/strategy private forever.' },
                { l: 'A', t: 'Accounting', d: 'Proper handling of funds.' },
                { l: 'R', t: 'Reasonable Care', d: 'Use professional skill.' },
              ].map((item) => (
                <div key={item.t} className="bg-slate-700/50 p-3 rounded border border-slate-600">
                  <span className="text-blue-400 font-bold text-lg mr-2">{item.l}</span>
                  <span className="font-semibold text-slate-200">{item.t}</span>
                  <p className="text-xs text-slate-400 mt-1">{item.d}</p>
                </div>
              ))}
            </div>
          </>
        )
      },
      {
        id: 'agency-types',
        title: '2.2 Types of Agency',
        content: (
          <ul className="space-y-3 list-disc list-outside ml-4 marker:text-slate-500">
            <li><strong>Seller's Agent:</strong> Represents the seller.</li>
            <li><strong>Buyer's Agent:</strong> Represents the buyer.</li>
            <li><strong>Dual Agency:</strong> Represents both parties. Requires written consent from both. Neutral stance (no full loyalty).</li>
            <li><strong>Facilitator (Non-Agent):</strong> Helps with paperwork but represents no one. No confidentiality or loyalty.</li>
          </ul>
        )
      },
      {
        id: 'mandatory-disclosure',
        title: '2.3 Mandatory Agency Disclosure',
        content: (
          <div className="space-y-3">
             <p className="text-slate-300">Massachusetts law requires agents to provide the <strong>"Mandatory Licensee-Consumer Relationship Disclosure"</strong> form.</p>
             <div className="bg-slate-800 border border-red-500/30 p-4 rounded">
                <h6 className="text-red-400 font-bold mb-1">The "First Personal Meeting" Rule</h6>
                <p className="text-sm text-slate-400">
                   You must present this form at the <strong>first personal meeting</strong> with a consumer to discuss a specific property.
                </p>
                <ul className="list-disc list-outside ml-4 mt-2 text-sm text-slate-400">
                   <li><strong>Purpose:</strong> To clearly state who you work for (Seller, Buyer, Facilitator).</li>
                   <li><strong>Not a Contract:</strong> Signing this form does not create a binding relationship; it is just a notice.</li>
                   <li><strong>Open Houses:</strong> You do NOT need to hand this out to everyone at an open house unless they start discussing their personal financial motivation with you. However, you must have a sign or materials disclosing your agency relationship.</li>
                </ul>
             </div>
          </div>
        )
      }
    ]
  },
  {
    id: 'valuation',
    title: '3. Property Valuation',
    description: 'Appraisals, CMAs, and methods of estimating value.',
    icon: <ChartIcon size={20} />,
    type: 'guide',
    sections: [
      {
        id: 'value-concepts',
        title: '3.1 Value Concepts',
        content: (
          <ul className="space-y-3 list-disc list-outside ml-4 marker:text-slate-500">
            <li><strong>Market Value:</strong> Most probable price in an open market.</li>
            <li><strong>Market Price:</strong> What a property actually sold for.</li>
            <li><strong>Cost:</strong> Material + Labor + Land.</li>
            <li><strong>DUST:</strong> The 4 characteristics of value:
              <span className="text-sm text-slate-400 block mt-1 ml-2">Demand, Utility, Scarcity, Transferability.</span>
            </li>
          </ul>
        )
      },
      {
        id: 'approaches',
        title: '3.2 Three Approaches to Value',
        content: (
          <div className="space-y-4">
            <div className="border-l-2 border-blue-500 pl-4">
              <h5 className="font-semibold text-slate-200">1. Sales Comparison Approach</h5>
              <p className="text-sm text-slate-400">Used for residential homes. Compares subject to recently sold "comps". Adjustments are made to the comps, not the subject.</p>
            </div>
            <div className="border-l-2 border-purple-500 pl-4">
              <h5 className="font-semibold text-slate-200">2. Income Approach</h5>
              <p className="text-sm text-slate-400">Used for investment properties. <br/>Formula: <code>Value = NOI / Cap Rate</code>.</p>
            </div>
            <div className="border-l-2 border-green-500 pl-4">
              <h5 className="font-semibold text-slate-200">3. Cost Approach</h5>
              <p className="text-sm text-slate-400">Used for unique buildings (churches, schools) or new construction. Value = Land + Cost to Rebuild - Depreciation.</p>
            </div>
          </div>
        )
      },
      {
        id: 'depreciation',
        title: '3.3 Types of Depreciation',
        content: (
          <div className="grid gap-3">
             <div className="bg-slate-800 p-3 rounded">
                <span className="text-blue-400 font-bold">Physical Deterioration</span>
                <p className="text-xs text-slate-400">Wear and tear. Peeling paint, broken windows. Usually <strong>Curable</strong>.</p>
             </div>
             <div className="bg-slate-800 p-3 rounded">
                <span className="text-yellow-400 font-bold">Functional Obsolescence</span>
                <p className="text-xs text-slate-400">Poor design or outdated features. A 4-bedroom house with 1 bathroom. <strong>Curable</strong> (sometimes) or Incurable.</p>
             </div>
             <div className="bg-slate-800 p-3 rounded">
                <span className="text-red-400 font-bold">Economic Obsolescence</span>
                <p className="text-xs text-slate-400">External factors outside the property line. Airport noise, pollution, high crime. Always <strong>Incurable</strong>.</p>
             </div>
          </div>
        )
      }
    ]
  },
  {
    id: 'law',
    title: '4. MA License Law',
    description: 'Licensing requirements, the Board, and continuing education.',
    icon: <GavelIcon size={20} />,
    type: 'guide',
    sections: [
      {
        id: 'the-board',
        title: '4.1 The Board of Registration',
        content: (
          <>
            <p className="mb-3">The Board of Registration of Real Estate Brokers and Salespersons issues licenses and enforces the law.</p>
            <ul className="space-y-2 list-disc list-outside ml-4 marker:text-slate-500">
              <li><strong>Members:</strong> 5 members appointed by the Governor.</li>
              <li><strong>Composition:</strong> 3 Brokers (with 7+ years exp), 2 Public members.</li>
              <li><strong>Term:</strong> 5-year terms.</li>
              <li><strong>Power:</strong> Can suspend or revoke licenses but <em>cannot</em> put you in jail or force you to pay back commissions (only courts can do that).</li>
            </ul>
          </>
        )
      },
      {
        id: 'licenses',
        title: '4.2 License Types',
        content: (
          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
              <h5 className="font-bold text-blue-400 mb-2">Salesperson</h5>
              <ul className="text-sm space-y-2 text-slate-300">
                <li>Must work under a broker.</li>
                <li>Cannot hold client funds.</li>
                <li>Must take 40-hour class + pass exam.</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
              <h5 className="font-bold text-purple-400 mb-2">Broker</h5>
              <ul className="text-sm space-y-2 text-slate-300">
                <li>Can operate independently.</li>
                <li>Can handle client funds (Escrow).</li>
                <li>Requires 3 years experience as Salesperson + 40-hour class.</li>
                <li>Must post a $5,000 surety bond.</li>
              </ul>
            </div>
          </div>
        )
      },
      {
        id: 'renewal',
        title: '4.3 Renewal & Education',
        content: (
          <ul className="space-y-3 list-disc list-outside ml-4 marker:text-slate-500">
            <li>Licenses are renewed every <strong>2 years</strong> on your birthday.</li>
            <li><strong>Continuing Education (CE):</strong> 12 hours required per renewal cycle. No exam required for CE.</li>
            <li>If you fail to renew, your license becomes expired. You can renew late with a fee, but cannot practice while expired.</li>
            <li><strong>Display:</strong> Licenses must be conspicuously displayed at the broker's office.</li>
          </ul>
        )
      }
    ]
  },
  {
    id: 'fair-housing',
    title: '5. Fair Housing Laws',
    description: 'Federal vs. Massachusetts protected classes and prohibited acts.',
    icon: <UsersIcon size={20} />,
    type: 'guide',
    sections: [
      {
        id: 'federal-law',
        title: '5.1 Federal Fair Housing',
        content: (
          <div className="space-y-4">
             <div>
              <h5 className="font-semibold text-slate-200">Civil Rights Act of 1866</h5>
              <p className="text-sm text-slate-400">Prohibits discrimination based on <strong>Race</strong>. No exceptions.</p>
             </div>
             <div>
              <h5 className="font-semibold text-slate-200">Fair Housing Act of 1968 (Title VIII)</h5>
              <p className="text-sm text-slate-400">Adds Color, Religion, National Origin.</p>
             </div>
             <div>
              <h5 className="font-semibold text-slate-200">1988 Amendments</h5>
              <p className="text-sm text-slate-400">Adds <strong>Disability</strong> (Mental/Physical) and <strong>Familial Status</strong> (kids under 18).</p>
             </div>
          </div>
        )
      },
      {
        id: 'ma-law',
        title: '5.2 MA Specifics (MGL c. 151B)',
        content: (
          <>
            <p className="mb-3">Massachusetts is stricter than federal law. Additional protected classes include:</p>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              <li className="bg-slate-800/50 px-2 py-1 rounded text-slate-300 border-l-2 border-red-500">Sexual Orientation</li>
              <li className="bg-slate-800/50 px-2 py-1 rounded text-slate-300 border-l-2 border-red-500">Marital Status</li>
              <li className="bg-slate-800/50 px-2 py-1 rounded text-slate-300 border-l-2 border-red-500">Age</li>
              <li className="bg-slate-800/50 px-2 py-1 rounded text-slate-300 border-l-2 border-red-500">Veteran Status</li>
              <li className="bg-slate-800/50 px-2 py-1 rounded text-slate-300 border-l-2 border-red-500">Public Assistance</li>
              <li className="bg-slate-800/50 px-2 py-1 rounded text-slate-300 border-l-2 border-red-500">Ancestry</li>
            </ul>
            <div className="mt-4 p-3 bg-yellow-900/20 border border-yellow-700/50 rounded text-sm text-yellow-200/80">
              <strong>MCAD Filing:</strong> Claims must be filed with the Massachusetts Commission Against Discrimination within <strong>300 days</strong> of the incident.
            </div>
            <div className="mt-2 text-sm text-slate-400 italic">
               Note: You cannot refuse to rent to a family with children because of lead paint. You must de-lead the unit.
            </div>
          </>
        )
      },
      {
        id: 'prohibitions',
        title: '5.3 Prohibited Acts',
        content: (
          <ul className="space-y-3 list-disc list-outside ml-4 marker:text-slate-500">
            <li><strong>Steering:</strong> Directing clients to or away from neighborhoods based on protected class.</li>
            <li><strong>Blockbusting:</strong> Inducing sales by claiming a protected class is moving into the neighborhood.</li>
            <li><strong>Redlining:</strong> Lenders refusing loans in certain areas based on demographics.</li>
          </ul>
        )
      }
    ]
  },
  {
    id: 'ownership',
    title: '6. Property Rights',
    description: 'Freehold vs Leasehold, and forms of co-ownership.',
    icon: <KeyIcon size={20} />,
    type: 'guide',
    sections: [
      {
        id: 'real-property',
        title: '6.1 Real vs. Personal Property',
        content: (
          <ul className="space-y-3 list-disc list-outside ml-4 marker:text-slate-500">
            <li><strong>Real Property (Realty):</strong> Land and everything attached to it.</li>
            <li><strong>Personal Property (Chattel):</strong> Movable items (furniture, cars). Transferred via Bill of Sale.</li>
            <li><strong>Fixture:</strong> Personal property that becomes real (e.g., a chandelier). 
              <br/><span className="text-sm text-slate-400">Test: MARIA (Method, Adaptability, Relationship, Intention, Agreement).</span>
            </li>
          </ul>
        )
      },
      {
        id: 'estates',
        title: '6.2 Estates in Land',
        content: (
          <div className="space-y-4">
             <div className="p-3 rounded bg-slate-800 border-l-4 border-emerald-500">
              <h6 className="font-bold text-slate-200">Freehold (Ownership)</h6>
              <ul className="ml-4 list-disc text-sm text-slate-400 mt-1">
                <li><strong>Fee Simple Absolute:</strong> Highest form of ownership.</li>
                <li><strong>Life Estate:</strong> Ownership lasts for the duration of a life (Life Tenant). Reverts to Remainderman upon death.</li>
              </ul>
             </div>
             <div className="p-3 rounded bg-slate-800 border-l-4 border-orange-500">
              <h6 className="font-bold text-slate-200">Non-Freehold (Leasing)</h6>
              <ul className="ml-4 list-disc text-sm text-slate-400 mt-1">
                <li><strong>Estate for Years:</strong> Fixed start and end date.</li>
                <li><strong>Tenancy at Will:</strong> Month-to-month.</li>
              </ul>
             </div>
          </div>
        )
      },
      {
        id: 'co-ownership',
        title: '6.3 Co-Ownership',
        content: (
          <ul className="space-y-3 list-disc list-outside ml-4 marker:text-slate-500">
            <li><strong>Tenancy in Common:</strong> Default form. Different shares allowed. No right of survivorship (heirs inherit).</li>
            <li><strong>Joint Tenancy:</strong> Must be equal shares. <strong>Right of survivorship</strong> (co-owners inherit, not heirs). Requires 4 unities (PITT: Possession, Interest, Time, Title).</li>
            <li><strong>Tenancy by the Entirety:</strong> Specific to married couples in MA. Creditor protection for primary residence.</li>
          </ul>
        )
      },
      {
        id: 'business-entities',
        title: '6.4 Trusts & Business Entities',
        content: (
          <div className="space-y-3">
             <ul className="space-y-2 list-disc list-outside ml-4 text-sm text-slate-400">
                <li><strong>Trust:</strong> A device to hold title. Trustor creates it, Trustee manages it, Beneficiary benefits.
                   <br/><span className="text-xs italic">REIT (Real Estate Investment Trust): Like a mutual fund for real estate.</span>
                </li>
                <li><strong>LLC (Limited Liability Company):</strong> Combines the liability protection of a corporation with the tax benefits of a partnership.</li>
                <li><strong>General Partnership:</strong> All partners share full liability.</li>
                <li><strong>Syndication:</strong> Two or more people/firms joining together for one project.</li>
             </ul>
          </div>
        )
      }
    ]
  },
  {
    id: 'env-zoning',
    title: '7. Environmental & Zoning',
    description: 'Lead Paint Law, Title V (Septic), and Land Use controls.',
    icon: <LeafIcon size={20} />,
    type: 'guide',
    sections: [
      {
        id: 'lead-paint',
        title: '7.1 Lead Paint (MGL c. 111)',
        content: (
          <>
            <p className="mb-3">Applies to homes built before <strong>1978</strong>. This is a strict liability law in MA.</p>
            <ul className="space-y-3 list-disc list-outside ml-4 marker:text-slate-500">
              <li><strong>Mandatory Disclosure:</strong> All buyers/tenants of pre-1978 homes must receive the Property Transfer Notification Certification (Lead Law Notification) <em>before</em> signing.</li>
              <li><strong>The Rule:</strong> You cannot refuse to rent to a family with children under 6 due to lead paint. If a child under 6 moves in, the owner <strong>MUST</strong> de-lead or abate the unit within 90 days.</li>
              <li><strong>Buyers:</strong> Have a 10-day right to inspect (can be waived).</li>
            </ul>
          </>
        )
      },
      {
        id: 'title-v',
        title: '7.2 Title V (Septic Systems)',
        content: (
          <ul className="space-y-3 list-disc list-outside ml-4 marker:text-slate-500">
            <li><strong>Inspection:</strong> Required within 2 years prior to sale (or 3 years if pumped annually).</li>
            <li><strong>Pass/Fail:</strong> If system fails, buyer and seller negotiate who pays. If it poses a health risk, the Board of Health can force repair.</li>
            <li><strong>Exemptions:</strong> Transfers between spouses or to a trust where the owner is the beneficiary often do not require inspection.</li>
          </ul>
        )
      },
      {
        id: 'smoke-certs',
        title: '7.3 Smoke & Carbon Monoxide Laws',
        content: (
          <div className="space-y-3">
            <p className="text-slate-300 text-sm">
              All residential properties must have a valid certificate from the local Fire Department at closing.
            </p>
            <ul className="list-disc list-outside ml-4 marker:text-slate-500 text-sm">
               <li><strong>Certificate Validity:</strong> Typically valid for 60 days from issuance.</li>
               <li><strong>Requirement:</strong> Smoke detectors are required on every habitable level. CO detectors required if there is a garage or fuel-burning equipment.</li>
               <li><strong>New Construction:</strong> Requires hard-wired detectors with battery backup. Older homes may allow battery-only depending on the year built.</li>
            </ul>
          </div>
        )
      },
      {
        id: 'zoning',
        title: '7.4 Zoning & Land Use',
        content: (
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold text-slate-200">Public Controls (Police Power)</h5>
              <p className="text-sm text-slate-400">Government regulations including Zoning, Building Code, and Environmental laws.</p>
            </div>
            <div>
              <h5 className="font-semibold text-slate-200">Private Controls (CC&Rs)</h5>
              <p className="text-sm text-slate-400">
                <strong>Covenants, Conditions, and Restrictions.</strong> Rules set by a developer or HOA (e.g., "No white fences", "No RVs").
                <br/><span className="italic text-xs">Note: If Public and Private rules conflict, the stricter rule applies.</span>
              </p>
            </div>
            <div className="border-t border-slate-700 pt-3">
               <h5 className="font-semibold text-slate-200">Non-Conforming Use</h5>
               <p className="text-sm text-slate-400">A property that was legal when built but no longer fits current zoning (Grandfathered). If abandoned (2+ years), it loses this status.</p>
            </div>
          </div>
        )
      }
    ]
  },
  {
    id: 'ma-law-biz',
    title: '8. MA Business Law',
    description: 'Consumer Protection (93A), Homestead, and Tenant Laws.',
    icon: <ShieldCheckIcon size={20} />,
    type: 'guide',
    sections: [
      {
        id: '93a',
        title: '8.1 Consumer Protection (MGL c. 93A)',
        content: (
          <>
            <p className="mb-3">Protects consumers from "unfair and deceptive practices" by businesses (including Real Estate Agents).</p>
            <ul className="space-y-3 list-disc list-outside ml-4 marker:text-slate-500">
              <li><strong>Applicability:</strong> Applies to agents/brokers. Does NOT apply to private sellers (unless they sell regularly).</li>
              <li><strong>Disclosure:</strong> Agents must disclose known defects. "Puffing" (exaggeration) is risky but sometimes allowed; misrepresentation is not.</li>
              <li><strong>Damages:</strong> If a consumer wins, they can be awarded up to <strong>Treble Damages</strong> (3x the actual damages) plus attorney fees.</li>
              <li><strong>Process:</strong> Consumer must send a "30-Day Demand Letter" before suing.</li>
            </ul>
          </>
        )
      },
      {
        id: 'homestead',
        title: '8.2 Homestead Act',
        content: (
          <ul className="space-y-3 list-disc list-outside ml-4 marker:text-slate-500">
            <li>Protects a primary residence from <strong>unsecured creditors</strong> (e.g., credit card debt, personal lawsuits). Does NOT protect against mortgages or taxes.</li>
            <li><strong>Automatic:</strong> $125,000 protection exists automatically for all homeowners.</li>
            <li><strong>Declared:</strong> Filing a Declaration of Homestead at the Registry protects up to <strong>$500,000</strong>.</li>
            <li>Elderly (62+) or Disabled persons can get $500,000 protection (sometimes aggregated for spouses).</li>
          </ul>
        )
      },
      {
        id: 'tenant-law',
        title: '8.3 Tenant & Security Deposits',
        content: (
          <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
            <h5 className="font-bold text-slate-200 mb-2">Landlord Allowed Charges (Move-In)</h5>
            <ul className="text-sm space-y-1 text-slate-300 mb-3 list-decimal ml-4">
              <li>First Month's Rent</li>
              <li>Last Month's Rent</li>
              <li>Security Deposit (Max 1 month rent)</li>
              <li>Lock Change Fee</li>
            </ul>
            <div className="border-t border-slate-600 pt-3">
              <strong className="text-red-400 text-xs uppercase">Strict Rules:</strong>
              <ul className="text-xs text-slate-400 mt-1 space-y-1">
                <li>Security deposit must be in a <strong>separate, interest-bearing account</strong> in MA.</li>
                <li>Tenant must get a receipt with bank details within 30 days.</li>
                <li>Statement of Condition required at move-in.</li>
                <li>If landlord messes this up, tenant can get 3x the deposit back immediately.</li>
              </ul>
            </div>
          </div>
        )
      }
    ]
  },
  {
    id: 'finance',
    title: '9. Real Estate Finance',
    description: 'Mortgages, Clauses, and Lending Laws (TILA/RESPA).',
    icon: <LandmarkIcon size={20} />,
    type: 'guide',
    sections: [
      {
        id: 'theories',
        title: '9.1 Title Theory vs. Lien Theory',
        content: (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-800 p-4 rounded border-l-4 border-blue-500">
              <h6 className="font-bold text-slate-200 mb-1">Title Theory (MA)</h6>
              <p className="text-sm text-slate-400">
                The <strong>Lender (Mortgagee)</strong> holds legal title to the property until the loan is paid off. The Borrower (Mortgagor) holds "Equitable Title". This makes foreclosure easier for the bank.
              </p>
            </div>
            <div className="bg-slate-800 p-4 rounded border-l-4 border-slate-600 opacity-75">
              <h6 className="font-bold text-slate-200 mb-1">Lien Theory</h6>
              <p className="text-sm text-slate-400">
                The Borrower holds legal title. The lender only has a lien. (Common in other states, not MA).
              </p>
            </div>
          </div>
        )
      },
      {
        id: 'clauses',
        title: '9.2 Mortgage Clauses',
        content: (
          <ul className="space-y-3 list-disc list-outside ml-4 marker:text-slate-500">
            <li><strong>Acceleration Clause:</strong> If you default, the lender can demand the <em>entire</em> balance due immediately. First step in foreclosure.</li>
            <li><strong>Alienation Clause (Due on Sale):</strong> You must pay off the loan if you sell the house. Prevents you from transferring the low interest rate to a buyer.</li>
            <li><strong>Prepayment Penalty:</strong> A fee for paying off the loan early (rare in modern residential loans).</li>
            <li><strong>Defeasance Clause:</strong> When paid in full, the lien is removed (discharged).</li>
          </ul>
        )
      },
      {
        id: 'laws',
        title: '9.3 Lending Laws (The Big 3)',
        content: (
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold text-slate-200">TILA (Reg Z) - Truth In Lending</h5>
              <p className="text-sm text-slate-400">Focuses on the <strong>Cost of Credit</strong>. Requires disclosure of the <strong>APR</strong> (Annual Percentage Rate). If an ad says numbers ("$500 down"), it must disclose ALL terms.</p>
            </div>
            <div>
              <h5 className="font-semibold text-slate-200">RESPA - Settlement Procedures</h5>
              <p className="text-sm text-slate-400">Prevents <strong>Kickbacks</strong>. Agents cannot get paid by lenders/title companies for referrals.</p>
            </div>
            <div>
              <h5 className="font-semibold text-slate-200">TRID - "Know Before You Owe"</h5>
              <p className="text-sm text-slate-400">Combined TILA & RESPA forms. 
                <br/>1. <strong>Loan Estimate (LE):</strong> Within 3 business days of application.
                <br/>2. <strong>Closing Disclosure (CD):</strong> Borrower must receive it <strong>3 business days</strong> before closing.
              </p>
            </div>
          </div>
        )
      },
      {
        id: 'loans-markets',
        title: '9.4 Loan Types & Markets',
        content: (
          <div className="space-y-4">
             <div>
               <h5 className="font-semibold text-slate-200">Primary vs. Secondary Market</h5>
               <ul className="ml-4 list-disc text-sm text-slate-400">
                  <li><strong>Primary:</strong> Where loans are created (Banks, Credit Unions).</li>
                  <li><strong>Secondary Market:</strong> Where loans are sold (Fannie Mae, Freddie Mac). This replenishes funds for the banks to lend more.</li>
               </ul>
             </div>
             <div>
               <h5 className="font-semibold text-slate-200">Loan Types</h5>
               <ul className="ml-4 list-disc text-sm text-slate-400">
                  <li><strong>Conventional:</strong> Not government insured. PMI required if down payment is under 20%.</li>
                  <li><strong>FHA (Federal Housing Admin):</strong> Government <em>insured</em>. Low down payment (3.5%). Requires MIP (Mortgage Insurance Premium).</li>
                  <li><strong>VA (Veterans Affairs):</strong> Government <em>guaranteed</em>. 0% down available for vets. No PMI.</li>
                  <li><strong>MassHousing:</strong> State agency offering low down payment loans for first-time buyers in MA.</li>
               </ul>
             </div>
          </div>
        )
      },
      {
        id: 'foreclosure',
        title: '9.5 Foreclosure & Short Sales',
        content: (
          <div className="space-y-4">
             <div>
                <h5 className="font-semibold text-slate-200">Rights of Redemption</h5>
                <ul className="ml-4 list-disc text-sm text-slate-400">
                   <li><strong>Equitable Right:</strong> The right to pay off debt and stop Foreclosure <em>before</em> the sale.</li>
                   <li><strong>Statutory Right:</strong> The right to buy back the home <em>after</em> the sale. (MA has <strong>NO</strong> statutory right of redemption).</li>
                </ul>
             </div>
             <div>
                <h5 className="font-semibold text-slate-200">Short Sales</h5>
                <p className="text-sm text-slate-400">Selling the house for less than the mortgage balance. The bank must approve. It is "short" on money, not time (it takes forever).</p>
             </div>
             <div>
                <h5 className="font-semibold text-slate-200">Deficiency Judgment</h5>
                <p className="text-sm text-slate-400">If the foreclosure sale doesn't cover the debt, the bank can sue the borrower for the difference.</p>
             </div>
          </div>
        )
      }
    ]
  },
  {
    id: 'deeds',
    title: '10. Deeds & Title',
    description: 'Types of Deeds, Recording, and Title Insurance.',
    icon: <FileTextIcon size={20} />,
    type: 'guide',
    sections: [
      {
        id: 'deed-types',
        title: '10.1 Types of Deeds',
        content: (
          <ul className="space-y-3 list-disc list-outside ml-4 marker:text-slate-500">
            <li><strong>Quitclaim Deed (MA Standard):</strong> The most common deed in Massachusetts. It transfers whatever interest the grantor has, but offers limited warranties compared to a General Warranty deed.</li>
            <li><strong>General Warranty Deed:</strong> Offers the most protection to the buyer (Grantee). Covers the property's history back to the beginning of time. (Rare in MA).</li>
            <li><strong>Sheriff's Deed:</strong> Used in foreclosure sales.</li>
          </ul>
        )
      },
      {
        id: 'recording',
        title: '10.2 Recording & Title',
        content: (
          <>
            <p className="mb-3">Deeds are recorded at the Registry of Deeds in the county where the land sits.</p>
            <ul className="space-y-3 list-disc list-outside ml-4 marker:text-slate-500">
              <li><strong>Constructive Notice:</strong> Recording a document gives "legal notice" to the world that you own it.</li>
              <li><strong>Title Search:</strong> A review of public records (40-50 years back) to find defects (Cloud on Title).</li>
              <li><strong>Title Insurance:</strong> 
                <ul className="list-disc list-inside ml-4 mt-1 text-sm text-slate-400">
                   <li><strong>Lender's Policy:</strong> Mandatory. Protects the bank loan amount.</li>
                   <li><strong>Owner's Policy:</strong> Optional but recommended. Protects the buyer's equity/ownership.</li>
                </ul>
              </li>
            </ul>
          </>
        )
      },
      {
        id: 'registered-land',
        title: '10.3 Registered Land (Torrens)',
        content: (
          <div className="p-3 bg-slate-800 border border-slate-700 rounded">
            <p className="text-sm text-slate-300 mb-2">
              MA has a parallel system called <strong>Registered Land (Land Court)</strong>.
            </p>
            <ul className="list-disc list-inside text-sm text-slate-400">
              <li>The state guarantees the title.</li>
              <li>You get a <strong>Certificate of Title</strong> instead of just a deed entry.</li>
              <li><strong>Exam Fact:</strong> You cannot claim Adverse Possession (squatter's rights) against Registered Land.</li>
            </ul>
          </div>
        )
      },
      {
        id: 'alienation',
        title: '10.4 Alienation (Transfer) of Title',
        content: (
           <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-slate-800 p-4 rounded border border-slate-700">
                 <h6 className="font-bold text-green-400 mb-1">Voluntary Alienation</h6>
                 <ul className="list-disc list-inside text-sm text-slate-300">
                    <li><strong>Deed:</strong> Sale or gift.</li>
                    <li><strong>Will:</strong> Dying <em>Testate</em> (with a will).</li>
                    <li><strong>Devise:</strong> Real property given by will.</li>
                 </ul>
              </div>
              <div className="bg-slate-800 p-4 rounded border border-slate-700">
                 <h6 className="font-bold text-red-400 mb-1">Involuntary Alienation</h6>
                 <ul className="list-disc list-inside text-sm text-slate-300">
                    <li><strong>Foreclosure:</strong> Bank takes title.</li>
                    <li><strong>Eminent Domain:</strong> Government takes title.</li>
                    <li><strong>Adverse Possession:</strong> Squatter takes title (20 years).</li>
                    <li><strong>Escheat:</strong> Dying <em>Intestate</em> (no will, no heirs) → State takes title.</li>
                 </ul>
              </div>
           </div>
        )
      }
    ]
  },
  {
    id: 'condos',
    title: '11. Condos & Co-ops',
    description: 'Ownership structures, 6D Certificates, and Time Shares.',
    icon: <BuildingIcon size={20} />,
    type: 'guide',
    sections: [
      {
        id: 'condo-structure',
        title: '11.1 Condominiums (MGL c. 183A)',
        content: (
          <div className="space-y-3">
            <p className="text-slate-300">A form of ownership where you own your unit in <strong>Fee Simple</strong> and a share of the common areas (halls, roof, land) as <strong>Tenants in Common</strong>.</p>
            <ul className="space-y-2 list-disc list-outside ml-4 text-sm marker:text-slate-500">
              <li><strong>Master Deed:</strong> The document recorded at the Registry that creates the condominium. Defines the units and common areas.</li>
              <li><strong>Declaration of Trust / Bylaws:</strong> Sets the rules for the Condo Association (Trustees).</li>
              <li><strong>Unit Deed:</strong> The document transferring ownership of the individual unit.</li>
            </ul>
          </div>
        )
      },
      {
        id: '6d-cert',
        title: '11.2 The 6D Certificate',
        content: (
          <div className="bg-slate-800/50 border border-blue-500/30 p-4 rounded-lg">
            <h5 className="text-blue-400 font-bold mb-2">Exam Critical: MGL 183A, Section 6(d)</h5>
            <p className="text-sm text-slate-300 mb-2">
              A certificate from the Condo Trustees stating that all common charges (HOA fees) for the unit are paid in full.
            </p>
            <ul className="list-disc list-inside text-sm text-slate-400">
              <li><strong>Required at Closing:</strong> You cannot record the deed without a clean 6D certificate.</li>
              <li><strong>Priority Lien:</strong> Unpaid condo fees constitute a "Super Lien" (can sometimes jump ahead of the mortgage).</li>
            </ul>
          </div>
        )
      },
      {
        id: 'coops',
        title: '11.3 Cooperatives (Co-ops)',
        content: (
          <ul className="space-y-3 list-disc list-outside ml-4 marker:text-slate-500">
            <li><strong>Corporation:</strong> A corporation owns the land and the building.</li>
            <li><strong>Stock:</strong> The buyer does NOT receive a deed. They receive a <strong>Stock Certificate</strong> (ownership in the company).</li>
            <li><strong>Proprietary Lease:</strong> The stock ownership gives the buyer the right to occupy a specific unit via a Proprietary Lease.</li>
            <li><strong>Approval:</strong> The Cooperative board can approve or deny buyers (much stricter than condos).</li>
          </ul>
        )
      }
    ]
  },
  {
    id: 'taxes',
    title: '12. Taxes & Liens',
    description: 'Property Taxes, Proposition 2½, and Municipal Liens.',
    icon: <ReceiptIcon size={20} />,
    type: 'guide',
    sections: [
      {
        id: 'prop-tax',
        title: '12.1 Property Taxes',
        content: (
          <ul className="space-y-3 list-disc list-outside ml-4 marker:text-slate-500">
            <li><strong>Ad Valorem:</strong> Taxes are based on the assessed value of the property ("according to value").</li>
            <li><strong>Fiscal Year:</strong> In MA, the tax fiscal year runs from <strong>July 1 to June 30</strong>.</li>
            <li><strong>Quarterly Billing:</strong> Taxes are typically due Aug 1, Nov 1, Feb 1, May 1.</li>
            <li><strong>Proposition 2½:</strong> A state law that limits the total tax levy increase of a town to 2.5% per year (plus new growth). It does NOT limit individual tax bill increases, just the town's total budget.</li>
          </ul>
        )
      },
      {
        id: 'liens',
        title: '12.2 Priority of Liens',
        content: (
          <>
            <p className="mb-3">When a property is sold (foreclosure or sale), liens are paid in a specific order:</p>
            <ol className="space-y-2 list-decimal list-inside ml-2 text-sm text-slate-300">
              <li className="font-bold text-white">Municipal Taxes & Assessments (Super Lien)</li>
              <li>First Mortgage</li>
              <li>Second Mortgage / Junior Liens</li>
              <li>Mechanic's Liens (Contractors)</li>
              <li>Unsecured creditors (Credit cards)</li>
            </ol>
            <p className="text-xs text-slate-500 mt-2 italic">*Note: Condo fees (up to 6 months) can also become a Super Lien in MA.</p>
          </>
        )
      },
      {
        id: 'mlc',
        title: '12.3 Municipal Lien Certificate (MLC)',
        content: (
          <div className="space-y-3">
            <p>A legal document from the town confirming the status of taxes, water, and sewer charges.</p>
            <ul className="list-disc list-outside ml-4 marker:text-slate-500 text-sm">
              <li><strong>Cost:</strong> Typically $25–$50.</li>
              <li><strong>Requirement:</strong> Must be recorded with the deed at closing to prove taxes are paid up to date.</li>
              <li>If taxes are unpaid, the new owner inherits the debt!</li>
            </ul>
          </div>
        )
      },
      {
        id: 'closing-statement',
        title: '12.4 Closing Statement: Who Pays What?',
        content: (
           <div className="overflow-hidden rounded-lg border border-slate-700 mt-2">
              <table className="w-full text-xs md:text-sm text-left text-slate-400">
                 <thead className="text-xs text-slate-200 uppercase bg-slate-800">
                    <tr>
                       <th className="px-4 py-2">Item</th>
                       <th className="px-4 py-2">Debit (Cost to...)</th>
                       <th className="px-4 py-2">Credit (Paid by...)</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-700">
                    <tr className="bg-slate-900">
                       <td className="px-4 py-2 font-bold text-slate-200">Sales Price</td>
                       <td className="px-4 py-2 text-red-400">Buyer</td>
                       <td className="px-4 py-2 text-green-400">Seller</td>
                    </tr>
                    <tr className="bg-slate-800/50">
                       <td className="px-4 py-2">Broker Commission</td>
                       <td className="px-4 py-2 text-red-400">Seller</td>
                       <td className="px-4 py-2">-</td>
                    </tr>
                    <tr className="bg-slate-900">
                       <td className="px-4 py-2">Deed Recording</td>
                       <td className="px-4 py-2 text-red-400">Buyer</td>
                       <td className="px-4 py-2">-</td>
                    </tr>
                    <tr className="bg-slate-800/50">
                       <td className="px-4 py-2">Mortgage Discharge Recording</td>
                       <td className="px-4 py-2 text-red-400">Seller</td>
                       <td className="px-4 py-2">-</td>
                    </tr>
                     <tr className="bg-slate-900">
                       <td className="px-4 py-2">MA Transfer Stamps</td>
                       <td className="px-4 py-2 text-red-400">Seller</td>
                       <td className="px-4 py-2">-</td>
                    </tr>
                 </tbody>
              </table>
           </div>
        )
      }
    ]
  },
  {
    id: 'leases',
    title: '13. Leases & Property Management',
    description: 'Types of leases, Constructive Eviction, and manager duties.',
    icon: <BriefcaseIcon size={20} />,
    type: 'guide',
    sections: [
      {
        id: 'lease-types',
        title: '13.1 Types of Leases',
        content: (
          <div className="grid sm:grid-cols-2 gap-4">
             <div className="bg-slate-800 p-3 rounded border-l-2 border-blue-500">
                <h6 className="font-bold text-slate-200">Gross Lease (Fixed)</h6>
                <p className="text-sm text-slate-400 mt-1">Tenant pays a fixed rent. Landlord pays all expenses (Taxes, Insurance, Maintenance). Common in Residential.</p>
             </div>
             <div className="bg-slate-800 p-3 rounded border-l-2 border-purple-500">
                <h6 className="font-bold text-slate-200">Net Lease (NNN)</h6>
                <p className="text-sm text-slate-400 mt-1">Tenant pays rent PLUS some or all expenses (Taxes, Insurance, Maintenance). Common in Commercial.</p>
             </div>
             <div className="bg-slate-800 p-3 rounded border-l-2 border-green-500">
                <h6 className="font-bold text-slate-200">Percentage Lease</h6>
                <p className="text-sm text-slate-400 mt-1">Rent is based on a % of the business's gross sales. Common in Retail/Malls.</p>
             </div>
             <div className="bg-slate-800 p-3 rounded border-l-2 border-orange-500">
                <h6 className="font-bold text-slate-200">Ground Lease</h6>
                <p className="text-sm text-slate-400 mt-1">Tenant leases the land but owns the building they build on it. Long-term (e.g., 99 years).</p>
             </div>
          </div>
        )
      },
      {
        id: 'eviction',
        title: '13.2 Eviction Concepts',
        content: (
          <div className="space-y-4">
             <div>
                <h5 className="font-semibold text-slate-200">Actual Eviction</h5>
                <p className="text-sm text-slate-400">Landlord legally removes tenant due to breach of lease (e.g., not paying rent). Must go through court.</p>
             </div>
             <div>
                <h5 className="font-semibold text-slate-200">Constructive Eviction</h5>
                <p className="text-sm text-slate-400">The <em>Landlord</em> fails to provide essential services (heat, water), forcing the tenant to leave. The tenant breaks the lease without penalty because the unit is uninhabitable.</p>
             </div>
          </div>
        )
      },
      {
        id: 'prop-mgr',
        title: '13.3 Property Manager Duties',
        content: (
          <ul className="space-y-3 list-disc list-outside ml-4 marker:text-slate-500">
            <li><strong>General Agent:</strong> A property manager is typically a General Agent of the owner (ongoing responsibilities).</li>
            <li><strong>Primary Goal:</strong> Generate highest net income while maintaining the property value.</li>
            <li><strong>Budgeting:</strong> Responsible for Operating Budget (daily costs) and Capital Reserve Budget (big repairs like roofs).</li>
          </ul>
        )
      },
      {
         id: 'sufferance',
         title: '13.4 Tenancy at Sufferance',
         content: (
            <div className="bg-red-900/10 border border-red-900/30 p-3 rounded">
               <strong className="block text-red-300 mb-1">The "Holdover" Tenant</strong>
               <p className="text-sm text-slate-400">
                  Occurs when a tenant stays past their lease expiration without permission.
                  They are <strong>NOT</strong> a trespasser (because they originally entered legally), but they are not a legal tenant either. The landlord must evict them to regain possession.
               </p>
            </div>
         )
      }
    ]
  },
  {
    id: 'investments',
    title: '14. Real Estate Investments',
    description: '1031 Exchanges, Capital Gains, and Leverage.',
    icon: <PieChartIcon size={20} />,
    type: 'guide',
    sections: [
      {
        id: '1031-exchange',
        title: '14.1 1031 Like-Kind Exchange',
        content: (
          <>
             <p className="mb-3">Allows an investor to defer paying Capital Gains Tax if they sell a property and buy another "like-kind" property.</p>
             <ul className="space-y-3 list-disc list-outside ml-4 marker:text-slate-500">
                <li><strong>Timeline:</strong> Must identify the new property within <strong>45 days</strong> and close within <strong>180 days</strong>.</li>
                <li><strong>Boot:</strong> Any cash or personal property received in the deal (not like-kind) is taxable. This is called "Boot".</li>
                <li><strong>Qualified Intermediary:</strong> The investor cannot touch the money; a 3rd party must handle the transfer.</li>
             </ul>
          </>
        )
      },
      {
        id: 'concepts',
        title: '14.2 Investment Concepts',
        content: (
          <div className="grid gap-4">
             <div className="bg-slate-800 p-3 rounded border border-slate-700">
                <span className="text-blue-400 font-bold block">Leverage</span>
                <span className="text-sm text-slate-400">Using borrowed money (OPM - Other People's Money) to increase potential return on investment.</span>
             </div>
             <div className="bg-slate-800 p-3 rounded border border-slate-700">
                <span className="text-green-400 font-bold block">Liquidity</span>
                <span className="text-sm text-slate-400">How easily an asset can be turned into cash. Real Estate has <strong>Low Liquidity</strong> (takes time to sell).</span>
             </div>
             <div className="bg-slate-800 p-3 rounded border border-slate-700">
                <span className="text-purple-400 font-bold block">Appreciation</span>
                <span className="text-sm text-slate-400">The increase in value over time due to inflation and market demand.</span>
             </div>
          </div>
        )
      }
    ]
  },
  {
    id: 'construction',
    title: '15. Construction & Hazards',
    description: 'Framing terms, environmental hazards (Radon, Asbestos), and insulation.',
    icon: <HammerIcon size={20} />,
    type: 'guide',
    sections: [
      {
        id: 'framing',
        title: '15.1 Construction Terms',
        content: (
          <div className="space-y-3">
            <ul className="space-y-2 list-disc list-outside ml-4 text-sm marker:text-slate-500">
              <li><strong>Pitch:</strong> The slope of the roof.</li>
              <li><strong>Flashing:</strong> Metal strips used to prevent water entry at joints (chimneys, vents).</li>
              <li><strong>Studs:</strong> Vertical framing members in walls (typically 16" apart).</li>
              <li><strong>Joists:</strong> Horizontal framing members supporting floors or ceilings.</li>
              <li><strong>R-Value:</strong> Resistance to heat flow. The <strong>higher</strong> the R-Value, the better the insulation.</li>
              <li><strong>BTU:</strong> British Thermal Unit. Measure of heat energy.</li>
            </ul>
          </div>
        )
      },
      {
        id: 'hazards',
        title: '15.2 Environmental Hazards',
        content: (
          <div className="grid md:grid-cols-2 gap-4">
             <div className="bg-slate-800 p-4 rounded border border-red-500/30">
               <strong className="text-red-400 block mb-1">Radon</strong>
               <p className="text-sm text-slate-400">Colorless, odorless radioactive gas from the ground. Causes lung cancer. Mitigation involves ventilation systems.</p>
             </div>
             <div className="bg-slate-800 p-4 rounded border border-slate-700">
               <strong className="text-slate-200 block mb-1">Asbestos</strong>
               <p className="text-sm text-slate-400">Used in insulation/tiles. Hazardous when <strong>Friable</strong> (crumbles/airborne). Encapsulation is often safer than removal.</p>
             </div>
             <div className="bg-slate-800 p-4 rounded border border-slate-700">
               <strong className="text-slate-200 block mb-1">UFFI</strong>
               <p className="text-sm text-slate-400">Urea Formaldehyde Foam Insulation. Once thought toxic, now rarely an issue. Lenders used to blacklist it.</p>
             </div>
             <div className="bg-slate-800 p-4 rounded border border-slate-700">
               <strong className="text-slate-200 block mb-1">Carbon Monoxide</strong>
               <p className="text-sm text-slate-400">Colorless, odorless gas from combustion. MA requires detectors in all homes with fuel-burning equipment or garages.</p>
             </div>
          </div>
        )
      }
    ]
  },
  {
    id: 'antitrust',
    title: '16. Anti-Trust & Ethics',
    description: 'Sherman Antitrust Act, Price Fixing, and Do Not Call rules.',
    icon: <MegaphoneIcon size={20} />,
    type: 'guide',
    sections: [
      {
        id: 'sherman',
        title: '16.1 Sherman Antitrust Act',
        content: (
          <>
            <p className="mb-3">Federal law designed to ensure free competition. Violations include:</p>
            <ul className="space-y-3 list-disc list-outside ml-4 marker:text-slate-500">
              <li><strong>Price Fixing:</strong> Colluding with competitors to set standard commission rates. (e.g., "Everyone charges 6%"). <strong>Commission is ALWAYS negotiable.</strong></li>
              <li><strong>Group Boycotting:</strong> Competitors agreeing not to do business with another firm (e.g., "Let's not show ABC Realty's listings").</li>
              <li><strong>Market Allocation:</strong> Dividing up territories (e.g., "You take the North side, I'll take the South").</li>
              <li><strong>Tie-in Arrangements:</strong> Selling a product only if the buyer agrees to buy another product.</li>
            </ul>
          </>
        )
      },
      {
        id: 'donotcall',
        title: '16.2 Do Not Call Registry',
        content: (
          <div className="space-y-3">
            <p>Federal rules protecting consumers from unwanted solicitation.</p>
            <ul className="space-y-2 list-disc list-outside ml-4 text-sm marker:text-slate-500">
              <li><strong>Fine:</strong> Up to roughly $50,000 per violation (adjusted for inflation).</li>
              <li><strong>Exceptions:</strong> You can call a consumer for up to <strong>18 months</strong> after a transaction, or <strong>3 months</strong> after an inquiry.</li>
              <li><strong>Enforcement:</strong> Managed by the FTC.</li>
            </ul>
          </div>
        )
      }
    ]
  },
  {
    id: 'special-ma-laws',
    title: '17. Specialized MA Laws',
    description: '40B (Anti-Snob), Chapter 61, Time Shares & Subdivision Control.',
    icon: <MapIcon size={20} />,
    type: 'guide',
    sections: [
      {
        id: '40b',
        title: '17.1 Chapter 40B (Anti-Snob Zoning)',
        content: (
          <div className="space-y-3">
             <p className="text-sm text-slate-300">A state law allowing developers to override local zoning bylaws to build affordable housing.</p>
             <ul className="list-disc list-outside ml-4 marker:text-slate-500 text-sm">
                <li><strong>The 10% Rule:</strong> If a town has less than 10% of its housing stock defined as "Affordable," a developer can bypass local zoning restrictions (Comprehensive Permit).</li>
                <li><strong>Goal:</strong> To encourage affordable housing construction in suburbs.</li>
             </ul>
          </div>
        )
      },
      {
        id: 'ch61',
        title: '17.2 Chapter 61 (Land Classification)',
        content: (
           <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-slate-800 p-3 rounded border-t-4 border-green-600">
                 <h6 className="font-bold text-green-400">Ch. 61 (Forest)</h6>
                 <p className="text-xs text-slate-400 mt-1">Tax break for growing forest products. Min 10 acres.</p>
              </div>
              <div className="bg-slate-800 p-3 rounded border-t-4 border-yellow-600">
                 <h6 className="font-bold text-yellow-400">Ch. 61A (Agri)</h6>
                 <p className="text-xs text-slate-400 mt-1">Tax break for farms/agriculture. Min 5 acres.</p>
              </div>
              <div className="bg-slate-800 p-3 rounded border-t-4 border-blue-600">
                 <h6 className="font-bold text-blue-400">Ch. 61B (Rec)</h6>
                 <p className="text-xs text-slate-400 mt-1">Tax break for recreational land (nature). Min 5 acres.</p>
              </div>
              <div className="md:col-span-3 bg-slate-900/50 p-3 text-sm text-slate-300 border border-slate-700 rounded">
                 <strong>Crucial Exam Fact:</strong> If the owner sells the land for development (changing use), the town has a <strong>Right of First Refusal</strong> (120 days) to buy it, or the owner must pay roll-back taxes.
              </div>
           </div>
        )
      },
      {
        id: 'subdivision',
        title: '17.3 Subdivision Control Law',
        content: (
          <ul className="space-y-3 list-disc list-outside ml-4 marker:text-slate-500">
            <li><strong>Purpose:</strong> Regulates the division of land into smaller lots to ensure safety and access.</li>
            <li><strong>Approval Not Required (ANR):</strong> If a lot has sufficient frontage on an existing public way, you do not need full subdivision approval (Form A).</li>
            <li><strong>Definitive Plan:</strong> Required if new roads need to be built.</li>
          </ul>
        )
      },
      {
        id: 'interstate',
        title: '17.4 Interstate Land Sales',
        content: (
           <div className="space-y-3">
              <p className="text-sm text-slate-300">Federal law regulating the sale of land across state lines (e.g., selling Florida lots to MA residents).</p>
              <ul className="list-disc list-outside ml-4 marker:text-slate-500 text-sm">
                 <li>Developers must register with the CFPB.</li>
                 <li>Must provide a <strong>Property Report</strong> to buyers before signing.</li>
                 <li>Buyer has a <strong>7-day right of rescission</strong>.</li>
              </ul>
           </div>
        )
      }
    ]
  },
  {
    id: 'encumbrances-disclosure',
    title: '18. Disclosures, Easements & Contracts',
    description: 'Stigmatized properties, types of easements, and contract validity.',
    icon: <AlertTriangleIcon size={20} />,
    type: 'guide',
    sections: [
      {
        id: 'stigma',
        title: '18.1 Stigmatized Properties',
        content: (
          <div className="space-y-3">
             <p className="text-slate-300">Properties that are undesirable due to emotional or psychological reasons, not physical defects.</p>
             <div className="bg-slate-800 p-4 rounded border-l-4 border-red-500">
                <h6 className="font-bold text-slate-200 mb-1">MA Stigmatized Property Law</h6>
                <p className="text-sm text-slate-400">
                   Brokers and sellers are <strong>NOT required</strong> to disclose:
                </p>
                <ul className="list-disc list-inside ml-2 mt-1 text-sm text-slate-400">
                   <li>Suicides, murders, or felonies on the property.</li>
                   <li>Alleged hauntings or "ghosts".</li>
                   <li>HIV/AIDS status of a former occupant (Protected by Federal Law).</li>
                </ul>
                <p className="text-xs text-slate-500 mt-2 italic">
                   *However, if a buyer asks specifically about these issues (except HIV), the agent must answer truthfully or say "I cannot answer that." They cannot lie.
                </p>
             </div>
          </div>
        )
      },
      {
        id: 'easements',
        title: '18.2 Easements & Encumbrances',
        content: (
           <div className="space-y-4">
              <div>
                 <h5 className="font-semibold text-slate-200">Easement Appurtenant</h5>
                 <p className="text-sm text-slate-400">Involves two parcels of land. Runs with the land (transfers to new owner).</p>
                 <ul className="list-disc list-inside ml-4 mt-1 text-sm text-slate-400">
                    <li><strong>Dominant Tenement:</strong> The property that benefits (uses the path).</li>
                    <li><strong>Servient Tenement:</strong> The property that is burdened (has the path on it).</li>
                 </ul>
              </div>
              <div>
                 <h5 className="font-semibold text-slate-200">Easement by Prescription</h5>
                 <p className="text-sm text-slate-400">Gaining a right to use someone else's land after 20 years of open, continuous use (similar to Adverse Possession but for <em>use</em>, not ownership).</p>
              </div>
              <div>
                 <h5 className="font-semibold text-slate-200">License</h5>
                 <p className="text-sm text-slate-400">A personal privilege to enter land (e.g., a ticket to a concert). It is revocable at any time and does not transfer.</p>
              </div>
           </div>
        )
      },
      {
        id: 'contract-status',
        title: '18.3 Contract Validity Status',
        content: (
           <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-900/20 border border-green-500/30 p-3 rounded">
                 <strong className="text-green-400 block mb-1">Valid</strong>
                 <p className="text-xs text-slate-400">Meets all legal requirements. Binding and enforceable.</p>
              </div>
              <div className="bg-red-900/20 border border-red-500/30 p-3 rounded">
                 <strong className="text-red-400 block mb-1">Void</strong>
                 <p className="text-xs text-slate-400">Lacks a legal element (e.g., for an illegal purpose). It is not a contract at all. No legal effect.</p>
              </div>
              <div className="bg-yellow-900/20 border border-yellow-500/30 p-3 rounded">
                 <strong className="text-yellow-400 block mb-1">Voidable</strong>
                 <p className="text-xs text-slate-400">Valid on the surface but can be rescinded by one party. Example: Signed by a <strong>minor</strong> or under duress/intoxication. The minor can void it; the other party cannot.</p>
              </div>
           </div>
        )
      }
    ]
  },
  {
    id: 'brokerage-ops',
    title: '19. Brokerage Operations',
    description: 'Advertising rules, Escrow accounts, and Data Security (WISP).',
    icon: <StoreIcon size={20} />,
    type: 'guide',
    sections: [
      {
        id: 'ads',
        title: '19.1 Advertising Rules',
        content: (
          <div className="space-y-3">
             <ul className="space-y-3 list-disc list-outside ml-4 marker:text-slate-500">
               <li><strong>No Blind Advertising:</strong> Ads must clearly identify the broker/agency. You cannot run an ad that looks like it's from a private seller (e.g., just a phone number).</li>
               <li><strong>Discriminatory Ads:</strong> Illegal to use phrases like "Empty Nesters", "Near Church", or "Professional Couple" as they imply a preference for a protected class (Age, Religion, Marital Status).</li>
             </ul>
          </div>
        )
      },
      {
        id: 'escrow',
        title: '19.2 Escrow Accounts',
        content: (
          <div className="space-y-4">
             <p className="text-sm text-slate-300">Brokers must keep client funds separate from business funds.</p>
             <div className="bg-slate-800 p-4 rounded border border-slate-700">
                <ul className="list-disc list-inside text-sm text-slate-400 space-y-2">
                   <li><strong>Commingling:</strong> Mixing client money with business/personal money. <span className="text-red-400 font-bold uppercase">Illegal.</span></li>
                   <li><strong>Conversion:</strong> Using client money for business expenses. <span className="text-red-400 font-bold uppercase">Illegal (Theft).</span></li>
                   <li><strong>Interest:</strong> Escrow accounts for deposits on sales are typically <strong>non-interest bearing</strong> unless agreed otherwise. (Different from Tenant Security Deposits which MUST bear interest).</li>
                </ul>
             </div>
          </div>
        )
      },
      {
        id: 'wisp',
        title: '19.3 Data Security (WISP)',
        content: (
          <div className="space-y-3">
             <p className="text-sm text-slate-300">Massachusetts Law (201 CMR 17.00) requires all businesses (including Brokerages) to have a <strong>Written Information Security Program</strong>.</p>
             <ul className="list-disc list-outside ml-4 marker:text-slate-500 text-sm">
                <li>Must designate an employee to oversee security.</li>
                <li>Must encrypt all personal information sent over the internet or stored on laptops/flash drives.</li>
                <li>Protects client data (SSNs, Bank info) from identity theft.</li>
             </ul>
          </div>
        )
      },
      {
        id: 'procuring-cause',
        title: '19.4 Procuring Cause',
        content: (
           <div className="p-4 bg-blue-900/10 border border-blue-500/30 rounded-lg">
              <p className="text-sm text-slate-300 mb-2">
                 The concept used to determine who gets the commission in a dispute.
              </p>
              <p className="text-sm text-slate-400">
                 The broker who started the <strong>"unbroken chain of events"</strong> that led to the sale is the Procuring Cause. Merely showing the house first does not guarantee commission if you abandoned the client.
              </p>
           </div>
        )
      }
    ]
  },
  {
    id: 'land-descriptions',
    title: '20. Land Descriptions & Water',
    description: 'Metes & Bounds, Government Surveys, and Water Rights.',
    icon: <CompassIcon size={20} />,
    type: 'guide',
    sections: [
      {
        id: 'metes-bounds',
        title: '20.1 Metes and Bounds',
        content: (
           <div className="space-y-3">
             <p className="text-sm text-slate-300">The primary method used in the original 13 colonies (including MA). It describes land by outlining the perimeter.</p>
             <ul className="list-disc list-outside ml-4 marker:text-slate-500 text-sm">
               <li><strong>POB (Point of Beginning):</strong> The description MUST start and end at the same POB to be valid.</li>
               <li><strong>Monuments:</strong> Fixed objects used to mark corners (e.g., "The large oak tree" or an iron pin).</li>
             </ul>
           </div>
        )
      },
      {
        id: 'gov-survey',
        title: '20.2 Government Survey System',
        content: (
           <div className="space-y-4">
             <div className="p-3 bg-slate-800 border-l-2 border-purple-500 rounded">
               <h6 className="font-bold text-slate-200 mb-1">Rectangular Survey (Public Land Survey)</h6>
               <p className="text-xs text-slate-400">
                 Used in Western/Midwestern states. Divides land into a grid using Principal Meridians (North-South) and Base Lines (East-West).
               </p>
             </div>
             <div className="grid grid-cols-2 gap-3">
                <div className="p-2 bg-slate-900 border border-slate-700 rounded">
                   <strong className="block text-purple-400 text-sm">Township</strong>
                   <span className="text-xs text-slate-400">6 miles x 6 miles square.<br/>Contains 36 Sections.</span>
                </div>
                <div className="p-2 bg-slate-900 border border-slate-700 rounded">
                   <strong className="block text-purple-400 text-sm">Section</strong>
                   <span className="text-xs text-slate-400">1 mile x 1 mile.<br/>Contains 640 Acres.</span>
                </div>
             </div>
             <div className="text-xs text-slate-500 italic">
                *Even though MA doesn't use this, it IS on the National portion of the PSI exam. Remember: Section 16 is reserved for schools.
             </div>
           </div>
        )
      },
      {
        id: 'water-rights',
        title: '20.3 Water Rights',
        content: (
           <div className="space-y-4">
             <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-slate-800 p-3 rounded border border-blue-500/30">
                   <strong className="text-blue-300 block mb-1">Riparian Rights</strong>
                   <p className="text-xs text-slate-400">Rights for land bordering <strong>Rivers</strong> or Streams. (R for River).</p>
                </div>
                <div className="bg-slate-800 p-3 rounded border border-blue-500/30">
                   <strong className="text-blue-300 block mb-1">Littoral Rights</strong>
                   <p className="text-xs text-slate-400">Rights for land bordering <strong>Lakes</strong> or Oceans. (L for Lake).</p>
                </div>
             </div>
             <ul className="list-disc list-outside ml-4 marker:text-slate-500 text-sm space-y-1">
               <li><strong>Accretion:</strong> Gradual increase in land due to water depositing soil (Alluvion). Owner keeps new land.</li>
               <li><strong>Erosion:</strong> Gradual loss of land. Owner loses land.</li>
               <li><strong>Avulsion:</strong> Sudden loss of land (e.g., dam breaks). Title does NOT change.</li>
             </ul>
           </div>
        )
      }
    ]
  },
  {
    id: 'professional-standards',
    title: '21. Professional Standards',
    description: 'Employment status, vicarious liability, and inspector laws.',
    icon: <UserCheckIcon size={20} />,
    type: 'guide',
    sections: [
      {
        id: 'independent-contractor',
        title: '21.1 Independent Contractor vs. Employee',
        content: (
          <div className="space-y-3">
             <p className="text-sm text-slate-300">Most real estate agents are <strong>1099 Independent Contractors</strong>, not W-2 employees.</p>
             <div className="bg-slate-800 p-4 rounded border border-slate-700">
                <h6 className="font-bold text-blue-400 mb-2">IRS Safe Harbor Rules</h6>
                <ul className="list-disc list-inside text-sm text-slate-400">
                   <li>Must have a real estate license.</li>
                   <li>Income must be based on sales production, not hours worked.</li>
                   <li>Must have a written agreement stating they will not be treated as an employee for tax purposes.</li>
                </ul>
                <div className="mt-3 pt-2 border-t border-slate-700 text-xs text-slate-500">
                   <strong>Result:</strong> Brokers cannot dictate <em>how</em> the work is done (e.g., set mandatory floor time or dress codes), but can supervise compliance with laws. Agents pay their own estimated taxes quarterly.
                </div>
             </div>
          </div>
        )
      },
      {
        id: 'vicarious-liability',
        title: '21.2 Vicarious Liability',
        content: (
           <div className="space-y-3">
             <div className="p-3 bg-red-900/10 border border-red-500/20 rounded">
                <h6 className="font-bold text-red-400">"Respondeat Superior"</h6>
                <p className="text-sm text-slate-300 mt-1">
                   The Broker is legally responsible for the actions of their affiliated salespersons. If a salesperson commits fraud, the Broker can lose their license too.
                </p>
             </div>
           </div>
        )
      },
      {
        id: 'home-inspectors',
        title: '21.3 Home Inspector Recommendations',
        content: (
          <div className="space-y-3">
            <p className="text-sm text-slate-300">MA Agents are prohibited from recommending a specific home inspector to a buyer.</p>
            <ul className="list-disc list-outside ml-4 marker:text-slate-500 text-sm">
              <li><strong>The Rule:</strong> You must provide the official state list of all licensed inspectors in the area.</li>
              <li><strong>Exception:</strong> If the buyer <em>specifically asks</em> for a recommendation, you may provide one, but it is best practice to provide at least 3 names to avoid liability.</li>
              <li><strong>Brochure:</strong> You must also provide the "Facts for the Consumer" brochure regarding home inspections.</li>
            </ul>
          </div>
        )
      },
      {
        id: 'property-condition',
        title: '21.4 Property Condition Statement',
        content: (
          <div className="space-y-3">
            <p className="text-sm text-slate-300">Massachusetts is a <strong>"Caveat Emptor"</strong> (Buyer Beware) state.</p>
            <ul className="list-disc list-outside ml-4 marker:text-slate-500 text-sm">
              <li><strong>Voluntary:</strong> Sellers are <strong>NOT</strong> required by law to fill out a Property Condition Statement (unlike many other states).</li>
              <li><strong>Binding:</strong> However, if a seller <em>chooses</em> to fill one out, they must answer truthfully.</li>
              <li><strong>Agent Duty:</strong> Agents must disclose all <strong>known</strong> material defects, regardless of what the seller says. Agents are liable for what they <em>know</em> or <em>should have known</em>.</li>
            </ul>
          </div>
        )
      }
    ]
  },
  {
    id: 'financial-risks',
    title: '22. Financial & Legal Risks',
    description: 'Capital Gains, Discount Points, Agency Termination & Megan\'s Law.',
    icon: <FlagIcon size={20} />,
    type: 'guide',
    sections: [
      {
        id: 'capital-gains',
        title: '22.1 Capital Gains Tax Exclusion',
        content: (
          <div className="space-y-3">
             <p className="text-sm text-slate-300">The Taxpayer Relief Act of 1997 allows homeowners to sell their primary residence tax-free (up to limits).</p>
             <div className="bg-slate-800 p-4 rounded border border-green-500/30">
                <h6 className="font-bold text-green-400 mb-2">The "2 out of 5 Years" Rule</h6>
                <ul className="list-disc list-inside text-sm text-slate-400">
                   <li>You must have owned and lived in the home as your primary residence for at least 2 of the last 5 years.</li>
                   <li><strong>Single Filers:</strong> Up to $250,000 in profit is tax-free.</li>
                   <li><strong>Married (Joint):</strong> Up to $500,000 in profit is tax-free.</li>
                </ul>
             </div>
          </div>
        )
      },
      {
        id: 'discount-points',
        title: '22.2 Discount Points',
        content: (
          <div className="space-y-3">
            <p className="text-sm text-slate-300">Upfront interest paid to the lender to lower the interest rate for the life of the loan (a "Buydown").</p>
            <div className="p-3 bg-slate-800 border-l-4 border-purple-500 rounded">
               <h6 className="font-bold text-slate-200">The Math Rule</h6>
               <p className="text-sm text-slate-400 mt-1">
                  <strong>1 Point = 1% of the LOAN AMOUNT</strong>. <br/>
                  (NOT the sales price).
               </p>
               <p className="text-xs text-slate-500 mt-2">Example: A $200k house with a $160k loan. 2 points = $160,000 x 0.02 = $3,200.</p>
            </div>
          </div>
        )
      },
      {
        id: 'agency-termination',
        title: '22.3 Termination of Agency',
        content: (
          <div className="grid gap-3">
             <div className="p-3 bg-slate-800 rounded">
                <strong className="text-red-400 block text-sm mb-1">Death of Broker (Principal)</strong>
                <p className="text-xs text-slate-400">The listing contract is with the Brokerage Firm. If the Broker of Record dies or loses their license, all listings are <strong>Void</strong>.</p>
             </div>
             <div className="p-3 bg-slate-800 rounded">
                <strong className="text-slate-200 block text-sm mb-1">Death of Salesperson</strong>
                <p className="text-xs text-slate-400">The listing is NOT affected. The Broker assigns a new agent.</p>
             </div>
             <div className="p-3 bg-slate-800 rounded">
                <strong className="text-slate-200 block text-sm mb-1">Other Reasons</strong>
                <p className="text-xs text-slate-400">Performance (Sold), Expiration (Time's up), Destruction of Property (Fire), Mutual Agreement.</p>
             </div>
          </div>
        )
      },
      {
        id: 'megans-law',
        title: '22.4 Megan\'s Law (Sex Offender Registry)',
        content: (
           <div className="space-y-3">
              <p className="text-sm text-slate-300">Federal/State laws requiring registration of sex offenders.</p>
              <ul className="list-disc list-outside ml-4 marker:text-slate-500 text-sm">
                 <li><strong>Agent Duty:</strong> Real estate agents are <strong>NOT</strong> required to research or disclose offender information.</li>
                 <li><strong>Best Practice:</strong> If asked, refer the client to the local police department or the state Sex Offender Registry Board (SORB). Do not answer "yes" or "no" yourself to avoid liability.</li>
                 <li><strong>Levels:</strong> Level 1 (Police only), Level 2 (Restricted), Level 3 (Public).</li>
              </ul>
           </div>
        )
      }
    ]
  },
  {
    id: 'landlord-tenant',
    title: '8. MA Landlord-Tenant Law',
    description: 'Security deposits, leases, eviction procedures, and tenant rights under Massachusetts law.',
    icon: <BuildingIcon size={20} />,
    type: 'guide',
    sections: [
      {
        id: 'security-deposits',
        title: '8.1 Security Deposits (Critical for Exam)',
        content: (
          <div className="space-y-6">
            <div className="bg-red-900/20 border border-red-500/50 p-4 rounded-lg">
              <strong className="text-red-400 block mb-2">🔥 High-Test Topic:</strong>
              <p className="text-slate-300">Security deposit rules are heavily tested on the MA State portion. Know the limits, banking requirements, and return timelines.</p>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-lg p-5">
              <h5 className="font-bold text-blue-400 mb-4">The 1-Month Rule</h5>
              <ul className="space-y-3 list-disc list-outside ml-4 marker:text-blue-500 text-slate-300">
                <li><strong>Maximum:</strong> Landlord may collect up to <span className="text-yellow-400 font-bold">1 month's rent</span> as security deposit. No more!</li>
                <li><strong>Separate Account:</strong> Must be held in a <span className="text-green-400">Massachusetts bank</span> in a separate, interest-bearing account.</li>
                <li><strong>Bank Name:</strong> Landlord must provide tenant with bank name, address, and account number within 30 days.</li>
                <li><strong>Interest:</strong> Tenant receives 5% interest annually OR actual bank interest (whichever is less).</li>
                <li><strong>Cannot Commingle:</strong> Security deposits cannot be mixed with landlord's personal funds.</li>
              </ul>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-lg p-5">
              <h5 className="font-bold text-purple-400 mb-4">Last Month's Rent</h5>
              <ul className="space-y-3 list-disc list-outside ml-4 marker:text-purple-500 text-slate-300">
                <li><strong>Also Allowed:</strong> Landlord may collect <span className="text-yellow-400 font-bold">first month + last month + security</span> at move-in.</li>
                <li><strong>Same Rules:</strong> Last month's rent gets same treatment as security deposit (separate MA bank account, interest).</li>
                <li><strong>Must Apply:</strong> If collected, must be applied to the last month of occupancy.</li>
              </ul>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-lg p-5">
              <h5 className="font-bold text-green-400 mb-4">Return of Security Deposit</h5>
              <ul className="space-y-3 list-disc list-outside ml-4 marker:text-green-500 text-slate-300">
                <li><strong>Timeline:</strong> Must return within <span className="text-yellow-400 font-bold">30 days</span> after tenant moves out.</li>
                <li><strong>With Interest:</strong> Include accrued interest in the return.</li>
                <li><strong>Itemized Deductions:</strong> If making deductions, provide itemized list of damages with receipts/invoices.</li>
                <li><strong>Normal Wear:</strong> Cannot deduct for normal wear and tear (faded paint, worn carpet from use).</li>
                <li><strong>Penalty:</strong> If landlord fails to return or provide proper itemization → <span className="text-red-400">Treble damages (3x)</span> + attorney fees.</li>
              </ul>
            </div>

            <div className="bg-yellow-900/20 border border-yellow-700/50 p-4 rounded-lg text-yellow-200">
              <strong className="block mb-2">Exam Math Tip:</strong>
              <p className="text-sm">If rent is $2,000/month, maximum security deposit = $2,000. Landlord can collect $2,000 (first) + $2,000 (last) + $2,000 (security) = $6,000 total at move-in.</p>
            </div>
          </div>
        )
      },
      {
        id: 'lease-types',
        title: '8.2 Types of Leases',
        content: (
          <div className="space-y-4">
            <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-blue-500">
              <h5 className="font-bold text-blue-400 mb-2">Fixed-Term Lease (Estate for Years)</h5>
              <ul className="space-y-2 list-disc list-inside text-slate-300 text-sm">
                <li>Specific start and end date (e.g., September 1 - August 31).</li>
                <li><strong>No notice required</strong> to terminate - lease automatically ends on end date.</li>
                <li>Most common for residential rentals in MA (1-year lease).</li>
                <li>Tenant liable for rent until end date unless landlord re-rents.</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-green-500">
              <h5 className="font-bold text-green-400 mb-2">Periodic Tenancy (Month-to-Month)</h5>
              <ul className="space-y-2 list-disc list-inside text-slate-300 text-sm">
                <li>Automatically renews each month/period unless terminated.</li>
                <li><strong>Notice Required:</strong> Either party must give proper notice (see below).</li>
                <li>Often created when fixed-term lease expires and tenant stays (holdover).</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-purple-500">
              <h5 className="font-bold text-purple-400 mb-2">Tenancy at Will</h5>
              <ul className="space-y-2 list-disc list-inside text-slate-300 text-sm">
                <li>No specific term - continues indefinitely until terminated.</li>
                <li>Can be terminated by either party with proper notice.</li>
                <li>Less common but still valid in MA.</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-red-500">
              <h5 className="font-bold text-red-400 mb-2">Tenancy at Sufferance (Holdover)</h5>
              <ul className="space-y-2 list-disc list-inside text-slate-300 text-sm">
                <li>Tenant stays after lease expires without permission.</li>
                <li>Landlord can treat as trespasser OR accept rent (creates new tenancy).</li>
                <li>No legal rights - subject to immediate eviction.</li>
              </ul>
            </div>
          </div>
        )
      },
      {
        id: 'notice-requirements',
        title: '8.3 Notice Requirements (Memorize These!)',
        content: (
          <div className="space-y-4">
            <div className="bg-blue-900/20 border border-blue-500/50 p-4 rounded-lg mb-4">
              <strong className="text-blue-400">Exam Alert:</strong> <span className="text-slate-300">Notice periods are heavily tested. Know which situations require 30 days vs. 14 days vs. 7 days.</span>
            </div>

            <div className="overflow-hidden rounded-lg border border-slate-700">
              <table className="w-full text-sm text-slate-300">
                <thead className="bg-slate-800 text-slate-200">
                  <tr>
                    <th className="px-4 py-3 text-left">Situation</th>
                    <th className="px-4 py-3 text-left">Notice Period</th>
                    <th className="px-4 py-3 text-left">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  <tr className="bg-slate-900">
                    <td className="px-4 py-3 font-medium">Terminating Month-to-Month</td>
                    <td className="px-4 py-3 text-yellow-400 font-bold">30 Days</td>
                    <td className="px-4 py-3">By landlord OR tenant</td>
                  </tr>
                  <tr className="bg-slate-800/50">
                    <td className="px-4 py-3 font-medium">Terminating Tenancy at Will</td>
                    <td className="px-4 py-3 text-yellow-400 font-bold">30 Days</td>
                    <td className="px-4 py-3">Or one rental period</td>
                  </tr>
                  <tr className="bg-slate-900">
                    <td className="px-4 py-3 font-medium">Rent Increase</td>
                    <td className="px-4 py-3 text-yellow-400 font-bold">30 Days</td>
                    <td className="px-4 py-3">Must give advance notice</td>
                  </tr>
                  <tr className="bg-slate-800/50">
                    <td className="px-4 py-3 font-medium">Non-Payment of Rent</td>
                    <td className="px-4 py-3 text-orange-400 font-bold">14 Days</td>
                    <td className="px-4 py-3">"Notice to Quit for Non-Payment"</td>
                  </tr>
                  <tr className="bg-slate-900">
                    <td className="px-4 py-3 font-medium">Lease Violation</td>
                    <td className="px-4 py-3 text-orange-400 font-bold">7-14 Days</td>
                    <td className="px-4 py-3">Depends on violation severity</td>
                  </tr>
                  <tr className="bg-slate-800/50">
                    <td className="px-4 py-3 font-medium">No-Fault Eviction</td>
                    <td className="px-4 py-3 text-red-400 font-bold">30+ Days</td>
                    <td className="px-4 py-3">May require "just cause" in some cities</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-green-900/20 border border-green-700/50 p-4 rounded-lg text-green-200 text-sm">
              <strong>Tip:</strong> Notice must be in writing and properly delivered (hand-delivery, certified mail, or posted on door). Oral notice is not sufficient.
            </div>
          </div>
        )
      },
      {
        id: 'eviction-process',
        title: '8.4 Eviction Process (Summary Process)',
        content: (
          <div className="space-y-4">
            <p className="text-slate-300 mb-4">
              In Massachusetts, landlords <strong>cannot</strong> use "self-help" eviction (changing locks, shutting off utilities, removing belongings). 
              Must go through court process called <strong className="text-blue-400">"Summary Process"</strong>.
            </p>

            <div className="space-y-3">
              <div className="flex items-start space-x-4 bg-slate-800 p-4 rounded-lg">
                <div className="bg-blue-500/20 text-blue-400 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</div>
                <div>
                  <h5 className="font-bold text-slate-200 mb-1">Notice to Quit</h5>
                  <p className="text-sm text-slate-400">Landlord serves tenant with proper notice (14 days for non-payment, 30 days for other reasons).</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-slate-800 p-4 rounded-lg">
                <div className="bg-blue-500/20 text-blue-400 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</div>
                <div>
                  <h5 className="font-bold text-slate-200 mb-1">File Summary Process</h5>
                  <p className="text-sm text-slate-400">If tenant doesn't leave, landlord files "Summary Process" complaint in Housing Court or District Court.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-slate-800 p-4 rounded-lg">
                <div className="bg-blue-500/20 text-blue-400 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</div>
                <div>
                  <h5 className="font-bold text-slate-200 mb-1">Summons & Complaint</h5>
                  <p className="text-sm text-slate-400">Tenant receives summons with court date (usually 7-14 days notice).</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-slate-800 p-4 rounded-lg">
                <div className="bg-blue-500/20 text-blue-400 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">4</div>
                <div>
                  <h5 className="font-bold text-slate-200 mb-1">Court Hearing</h5>
                  <p className="text-sm text-slate-400">Both parties present evidence. Judge decides if eviction is warranted.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-slate-800 p-4 rounded-lg">
                <div className="bg-blue-500/20 text-blue-400 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">5</div>
                <div>
                  <h5 className="font-bold text-slate-200 mb-1">Execution for Possession</h5>
                  <p className="text-sm text-slate-400">If landlord wins, court issues "Execution." Sheriff physically removes tenant if necessary (10-day appeal period first).</p>
                </div>
              </div>
            </div>

            <div className="bg-red-900/20 border border-red-500/50 p-4 rounded-lg text-red-200">
              <strong>Illegal Eviction Tactics (Self-Help):</strong> Changing locks, removing belongings, shutting off heat/water, threatening tenant. 
              Landlord faces serious penalties including damages and attorney fees.
            </div>
          </div>
        )
      },
      {
        id: 'tenant-rights',
        title: '8.5 Tenant Rights & Landlord Duties',
        content: (
          <div className="space-y-6">
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-5">
              <h5 className="font-bold text-green-400 mb-4">Warranty of Habitability (Implied)</h5>
              <p className="text-slate-300 mb-3">Every rental in MA includes an <strong>implied warranty of habitability</strong> - landlord must provide:</p>
              <ul className="space-y-2 list-disc list-inside text-slate-300 text-sm ml-4">
                <li>Working heat (September 16 - June 14: min 68°F during day, 64°F at night)</li>
                <li>Hot water (120°F minimum)</li>
                <li>Working locks on doors</li>
                <li>No lead paint hazards (especially for children under 6)</li>
                <li>Pest-free conditions</li>
                <li>Working smoke & carbon monoxide detectors</li>
                <li>Weatherproofing (no leaks, broken windows)</li>
                <li>Adequate sanitation (working toilet, bathroom, kitchen sink)</li>
              </ul>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-lg p-5">
              <h5 className="font-bold text-blue-400 mb-4">Quiet Enjoyment</h5>
              <p className="text-slate-300">Tenant has right to <strong>quiet enjoyment</strong> of the premises:</p>
              <ul className="space-y-2 list-disc list-inside text-slate-300 text-sm ml-4 mt-3">
                <li>Landlord cannot enter without notice (usually 24 hours, except emergency)</li>
                <li>Cannot harass or interfere with tenant's use of property</li>
                <li>Tenant can use property peacefully without disturbance</li>
              </ul>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-lg p-5">
              <h5 className="font-bold text-purple-400 mb-4">Lead Paint Requirements (Critical for Exam)</h5>
              <ul className="space-y-2 list-disc list-inside text-slate-300 text-sm ml-4">
                <li><strong>Year Built:</strong> Applies to properties built <span className="text-yellow-400">before 1978</span></li>
                <li><strong>Disclosure:</strong> Landlord must disclose known lead paint hazards</li>
                <li><strong>EPA Pamphlet:</strong> Must provide EPA pamphlet "Protect Your Family from Lead"</li>
                <li><strong>Children Under 6:</strong> If child under 6 will live there, landlord must delead or obtain letter of interim control</li>
                <li><strong>Penalty:</strong> Violations = fines up to $2,500 per violation</li>
              </ul>
            </div>

            <div className="bg-yellow-900/20 border border-yellow-700/50 p-4 rounded-lg text-yellow-200 text-sm">
              <strong>Exam Tip:</strong> Remember "1978" for lead paint. Also know that tenant can withhold rent or terminate lease if landlord fails to maintain habitability after proper notice.
            </div>
          </div>
        )
      },
      {
        id: 'prohibited-provisions',
        title: '8.6 Prohibited Lease Provisions',
        content: (
          <div className="space-y-4">
            <p className="text-slate-300 mb-4">Massachusetts law prohibits certain lease clauses. If included, they are <strong className="text-red-400">void and unenforceable</strong>:</p>

            <div className="grid gap-3">
              <div className="bg-red-900/20 border-l-4 border-red-500 p-4">
                <h5 className="font-bold text-red-400 mb-2">❌ Waiver of Warranty of Habitability</h5>
                <p className="text-sm text-slate-300">Cannot make tenant waive right to habitable premises.</p>
              </div>

              <div className="bg-red-900/20 border-l-4 border-red-500 p-4">
                <h5 className="font-bold text-red-400 mb-2">❌ Confession of Judgment</h5>
                <p className="text-sm text-slate-300">Cannot require tenant to agree to judgment in advance.</p>
              </div>

              <div className="bg-red-900/20 border-l-4 border-red-500 p-4">
                <h5 className="font-bold text-red-400 mb-2">❌ Waiver of Jury Trial</h5>
                <p className="text-sm text-slate-300">Tenant has right to jury trial in eviction cases.</p>
              </div>

              <div className="bg-red-900/20 border-l-4 border-red-500 p-4">
                <h5 className="font-bold text-red-400 mb-2">❌ Automatic Rent Increases</h5>
                <p className="text-sm text-slate-300">Must give 30-day notice for any rent increase.</p>
              </div>

              <div className="bg-red-900/20 border-l-4 border-red-500 p-4">
                <h5 className="font-bold text-red-400 mb-2">❌ Waiver of Notice Requirements</h5>
                <p className="text-sm text-slate-300">Cannot waive required termination notice periods.</p>
              </div>
            </div>

            <div className="bg-green-900/20 border border-green-700/50 p-4 rounded-lg text-green-200 text-sm">
              <strong>Result if Included:</strong> These clauses are void. Rest of lease remains valid. Landlord may face penalties for including them.
            </div>
          </div>
        )
      }
    ]
  }
];