import React, { useState, useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Import your data and wrapper components
import { financialCalculators } from '../data/calculatorsDB';
import CalculatorWrapper, { 
    CalculatorInputSection, 
    CalculatorResultSection, 
    CalculatorInput 
} from '../components/calculator/CalculatorWrapper';

// Import all necessary icons
import { TrendingUp, PiggyBank, Landmark, Banknote, Percent } from 'lucide-react';

// --- Helper to format currency in Indian numbering system ---
const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0, // No decimal places for currency
    }).format(value);
};

// --- A map to associate result keys with icons and labels ---
const resultDisplayConfig = {
    totalValue: { label: 'Total Value', icon: Landmark, color: 'text-teal-600', isPrimary: true },
    maturityValue: { label: 'Maturity Value', icon: Landmark, color: 'text-teal-600', isPrimary: true },
    investedAmount: { label: 'Invested Amount', icon: PiggyBank, color: 'text-orange-500' },
    estimatedReturns: { label: 'Estimated Returns', icon: TrendingUp, color: 'text-green-500' },
    monthlyEMI: { label: 'Monthly EMI', icon: Banknote, color: 'text-red-600', isPrimary: true },
    totalInterest: { label: 'Total Interest', icon: Percent, color: 'text-orange-500' },
    totalPayment: { label: 'Total Payment', icon: Landmark, color: 'text-blue-500' },
    requiredSIP: { label: 'Required Monthly SIP', icon: TrendingUp, color: 'text-green-600', isPrimary: true },
    cagr: { label: 'CAGR', icon: TrendingUp, color: 'text-orange-500', isPrimary: true, unit: '%' },
    retirementCorpus: { label: 'Retirement Corpus', icon: PiggyBank, color: 'text-pink-600', isPrimary: true },
    futureMonthlyExpenses: { label: 'Future Monthly Expenses', icon: Banknote, color: 'text-purple-500' },
    totalInvestment: { label: 'Total Investment', icon: PiggyBank, color: 'text-orange-500' },
    totalInterest: { label: 'Total Interest', icon: Percent, color: 'text-red-500' },
    loanAmount: { label: 'Loan Amount', icon: Banknote, color: 'text-blue-500' },

};

const DynamicCalculatorPage = () => {
    const { slug } = useParams();
    
    const calculator = useMemo(() => 
        financialCalculators.find(calc => calc.slug === slug), 
    [slug]);

    if (!calculator) {
        return <Navigate to="/Financial-Calculators" replace />;
    }

    const [inputValues, setInputValues] = useState(calculator.defaultValues);

    const handleInputChange = (key, value) => {
        setInputValues(prev => ({ ...prev, [key]: Number(value) }));
    };

    const results = useMemo(() => 
        calculator.formula(inputValues), 
    [inputValues, calculator]);

    // Separate primary and secondary results based on the config
    const primaryResult = Object.entries(results).find(([key]) => resultDisplayConfig[key]?.isPrimary);
    const secondaryResults = Object.entries(results).filter(([key]) => !resultDisplayConfig[key]?.isPrimary);

    return (
        <CalculatorWrapper title={calculator.name}>
            {/* Left Side: Inputs */}
            <CalculatorInputSection>
                {calculator.inputs.map((input) => (
                    <CalculatorInput
                        key={input.key}
                        label={input.label}
                        value={inputValues[input.key]}
                        unit={input.unit}
                        min={input.min}
                        max={input.max}
                        step={input.step}
                        tooltip={input.tooltip}
                        onChange={(e) => handleInputChange(input.key, e.target.value)}
                    />
                ))}
            </CalculatorInputSection>

            {/* Right Side: Results */}
            <CalculatorResultSection>
                <div className="flex flex-col items-center justify-between gap-8 w-full">
                    {/* Primary Result */}
                    {primaryResult && (
                        <motion.div 
                            key={primaryResult[0]}
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <p className="text-xl text-gray-600 font-semibold mb-1">
                                {resultDisplayConfig[primaryResult[0]]?.label}
                            </p>
                            <p className="text-5xl font-bold text-teal-600">
                                {resultDisplayConfig[primaryResult[0]]?.unit === '%'
                                    ? `${primaryResult[1].toFixed(2)}%`
                                    : formatCurrency(primaryResult[1])
                                }
                            </p>
                        </motion.div>
                    )}

                    {/* Secondary Results */}
                    {secondaryResults.length > 0 && (
                        <div className="flex justify-between items-center w-fit gap-5  text-center ">
                            {secondaryResults.map(([key, value]) => {
                                const config = resultDisplayConfig[key];
                                const Icon = config?.icon;
                                return (
                                    <motion.div 
                                        key={key}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        className='shadow-lg px-5 rounded-lg py-2'
                                    >
                                        <p className="text-sm flex items-center justify-center text-gray-500">
                                            {Icon && <Icon size={14} className={`mr-2 ${config.color}`} />}
                                            {config?.label}
                                        </p>
                                        <p className="text-2xl font-medium text-gray-700 mt-1">
                                            {formatCurrency(value)}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </CalculatorResultSection>
        </CalculatorWrapper>
    );
};

export default DynamicCalculatorPage;