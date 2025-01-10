
document.addEventListener("DOMContentLoaded", () => {
    const generateBtn = document.getElementById("generate-btn");
    const salarySlipTextarea = document.getElementById("salary-slip");

    generateBtn.addEventListener("click", () => {

        const employeeName = document.getElementById("employee-name").value;
        const designation = document.getElementById("designation").value;
        const dob = document.getElementById("dob").value;
        const doj = document.getElementById("doj").value;
        const pan = document.getElementById("pan").value;
        const bank = document.getElementById("bank").value;

        const basic = parseFloat(document.getElementById("basic").value) || 0;
        const hra = parseFloat(document.getElementById("hra").value) || 0;
        const da = parseFloat(document.getElementById("da").value) || 0;
        const medical = parseFloat(document.getElementById("medical").value) || 0;

        const pf = parseFloat(document.getElementById("pf").value) || 0;
        const tax = parseFloat(document.getElementById("tax").value) || 0;

        const totalEarnings = basic + hra + da + medical;
        const totalDeductions = pf + tax;
        const netSalary = totalEarnings - totalDeductions;


        const salarySlipContent = `
        Payroll ATS - Salary Slip

        Employee Details:
        -------------------------
        Name           : ${employeeName || "N/A"}
        Designation    : ${designation || "N/A"}
        Date of Birth  : ${dob || "N/A"}
        Date of Joining: ${doj || "N/A"}
        PAN            : ${pan || "N/A"}
        Bank A/C No    : ${bank || "N/A"}

        Earnings:
        -------------------------
        Basic          : ${basic.toFixed(2)}
        HRA            : ${hra.toFixed(2)}
        DA             : ${da.toFixed(2)}
        Medical        : ${medical.toFixed(2)}
        Total Earnings : ${totalEarnings.toFixed(2)}

        Deductions:
        -------------------------
        PF             : ${pf.toFixed(2)}
        Tax            : ${tax.toFixed(2)}
        Total Deductions: ${totalDeductions.toFixed(2)}

        Net Salary:
        -------------------------
        Net Salary     : ${netSalary.toFixed(2)}
        `;

        // Display the salary slip in the textarea
        salarySlipTextarea.value = salarySlipContent;


    });
});

