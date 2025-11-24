// NEW QUIZ: Land Use & Zoning
// Add this to practice.tsx in the quizModules array

{
  id: 'zoning-quiz',
  title: 'Land Use Controls & Zoning Quiz',
  description: 'Government powers, zoning classifications, variances, and non-conforming uses.',
  icon: <MapIcon size={20} />,
  type: 'quiz',
  questions: [
    {
      id: 'z-q1',
      question: 'Which government power allows regulation of land use for health, safety, and general welfare WITHOUT compensation to the owner?',
      options: [
        'Eminent Domain',
        'Police Power',
        'Taxation',
        'Escheat'
      ],
      correctAnswer: 1,
      explanation: 'POLICE POWER allows government to regulate land use through zoning, building codes, and environmental regulations WITHOUT paying compensation. Remember PETE: Police power, Eminent domain, Taxation, Escheat.'
    },
    {
      id: 'z-q2',
      question: 'Government takes private property for a new highway and must pay the owner fair market value. This is an example of:',
      options: [
        'Police Power',
        'Escheat',
        'Eminent Domain',
        'Taxation'
      ],
      correctAnswer: 2,
      explanation: 'EMINENT DOMAIN is the power to take private property for public use, but JUST COMPENSATION must be paid. This differs from police power which requires no compensation.'
    },
    {
      id: 'z-q3',
      question: 'A property owner dies without a will and with no heirs. The property reverts to the state. This is called:',
      options: [
        'Foreclosure',
        'Eminent Domain',
        'Escheat',
        'Adverse Possession'
      ],
      correctAnswer: 2,
      explanation: 'ESCHEAT occurs when someone dies intestate (without a will) and has no heirs. The property reverts to the state. This is rare but tested on the exam.'
    },
    {
      id: 'z-q4',
      question: 'Which zoning classification is MOST restrictive for residential use?',
      options: [
        'R-3 (Multi-family)',
        'R-2 (Two-family)',
        'R-1 (Single-family)',
        'Commercial'
      ],
      correctAnswer: 2,
      explanation: 'R-1 (Single-family) is the MOST RESTRICTIVE residential zone, allowing only single-family homes. R-2 allows duplexes, R-3 allows apartments/condos.'
    },
    {
      id: 'z-q5',
      question: 'What is a "setback" in zoning regulations?',
      options: [
        'The maximum height of a building',
        'The minimum distance from property line to building',
        'The percentage of lot that can be covered by buildings',
        'The number of units allowed per acre'
      ],
      correctAnswer: 1,
      explanation: 'A SETBACK is the minimum distance required between the property line and the building. Common setbacks include front, back, and side yard setbacks.'
    },
    {
      id: 'z-q6',
      question: 'A homeowner\'s lot has an unusual shape that makes it impossible to meet the minimum setback requirement. What should they request?',
      options: [
        'Special Exception',
        'Variance',
        'Conditional Use Permit',
        'Rezoning'
      ],
      correctAnswer: 1,
      explanation: 'A VARIANCE is permission to deviate from zoning requirements due to UNNECESSARY HARDSHIP. The hardship must be unique to the property (like unusual shape) and not self-created.'
    },
    {
      id: 'z-q7',
      question: 'A church wants to build in a residential zone. The zoning code lists churches as an allowed use IF certain conditions are met. What should they apply for?',
      options: [
        'Variance',
        'Rezoning',
        'Special Exception (Conditional Use)',
        'Building permit only'
      ],
      correctAnswer: 2,
      explanation: 'A SPECIAL EXCEPTION (or Conditional Use) is a use ALREADY LISTED in the zoning code that requires approval of specific conditions. Unlike a variance, it\'s not based on hardship.'
    },
    {
      id: 'z-q8',
      question: 'What is the KEY difference between a variance and a special exception?',
      options: [
        'Variances cost more money',
        'Variance = exception to rules (hardship); Special Exception = already in code (conditions)',
        'Special exceptions are permanent; variances are temporary',
        'Variances are easier to obtain'
      ],
      correctAnswer: 1,
      explanation: 'CRITICAL DISTINCTION: VARIANCE = exception to the rules based on hardship. SPECIAL EXCEPTION = use already allowed in zoning code if conditions are met. This is heavily tested!'
    },
    {
      id: 'z-q9',
      question: 'Who typically grants variances?',
      options: [
        'Planning Board',
        'City Council',
        'Zoning Board of Appeals (ZBA)',
        'Building Inspector'
      ],
      correctAnswer: 2,
      explanation: 'Variances are granted by the ZONING BOARD OF APPEALS (ZBA). Special exceptions may be granted by the ZBA or Planning Board depending on local rules.'
    },
    {
      id: 'z-q10',
      question: 'A gas station was legally built in 1980 when the area was commercial. In 2010, the area was rezoned residential. The gas station can:',
      options: [
        'Continue operating but cannot expand',
        'Must close immediately',
        'Must close within 6 months',
        'Can expand without restrictions'
      ],
      correctAnswer: 0,
      explanation: 'This is a NON-CONFORMING USE (grandfathered). It can CONTINUE but generally CANNOT EXPAND. If abandoned for a specified period (e.g., 6 months), it loses non-conforming status.'
    },
    {
      id: 'z-q11',
      question: 'A non-conforming building is destroyed by fire (75% damage). What typically happens?',
      options: [
        'Can rebuild exactly as before',
        'Can rebuild with improvements',
        'May lose right to rebuild (must comply with current zoning)',
        'Receives compensation from the city'
      ],
      correctAnswer: 2,
      explanation: 'If a non-conforming building is substantially destroyed (often 50%+ damage), the owner may LOSE THE RIGHT TO REBUILD as non-conforming. Must comply with current zoning.'
    },
    {
      id: 'z-q12',
      question: 'If a non-conforming use is discontinued for the period specified in the ordinance (e.g., 6 months), what happens?',
      options: [
        'Nothing - can resume anytime',
        'Loses non-conforming status (abandonment)',
        'Must pay a fine to continue',
        'Automatically becomes conforming'
      ],
      correctAnswer: 1,
      explanation: 'ABANDONMENT occurs if the non-conforming use is discontinued for the specified period (commonly 6 months to 1 year). Once abandoned, the use must comply with current zoning.'
    },
    {
      id: 'z-q13',
      question: 'What document must be obtained BEFORE starting construction?',
      options: [
        'Certificate of Occupancy',
        'Building Permit',
        'Variance',
        'Title Insurance'
      ],
      correctAnswer: 1,
      explanation: 'A BUILDING PERMIT must be obtained BEFORE construction begins. A Certificate of Occupancy (CO) is issued AFTER construction when the building meets code requirements.'
    },
    {
      id: 'z-q14',
      question: 'What is issued when construction is complete and the building meets all code requirements?',
      options: [
        'Building Permit',
        'Certificate of Occupancy (CO)',
        'Deed',
        'Variance'
      ],
      correctAnswer: 1,
      explanation: 'A CERTIFICATE OF OCCUPANCY (CO) is issued AFTER construction is complete and inspections confirm the building meets all building codes and zoning requirements.'
    },
    {
      id: 'z-q15',
      question: 'In cumulative zoning, which is generally TRUE?',
      options: [
        'Each zone allows only the specified use',
        'Higher intensity zones allow lower intensity uses (e.g., house in commercial zone)',
        'Lower intensity zones allow higher intensity uses (e.g., factory in residential zone)',
        'All uses are allowed in all zones'
      ],
      correctAnswer: 1,
      explanation: 'CUMULATIVE ZONING allows less intensive uses in more intensive zones. For example, you can build a single-family home in an R-3 zone, but you cannot build apartments in an R-1 zone.'
    },
    {
      id: 'z-q16',
      question: 'Wetlands Protection Act restrictions on building near wetlands is an example of:',
      options: [
        'Eminent Domain',
        'Police Power',
        'Escheat',
        'Adverse Possession'
      ],
      correctAnswer: 1,
      explanation: 'Environmental regulations like the Wetlands Protection Act are exercises of POLICE POWER - government\'s right to regulate for public health, safety, and welfare without compensation.'
    },
    {
      id: 'z-q17',
      question: 'A property has a 25-foot front setback, 10-foot side setbacks, and 20-foot rear setback on a lot that is 100 feet deep by 80 feet wide. What is the "building envelope"?',
      options: [
        'The area outside the setbacks where building is NOT allowed',
        'The area inside the setbacks where building IS allowed',
        'The maximum height of the building',
        'The lot coverage percentage'
      ],
      correctAnswer: 1,
      explanation: 'The BUILDING ENVELOPE is the area WITHIN the setback lines where construction is allowed. In this case: 50 feet wide (80 - 10 - 10) by 55 feet deep (100 - 25 - 20) = 2,750 sq ft envelope.'
    },
    {
      id: 'z-q18',
      question: 'A Historic District Commission prevents a homeowner from demolishing an old building. This is an example of:',
      options: [
        'Eminent Domain (must pay compensation)',
        'Police Power (no compensation required)',
        'Inverse Condemnation',
        'Illegal taking'
      ],
      correctAnswer: 1,
      explanation: 'Historic preservation regulations are exercises of POLICE POWER. The government can restrict use without compensation as long as there is still reasonable economic use of the property.'
    }
  ]
},
