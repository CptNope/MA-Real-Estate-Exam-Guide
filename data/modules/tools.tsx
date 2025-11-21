import React from 'react';
import { CalculatorModule, MarketModule, CramSheetModule } from '../../types';
import { CalculatorIcon, BanknoteIcon, PercentIcon, TrendingUpIcon, DivideIcon, LightningIcon } from '../../components/Icons';

export const toolModules: (CalculatorModule | MarketModule | CramSheetModule)[] = [
  {
    id: 'cram-sheet',
    title: 'Exam Cram Sheet',
    description: 'The essential numbers, dates, and fines you must memorize for the test.',
    icon: <LightningIcon size={20} />,
    type: 'cram-sheet',
    sections: [
      {
        title: 'Timelines & Deadlines',
        items: [
          { label: 'License Renewal', value: '2 Years', context: 'On your birthday' },
          { label: 'Record Keeping', value: '3 Years', context: 'Brokers must keep docs' },
          { label: 'Lead Paint Inspection', value: '10 Days', context: 'Buyer right to inspect' },
          { label: 'Lead Paint Compliance', value: '90 Days', context: 'New owner to de-lead' },
          { label: 'Security Deposit Receipt', value: '30 Days', context: 'Must give to tenant' },
          { label: 'Adverse Possession', value: '20 Years', context: 'Open, Notorious use' },
          { label: '1031 Exchange ID', value: '45 Days', context: 'Identify new property' },
          { label: '1031 Exchange Close', value: '180 Days', context: 'Close on new property' },
          { label: 'Smoke Cert Validity', value: '60 Days', context: 'From issuance' }
        ]
      },
      {
        title: 'Money & Fines',
        items: [
          { label: 'Surety Bond', value: '$5,000', context: 'Broker requirement' },
          { label: 'Fair Housing (1st)', value: '$16,000', context: 'Max Federal Fine (approx)' },
          { label: 'Homestead (Auto)', value: '$125,000', context: 'Automatic protection' },
          { label: 'Homestead (Declared)', value: '$500,000', context: 'Declared protection' },
          { label: 'Transfer Tax Rate', value: '$4.56', context: 'Per $1,000 in MA' },
          { label: 'Security Deposit', value: '1 Month', context: 'Max legal amount' },
          { label: 'Consumer Protection', value: '3x', context: 'Treble Damages (93A)' }
        ]
      },
      {
        title: 'Measurements',
        items: [
          { label: 'Acre', value: '43,560', context: 'Square Feet' },
          { label: 'Mile', value: '5,280', context: 'Feet' },
          { label: 'Section', value: '640', context: 'Acres' },
          { label: 'Township', value: '36', context: 'Sections' }
        ]
      }
    ]
  },
  {
    id: 'market-trends',
    title: 'Market History',
    description: 'Interactive charts showing mortgage rates and MA home prices over time.',
    icon: <TrendingUpIcon size={20} />,
    type: 'market',
    datasets: [
      {
        id: 'mortgage-rates',
        name: '30-Year Fixed Mortgage Rate',
        color: '#3b82f6', // Blue
        unit: '%',
        data: [
          { label: '2010', value: 4.69 },
          { label: '2011', value: 4.45 },
          { label: '2012', value: 3.66 },
          { label: '2013', value: 3.98 },
          { label: '2014', value: 4.17 },
          { label: '2015', value: 3.85 },
          { label: '2016', value: 3.65 },
          { label: '2017', value: 3.99 },
          { label: '2018', value: 4.54 },
          { label: '2019', value: 3.94 },
          { label: '2020', value: 3.11 },
          { label: '2021', value: 2.96, detail: 'Historic Low' },
          { label: '2022', value: 5.34 },
          { label: '2023', value: 6.81 },
          { label: '2024', value: 6.92, detail: 'Recent Peak' },
        ]
      },
      {
        id: 'ma-prices',
        name: 'MA Median Home Price',
        color: '#10b981', // Emerald
        unit: '$',
        data: [
          { label: '2010', value: 295000, formattedValue: '295k' },
          { label: '2011', value: 289000, formattedValue: '289k' },
          { label: '2012', value: 290000, formattedValue: '290k' },
          { label: '2013', value: 320000, formattedValue: '320k' },
          { label: '2014', value: 330000, formattedValue: '330k' },
          { label: '2015', value: 345000, formattedValue: '345k' },
          { label: '2016', value: 360000, formattedValue: '360k' },
          { label: '2017', value: 380000, formattedValue: '380k' },
          { label: '2018', value: 399000, formattedValue: '399k' },
          { label: '2019', value: 415000, formattedValue: '415k' },
          { label: '2020', value: 460000, formattedValue: '460k' },
          { label: '2021', value: 510000, formattedValue: '510k' },
          { label: '2022', value: 550000, formattedValue: '550k' },
          { label: '2023', value: 570000, formattedValue: '570k' },
          { label: '2024', value: 610000, formattedValue: '610k', detail: 'New Record' },
        ]
      }
    ]
  },
  {
    id: 'proration-calc',
    title: 'Proration Wizard',
    description: 'Calculate closing credits using the 360-day Banker\'s Year.',
    icon: <DivideIcon size={20} />,
    type: 'calculator',
    toolType: 'proration'
  },
  {
    id: 'cma-worksheet',
    title: 'CMA Worksheet',
    description: 'Comparative Market Analysis tool with customizable adjustments.',
    icon: <CalculatorIcon size={20} />,
    type: 'calculator',
    toolType: 'cma'
  },
  {
    id: 'transfer-tax',
    title: 'MA Transfer Stamps',
    description: 'Calculate Deeds Excise Tax using the $2.28/$500 rounding rule.',
    icon: <BanknoteIcon size={20} />,
    type: 'calculator',
    toolType: 'transfer-tax'
  },
  {
    id: 'amortization',
    title: 'Mortgage Calculator',
    description: 'Break down monthly PI and interest vs. principal portions.',
    icon: <PercentIcon size={20} />,
    type: 'calculator',
    toolType: 'amortization'
  }
];