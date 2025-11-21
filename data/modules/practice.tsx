
import React from 'react';
import { QuizModule, FlashcardModule } from '../../types';
import { BrainIcon, CalculatorIcon, LayersIcon, CalendarIcon, ClipboardIcon } from '../../components/Icons';

export const quizModules: QuizModule[] = [
  {
    id: 'practice-quiz',
    title: 'General Practice Quiz',
    description: 'Test your knowledge with questions on MA License Law and Contracts.',
    icon: <BrainIcon size={20} />,
    type: 'quiz',
    questions: [
      {
        id: 'q1',
        question: "Which of the following is TRUE regarding a Massachusetts real estate broker's surety bond?",
        options: [
          "It is insurance for the broker against lawsuits.",
          "It is $10,000 for salespersons and $5,000 for brokers.",
          "It is $5,000 and benefits the state/public if the broker mishandles escrow funds.",
          "It must be renewed every 5 years."
        ],
        correctIndex: 2,
        explanation: "The $5,000 surety bond is not insurance for the broker; it is for the benefit of the public in case the broker embezzles funds. It is renewed with the license every 2 years."
      },
      {
        id: 'q2',
        question: "In Massachusetts, when must the Mandatory Home Inspection Disclosure be provided to a buyer?",
        options: [
          "At the closing.",
          "When signing the Purchase & Sale Agreement.",
          "Before the buyer submits their first written offer.",
          "During the home inspection."
        ],
        correctIndex: 2,
        explanation: "State law requires the brochure be given to the buyer before they sign the Offer to Purchase (OTP)."
      },
      {
        id: 'q3',
        question: "A salesperson receives a deposit check from a buyer. What should they do?",
        options: [
          "Deposit it into their personal checking account immediately.",
          "Hold it until the offer is accepted.",
          "Turn it over to their Broker immediately.",
          "Cash it and put the money in a safe."
        ],
        correctIndex: 2,
        explanation: "Salespersons cannot handle client funds directly. They must turn all checks over to their employing Broker, who deposits them into an Escrow Account."
      },
      {
        id: 'q4',
        question: "Under MGL c. 151B (MA Fair Housing), which is NOT a protected class?",
        options: [
          "Sexual Orientation",
          "Age",
          "Smokers",
          "Veterans"
        ],
        correctIndex: 2,
        explanation: "Smokers are not a protected class. Landlords can refuse to rent to smokers."
      },
      {
        id: 'q5',
        question: "Joint Tenancy requires which four unities?",
        options: [
          "Possession, Interest, Time, Title (PITT)",
          "Price, Interest, Terms, Time",
          "Possession, Inheritance, Taxes, Title",
          "Partnership, Interest, Time, Tenancy"
        ],
        correctIndex: 0,
        explanation: "PITT: Possession (equal right to use), Interest (equal % share), Time (acquired at same time), Title (acquired on same deed)."
      },
      {
        id: 'q6',
        question: "To record a deed for a condominium unit in Massachusetts, which document is required to prove unpaid fees are settled?",
        options: [
          "Title V Certificate",
          "6D Certificate",
          "Certificate of Occupancy",
          "Municipal Lien Certificate"
        ],
        correctIndex: 1,
        explanation: "A 6D Certificate from the condo association confirms all common charges are paid. Without it, the Registry will not record the deed."
      },
      {
        id: 'q7',
        question: "When must a Massachusetts real estate agent present the 'Mandatory Agency Disclosure' form to a consumer?",
        options: [
          "At the first Open House they visit.",
          "At the first personal meeting to discuss a specific property.",
          "When the Offer to Purchase is signed.",
          "At the closing."
        ],
        correctIndex: 1,
        explanation: "The law requires disclosure at the 'First Personal Meeting' for the purpose of discussing a specific property."
      },
      {
        id: 'q8',
        question: "A buyer asks if a previous owner committed suicide in the house. Under MA Stigmatized Property Law, the agent:",
        options: [
          "Must disclose it immediately.",
          "Can lie to protect the seller's interest.",
          "Is not required to disclose it, but must answer truthfully if asked directly.",
          "Must invoke the 5th Amendment."
        ],
        correctIndex: 2,
        explanation: "Agents are not liable for failing to disclose a suicide, but they cannot misrepresent facts. If asked, they should answer truthfully or decline to answer. They cannot lie."
      },
      {
        id: 'q9',
        question: "Property A has a driveway easement across Property B to get to the road. Property A is the:",
        options: [
          "Servient Tenement",
          "Dominant Tenement",
          "Licensed Tenement",
          "Encroached Party"
        ],
        correctIndex: 1,
        explanation: "Property A benefits from the easement, so it is Dominant. Property B is burdened, so it is Servient."
      },
      {
        id: 'q10',
        question: "A homeowner sells their primary residence and makes a $200,000 profit. They have owned and lived in it for 3 years. How much Capital Gains Tax do they owe?",
        options: [
           "$0",
           "$30,000 (15%)",
           "$40,000 (20%)",
           "It depends on their income bracket."
        ],
        correctIndex: 0,
        explanation: "Under the Taxpayer Relief Act of 1997, single filers can exclude up to $250k (married $500k) if they lived in the home for 2 of the last 5 years. $200k is fully tax-free."
      },
      {
        id: 'q11',
        question: "A buyer purchases a home for $400,000 with a 10% down payment. They buy 2 discount points. How much do the points cost?",
        options: [
           "$8,000",
           "$7,200",
           "$800",
           "$4,000"
        ],
        correctIndex: 1,
        explanation: "Points are based on the LOAN amount. Loan = $400k - 10% ($40k) = $360,000. 2 Points = 2% of $360k = $7,200."
      },
      {
        id: 'q12',
        question: "A listing agreement is signed between Seller Sam and Broker Bob. Broker Bob dies of a heart attack the next day. What happens to the listing?",
        options: [
           "It transfers to Bob's business partner.",
           "It remains valid and is handled by Bob's estate.",
           "It is Void.",
           "It transfers to the salesperson who took the listing."
        ],
        correctIndex: 2,
        explanation: "A listing is a personal service contract between the Seller and the Broker (Principal). If the Broker dies, the contract is terminated (Void) by operation of law."
      }
    ]
  },
  {
    id: 'ma-state-quiz',
    title: 'MA State Exam Prep',
    description: 'Focuses exclusively on the Massachusetts portion (Laws, Fines, Board Rules).',
    icon: <ClipboardIcon size={20} />,
    type: 'quiz',
    questions: [
      {
        id: 'mq1',
        question: "The Massachusetts Board of Registration consists of how many members?",
        options: [
          "3 Members (All Brokers)",
          "5 Members (3 Brokers, 2 Public)",
          "7 Members (5 Brokers, 2 Public)",
          "5 Members (All appointed by the Mayor)"
        ],
        correctIndex: 1,
        explanation: "The Board has 5 members appointed by the Governor: 3 Brokers (with 7+ years experience) and 2 Public Representatives."
      },
      {
        id: 'mq2',
        question: "A landlord in MA is holding a security deposit. They must pay the tenant interest:",
        options: [
          "Only if the tenant stays for 5 years.",
          "5% or the actual bank rate, payable annually.",
          "There is no requirement to pay interest.",
          "10% annually."
        ],
        correctIndex: 1,
        explanation: "Landlords must pay 5% interest OR the actual interest earned by the bank account, payable to the tenant annually."
      },
      {
        id: 'mq3',
        question: "Under Title V, how long is a septic inspection certificate valid for if the owner pumps the system annually?",
        options: [
          "2 Years",
          "3 Years",
          "6 Months",
          "Forever"
        ],
        correctIndex: 1,
        explanation: "A Title V inspection is generally valid for 2 years. However, if the owner pumps the system annually, it extends to 3 years."
      },
      {
        id: 'mq4',
        question: "Which of the following is NOT grounds for the Board to suspend a license?",
        options: [
          "Commingling funds",
          "Acting as a Dual Agent with written consent",
          "Practicing while intoxicated",
          "Discrimination"
        ],
        correctIndex: 1,
        explanation: "Dual Agency is LEGAL in Massachusetts as long as there is written informed consent from both parties."
      },
      {
        id: 'mq5',
        question: "If a consumer wins a Chapter 93A lawsuit against a broker for willful deception, they may be awarded:",
        options: [
          "A refund of the commission only.",
          "Up to Treble Damages (3x) plus attorney fees.",
          "Punitive damages of $1 Million.",
          "The broker's license."
        ],
        correctIndex: 1,
        explanation: "Chapter 93A allows for Treble Damages (Triple) if the act was willful or knowing."
      }
    ]
  },
  {
    id: 'math-drills',
    title: 'Real Estate Math Drills',
    description: 'Pure calculation word problems. No definitions.',
    icon: <CalculatorIcon size={20} />,
    type: 'quiz',
    questions: [
      {
        id: 'md1',
        question: "A property sold for $500,000. The total commission was 5%. The listing broker kept 2.5% and paid the buyer's broker 2.5%. The buyer's agent is on a 60/40 split with their broker. How much did the buyer's agent receive?",
        options: [
          "$7,500",
          "$12,500",
          "$5,000",
          "$6,250"
        ],
        correctIndex: 0,
        explanation: "Total Commission = $500,000 x 0.05 = $25,000. Buyer's side = $12,500. Agent Split = $12,500 x 0.60 = $7,500."
      },
      {
        id: 'md2',
        question: "An investor wants a 10% return (Cap Rate). The property produces a Net Operating Income (NOI) of $40,000. What is the max price they should pay?",
        options: [
          "$4,000,000",
          "$400,000",
          "$360,000",
          "$440,000"
        ],
        correctIndex: 1,
        explanation: "Value = NOI / Cap Rate. Value = $40,000 / 0.10 = $400,000."
      },
      {
        id: 'md3',
        question: "A lot is 100 feet wide and 150 feet deep. What is the area in square feet?",
        options: [
          "15,000 sq ft",
          "1,500 sq ft",
          "250 sq ft",
          "25,000 sq ft"
        ],
        correctIndex: 0,
        explanation: "Area = Width x Depth. 100 x 150 = 15,000 sq ft."
      },
      {
        id: 'md4',
        question: "Taxes are $4,800 per year, paid quarterly. The seller has paid the first two quarters (covering July 1 - Dec 31). Closing is Jan 15. Who owes whom?",
        options: [
          "Buyer owes Seller for Jan 1-15",
          "Seller owes Buyer for Jan 1-15",
          "Buyer owes Seller for Jan 15-31",
          "Seller owes Buyer for Jan 15-31"
        ],
        correctIndex: 1,
        explanation: "Taxes are usually adjusted based on the fiscal year. Since the seller used the property Jan 1-15 but the bill for Q3 (Jan-Mar) hasn't been paid yet, the Seller owes the Buyer for those 15 days."
      },
      {
        id: 'md5',
        question: "A house sold for $645,000 in Massachusetts. Calculated the Transfer Tax (Stamps).",
        options: [
          "$2,941.20",
          "$2,939.12",
          "$2,900.00",
          "$1,470.00"
        ],
        correctIndex: 0,
        explanation: "Stamps are $4.56 per $1,000. Price: $645,000 / 1000 = 645 units. 645 * 4.56 = $2,941.20."
      },
      {
        id: 'md6',
        question: "A borrower gets a loan for $300,000 at 6% interest. What is the annual interest amount?",
        options: [
          "$18,000",
          "$1,500",
          "$15,000",
          "$5,000"
        ],
        correctIndex: 0,
        explanation: "$300,000 x 0.06 = $18,000 annual interest."
      },
      {
        id: 'md7',
        question: "A seller wants to net $100,000 after paying off a $50,000 mortgage and paying a 5% commission. What must the sale price be?",
        options: [
          "$157,895",
          "$157,500",
          "$150,000",
          "$142,500"
        ],
        correctIndex: 0,
        explanation: "Target = $150,000. If commission is 5%, the Target is 95% of the Sale Price. $150,000 / 0.95 = $157,894.73."
      },
      {
        id: 'md8',
        question: "A property bought for $200,000 appreciated by 5% each year for 2 years. What is it worth now?",
        options: [
          "$220,500",
          "$210,000",
          "$220,000",
          "$205,000"
        ],
        correctIndex: 0,
        explanation: "Year 1: $200k x 1.05 = $210,000. Year 2: $210k x 1.05 = $220,500. (Compound interest)."
      }
    ]
  }
];

