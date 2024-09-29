// Net Salary Calculator

function calculateNetSalary(basicSalary, benefits) {
    const taxRate = 0.3; // Adjust according to the tax rates from provided links
    const NHIF = 150; // Sample deduction value
    const NSSF = 200; // Sample deduction value

    const grossSalary = basicSalary + benefits;
    const tax = grossSalary * taxRate;
    const netSalary = grossSalary - (tax + NHIF + NSSF);

    return {
        grossSalary: grossSalary,
        tax: tax,
        netSalary: netSalary
    };
}

// Input
let basicSalary = prompt("Enter basic salary:");
let benefits = prompt("Enter benefits:");
basicSalary = parseFloat(basicSalary);
benefits = parseFloat(benefits);

const salaryDetails = calculateNetSalary(basicSalary, benefits);
console.log(`Gross Salary: ${salaryDetails.grossSalary}`);
console.log(`Tax Deducted: ${salaryDetails.tax}`);
console.log(`Net Salary: ${salaryDetails.netSalary}`);