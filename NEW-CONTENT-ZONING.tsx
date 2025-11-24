// NEW CHAPTER: Land Use & Zoning
// Add this to guides.tsx

{
  id: 'zoning',
  title: '9. Land Use Controls & Zoning',
  description: 'Zoning classifications, variances, non-conforming uses, and government restrictions on property.',
  icon: <MapIcon size={20} />,
  type: 'guide',
  sections: [
    {
      id: 'government-powers',
      title: '9.1 Government Powers Over Property',
      content: (
        <div className="space-y-6">
          <p className="text-slate-300 mb-4">
            Government can restrict property use through four main powers (remember: <strong className="text-yellow-400">"PETE"</strong>):
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-slate-800 p-5 rounded-lg border-l-4 border-blue-500">
              <h5 className="font-bold text-blue-400 mb-3 flex items-center">
                <span className="bg-blue-500/20 p-2 rounded mr-2 text-xl">P</span> Police Power
              </h5>
              <p className="text-sm text-slate-300 mb-2">Government's right to regulate for health, safety, and welfare</p>
              <ul className="space-y-1 text-sm text-slate-400 list-disc list-inside">
                <li>Zoning ordinances</li>
                <li>Building codes</li>
                <li>Environmental regulations</li>
                <li><strong>No compensation</strong> required</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-5 rounded-lg border-l-4 border-green-500">
              <h5 className="font-bold text-green-400 mb-3 flex items-center">
                <span className="bg-green-500/20 p-2 rounded mr-2 text-xl">E</span> Eminent Domain
              </h5>
              <p className="text-sm text-slate-300 mb-2">Government's power to take private property for public use</p>
              <ul className="space-y-1 text-sm text-slate-400 list-disc list-inside">
                <li>Roads, schools, parks</li>
                <li>Public utilities</li>
                <li>Must be "public use"</li>
                <li><strong>Just compensation</strong> required</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-5 rounded-lg border-l-4 border-purple-500">
              <h5 className="font-bold text-purple-400 mb-3 flex items-center">
                <span className="bg-purple-500/20 p-2 rounded mr-2 text-xl">T</span> Taxation
              </h5>
              <p className="text-sm text-slate-300 mb-2">Government's power to levy property taxes</p>
              <ul className="space-y-1 text-sm text-slate-400 list-disc list-inside">
                <li>Property tax (annual)</li>
                <li>Transfer tax (at sale)</li>
                <li>Priority lien (comes first)</li>
                <li>Can foreclose for non-payment</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-5 rounded-lg border-l-4 border-orange-500">
              <h5 className="font-bold text-orange-400 mb-3 flex items-center">
                <span className="bg-orange-500/20 p-2 rounded mr-2 text-xl">E</span> Escheat
              </h5>
              <p className="text-sm text-slate-300 mb-2">Property reverts to state if owner dies without heirs/will</p>
              <ul className="space-y-1 text-slate-400 text-sm list-disc list-inside">
                <li>Owner dies intestate</li>
                <li>No heirs found</li>
                <li>State takes title</li>
                <li>Rare occurrence</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'zoning-basics',
      title: '9.2 Zoning Classifications',
      content: (
        <div className="space-y-6">
          <p className="text-slate-300 mb-4">
            <strong>Zoning</strong> divides municipality into districts with specific allowed uses. Common classifications:
          </p>

          <div className="space-y-3">
            <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-green-500">
              <h5 className="font-bold text-green-400 mb-2">Residential (R) Zones</h5>
              <ul className="space-y-1 text-sm text-slate-300 list-disc list-inside ml-4">
                <li><strong>R-1:</strong> Single-family homes only (most restrictive residential)</li>
                <li><strong>R-2:</strong> Two-family homes (duplexes)</li>
                <li><strong>R-3:</strong> Multi-family (apartments, condos)</li>
                <li>Purpose: Preserve neighborhood character, prevent overcrowding</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-blue-500">
              <h5 className="font-bold text-blue-400 mb-2">Commercial (C) Zones</h5>
              <ul className="space-y-1 text-sm text-slate-300 list-disc list-inside ml-4">
                <li>Retail stores, offices, restaurants</li>
                <li>Usually along main roads</li>
                <li>May allow mixed-use (retail + residential above)</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-purple-500">
              <h5 className="font-bold text-purple-400 mb-2">Industrial (I) Zones</h5>
              <ul className="space-y-1 text-sm text-slate-300 list-disc list-inside ml-4">
                <li>Manufacturing, warehouses, heavy equipment</li>
                <li>Often near highways/rail</li>
                <li>Light industrial vs. heavy industrial</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-yellow-500">
              <h5 className="font-bold text-yellow-400 mb-2">Agricultural (A) Zones</h5>
              <ul className="space-y-1 text-sm text-slate-300 list-disc list-inside ml-4">
                <li>Farming, ranching</li>
                <li>Large minimum lot sizes</li>
                <li>Protects farmland from development</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-900/20 border border-blue-500/50 p-4 rounded-lg">
            <strong className="text-blue-400">Cumulative Zoning:</strong>
            <p className="text-slate-300 text-sm mt-2">
              In some areas, "less intensive" uses allowed in "more intensive" zones. 
              Example: Can build single-family home in R-3 zone, but can't build apartment in R-1 zone.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'zoning-regulations',
      title: '9.3 Zoning Regulations & Requirements',
      content: (
        <div className="space-y-6">
          <div className="overflow-hidden rounded-lg border border-slate-700">
            <table className="w-full text-sm text-slate-300">
              <thead className="bg-slate-800 text-slate-200">
                <tr>
                  <th className="px-4 py-3 text-left">Regulation</th>
                  <th className="px-4 py-3 text-left">Description</th>
                  <th className="px-4 py-3 text-left">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                <tr className="bg-slate-900">
                  <td className="px-4 py-3 font-bold text-blue-400">Setback</td>
                  <td className="px-4 py-3">Minimum distance from property line to building</td>
                  <td className="px-4 py-3 text-slate-400">25 ft from front, 10 ft from sides</td>
                </tr>
                <tr className="bg-slate-800/50">
                  <td className="px-4 py-3 font-bold text-green-400">Lot Coverage</td>
                  <td className="px-4 py-3">Maximum % of lot that can be covered by buildings</td>
                  <td className="px-4 py-3 text-slate-400">Building can't exceed 40% of lot</td>
                </tr>
                <tr className="bg-slate-900">
                  <td className="px-4 py-3 font-bold text-purple-400">Height Restriction</td>
                  <td className="px-4 py-3">Maximum building height</td>
                  <td className="px-4 py-3 text-slate-400">35 feet max (residential)</td>
                </tr>
                <tr className="bg-slate-800/50">
                  <td className="px-4 py-3 font-bold text-yellow-400">Density</td>
                  <td className="px-4 py-3">Units allowed per acre</td>
                  <td className="px-4 py-3 text-slate-400">Max 6 units/acre</td>
                </tr>
                <tr className="bg-slate-900">
                  <td className="px-4 py-3 font-bold text-orange-400">Minimum Lot Size</td>
                  <td className="px-4 py-3">Smallest parcel allowed for building</td>
                  <td className="px-4 py-3 text-slate-400">1 acre minimum (rural)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-900/20 border border-yellow-700/50 p-4 rounded-lg text-yellow-200 text-sm">
            <strong>Exam Tip:</strong> Setbacks create a "building envelope" - the area where construction is allowed after accounting for front, back, and side setbacks.
          </div>
        </div>
      )
    },
    {
      id: 'variances-exceptions',
      title: '9.4 Variances & Special Exceptions (High-Test)',
      content: (
        <div className="space-y-6">
          <div className="bg-red-900/20 border border-red-500/50 p-4 rounded-lg mb-4">
            <strong className="text-red-400">Critical for Exam:</strong>
            <p className="text-slate-300 text-sm mt-2">Know the difference between variance and special exception/conditional use. This is heavily tested!</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-slate-800 p-5 rounded-lg border-l-4 border-blue-500">
              <h5 className="font-bold text-blue-400 mb-4">Variance</h5>
              <p className="text-sm text-slate-300 mb-3"><strong>Definition:</strong> Permission to deviate from zoning requirements due to hardship</p>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-slate-200 mb-1">Requirements:</p>
                  <ul className="space-y-1 text-sm text-slate-400 list-disc list-inside ml-2">
                    <li><strong>Unnecessary hardship</strong> (topography, shape)</li>
                    <li>Unique to this property</li>
                    <li>Not self-created</li>
                    <li>Won't harm neighborhood</li>
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-200 mb-1">Examples:</p>
                  <ul className="space-y-1 text-sm text-slate-400 list-disc list-inside ml-2">
                    <li>Odd-shaped lot needs smaller setback</li>
                    <li>Steep slope prevents meeting height limit</li>
                    <li>Reduce lot size due to wetlands</li>
                  </ul>
                </div>

                <div className="bg-blue-900/20 p-3 rounded text-xs text-blue-200">
                  <strong>Granted by:</strong> Zoning Board of Appeals (ZBA)
                </div>
              </div>
            </div>

            <div className="bg-slate-800 p-5 rounded-lg border-l-4 border-green-500">
              <h5 className="font-bold text-green-400 mb-4">Special Exception / Conditional Use</h5>
              <p className="text-sm text-slate-300 mb-3"><strong>Definition:</strong> Use allowed by zoning code if specific conditions met</p>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-slate-200 mb-1">Characteristics:</p>
                  <ul className="space-y-1 text-sm text-slate-400 list-disc list-inside ml-2">
                    <li><strong>Already in zoning code</strong></li>
                    <li>Must meet listed criteria</li>
                    <li>Not based on hardship</li>
                    <li>Less discretionary than variance</li>
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-200 mb-1">Examples:</p>
                  <ul className="space-y-1 text-slate-400 text-sm list-disc list-inside ml-2">
                    <li>Church in residential zone</li>
                    <li>Daycare in commercial zone</li>
                    <li>Gas station (if conditions met)</li>
                  </ul>
                </div>

                <div className="bg-green-900/20 p-3 rounded text-xs text-green-200">
                  <strong>Granted by:</strong> Zoning Board or Planning Board
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-900/20 border border-purple-500/50 p-4 rounded-lg">
            <h5 className="font-bold text-purple-400 mb-2">Key Difference</h5>
            <p className="text-slate-300 text-sm">
              <strong>Variance = Exception to the rules</strong> (not listed in code, based on hardship)<br/>
              <strong>Special Exception = Use already allowed in code</strong> (just needs approval of conditions)
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'nonconforming',
      title: '9.5 Non-Conforming Uses (Grandfathered)',
      content: (
        <div className="space-y-6">
          <p className="text-slate-300 mb-4">
            <strong>Non-conforming use</strong> (aka "grandfathered use") = Use that was legal when established but doesn't comply with current zoning.
          </p>

          <div className="bg-slate-800 p-5 rounded-lg border border-slate-700">
            <h5 className="font-bold text-blue-400 mb-4">Rules for Non-Conforming Uses</h5>
            <ul className="space-y-3 list-disc list-outside ml-4 marker:text-blue-500 text-slate-300">
              <li><strong>Can Continue:</strong> Existing non-conforming use may continue indefinitely</li>
              <li><strong>Cannot Expand:</strong> Usually cannot enlarge the non-conforming aspect</li>
              <li><strong>Cannot Change:</strong> If use changes, must comply with current zoning</li>
              <li><strong>If Destroyed:</strong> If building destroyed (fire, etc.), may lose right to rebuild (often 50% rule)</li>
              <li><strong>Abandonment:</strong> If discontinued for certain period (e.g., 6 months), loses non-conforming status</li>
            </ul>
          </div>

          <div className="bg-green-900/20 border border-green-700/50 p-4 rounded-lg">
            <h5 className="font-bold text-green-400 mb-2">Example:</h5>
            <p className="text-slate-300 text-sm">
              Gas station built in 1970 in area that was commercial. Area rezoned residential in 2000. 
              Gas station can continue operating (non-conforming), but if owner stops operation for more than 6 months, 
              cannot reopen as gas station.
            </p>
          </div>

          <div className="bg-yellow-900/20 border border-yellow-700/50 p-4 rounded-lg text-yellow-200 text-sm">
            <strong>Exam Tip:</strong> Non-conforming use "runs with the land" - transfers to new owner. But still subject to restrictions on expansion/abandonment.
          </div>
        </div>
      )
    },
    {
      id: 'other-controls',
      title: '9.6 Other Land Use Controls',
      content: (
        <div className="space-y-4">
          <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-blue-500">
            <h5 className="font-bold text-blue-400 mb-2">Building Codes</h5>
            <p className="text-sm text-slate-300 mb-2">Minimum construction standards for safety</p>
            <ul className="space-y-1 text-sm text-slate-400 list-disc list-inside ml-2">
              <li>Electrical, plumbing, structural requirements</li>
              <li>Fire codes</li>
              <li>Must get building permit before construction</li>
              <li>Certificate of Occupancy (CO) issued when complete</li>
            </ul>
          </div>

          <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-green-500">
            <h5 className="font-bold text-green-400 mb-2">Subdivision Regulations</h5>
            <p className="text-sm text-slate-300 mb-2">Rules for dividing large parcels into smaller lots</p>
            <ul className="space-y-1 text-sm text-slate-400 list-disc list-inside ml-2">
              <li>Must submit subdivision plan to planning board</li>
              <li>Requirements for roads, utilities, drainage</li>
              <li>Minimum lot sizes</li>
              <li>May require dedication of land for parks/roads</li>
            </ul>
          </div>

          <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-purple-500">
            <h5 className="font-bold text-purple-400 mb-2">Environmental Regulations</h5>
            <p className="text-sm text-slate-300 mb-2">Protect natural resources</p>
            <ul className="space-y-1 text-sm text-slate-400 list-disc list-inside ml-2">
              <li>Wetlands Protection Act (no building in wetlands without permit)</li>
              <li>Coastal Zone Management</li>
              <li>Endangered species habitat</li>
              <li>Flood zone restrictions</li>
            </ul>
          </div>

          <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-yellow-500">
            <h5 className="font-bold text-yellow-400 mb-2">Historic District Regulations</h5>
            <p className="text-sm text-slate-300 mb-2">Preserve historic character</p>
            <ul className="space-y-1 text-sm text-slate-400 list-disc list-inside ml-2">
              <li>Must get approval for exterior changes</li>
              <li>Cannot demolish without permission</li>
              <li>Architectural review board</li>
            </ul>
          </div>
        </div>
      )
    }
  ]
},
