//Given the basic salary and benefits of an employee,
// write a program that would calculate the Payee Tax, NHIF, NSSF Deductions and net salary.
const prompt = require("prompt-sync")();
let basicSalary = parseInt(prompt("Enter the basic salary: "));
let employeeBenefits = parseInt(prompt("Enter the employee benefits: "));
let grossSalary = parseInt(basicSalary) + parseInt(employeeBenefits);
let tax = grossSalary * 0.2;
function calculateNHIFDeduction (grossSalary){
    let deduction = 0
    if (grossSalary <6000){
        deduction = 150
    } else if (grossSalary>=6000 && grossSalary<8000){
        deduction = 300
    }else if (grossSalary>=8000 && grossSalary<12000){
        deduction = 400
    }else if (grossSalary>=12000 && grossSalary<15000){
        deduction = 500
    }else if (grossSalary>=15000 && grossSalary<20000){
        deduction = 600
    }else if (grossSalary>=20000 && grossSalary<25000){
        deduction = 750
    }else if (grossSalary>=25000 && grossSalary<30000){
        deduction = 850
    }else if (grossSalary>=30000 && grossSalary<35000){
        deduction = 900
    }else if (grossSalary>=35000 && grossSalary<40000){
        deduction = 950
    }else if (grossSalary>=40000 && grossSalary<4500){
        deduction = 1000
    }else if (grossSalary>=45000 && grossSalary<50000){
        deduction = 1100
    }else if (grossSalary>=50000 && grossSalary<60000){
        deduction = 1200
    }else if (grossSalary>=60000 && grossSalary<70000){
        deduction = 1300
    }else if (grossSalary>=70000 && grossSalary<80000){
        deduction = 1400
    }else if (grossSalary>=80000 && grossSalary<90000){
        deduction = 1500
    }else if (grossSalary>=90000 && grossSalary<100000){
        deduction = 1600
    }else{
        deduction = 1700
    }
    return deduction
}
function calculatePayee(grossSalary){
    let payee = 0
    if (grossSalary <= 24000){
        payee = grossSalary*0.1
    }else if (grossSalary>24000 && grossSalary <= 323333){
        payee = grossSalary*0.25
    }else{
        payee = grossSalary*0.3
    }
    return payee
}
calculateNHIFDeduction(grossSalary);
calculatePayee(grossSalary);
let getNssf  =  grossSalary*0.06;
let totalDeductions = getNssf + calculateNHIFDeduction(grossSalary) + calculatePayee(grossSalary) + tax;
let netSalary = grossSalary - totalDeductions;
netSalary;
console.log("Net salary is: " + netSalary);
