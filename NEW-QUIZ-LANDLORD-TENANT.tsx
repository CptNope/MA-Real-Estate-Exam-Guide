// NEW QUIZ: MA Landlord-Tenant Law
// Add this to practice.tsx in the quizModules array

{
  id: 'landlord-tenant-quiz',
  title: 'MA Landlord-Tenant Law Quiz',
  description: 'Security deposits, leases, eviction procedures, and tenant rights under Massachusetts law.',
  icon: <BuildingIcon size={20} />,
  type: 'quiz',
  questions: [
    {
      id: 'lt-q1',
      question: 'What is the MAXIMUM amount a landlord can collect as a security deposit in Massachusetts?',
      options: [
        'Two months\' rent',
        'One month\'s rent',
        'One and a half months\' rent',
        'There is no limit'
      ],
      correctAnswer: 1,
      explanation: 'Massachusetts law limits security deposits to a maximum of ONE MONTH\'S RENT. This is heavily tested on the MA State exam.'
    },
    {
      id: 'lt-q2',
      question: 'Where must a landlord hold security deposits and last month\'s rent?',
      options: [
        'In any U.S. bank',
        'In a Massachusetts bank in a separate, interest-bearing account',
        'In the landlord\'s personal checking account',
        'In a safe deposit box'
      ],
      correctAnswer: 1,
      explanation: 'Security deposits and last month\'s rent must be held in a MASSACHUSETTS BANK in a SEPARATE, INTEREST-BEARING ACCOUNT. They cannot be commingled with the landlord\'s personal funds.'
    },
    {
      id: 'lt-q3',
      question: 'Within how many days must a landlord return a security deposit after the tenant moves out?',
      options: [
        '14 days',
        '21 days',
        '30 days',
        '45 days'
      ],
      correctAnswer: 2,
      explanation: 'The landlord must return the security deposit within 30 DAYS after the tenant moves out, with interest and an itemized list of any deductions.'
    },
    {
      id: 'lt-q4',
      question: 'A tenant pays $2,000/month rent. What is the MAXIMUM total amount the landlord can collect at move-in (first, last, and security)?',
      options: [
        '$4,000',
        '$5,000',
        '$6,000',
        '$8,000'
      ],
      correctAnswer: 2,
      explanation: 'First month ($2,000) + Last month ($2,000) + Security deposit ($2,000 max) = $6,000 total. Remember: security deposit is limited to one month\'s rent.'
    },
    {
      id: 'lt-q5',
      question: 'What interest rate must be paid on security deposits in Massachusetts?',
      options: [
        'No interest required',
        '5% annually or actual bank interest, whichever is LESS',
        '5% annually or actual bank interest, whichever is MORE',
        '3% annually fixed'
      ],
      correctAnswer: 1,
      explanation: 'The tenant receives 5% interest annually OR the actual bank interest rate, WHICHEVER IS LESS.'
    },
    {
      id: 'lt-q6',
      question: 'What happens if a landlord fails to properly return a security deposit or provide itemization?',
      options: [
        'Landlord must pay simple interest',
        'Landlord must return deposit immediately',
        'Tenant can sue for TREBLE DAMAGES (3x) plus attorney fees',
        'Landlord receives a warning'
      ],
      correctAnswer: 2,
      explanation: 'If the landlord violates security deposit rules, the tenant can sue for TREBLE DAMAGES (three times the amount) plus attorney fees. This is a significant penalty.'
    },
    {
      id: 'lt-q7',
      question: 'How much notice must a landlord give to terminate a month-to-month tenancy in Massachusetts?',
      options: [
        '7 days',
        '14 days',
        '30 days',
        '60 days'
      ],
      correctAnswer: 2,
      explanation: '30 DAYS notice is required to terminate a month-to-month tenancy or tenancy at will. This is a heavily tested topic.'
    },
    {
      id: 'lt-q8',
      question: 'A tenant has not paid rent. How much notice must the landlord give before starting eviction proceedings?',
      options: [
        '7 days',
        '14 days',
        '21 days',
        '30 days'
      ],
      correctAnswer: 1,
      explanation: 'For NON-PAYMENT OF RENT, the landlord must give 14 DAYS notice (Notice to Quit for Non-Payment). This is different from the 30-day notice for other terminations.'
    },
    {
      id: 'lt-q9',
      question: 'Which of the following is a legal "self-help" eviction method in Massachusetts?',
      options: [
        'Changing the locks',
        'Shutting off utilities',
        'Removing tenant\'s belongings',
        'None of these - must go through court'
      ],
      correctAnswer: 3,
      explanation: 'Self-help eviction is ILLEGAL in Massachusetts. Landlords must use the court Summary Process. Self-help tactics result in serious penalties including damages and attorney fees.'
    },
    {
      id: 'lt-q10',
      question: 'What is the court process for evicting a tenant in Massachusetts called?',
      options: [
        'Ejectment Action',
        'Summary Process',
        'Unlawful Detainer',
        'Forcible Entry'
      ],
      correctAnswer: 1,
      explanation: 'The eviction process in Massachusetts is called SUMMARY PROCESS. It involves filing in Housing Court or District Court and following specific legal procedures.'
    },
    {
      id: 'lt-q11',
      question: 'Which type of lease AUTOMATICALLY renews each period unless proper notice is given?',
      options: [
        'Fixed-term lease (Estate for Years)',
        'Periodic tenancy (Month-to-Month)',
        'Tenancy at Sufferance',
        'Life Estate'
      ],
      correctAnswer: 1,
      explanation: 'A PERIODIC TENANCY (month-to-month) automatically renews each month unless either party gives proper notice (usually 30 days). Fixed-term leases end on their specified date without notice.'
    },
    {
      id: 'lt-q12',
      question: 'A tenant stays in the property after their lease expires without permission. This is called:',
      options: [
        'Periodic Tenancy',
        'Tenancy at Will',
        'Tenancy at Sufferance (Holdover)',
        'Estate for Years'
      ],
      correctAnswer: 2,
      explanation: 'TENANCY AT SUFFERANCE (holdover tenancy) occurs when a tenant stays after the lease expires without the landlord\'s permission. The landlord can treat them as a trespasser or accept rent to create a new tenancy.'
    },
    {
      id: 'lt-q13',
      question: 'The "Warranty of Habitability" in Massachusetts requires landlords to provide all of the following EXCEPT:',
      options: [
        'Working heat (68°F day, 64°F night from Sept 16-June 14)',
        'Hot water (120°F minimum)',
        'Central air conditioning',
        'Working smoke and carbon monoxide detectors'
      ],
      correctAnswer: 2,
      explanation: 'The implied WARRANTY OF HABITABILITY requires heat, hot water, working locks, pest-free conditions, and smoke/CO detectors. CENTRAL AIR CONDITIONING is NOT required.'
    },
    {
      id: 'lt-q14',
      question: 'Lead paint disclosure is required for properties built before:',
      options: [
        '1960',
        '1970',
        '1978',
        '1985'
      ],
      correctAnswer: 2,
      explanation: 'Lead paint disclosure is required for properties built BEFORE 1978. If a child under 6 will live there, the landlord must delead or obtain a letter of interim control.'
    },
    {
      id: 'lt-q15',
      question: 'Which of the following lease provisions is VOID and unenforceable in Massachusetts?',
      options: [
        'Prohibition on pets',
        'Waiver of warranty of habitability',
        'Security deposit requirement',
        'Late fee for overdue rent'
      ],
      correctAnswer: 1,
      explanation: 'Tenants CANNOT waive their right to habitable premises. This provision is VOID even if included in the lease. Other void provisions include confession of judgment and waiver of jury trial.'
    }
  ]
},
