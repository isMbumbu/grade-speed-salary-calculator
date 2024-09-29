// Net Salary Calculator

function calculateNetSalary(basicSalary, benefits) {
    // Constants for deductions
    const NHIF = calculateNHIF(basicSalary + benefits);
    const NSSF = calculateNSSF(basicSalary);

    // Gross salary
    const grossSalary = basicSalary + benefits;

    // Calculate PAYE based on tax brackets
    const tax = calculatePAYE(grossSalary);

    // Net salary calculation
    const netSalary = grossSalary - (tax + NHIF + NSSF);

    return {
        grossSalary: grossSalary,
        tax: tax,
        NHIF: NHIF,
        NSSF: NSSF,
        netSalary: netSalary
    };
}

function calculatePAYE(grossSalary) {
    let tax = 0;

    if (grossSalary <= 24000) {
        tax = grossSalary * 0.10;
    } else if (grossSalary <= 32333) {
        tax = 2400 + (grossSalary - 24000) * 0.25;
    } else if (grossSalary <= 500000) {
        tax = 2400 + 2083.25 + (grossSalary - 32333) * 0.30;
    } else if (grossSalary <= 800000) {
        tax = 2400 + 2083.25 + 52999.99 + (grossSalary - 500000) * 0.325;
    } else {
        tax = 2400 + 2083.25 + 52999.99 + 97500 + (grossSalary - 800000) * 0.35;
    }

    return tax;
}

function calculateNHIF(grossSalary) {
    if (grossSalary < 6000) return 150;
    if (grossSalary < 8000) return 300;
    if (grossSalary < 12000) return 400;
    if (grossSalary < 15000) return 500;
    if (grossSalary < 20000) return 600;
    if (grossSalary < 25000) return 750;
    if (grossSalary < 30000) return 850;
    if (grossSalary < 35000) return 900;
    if (grossSalary < 40000) return 950;
    if (grossSalary < 45000) return 1000;
    if (grossSalary < 50000) return 1100;
    if (grossSalary < 60000) return 1200;
    if (grossSalary < 70000) return 1300;
    if (grossSalary < 80000) return 1400;
    if (grossSalary < 90000) return 1500;
    if (grossSalary < 100000) return 1600;
    return 1700; // 100,000 and above
}

function calculateNSSF(basicSalary) {
    if (basicSalary <= 7000) {
        return basicSalary * 0.06; // Tier I
    } else if (basicSalary <= 36000) {
        return 420; // Tier II max contribution
    }
    return 0; // Adjust as necessary for Tier II
}

// Input
let basicSalary = parseFloat(prompt("Enter basic salary:"));
let benefits = parseFloat(prompt("Enter benefits:"));

const salaryDetails = calculateNetSalary(basicSalary, benefits);
console.log(`Gross Salary: ${salaryDetails.grossSalary}`);
console.log(`Tax Deducted: ${salaryDetails.tax}`);
console.log(`NHIF Deducted: ${salaryDetails.NHIF}`);
console.log(`NSSF Deducted: ${salaryDetails.NSSF}`);
console.log(`Net Salary: ${salaryDetails.netSalary}`);
