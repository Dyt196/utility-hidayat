import { RATES } from '../utils/my-rates'

const en = {
  lang: 'en',
  locale: 'en-MY',
  site: {
    name: 'Hidayat Utility',
    tagline: 'Free online calculators, converters & tools',
    description: 'Free, fast online calculators and converters: age, percentage, unit conversion, BMI and date calculations. No sign-up, and your numbers never leave your device.'
  },
  nav: {
    skip: 'Skip to main content',
    main: 'Main',
    home: 'Hidayat Utility home',
    tools: 'Tools',
    about: 'About',
    theme: 'Toggle dark mode',
    language: 'Language',
    breadcrumb: 'Breadcrumb',
    homeCrumb: 'Home'
  },
  footer: {
    blurb: 'Free calculators and converters that run in your browser.',
    explore: 'Explore',
    legal: 'Site',
    contact: 'Contact',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    rights: 'All rights reserved.'
  },
  common: {
    result: 'Result',
    howItWorks: 'How it works',
    examples: 'Examples',
    faq: 'Frequently asked questions',
    related: 'Related tools',
    openTool: 'Open tool',
    browseAll: 'Browse all tools',
    clear: 'Clear'
  },
  categories: {
    datetime: { name: 'Date & time', description: 'Work out ages, gaps between dates and future or past dates.' },
    math: { name: 'Maths', description: 'Percentages without the mental arithmetic.' },
    converters: { name: 'Converters', description: 'Switch between units of length, weight and temperature.' },
    health: { name: 'Health', description: 'General screening calculators.' },
    finance: { name: 'Finance', description: 'Estimate loan repayments in ringgit.' },
    developer: { name: 'Developer & web', description: 'Format JSON, generate UUIDs and QR codes.' }
  },
  home: {
    metaTitle: 'Free Online Calculators, Converters & Tools | Hidayat Utility',
    h1: 'Free online calculators, converters & tools',
    intro: 'Simple tools for everyday questions: how old am I, what is 15% of this, how many days until a date. Everything runs in your browser, so there is nothing to sign up for and nothing to upload.',
    toolsHeading: 'Pick a tool',
    whyHeading: 'Why use Hidayat Utility',
    why: [
      { title: 'Private by design', text: 'Calculations happen on your device. Your inputs are never sent to a server.' },
      { title: 'Clear answers', text: 'Each tool explains the method, shows worked examples and answers common questions.' },
      { title: 'Fast and accessible', text: 'Lightweight pages that work with a keyboard, a screen reader, and light or dark mode.' }
    ]
  },
  toolsIndex: {
    metaTitle: 'All Calculators & Converters | Hidayat Utility',
    metaDescription: 'Browse every calculator and converter on Hidayat Utility: age, percentage, unit conversion, BMI and date calculations.',
    h1: 'All tools',
    intro: 'Every calculator and converter on the site, grouped by topic. More tools are added over time.'
  },
  notFound: {
    title: 'Page not found',
    text: 'The page you are looking for does not exist or has moved.',
    cta: 'Go to the homepage'
  },
  pages: {
    about: {
      metaTitle: 'About Hidayat Utility',
      metaDescription: 'Why Hidayat Utility exists: a small collection of free, private, easy-to-use online calculators and converters.',
      h1: 'About Hidayat Utility',
      sections: [
        { h: 'What this site is', p: ['Hidayat Utility is a small collection of online calculators and converters for everyday questions. Each tool does one job, explains how it works, and runs entirely in your browser.'] },
        { h: 'How we work', p: ['We prefer a few well-built tools over many thin ones. Every tool is written to handle bad input gracefully, and the maths behind it is described on the page so you can check it yourself.', 'The results are meant for general information. For medical, financial or legal decisions, please consult a qualified professional.'] },
        { h: 'Languages', p: ['The site is available in English and Bahasa Melayu. You can switch language from the header at any time.'] }
      ]
    },
    contact: {
      metaTitle: 'Contact | Hidayat Utility',
      metaDescription: 'How to reach Hidayat Utility with feedback, corrections or tool suggestions.',
      h1: 'Contact',
      intro: 'Found a mistake, or have a tool you would like to see? We would like to hear from you.',
      emailLabel: 'Email us at',
      noEmail: 'A contact address will be published here soon.',
      note: 'We read every message but may not be able to reply to all of them.'
    },
    privacy: {
      metaTitle: 'Privacy Policy | Hidayat Utility',
      metaDescription: 'What data Hidayat Utility does and does not collect. Calculator inputs stay on your device.',
      h1: 'Privacy Policy',
      updated: 'Last updated: October 2026',
      sections: [
        { h: 'Your calculator inputs', p: ['All calculations run in your browser. The dates, numbers and measurements you enter are not sent to our servers and are not stored.'] },
        { h: 'What is stored on your device', p: ['If you choose a light or dark theme, that choice is saved in your browser’s local storage so it is remembered next time. It stays on your device and is not sent to us.'] },
        { h: 'Analytics, cookies and advertising', p: ['At the time of writing the site does not use analytics, tracking cookies or advertising. If that changes, for example if advertising is added to support the site, this policy will be updated first and, where required, you will be asked for consent.'] },
        { h: 'Hosting', p: ['The site is delivered as static files by a hosting provider. Like any web host, it may keep standard server logs such as IP addresses and requested pages for security and operations.'] },
        { h: 'Contact', p: ['Questions about this policy can be sent through the contact page.'] }
      ]
    },
    terms: {
      metaTitle: 'Terms of Use | Hidayat Utility',
      metaDescription: 'The terms for using the free calculators and converters on Hidayat Utility.',
      h1: 'Terms of Use',
      updated: 'Last updated: October 2026',
      sections: [
        { h: 'Use of the site', p: ['Hidayat Utility is free to use for personal and commercial purposes. Please do not misuse the site or attempt to disrupt it.'] },
        { h: 'Information only', p: ['The tools provide general information and estimates. They are not medical, financial, legal or other professional advice. Always confirm important results independently and consult a qualified professional where it matters.'] },
        { h: 'No warranty', p: ['We work to keep calculations accurate, but the site is provided “as is” without warranties of any kind. To the extent permitted by law, we are not liable for losses arising from the use of, or inability to use, the site.'] },
        { h: 'Changes', p: ['We may change the tools or these terms from time to time. Continued use of the site means you accept the updated terms.'] }
      ]
    }
  },
  tools: {
    'stamp-duty-calculator': {
      name: 'Stamp Duty Calculator (Malaysia)',
      short: 'Property transfer and loan agreement stamp duty in RM.',
      metaTitle: 'Stamp Duty Calculator Malaysia: Property MOT & Loan',
      metaDescription: 'Calculate Malaysian stamp duty on a property transfer (MOT) and loan agreement, including the first-home exemption. Free estimate in ringgit.',
      h1: 'Stamp Duty Calculator (Malaysia)',
      intro: 'Enter the property price and loan amount to estimate the stamp duty on the memorandum of transfer (MOT) and the loan agreement.',
      ui: {
        price: 'Property price (RM)',
        loan: 'Loan amount (RM, optional)',
        firstHome: 'I qualify for the first-home exemption',
        firstHomeHint: `For a first residential property priced up to RM${RATES.stampDuty.firstHomeLimit.toLocaleString('en-MY')}, bought by a Malaysian citizen, with the agreement signed by ${RATES.stampDuty.firstHomeUntil}. Confirm the conditions with LHDN or your lawyer.`,
        empty: 'Enter the property price to see the result.',
        errPrice: 'The property price must be greater than zero.',
        errLoan: 'The loan amount cannot be negative or more than the property price.',
        transfer: 'Transfer (MOT) stamp duty',
        loanDuty: 'Loan agreement stamp duty',
        total: 'Total stamp duty',
        exempt: 'Fully exempt under the first-home scheme.',
        exemptNotApplied: 'The first-home exemption only applies up to the price limit above, so normal rates are shown.',
        notIncluded: 'Legal fees, valuation fees and other costs are not included.',
        ratesNote: `Rates as checked in ${RATES.checked}. Stamp duty rules change with the Budget, so verify with LHDN before relying on this figure.`
      },
      how: [
        'Transfer duty is progressive: 1% on the first RM100,000, 2% on the next RM400,000, 3% on the next RM500,000 and 4% on anything above RM1 million. Duty is charged per RM100 or part of RM100, so the price is rounded up to the next RM100.',
        'Loan agreement duty is a flat 0.5% of the loan amount. The first-home exemption removes both duties for qualifying purchases.'
      ],
      examples: [
        { title: 'RM600,000 property with a RM540,000 loan', text: 'Transfer duty is RM12,000 (RM1,000 + RM8,000 + RM3,000) and loan duty is RM2,700, a total of RM14,700.' },
        { title: 'RM450,000 first home', text: 'RM0, if you meet the conditions of the first-home exemption.' }
      ],
      faq: [
        { q: 'Does this apply to foreign buyers?', a: 'No. Different rules and rates can apply to non-citizens, so ask your lawyer.' },
        { q: 'Is this the whole cost of buying a property?', a: 'No. Legal fees, valuation fees, and other charges are extra and are not included here.' },
        { q: 'Who pays stamp duty?', a: 'The buyer normally pays the transfer and loan agreement duties, unless the sale agreement says otherwise.' }
      ]
    },
    'zakat-calculator': {
      name: 'Zakat Calculator (Malaysia)',
      short: 'Estimate zakat on income, savings or gold.',
      metaTitle: 'Zakat Calculator Malaysia: Income, Savings & Gold',
      metaDescription: 'Free zakat calculator for income, savings and gold in ringgit. Checks the nisab (85 g of gold) and works out the 2.5% payable. Estimate only.',
      h1: 'Zakat Calculator (Malaysia)',
      intro: 'Choose income, savings or gold, enter the amount and today’s gold price, and see whether it reaches the nisab and how much zakat is payable.',
      ui: {
        type: 'Type of zakat',
        types: { income: 'Income', savings: 'Savings', gold: 'Gold' } as Record<string, string>,
        income: 'Annual income after deductions (RM)',
        savings: 'Total savings held for a full year (RM)',
        goldGrams: 'Gold weight (grams)',
        goldPrice: 'Gold price per gram (RM)',
        goldPriceHint: 'Use today’s price from your state zakat authority or a gold dealer.',
        empty: 'Enter the amount and gold price to see the result.',
        errGold: 'Enter a gold price greater than zero.',
        errAmount: 'The amount cannot be negative.',
        nisab: 'Nisab (85 g of gold)',
        amount: 'Amount assessed',
        below: 'Below the nisab, so no zakat is due on this amount.',
        due: 'Zakat payable (2.5%)',
        note: 'Rules for deductions, jewellery worn and when zakat falls due differ between states. Please confirm with your state zakat authority. This is an estimate, not a religious ruling.'
      },
      how: [
        'Zakat is 2.5% of the amount assessed, when that amount reaches the nisab. The nisab used here is the value of 85 grams of gold at the price you enter.',
        'For income, enter your annual income after the deductions your state allows. For savings, enter what you have held for a full lunar year. For gold, the weight is multiplied by the gold price.'
      ],
      examples: [{ title: 'RM60,000 income at a gold price of RM400 per gram', text: 'The nisab is 85 × RM400 = RM34,000. RM60,000 is above it, so zakat is 2.5% = RM1,500.' }],
      faq: [
        { q: 'Why do I need to enter the gold price?', a: 'The nisab is defined as 85 grams of gold, so its value in ringgit moves with the gold price.' },
        { q: 'Which deductions can I subtract from income?', a: 'This depends on your state zakat authority, so check with them before entering the figure.' },
        { q: 'Does this replace advice from the zakat authority?', a: 'No. It is an estimate to help you plan. Your state authority’s guidance is the one to follow.' }
      ]
    },
    'salary-calculator': {
      name: 'Salary Calculator (Malaysia)',
      short: 'Estimate take-home pay after EPF, SOCSO, EIS and tax.',
      metaTitle: 'Salary Calculator Malaysia: Take-Home Pay After EPF & PCB',
      metaDescription: 'Estimate your monthly take-home pay in Malaysia after EPF, SOCSO, EIS and PCB income tax. Free calculator, estimate only.',
      h1: 'Salary Calculator (Malaysia)',
      intro: 'Enter your monthly gross salary to estimate EPF, SOCSO, EIS and income tax (PCB) deductions and your take-home pay.',
      ui: {
        gross: 'Monthly gross salary (RM)',
        epfRate: 'Employee EPF rate',
        epf11: '11% (standard)',
        epf9: '9% (reduced option)',
        empty: 'Enter your monthly salary to see the result.',
        errInvalid: 'Enter a salary greater than zero.',
        errRange: 'That salary looks unrealistic. Please check it.',
        net: 'Estimated take-home pay per month',
        deductions: 'Monthly deductions',
        epf: 'EPF (employee)',
        socso: 'SOCSO (employee)',
        eis: 'EIS (employee)',
        pcb: 'Income tax (PCB, estimated)',
        employer: 'Employer EPF (paid on top, not deducted from you)',
        note: `Estimate for employees under 60 using rates checked in ${RATES.checked}. SOCSO uses a percentage approximation of the contribution table, and PCB assumes a single employee with no other reliefs. Your payslip is the final word.`
      },
      how: [
        `EPF is a percentage of your gross salary. SOCSO and EIS are percentages of your salary up to a RM${RATES.payroll.wageCeiling.toLocaleString('en-MY')} ceiling.`,
        `PCB is estimated by projecting your yearly income, applying the RM${RATES.tax.individualRelief.toLocaleString('en-MY')} individual relief and your EPF relief (up to RM${RATES.tax.epfReliefCap.toLocaleString('en-MY')}), working out the tax for ${RATES.taxYear}, and dividing by 12.`
      ],
      examples: [{ title: 'RM5,000 gross, 11% EPF', text: 'EPF RM550, SOCSO RM25, EIS RM10 and about RM110 PCB, leaving roughly RM4,305. The employer adds RM650 EPF.' }],
      faq: [
        { q: 'Why is my payslip different?', a: 'Your employer may use the official SOCSO table, your TP1 reliefs, bonuses, allowances or a spouse and children, all of which change the figure.' },
        { q: 'Is employer EPF deducted from my salary?', a: 'No. It is paid by your employer on top of your salary and shown for information.' },
        { q: 'Does this include bonuses?', a: 'No. It treats the salary as the same every month.' }
      ]
    },
    'income-tax-calculator': {
      name: 'Income Tax Calculator (Malaysia)',
      short: 'Estimate resident individual income tax by year of assessment.',
      metaTitle: `Income Tax Calculator Malaysia YA ${RATES.taxYear}`,
      metaDescription: `Estimate Malaysian resident individual income tax for YA ${RATES.taxYear}. Enter income, reliefs and zakat to see chargeable income, tax by band and tax payable.`,
      h1: `Income Tax Calculator (Malaysia, YA ${RATES.taxYear})`,
      intro: `Estimate the income tax of a Malaysian tax resident for the ${RATES.taxYear} year of assessment, with a breakdown by tax band.`,
      ui: {
        income: 'Annual taxable income (RM)',
        incomeHint: 'Your total yearly taxable income before reliefs.',
        reliefs: 'Other reliefs and deductions (RM)',
        reliefsHint: `Reliefs you claim in addition to the automatic RM${RATES.tax.individualRelief.toLocaleString('en-MY')} individual relief, such as EPF, life insurance, lifestyle or children.`,
        zakat: 'Zakat paid (RM)',
        empty: 'Enter your annual income to see the result.',
        errIncome: 'Income cannot be negative.',
        errNegative: 'Reliefs and zakat cannot be negative.',
        chargeable: 'Chargeable income',
        before: 'Tax before rebates',
        rebate: 'Rebate',
        zakatOffset: 'Zakat offset',
        payable: 'Tax payable',
        effective: 'Effective rate',
        bandsTitle: 'Tax by band',
        bandRange: (from: string, to: string | null) => (to ? `RM${from} to RM${to}` : `Above RM${from}`),
        ratesNote: `Resident individual rates for YA ${RATES.taxYear}, checked in ${RATES.checked}. Reliefs, rebates and rates change, so check LHDN before filing. This is an estimate, not tax advice.`
      },
      how: [
        `Chargeable income is your income minus the RM${RATES.tax.individualRelief.toLocaleString('en-MY')} individual relief and any other reliefs you enter. Tax is then charged band by band, from 0% on the first RM5,000 up to 30% above RM2 million.`,
        `If chargeable income is RM${RATES.tax.rebateLimit.toLocaleString('en-MY')} or less, a RM${RATES.tax.rebate} rebate applies. Zakat paid is deducted from the tax ringgit for ringgit, but cannot reduce it below zero.`
      ],
      examples: [{ title: 'RM100,000 income and no other reliefs', text: 'Chargeable income is RM91,000, which gives tax of RM7,690 (an effective rate of 7.69%).' }],
      faq: [
        { q: 'Which reliefs should I enter?', a: 'The total of the other reliefs you are entitled to, such as EPF, life insurance, lifestyle, spouse, children and medical. Check the limits for each on the LHDN website.' },
        { q: 'Is this for non-residents?', a: 'No. Non-residents are taxed at a different flat rate.' },
        { q: 'Does it include joint assessment?', a: 'No. It assumes a single, separate assessment.' }
      ]
    },
    'hijri-converter': {
      name: 'Hijri Date Converter',
      short: 'Convert between Gregorian and Hijri dates.',
      metaTitle: 'Hijri Date Converter: Gregorian to Hijri and Back',
      metaDescription: 'Convert Gregorian dates to Hijri and Hijri dates to Gregorian. Free converter using the Umm al-Qura calendar. Malaysia may differ by a day.',
      h1: 'Hijri Date Converter',
      intro: 'Convert a Gregorian date to the Hijri calendar, or a Hijri date to Gregorian.',
      ui: {
        mode: 'Convert',
        toHijri: 'Gregorian to Hijri',
        toGregorian: 'Hijri to Gregorian',
        date: 'Gregorian date',
        year: 'Hijri year',
        month: 'Hijri month',
        day: 'Hijri day',
        empty: 'Fill in the date to see the result.',
        errRange: 'That date is outside the supported range (Gregorian 1900 to 2076, Hijri 1318 to 1500).',
        errInvalid: 'That Hijri date does not exist. Check the day, because Hijri months have 29 or 30 days.',
        hijriDate: 'Hijri date',
        gregorianDate: 'Gregorian date',
        era: 'AH',
        months: ['Muharram', 'Safar', 'Rabiulawal', 'Rabiulakhir', 'Jamadilawal', 'Jamadilakhir', 'Rejab', 'Syaaban', 'Ramadan', 'Syawal', 'Zulkaedah', 'Zulhijjah'],
        note: 'This uses the Umm al-Qura calendar. In Malaysia, the start of each month is confirmed by moon sighting, so a date can differ by one day. For religious purposes, follow the official announcement.'
      },
      how: [
        'Your browser’s built-in Umm al-Qura calendar tables are used for the conversion, so no data is downloaded. To convert from Hijri, the tool finds the Gregorian date whose Hijri date matches.',
        'The Hijri calendar has 12 lunar months of 29 or 30 days, so its year is about 11 days shorter than the Gregorian year.'
      ],
      examples: [{ title: '11 March 2024', text: 'This is 1 Ramadan 1445 AH in the Umm al-Qura calendar.' }],
      faq: [
        { q: 'Why can the date differ from the Malaysian calendar?', a: 'Umm al-Qura is calculated in advance, while Malaysia confirms each month by sighting the moon. The two can differ by a day.' },
        { q: 'How should I use this for Ramadan or Eid?', a: 'Use it for planning only, and follow the official announcement for the actual day.' }
      ]
    },
    'loan-calculator': {
      name: 'Loan Calculator (RM)',
      short: 'Estimate monthly repayments for home, car or personal loans.',
      metaTitle: 'Loan Calculator (RM): Monthly Repayment Estimate',
      metaDescription: 'Free loan calculator in Malaysian ringgit. Estimate monthly repayment, total payment and total interest using reducing balance or flat rate.',
      h1: 'Loan Calculator (RM)',
      intro: 'Enter the loan amount, interest rate and term to estimate the monthly repayment, total payment and total interest. Choose reducing balance or flat rate to match your loan offer.',
      ui: {
        amount: 'Loan amount (RM)',
        rate: 'Interest rate (% per year)',
        years: 'Loan term (years)',
        type: 'Interest type',
        reducing: 'Reducing balance (typical for home loans)',
        flat: 'Flat rate (common for car loans)',
        empty: 'Enter the loan amount, interest rate and term to see the result.',
        errAmount: 'The loan amount must be greater than zero.',
        errRate: 'The interest rate must be between 0 and 100.',
        errTerm: 'Enter a loan term between 0.1 and 50 years.',
        monthly: 'Monthly payment',
        total: 'Total payment',
        interest: 'Total interest',
        flatNote: 'With a flat rate, interest is charged on the original amount for the whole term, so the equivalent reducing-balance rate is considerably higher than the quoted figure.',
        disclaimer: 'This is an estimate only. Fees, insurance, taxes and rate changes are not included. Your lender’s figures are the ones that count.'
      },
      how: [
        'Reducing balance: interest is charged on the amount you still owe each month. The monthly payment is P × r ÷ (1 − (1 + r)^−n), where P is the loan amount, r is the monthly rate (annual rate ÷ 12) and n is the number of months.',
        'Flat rate: interest is the loan amount × annual rate × years, added to the loan amount and divided equally across all months. It does not fall as you repay, which is why flat rates look lower than they are.',
        'Total payment is the monthly payment times the number of months, and total interest is the total payment minus the loan amount.'
      ],
      examples: [
        { title: 'RM300,000 at 4% for 30 years (reducing balance)', text: 'About RM1,432.25 a month. Over 360 months the total interest is about RM215,609.' },
        { title: 'RM100,000 at 3% flat for 9 years', text: 'Interest is 100,000 × 3% × 9 = RM27,000, so you pay RM127,000 in total, about RM1,175.93 a month.' }
      ],
      faq: [
        { q: 'Which interest type should I choose?', a: 'Use the type stated in your offer letter. Home and personal loans usually use reducing balance, while many car loans quote a flat rate.' },
        { q: 'Does the result include fees or insurance?', a: 'No. Processing fees, stamp duty, insurance and any rate changes are not included.' },
        { q: 'Why is my bank’s figure slightly different?', a: 'Banks may calculate interest daily, round differently, or apply a variable rate. Treat this as a close estimate.' }
      ]
    },
    'json-formatter': {
      name: 'JSON Formatter & Validator',
      short: 'Format, minify and validate JSON in your browser.',
      metaTitle: 'JSON Formatter & Validator: Pretty Print and Minify',
      metaDescription: 'Free online JSON formatter and validator. Paste JSON to pretty print it, minify it or find syntax errors. Runs in your browser; your data is never uploaded.',
      h1: 'JSON Formatter & Validator',
      intro: 'Paste JSON to check that it is valid, then pretty print or minify it. Everything happens in your browser, so your data is never uploaded.',
      ui: {
        input: 'JSON input',
        output: 'Output',
        outputLabel: 'Formatted JSON',
        indent2: 'Pretty print (2 spaces)',
        indent4: 'Pretty print (4 spaces)',
        minify: 'Minify',
        copy: 'Copy',
        copied: 'Copied to clipboard.',
        copyFailed: 'Could not copy. Select the text and copy it manually.',
        clear: 'Clear',
        empty: 'Paste some JSON to format it.',
        errPrefix: 'Invalid JSON: '
      },
      how: [
        'The tool parses your text with the browser’s built-in JSON parser. If parsing fails, the parser’s error message is shown so you can find the problem. If it succeeds, the data is written back out with the indentation you chose, or on a single line when minifying.'
      ],
      examples: [{ title: 'Minify', text: '{ "a": 1, "b": [1, 2] } becomes {"a":1,"b":[1,2]}.' }],
      faq: [
        { q: 'Is my JSON uploaded anywhere?', a: 'No. It is processed locally in your browser.' },
        { q: 'Does formatting change my data?', a: 'Values are kept, but numbers are read as standard floating-point numbers, so integers above 9,007,199,254,740,991 can lose precision, and object keys that look like whole numbers may be listed first.' },
        { q: 'Why is my JSON invalid?', a: 'Common causes are trailing commas, single quotes instead of double quotes, unquoted keys and comments. JSON does not allow any of these.' }
      ]
    },
    'uuid-generator': {
      name: 'UUID Generator',
      short: 'Generate random version 4 UUIDs.',
      metaTitle: 'UUID Generator: Random v4 UUIDs Online',
      metaDescription: 'Free online UUID generator. Create one or many random version 4 UUIDs, with optional uppercase and no hyphens. Generated in your browser.',
      h1: 'UUID Generator',
      intro: 'Generate random version 4 UUIDs (also called GUIDs). Choose how many you need and copy them with one click.',
      ui: {
        count: 'How many (1 to 100)',
        upper: 'Uppercase',
        hyphens: 'Include hyphens',
        generate: 'Generate',
        copy: 'Copy',
        copied: 'Copied to clipboard.',
        copyFailed: 'Could not copy. Select the text and copy it manually.',
        outputLabel: 'Generated UUIDs',
        empty: 'Press Generate to create UUIDs.',
        errCount: 'Enter a whole number from 1 to 100.',
        errUnsupported: 'This browser cannot generate UUIDs securely. Please use a current browser over HTTPS.'
      },
      how: [
        'A version 4 UUID is 128 bits, of which 122 are random. The tool uses your browser’s cryptographically secure generator, crypto.randomUUID(), so nothing is sent over the network.',
        'The format is 8-4-4-4-12 hexadecimal characters, for example 3b241101-e2bb-4255-8caf-4136c566a962.'
      ],
      examples: [{ title: 'Without hyphens, uppercase', text: '3B241101E2BB42558CAF4136C566A962' }],
      faq: [
        { q: 'Can two UUIDs ever be the same?', a: 'It is theoretically possible but so unlikely with 122 random bits that it is treated as impossible in practice.' },
        { q: 'Is a UUID the same as a GUID?', a: 'Yes. GUID is the name Microsoft uses for the same format.' },
        { q: 'Are these suitable as secrets?', a: 'They are random, but a UUID is meant to be an identifier. Use a dedicated secure token generator for passwords or API keys.' }
      ]
    },
    'qr-code-generator': {
      name: 'QR Code Generator',
      short: 'Turn a link or text into a QR code you can download.',
      metaTitle: 'QR Code Generator: Create and Download QR Codes',
      metaDescription: 'Free QR code generator. Turn a URL or any text into a QR code and download it as a PNG. Generated in your browser; nothing is uploaded.',
      h1: 'QR Code Generator',
      intro: 'Type or paste a link or any text to create a QR code, then download it as a PNG image. The code is generated in your browser.',
      ui: {
        text: 'Text or URL',
        empty: 'Enter a link or some text to create a QR code.',
        errTooLong: 'That is too long. Please use 1,000 characters or fewer.',
        errFailed: 'A QR code could not be created for that text.',
        alt: 'QR code for the text you entered',
        download: 'Download PNG',
        note: 'Test the code with a phone camera before printing or sharing it.'
      },
      how: [
        'The text is encoded as a QR code with medium error correction, which lets a code still scan if a small part of it is damaged or covered. Longer text makes a denser code that is harder to scan at small sizes.',
        'The image has a white border (the “quiet zone”) that scanners need, so keep it when you use the code.'
      ],
      examples: [{ title: 'A website link', text: 'Enter https://utility.hidayat.my to create a code that opens this site.' }],
      faq: [
        { q: 'Does the QR code expire?', a: 'No. The code simply contains your text. If it points to a website, it works as long as that website does.' },
        { q: 'Is the text sent to a server?', a: 'No. The code is created in your browser.' },
        { q: 'Why does my code not scan?', a: 'Try shorter text, make the code larger, and keep the white border and good contrast.' }
      ]
    },
    'age-calculator': {
      name: 'Age Calculator',
      short: 'Find your exact age in years, months and days.',
      metaTitle: 'Age Calculator: Exact Age in Years, Months & Days',
      metaDescription: 'Enter a date of birth to get your exact age in years, months and days, plus total days lived and days until your next birthday. Free and private.',
      h1: 'Age Calculator',
      intro: 'Enter a date of birth to see exact age in years, months and days, along with the total number of days lived and how long until the next birthday.',
      ui: {
        dob: 'Date of birth',
        empty: 'Enter a date of birth to see the result.',
        errFuture: 'That date is in the future. Please enter a date of birth that has already happened.',
        errInvalid: 'That is not a valid date.',
        age: 'Your age',
        summary: (y: string, m: string, d: string) => `${y} years, ${m} months, ${d} days`,
        totalDays: 'Total days lived',
        totalWeeks: 'Total weeks',
        totalMonths: 'Total months',
        nextBirthday: 'Next birthday',
        inDays: (n: string) => `in ${n} days`,
        today: 'Today!'
      },
      how: [
        'The calculator subtracts your date of birth from today’s date, borrowing from months and years where needed. If the day of the month has not been reached yet, one month is taken off and the days of the previous month are added.',
        'Total days is the exact number of calendar days between the two dates. For a 29 February birthday, the next birthday is counted on 1 March in years that are not leap years.'
      ],
      examples: [
        { title: 'Born 15 May 1990, checked on 10 March 2024', text: '33 years, 9 months and 24 days. The birthday in May has not come yet, so the age is still 33.' },
        { title: 'Born today', text: '0 years, 0 months and 0 days. The next birthday is in 365 or 366 days.' }
      ],
      faq: [
        { q: 'Is my date of birth stored anywhere?', a: 'No. The calculation runs in your browser and nothing is sent or saved.' },
        { q: 'Which date is used as “today”?', a: 'Your device’s current date, in your local time zone.' },
        { q: 'Can I calculate the age on a past or future date?', a: 'Not with this tool. To find the gap between any two dates, use the Date Calculator.' }
      ]
    },
    'percentage-calculator': {
      name: 'Percentage Calculator',
      short: 'Percent of a number, percentage change, difference and more.',
      metaTitle: 'Percentage Calculator: Percent Of, Change & Difference',
      metaDescription: 'Free percentage calculator: find X% of a number, what percent one number is of another, increase or decrease a number, and percentage change or difference.',
      h1: 'Percentage Calculator',
      intro: 'Pick the sentence that matches your question and fill in the blanks. Each calculation updates as you type.',
      ui: {
        a: 'First number',
        b: 'Second number',
        empty: 'Fill in both numbers.',
        errZero: 'This cannot be calculated because it would divide by zero.',
        increased: 'an increase',
        decreased: 'a decrease',
        unchanged: 'no change',
        ops: {
          of: { before: 'What is', mid: '% of', after: '?', unit: '' },
          whatPct: { before: '', mid: 'is what percent of', after: '?', unit: '%' },
          increase: { before: 'Increase', mid: 'by', after: '%', unit: '', swap: true },
          decrease: { before: 'Decrease', mid: 'by', after: '%', unit: '', swap: true },
          change: { before: 'Percentage change from', mid: 'to', after: '', unit: '%' },
          difference: { before: 'Percentage difference between', mid: 'and', after: '', unit: '%' }
        }
      },
      how: [
        'Percent of: X% of Y is X ÷ 100 × Y. “What percent” is X ÷ Y × 100.',
        'Increase and decrease add or subtract that percentage of the number. Percentage change compares a new value with an old one: (new − old) ÷ old × 100.',
        'Percentage difference is used when neither number is the “original”. It divides the gap between them by their average.'
      ],
      examples: [
        { title: '20% of 150', text: '20 ÷ 100 × 150 = 30.' },
        { title: 'A price rises from 80 to 100', text: '(100 − 80) ÷ 80 × 100 = 25% increase.' },
        { title: 'Difference between 50 and 150', text: '100 ÷ 100 × 100 = 100% difference, because the average of the two is 100.' }
      ],
      faq: [
        { q: 'What is the difference between percentage change and percentage difference?', a: 'Change has a clear starting value and an end value, so it can be an increase or a decrease. Difference treats both numbers equally and is always positive.' },
        { q: 'Why does a 50% increase followed by a 50% decrease not get back to the start?', a: 'The second percentage is taken from the larger number. 100 → 150 → 75.' },
        { q: 'Why do I get an error?', a: 'Some questions have no answer, such as the percentage change from zero.' }
      ]
    },
    'unit-converter': {
      name: 'Unit Converter',
      short: 'Convert length, weight and temperature units.',
      metaTitle: 'Unit Converter: Length, Weight & Temperature',
      metaDescription: 'Free unit converter for length (km, miles, feet, inches), weight (kg, pounds, ounces) and temperature (°C, °F, K). Instant results in your browser.',
      h1: 'Unit Converter',
      intro: 'Choose a category, enter a value and pick the units to convert between. Length, weight and temperature are supported.',
      ui: {
        category: 'Category',
        value: 'Value',
        from: 'From',
        to: 'To',
        swap: 'Swap units',
        empty: 'Enter a value to convert.',
        errBelowZero: 'That temperature is below absolute zero, which is not physically possible.',
        errNegative: 'Length and weight cannot be negative.',
        errBadUnit: 'Please choose valid units.',
        categories: { length: 'Length', weight: 'Weight', temperature: 'Temperature' } as Record<string, string>,
        units: {
          mm: 'Millimetres (mm)', cm: 'Centimetres (cm)', m: 'Metres (m)', km: 'Kilometres (km)',
          in: 'Inches (in)', ft: 'Feet (ft)', yd: 'Yards (yd)', mi: 'Miles (mi)',
          mg: 'Milligrams (mg)', g: 'Grams (g)', kg: 'Kilograms (kg)', t: 'Tonnes (t)',
          oz: 'Ounces (oz)', lb: 'Pounds (lb)',
          c: 'Celsius (°C)', f: 'Fahrenheit (°F)', k: 'Kelvin (K)'
        } as Record<string, string>
      },
      how: [
        'Length and weight units are converted by multiplying by a fixed factor. Every value is first converted to a base unit (metres or kilograms) and then to the unit you chose.',
        'Temperature is different because the scales start at different points. Celsius to Fahrenheit is °C × 9 ÷ 5 + 32, and Kelvin is Celsius + 273.15.',
        'The conversion factors are the exact international definitions, for example 1 inch = 2.54 cm and 1 pound = 0.45359237 kg.'
      ],
      examples: [
        { title: '5 kilometres in miles', text: '5 km ≈ 3.10686 miles.' },
        { title: '70 kilograms in pounds', text: '70 kg ≈ 154.324 lb.' },
        { title: '100 °C in Fahrenheit', text: '100 × 9 ÷ 5 + 32 = 212 °F.' }
      ],
      faq: [
        { q: 'How precise are the results?', a: 'Results are shown with up to 10 significant digits, enough for everyday use.' },
        { q: 'Why can I not enter a temperature below absolute zero?', a: 'Absolute zero (−273.15 °C, 0 K) is the lowest possible temperature, so lower values are rejected.' },
        { q: 'Are US and UK units the same?', a: 'For the length and weight units here, yes. The international inch, foot, yard, mile, ounce and pound are used.' }
      ]
    },
    'bmi-calculator': {
      name: 'BMI Calculator',
      short: 'Calculate body mass index in metric or imperial units.',
      metaTitle: 'BMI Calculator: Metric & Imperial Body Mass Index',
      metaDescription: 'Free BMI calculator for adults. Enter height and weight in metric or imperial units to see your body mass index and WHO category. Not medical advice.',
      h1: 'BMI Calculator',
      intro: 'Enter height and weight in metric or imperial units to see body mass index (BMI) and the matching adult category.',
      ui: {
        system: 'Units',
        metric: 'Metric (cm, kg)',
        imperial: 'Imperial (ft/in, lb)',
        height: 'Height (cm)',
        weight: 'Weight (kg)',
        feet: 'Height (feet)',
        inches: 'Height (inches)',
        pounds: 'Weight (pounds)',
        empty: 'Enter your height and weight to see the result.',
        errInvalid: 'Height and weight must be greater than zero.',
        errRange: 'Those values look unrealistic. Please check the height and weight.',
        bmi: 'Your BMI',
        category: 'Category',
        categories: { underweight: 'Underweight', normal: 'Normal weight', overweight: 'Overweight', obese: 'Obese' } as Record<string, string>,
        scale: 'Adult categories: under 18.5 underweight, 18.5 to 24.9 normal, 25 to 29.9 overweight, 30 and above obese.',
        disclaimer: 'BMI is a general screening measure, not a diagnosis, and this tool does not provide medical advice. Talk to a doctor or other qualified health professional about your health.'
      },
      how: [
        'BMI is weight in kilograms divided by height in metres squared. Imperial inputs are converted to kilograms and metres first.',
        'The categories follow the World Health Organization’s adult ranges. They are the same for men and women.'
      ],
      examples: [{ title: '70 kg and 175 cm', text: '70 ÷ (1.75 × 1.75) ≈ 22.9, which is in the normal range.' }],
      faq: [
        { q: 'Is BMI accurate for everyone?', a: 'No. BMI does not distinguish muscle from fat or show where fat is carried, and it is not designed for children, pregnant women or competitive athletes.' },
        { q: 'Do all guidelines use the same cut-offs?', a: 'Not always. Some guidelines for Asian populations use lower thresholds. Ask your doctor which applies to you.' },
        { q: 'Is my data saved?', a: 'No. Everything is calculated in your browser.' }
      ]
    },
    'date-calculator': {
      name: 'Date Calculator',
      short: 'Days between two dates, or add and subtract days.',
      metaTitle: 'Date Calculator: Days Between Dates, Add or Subtract Days',
      metaDescription: 'Free date calculator: count the days between two dates, or add or subtract days from a date to find the resulting date and weekday.',
      h1: 'Date Calculator',
      intro: 'Count the days between two dates, or add days to or subtract days from a date.',
      ui: {
        mode: 'What do you want to do?',
        modes: { between: 'Days between two dates', add: 'Add days to a date', subtract: 'Subtract days from a date' } as Record<string, string>,
        start: 'Start date',
        end: 'End date',
        date: 'Date',
        days: 'Number of days',
        empty: 'Fill in all the fields to see the result.',
        errDays: 'Enter a whole number of days between 0 and 365,000.',
        errOutOfRange: 'That result falls outside the supported years (1000 to 9999).',
        daysApart: (n: string) => `${n} days`,
        weeksDays: (w: string, d: string) => `${w} weeks and ${d} days`,
        resultDate: 'Resulting date',
        sameDay: 'Both dates are the same day.'
      },
      how: [
        'Dates are compared as whole calendar days, so time zones and daylight saving changes do not affect the result. The start day is not counted: Monday to Tuesday is 1 day.',
        'Adding or subtracting days moves the calendar forwards or backwards, including across months, years and leap days.'
      ],
      examples: [
        { title: '1 January to 31 December 2024', text: '365 days, because 2024 is a leap year with 366 days and the start day is not counted.' },
        { title: '28 February 2024 plus 2 days', text: '1 March 2024, because 29 February exists in 2024.' }
      ],
      faq: [
        { q: 'Is the end date included?', a: 'The count is the difference between the dates, so the start day is not counted. Add 1 if you need both days included.' },
        { q: 'Does the order of the dates matter?', a: 'No. The tool shows the number of days between them whichever is earlier.' },
        { q: 'Does it count business days?', a: 'Not at the moment. It counts every calendar day.' }
      ]
    }
  }
}

export default en
export type Content = typeof en
