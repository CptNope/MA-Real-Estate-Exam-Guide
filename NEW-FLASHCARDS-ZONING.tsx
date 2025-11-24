// NEW FLASHCARDS: Land Use & Zoning
// Add this to practice.tsx in the flashcardModules array

{
  id: 'zoning-flashcards',
  title: 'Zoning & Land Use Terms',
  description: 'Government powers, zoning classifications, variances, and non-conforming uses.',
  icon: <MapIcon size={20} />,
  type: 'flashcards',
  cards: [
    {
      id: 'z-fc-1',
      front: 'PETE (Mnemonic)',
      back: 'Four government powers: Police Power, Eminent Domain, Taxation, Escheat.',
      category: 'Government Powers'
    },
    {
      id: 'z-fc-2',
      front: 'Police Power',
      back: 'Government\'s right to regulate land use for health, safety, and welfare. Includes zoning, building codes, environmental regulations. NO COMPENSATION required.',
      category: 'Government Powers'
    },
    {
      id: 'z-fc-3',
      front: 'Eminent Domain',
      back: 'Government\'s power to TAKE private property for PUBLIC USE. JUST COMPENSATION required (fair market value).',
      category: 'Government Powers'
    },
    {
      id: 'z-fc-4',
      front: 'Taxation (Property)',
      back: 'Government\'s power to levy property taxes. Creates a PRIORITY LIEN (comes before mortgages). Can foreclose for non-payment.',
      category: 'Government Powers'
    },
    {
      id: 'z-fc-5',
      front: 'Escheat',
      back: 'Property reverts to STATE if owner dies INTESTATE (no will) with NO HEIRS. Rare but tested.',
      category: 'Government Powers'
    },
    {
      id: 'z-fc-6',
      front: 'Zoning',
      back: 'Division of municipality into districts with specific ALLOWED USES. Enforced through police power.',
      category: 'Zoning Basics'
    },
    {
      id: 'z-fc-7',
      front: 'R-1 Zoning',
      back: 'SINGLE-FAMILY residential only. MOST RESTRICTIVE residential zone.',
      category: 'Zoning Classifications'
    },
    {
      id: 'z-fc-8',
      front: 'R-2 Zoning',
      back: 'TWO-FAMILY (duplex) residential.',
      category: 'Zoning Classifications'
    },
    {
      id: 'z-fc-9',
      front: 'R-3 Zoning',
      back: 'MULTI-FAMILY residential (apartments, condos). Least restrictive residential.',
      category: 'Zoning Classifications'
    },
    {
      id: 'z-fc-10',
      front: 'Commercial (C) Zoning',
      back: 'Retail stores, offices, restaurants. Usually along main roads. May allow mixed-use.',
      category: 'Zoning Classifications'
    },
    {
      id: 'z-fc-11',
      front: 'Industrial (I) Zoning',
      back: 'Manufacturing, warehouses, heavy equipment. Often near highways/rail. Light vs. heavy industrial.',
      category: 'Zoning Classifications'
    },
    {
      id: 'z-fc-12',
      front: 'Setback',
      back: 'MINIMUM DISTANCE from property line to building. Creates "building envelope" where construction allowed.',
      category: 'Zoning Regulations'
    },
    {
      id: 'z-fc-13',
      front: 'Building Envelope',
      back: 'Area INSIDE the setback lines where building is ALLOWED. Calculated after subtracting all setbacks.',
      category: 'Zoning Regulations'
    },
    {
      id: 'z-fc-14',
      front: 'Lot Coverage',
      back: 'MAXIMUM PERCENTAGE of lot that can be covered by buildings (e.g., 40% max).',
      category: 'Zoning Regulations'
    },
    {
      id: 'z-fc-15',
      front: 'Variance',
      back: 'Permission to DEVIATE from zoning requirements due to UNNECESSARY HARDSHIP. Hardship must be unique to property and NOT self-created. Granted by Zoning Board of Appeals (ZBA).',
      category: 'Variances & Exceptions'
    },
    {
      id: 'z-fc-16',
      front: 'Special Exception (Conditional Use)',
      back: 'Use ALREADY LISTED in zoning code that requires approval of specific CONDITIONS. NOT based on hardship. Example: church in residential zone IF conditions met.',
      category: 'Variances & Exceptions'
    },
    {
      id: 'z-fc-17',
      front: 'Variance vs. Special Exception',
      back: 'VARIANCE = exception to rules (hardship-based, not in code). SPECIAL EXCEPTION = already allowed in code (condition-based). CRITICAL DISTINCTION!',
      category: 'Variances & Exceptions'
    },
    {
      id: 'z-fc-18',
      front: 'Who grants Variances?',
      back: 'ZONING BOARD OF APPEALS (ZBA).',
      category: 'Variances & Exceptions'
    },
    {
      id: 'z-fc-19',
      front: 'Non-Conforming Use',
      back: 'Use that was LEGAL when established but doesn\'t comply with CURRENT zoning. Also called "grandfathered use." Can CONTINUE but generally CANNOT EXPAND.',
      category: 'Non-Conforming Uses'
    },
    {
      id: 'z-fc-20',
      front: 'Non-Conforming Use Rules',
      back: 'Can continue indefinitely, but: (1) Cannot expand, (2) If destroyed (50%+), may lose rebuild rights, (3) If abandoned (e.g., 6 months), loses status.',
      category: 'Non-Conforming Uses'
    },
    {
      id: 'z-fc-21',
      front: 'Abandonment (Non-Conforming)',
      back: 'If non-conforming use is DISCONTINUED for specified period (often 6 months to 1 year), it LOSES non-conforming status.',
      category: 'Non-Conforming Uses'
    },
    {
      id: 'z-fc-22',
      front: 'Building Permit',
      back: 'Required BEFORE construction begins. Shows plans comply with building codes and zoning.',
      category: 'Building Codes'
    },
    {
      id: 'z-fc-23',
      front: 'Certificate of Occupancy (CO)',
      back: 'Issued AFTER construction is complete and inspections confirm building meets all codes. Required before occupancy.',
      category: 'Building Codes'
    },
    {
      id: 'z-fc-24',
      front: 'Cumulative Zoning',
      back: 'LESS INTENSIVE uses allowed in MORE INTENSIVE zones. Example: Can build single-family home in R-3 zone, but NOT apartment in R-1 zone.',
      category: 'Zoning Concepts'
    },
    {
      id: 'z-fc-25',
      front: 'Wetlands Protection Act',
      back: 'Restricts building near wetlands. Example of POLICE POWER - environmental regulation for public welfare.',
      category: 'Environmental Regulations'
    },
    {
      id: 'z-fc-26',
      front: 'Historic District Regulations',
      back: 'Restrict exterior changes and demolition to preserve historic character. Requires approval from Historical Commission. Exercise of POLICE POWER.',
      category: 'Other Controls'
    },
    {
      id: 'z-fc-27',
      front: 'Subdivision Regulations',
      back: 'Rules for dividing large parcels into smaller lots. Requires planning board approval. May mandate roads, utilities, and park dedication.',
      category: 'Other Controls'
    },
    {
      id: 'z-fc-28',
      front: 'Density Requirement',
      back: 'Maximum number of UNITS allowed per acre (e.g., 6 units/acre max).',
      category: 'Zoning Regulations'
    },
    {
      id: 'z-fc-29',
      front: 'Height Restriction',
      back: 'Maximum building HEIGHT allowed in zone (e.g., 35 feet max for residential).',
      category: 'Zoning Regulations'
    },
    {
      id: 'z-fc-30',
      front: 'Minimum Lot Size',
      back: 'Smallest PARCEL size allowed for building (e.g., 1 acre minimum in rural zones).',
      category: 'Zoning Regulations'
    }
  ]
},