export const flashcardModules: FlashcardModule[] = [
  {
    id: 'key-terms',
    title: 'Key Terms',
    description: 'Master the definitions of essential real estate terminology.',
    icon: <LayersIcon size={20} />,
    type: 'flashcards',
    cards: [
      {
        id: 'fc1',
        front: "Blockbusting",
        back: "Inducing owners to sell by claiming that members of a protected class are moving into the neighborhood (also called Panic Peddling). Illegal.",
        category: "Fair Housing"
      },
      {
        id: 'fc2',
        front: "Escheat",
        back: "The power of the state to claim property when an owner dies without a will (intestate) and with no heirs.",
        category: "Government Powers"
      },
      {
        id: 'fc3',
        front: "Fee Simple Absolute",
        back: "The highest form of real estate ownership. It is inheritable and has no time limit.",
        category: "Ownership"
      },
      {
        id: 'fc4',
        front: "Riparian Rights",
        back: "Water rights belonging to land bordering flowing water (rivers/streams).",
        category: "Water Rights"
      },
      {
        id: 'fc5',
        front: "Lis Pendens",
        back: "A recorded notice that a property is subject to a pending legal lawsuit.",
        category: "Legal"
      },
      {
        id: 'fc6',
        front: "Covenant of Quiet Enjoyment",
        back: "A promise that the tenant's possession will not be disturbed by the landlord or anyone else claiming title.",
        category: "Leasing"
      },
      {
        id: 'fc7',
        front: "Amortization",
        back: "The repayment of a loan principal over time through regular payments.",
        category: "Finance"
      },
      {
        id: 'fc8',
        front: "Encumbrance",
        back: "Any claim, lien, or burden on the title of a property (e.g., mortgage, easement) that may diminish its value.",
        category: "Title"
      },
      {
        id: 'fc9',
        front: "Master Deed",
        back: "The enabling declaration recorded at the Registry that creates a condominium development.",
        category: "Condos"
      },
      {
        id: 'fc10',
        front: "Proprietary Lease",
        back: "The lease given to a shareholder in a Cooperative (Co-op) allowing them to occupy a specific unit.",
        category: "Condos"
      },
      {
        id: 'fc11',
        front: "Municipal Lien Certificate (MLC)",
        back: "Document from the town confirming the status of taxes and assessments. Required at closing.",
        category: "Taxes"
      }
    ]
  },
  {
    id: 'math-flashcards',
    title: 'Math Formulas',
    description: 'Essential formulas for the State and National exam.',
    icon: <CalculatorIcon size={20} />,
    type: 'flashcards',
    cards: [
      {
        id: 'mf1',
        front: "Capitalization Rate (Cap Rate)",
        back: "NOI (Net Operating Income) ÷ Value",
        category: "Valuation"
      },
      {
        id: 'mf2',
        front: "Gross Rent Multiplier (GRM)",
        back: "Sales Price ÷ Monthly Gross Rent",
        category: "Valuation"
      },
      {
        id: 'mf3',
        front: "Area of a Triangle",
        back: "(Base x Height) ÷ 2",
        category: "Geometry"
      },
      {
        id: 'mf4',
        front: "Loan to Value Ratio (LTV)",
        back: "Loan Amount ÷ Value (or Price, whichever is lower)",
        category: "Finance"
      },
      {
        id: 'mf5',
        front: "MA Transfer Stamps",
        back: "Sales Price (Rounded UP to nearest $500) ÷ $500 x $2.28",
        category: "Taxes"
      },
      {
        id: 'mf6',
        front: "1 Acre",
        back: "43,560 Square Feet",
        category: "Measurements"
      }
    ]
  },
  {
    id: 'dates',
    title: 'Important Dates',
    description: 'Key deadlines and timeframes for the exam.',
    icon: <CalendarIcon size={20} />,
    type: 'flashcards',
    cards: [
      {
        id: 'd1',
        front: "License Renewal Period",
        back: "Every 2 years on your birthday.",
        category: "Licensing"
      },
      {
        id: 'd2',
        front: "Lead Paint Law (Child under 6)",
        back: "If a family with a child under 6 rents a unit with lead paint, the landlord must de-lead the unit within 90 days.",
        category: "Hazards"
      },
      {
        id: 'd3',
        front: "3 Day Right of Rescission",
        back: "Applies to refinancing a primary home (Truth in Lending Act). Does NOT apply to purchase of a first home.",
        category: "Finance"
      },
      {
        id: 'd4',
        front: "Adverse Possession in MA",
        back: "20 years of open, notorious, continuous, hostile, and exclusive use.",
        category: "Ownership"
      },
      {
        id: 'd5',
        front: "Smoke Detector Certificate",
        back: "Valid for 60 days from issuance. Required at closing.",
        category: "Closing"
      },
      {
        id: 'd6',
        front: "MA Tax Fiscal Year",
        back: "July 1 to June 30.",
        category: "Taxes"
      }
    ]
  }
];