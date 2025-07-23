import { 
  TrendingUp, 
  Landmark, 
  Target, 
  Home, 
  BarChart2, 
  Car,
  ChevronsUp,
  LineChart,
  PiggyBank, // Added for Retirement
  ShieldCheck // Added for PPF
} from 'lucide-react';

export const financialCalculators = [
  // ... (previous 6 calculators: SIP, Lumpsum, EMI, Goal SIP, Step-Up SIP, CAGR)
  {
    id: "CAL001",
    slug: "sip-calculator",
    name: "SIP Calculator",
    category: "Investments",
    description: "Calculate the future value of your monthly SIP investments.",
    icon: TrendingUp,
    color: 'text-blue-600',
    metaDescription: "Determine how much your systematic investment plan will grow over time with our SIP calculator.",
    inputs: [
      { 
        label: "Monthly Investment", 
        key: "monthlyAmount", 
        unit: "₹", 
        min: 500, 
        max: 100000, 
        step: 500,
        tooltip: "Amount you'll invest each month (₹500 - ₹1,00,000)",
        inputType: "range" 
      },
      { 
        label: "Investment Period", 
        key: "investmentPeriod", 
        unit: "years", 
        min: 1, 
        max: 40, 
        step: 1,
        tooltip: "Duration of your investment (1-40 years)",
        inputType: "range"
      },
      { 
        label: "Expected Return", 
        key: "expectedReturn", 
        unit: "%", 
        min: 1, 
        max: 30, 
        step: 0.5,
        tooltip: "Annual expected return rate (1-30%)",
        inputType: "range"
      }
    ],
    formula: (inputs) => {
      const p = inputs.monthlyAmount;
      const i = inputs.expectedReturn / 12 / 100;
      const n = inputs.investmentPeriod * 12;
      if (i === 0) return p * n;
      const totalValue = p * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
      const investedAmount = p * n;
      const estimatedReturns = totalValue - investedAmount;
      return { totalValue, investedAmount, estimatedReturns };
    },
    resultLabel: "Maturity Amount",
    defaultValues: {
      monthlyAmount: 5000,
      investmentPeriod: 10,
      expectedReturn: 12
    }
  },
  {
    id: "CAL002",
    slug: "lumpsum-calculator",
    name: "Lumpsum Calculator",
    category: "Investments",
    description: "Calculate the future value of a one-time investment.",
    icon: Landmark,
    color: 'text-purple-600',
    metaDescription: "Project the growth of your one-time investment with our lumpsum calculator.",
    inputs: [
      { 
        label: "Investment Amount", 
        key: "principal", 
        unit: "₹", 
        min: 1000, 
        max: 10000000, 
        step: 1000,
        tooltip: "Initial investment amount (₹1,000 - ₹1,00,00,000)",
        inputType: "range"
      },
      { 
        label: "Investment Period", 
        key: "investmentPeriod", 
        unit: "years", 
        min: 1, 
        max: 30, 
        step: 1,
        tooltip: "Duration of investment (1-30 years)",
        inputType: "range"
      },
      { 
        label: "Expected Return", 
        key: "expectedReturn", 
        unit: "%", 
        min: 1, 
        max: 30, 
        step: 0.5,
        tooltip: "Annual expected return rate (1-30%)",
        inputType: "range"
      }
    ],
    formula: (inputs) => {
      const p = inputs.principal;
      const r = inputs.expectedReturn / 100;
      const n = inputs.investmentPeriod;
      const totalValue = p * Math.pow(1 + r, n);
      const investedAmount = p;
      const estimatedReturns = totalValue - investedAmount;
      return { totalValue, investedAmount, estimatedReturns };
    },
    resultLabel: "Maturity Amount",
    defaultValues: {
      principal: 100000,
      investmentPeriod: 5,
      expectedReturn: 10
    }
  },
  {
    id: "CAL003",
    slug: "emi-calculator",
    name: "EMI Calculator",
    category: "Loans",
    description: "Calculate your monthly EMI for home, car, or personal loans.",
    icon: Home,
    color: 'text-red-600',
    metaDescription: "Calculate your equated monthly installment for various loan types.",
    inputs: [
      { 
        label: "Loan Amount", 
        key: "loanAmount", 
        unit: "₹", 
        min: 10000, 
        max: 10000000, 
        step: 1000,
        tooltip: "Total loan amount (₹10,000 - ₹1,00,00,000)",
        inputType: "range"
      },
      { 
        label: "Interest Rate", 
        key: "interestRate", 
        unit: "%", 
        min: 1, 
        max: 20, 
        step: 0.1,
        tooltip: "Annual interest rate (1-20%)",
        inputType: "range"
      },
      { 
        label: "Loan Tenure", 
        key: "loanTenure", 
        unit: "years", 
        min: 1, 
        max: 30, 
        step: 1,
        tooltip: "Loan repayment period (1-30 years)",
        inputType: "range"
      }
    ],
    formula: (inputs) => {
        const p = inputs.loanAmount;
        const r = inputs.interestRate / 12 / 100;
        const n = inputs.loanTenure * 12;
        if (r === 0) return { monthlyEMI: p/n, totalInterest: 0, totalPayment: p};
        const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        const totalPayment = emi * n;
        const totalInterest = totalPayment - p;
        return { monthlyEMI: emi, totalInterest, totalPayment };
    },
    resultLabel: "Monthly EMI",
    defaultValues: {
      loanAmount: 500000,
      interestRate: 8.5,
      loanTenure: 10
    }
  },
  {
    id: "CAL004",
    slug: "goal-sip-calculator",
    name: "Goal SIP Calculator",
    category: "Planning",
    description: "Calculate how much you need to invest monthly to reach a financial goal.",
    icon: Target,
    color: 'text-green-600',
    metaDescription: "Determine the monthly SIP required to achieve your financial goals in time.",
    inputs: [
      { 
        label: "Target Amount", 
        key: "targetAmount", 
        unit: "₹", 
        min: 100000, 
        max: 100000000, 
        step: 100000,
        tooltip: "Total amount you want to accumulate (₹1,00,000 - ₹10,00,00,000)",
        inputType: "range"
      },
      { 
        label: "Expected Return Rate", 
        key: "expectedReturn", 
        unit: "%", 
        min: 1, 
        max: 30, 
        step: 0.5,
        tooltip: "Annual expected return rate (1-30%)",
        inputType: "range"
      },
      { 
        label: "Time Period", 
        key: "timeHorizon", 
        unit: "years", 
        min: 1, 
        max: 40, 
        step: 1,
        tooltip: "Investment duration (1-40 years)",
        inputType: "range"
      }
    ],
    formula: (inputs) => {
      const i = inputs.expectedReturn / 12 / 100;
      const n = inputs.timeHorizon * 12;
      const futureValue = inputs.targetAmount;
      if (i === 0) return { requiredSIP: futureValue / n };
      const monthlySIP = (futureValue * i) / ((Math.pow(1 + i, n) - 1) * (1 + i));
      return { requiredSIP: monthlySIP };
    },
    resultLabel: "Required Monthly SIP",
    defaultValues: {
      targetAmount: 10000000,
      expectedReturn: 12,
      timeHorizon: 10
    }
  },
  {
    id: "CAL005",
    slug: "step-up-sip-calculator",
    name: "Step-Up SIP Calculator",
    category: "Investments",
    description: "Calculate the future value of your SIP with an annual increase.",
    icon: ChevronsUp,
    color: 'text-teal-600',
    metaDescription: "Project the growth of your SIP when you increase your investment amount annually.",
    inputs: [
        { label: "Initial Monthly Investment", key: "monthlyAmount", unit: "₹", min: 500, max: 100000, step: 500, inputType: "range" },
        { label: "Annual Increase", key: "annualIncrease", unit: "%", min: 0, max: 25, step: 1, inputType: "range" },
        { label: "Investment Period", key: "investmentPeriod", unit: "years", min: 1, max: 40, step: 1, inputType: "range" },
        { label: "Expected Return", key: "expectedReturn", unit: "%", min: 1, max: 30, step: 0.5, inputType: "range" }
    ],
    formula: (inputs) => {
      let futureValue = 0;
      let investedAmount = 0;
      let currentMonthlySip = inputs.monthlyAmount;
      const monthlyRate = inputs.expectedReturn / 12 / 100;

      for (let year = 1; year <= inputs.investmentPeriod; year++) {
          for (let month = 1; month <= 12; month++) {
              futureValue = (futureValue + currentMonthlySip) * (1 + monthlyRate);
              investedAmount += currentMonthlySip;
          }
          currentMonthlySip *= (1 + inputs.annualIncrease / 100);
      }
      const estimatedReturns = futureValue - investedAmount;
      return { totalValue: futureValue, investedAmount, estimatedReturns };
    },
    resultLabel: "Maturity Amount",
    defaultValues: {
        monthlyAmount: 5000,
        annualIncrease: 10,
        investmentPeriod: 10,
        expectedReturn: 12
    }
  },
  {
    id: "CAL006",
    slug: "cagr-calculator",
    name: "CAGR Calculator",
    category: "Analysis",
    description: "Calculate the Compounded Annual Growth Rate of an investment.",
    icon: LineChart,
    color: 'text-orange-500',
    metaDescription: "Easily compute the CAGR for your investments to understand their true annual growth.",
    inputs: [
        { label: "Initial Value", key: "initialValue", unit: "₹", min: 1000, max: 10000000, step: 1000, inputType: "range" },
        { label: "Final Value", key: "finalValue", unit: "₹", min: 1000, max: 50000000, step: 1000, inputType: "range" },
        { label: "Time Period", key: "timePeriod", unit: "years", min: 1, max: 50, step: 1, inputType: "range" }
    ],
    formula: (inputs) => {
        const { initialValue, finalValue, timePeriod } = inputs;
        if (initialValue <= 0 || finalValue <= 0 || timePeriod <= 0) return { cagr: 0 };
        const cagr = (Math.pow(finalValue / initialValue, 1 / timePeriod) - 1) * 100;
        return { cagr: cagr };
    },
    resultLabel: "CAGR",
    defaultValues: {
        initialValue: 100000,
        finalValue: 500000,
        timePeriod: 5
    }
  },
  // --- NEW CALCULATORS START HERE ---
  {
    id: "CAL007",
    slug: "car-loan-calculator",
    name: "Car Loan Calculator",
    category: "Loans",
    description: "Calculate your EMI, down payment, and affordability for your dream car.",
    icon: Car,
    color: 'text-indigo-600',
    metaDescription: "Plan your car purchase by calculating the EMI and total cost of your car loan.",
    inputs: [
      { label: "Car Price", key: "carPrice", unit: "₹", min: 100000, max: 10000000, step: 50000, inputType: "range" },
      { label: "Down Payment", key: "downPayment", unit: "%", min: 0, max: 100, step: 5, inputType: "range" },
      { label: "Interest Rate", key: "interestRate", unit: "%", min: 1, max: 20, step: 0.1, inputType: "range" },
      { label: "Loan Tenure", key: "loanTenure", unit: "years", min: 1, max: 7, step: 1, inputType: "range" }
    ],
    formula: (inputs) => {
        const loanAmount = inputs.carPrice * (1 - inputs.downPayment / 100);
        const r = inputs.interestRate / 12 / 100;
        const n = inputs.loanTenure * 12;
        if (r === 0) return { monthlyEMI: loanAmount / n, totalInterest: 0, totalPayment: loanAmount };
        const emi = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        const totalPayment = emi * n;
        const totalInterest = totalPayment - loanAmount;
        return { monthlyEMI: emi, totalInterest, totalPayment, loanAmount };
    },
    resultLabel: "Monthly EMI",
    defaultValues: {
        carPrice: 800000,
        downPayment: 20,
        interestRate: 9.5,
        loanTenure: 5
    }
  },
  {
    id: "CAL008",
    slug: "retirement-planner",
    name: "Retirement Planner",
    category: "Planning",
    description: "Estimate the corpus you need to accumulate for a comfortable retirement.",
    icon: PiggyBank,
    color: 'text-pink-600',
    metaDescription: "Calculate your retirement corpus based on your current age, expenses, and expected lifestyle.",
    inputs: [
      { label: "Current Age", key: "currentAge", unit: "years", min: 18, max: 60, step: 1, inputType: "range" },
      { label: "Retirement Age", key: "retirementAge", unit: "years", min: 40, max: 70, step: 1, inputType: "range" },
      { label: "Monthly Expenses", key: "monthlyExpenses", unit: "₹", min: 10000, max: 500000, step: 5000, inputType: "range" },
      { label: "Inflation Rate", key: "inflationRate", unit: "%", min: 1, max: 15, step: 0.5, inputType: "range" }
    ],
    formula: (inputs) => {
        const { currentAge, retirementAge, monthlyExpenses, inflationRate } = inputs;
        const yearsToRetirement = retirementAge - currentAge;
        const i = inflationRate / 100;
        // Future value of current monthly expenses at retirement
        const futureMonthlyExpenses = monthlyExpenses * Math.pow(1 + i, yearsToRetirement);
        // Assuming post-retirement returns are equal to inflation (a conservative estimate)
        // Corpus needed is annual expenses * life expectancy post-retirement (e.g., 25 years)
        const retirementCorpus = futureMonthlyExpenses * 12 * 25; 
        return { retirementCorpus, futureMonthlyExpenses };
    },
    resultLabel: "Retirement Corpus",
    defaultValues: {
        currentAge: 30,
        retirementAge: 60,
        monthlyExpenses: 50000,
        inflationRate: 6
    }
  },
  {
    id: "CAL009",
    slug: "ppf-calculator",
    name: "PPF Calculator",
    category: "Savings",
    description: "Calculate the maturity amount of your Public Provident Fund (PPF) investment.",
    icon: ShieldCheck,
    color: 'text-cyan-600',
    metaDescription: "Estimate the returns and maturity value of your PPF account over a 15-year period or more.",
    inputs: [
      { label: "Yearly Investment", key: "yearlyInvestment", unit: "₹", min: 500, max: 150000, step: 500, inputType: "range" },
      { label: "Interest Rate", key: "interestRate", unit: "%", min: 5, max: 10, step: 0.1, inputType: "range" },
      { label: "Investment Period", key: "investmentPeriod", unit: "years", min: 15, max: 50, step: 1, inputType: "range" },
    ],
    formula: (inputs) => {
      const { yearlyInvestment, interestRate, investmentPeriod } = inputs;
      const r = interestRate / 100;
      let maturityValue = 0;
      let totalInvestment = 0;
      for (let i = 0; i < investmentPeriod; i++) {
          maturityValue = (maturityValue + yearlyInvestment) * (1 + r);
          totalInvestment += yearlyInvestment;
      }
      const totalInterest = maturityValue - totalInvestment;
      return { maturityValue, totalInvestment, totalInterest };
    },
    resultLabel: "Maturity Value",
    defaultValues: {
        yearlyInvestment: 150000,
        interestRate: 7.1,
        investmentPeriod: 15
    }
  }
];