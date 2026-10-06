/**
 * Malaysian statutory rates in one place. Review every year (and after each Budget) and bump `checked`.
 * Sources to verify against: LHDN (tax, stamp duty), KWSP/EPF, PERKESO (SOCSO, EIS), state zakat authorities.
 */
export const RATES = {
  checked: 'October 2026',
  taxYear: 2025,
  tax: {
    // upTo is the top of each band of chargeable income (resident individuals)
    bands: [
      { upTo: 5000, rate: 0 }, { upTo: 20000, rate: 1 }, { upTo: 35000, rate: 3 }, { upTo: 50000, rate: 6 },
      { upTo: 70000, rate: 11 }, { upTo: 100000, rate: 19 }, { upTo: 400000, rate: 25 }, { upTo: 600000, rate: 26 },
      { upTo: 2000000, rate: 28 }, { upTo: Infinity, rate: 30 }
    ],
    individualRelief: 9000,
    rebate: 400, // when chargeable income is at or below rebateLimit
    rebateLimit: 35000,
    epfReliefCap: 4000
  },
  stampDuty: {
    transfer: [
      { upTo: 100000, rate: 1 }, { upTo: 500000, rate: 2 }, { upTo: 1000000, rate: 3 }, { upTo: Infinity, rate: 4 }
    ],
    loanRate: 0.5,
    firstHomeLimit: 500000,
    firstHomeUntil: '31 December 2027'
  },
  payroll: {
    epfEmployee: [11, 9] as const, // % (9 is the reduced option)
    epfEmployerLow: 13, // % when monthly wages are RM5,000 or less
    epfEmployerHigh: 12, // % above RM5,000
    epfEmployerThreshold: 5000,
    socsoEmployee: 0.5, // % (approximation of the contribution table)
    eisEmployee: 0.2, // %
    wageCeiling: 6000 // SOCSO and EIS
  },
  zakat: { rate: 2.5, nisabGoldGrams: 85 }
}
