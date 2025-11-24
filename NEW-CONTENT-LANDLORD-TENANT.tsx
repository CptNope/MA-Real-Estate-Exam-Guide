// NEW CHAPTER: MA Landlord-Tenant Law
// Add this to guides.tsx after the Fair Housing chapter

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
},
