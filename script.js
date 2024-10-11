let form = document.getElementById('myform')
form.addEventListener("submit", function (s) {
    //prevent page 
    s.preventDefault()

    // get form data 
    let salary = Number(document.getElementById('salary').value);
    let benefits = Number(document.getElementById('benefit').value);

    //calclate gross

    function get_gross_salary(basic_salary, benefits) {
        let get_gross_salary = basic_salary + benefits
        return get_gross_salary

    }
    let gross_salary = get_gross_salary(salary, benefits)
    document.getElementById("gross").innerHTML = gross_salary
    //calculate nhif

    function calcnhif(a) {
        let nhif_contibution = 0
        if (a >= 0 && a <= 5999) {
            nhif_contibution = 150

        }
        else if (a >= 6000 && a <= 7999) {
            nhif_contibution = 300
        }
        else if (a >= 8000 && a <= 11999) {
            nhif_contibution = 400
        }
        else if (a >= 12000 && a <= 14999) {
            nhif_contibution = 500
        }
        else if (a >= 15000 && a <= 19999) {
            nhif_contibution = 600
        }
        else if (a >= 20000 && a <= 24999) {
            nhif_contibution = 750
        }
        else if (a >= 25000 && a <= 29999) {
            nhif_contibution = 850
        }
        else if (a >= 30000 && a <= 34999) {
            nhif_contibution = 900
        }
        else if (a >= 35000 && a <= 39999) {
            nhif_contibution = 950
        }
        else if (a >= 40000 && a <= 44999) {
            nhif_contibution = 1000
        }
        else if (a >= 45000 && a <= 49999) {
            nhif_contibution = 1100
        }
        else if (a >= 50000 && a <= 59999) {
            nhif_contibution = 1200
        }
        else if (a >= 60000 && a <= 69999) {
            nhif_contibution = 1300
        }
        else if (a >= 70000 && a <= 79999) {
            nhif_contibution = 1400
        }
        else if (a >= 6000 && a <= 7999) {
            nhif_contibution = 1500
        }
        else if (a >= 80000 && a <= 89999) {
            nhif_contibution = 1600
        }
        else if (a >= 90000 && a <= 99999) {
            nhif_contibution = 1700
        }
        else {
            nhif_contibution = 1800
        }
        return nhif_contibution
    }

    let NHIF = calcnhif(gross_salary)
    document.getElementById("nhif").innerHTML = NHIF


    //calculate nssf
    function calc_nssf(a) {
        let nssfcontribution = 0
        if (a >= 0 && a <= 18000) {
            nssfcontribution = a * 0.06

        }
        else {
            nssfcontribution = 18000 * 0.06
        }
        return nssfcontribution
    }
    let NSSF = calc_nssf(gross_salary)
    document.getElementById("nssf").innerHTML = NSSF

    //cal nhdf

    function cal_nhdf(a) {
        let nhdfcontribution = a * 0.015
        return nhdfcontribution
    }
    let NHDF = cal_nhdf(gross_salary)
    document.getElementById("nhdf").innerHTML = NHDF


    // calculate taxable income
    function cal_Taxable_income(gross, nssf, nhif, nhdf) {
        let taxableincome = gross - (nssf + nhdf + nhif)
        return taxableincome
    }
    let taxbale_income = cal_Taxable_income(gross_salary, NSSF, NHIF, NHDF)
    console.log(taxbale_income);

    // calculate final payee

    function cal_payee(tax, relief = 2400) {
        let payee = 0
        if (tax >= 0 && tax <= 24000) {
            payee = 0

        } else if (tax > 24000 && tax <= 32333) {
            payee = (24000 * 0.1) + ((tax - 24000) * 0.25) - relief;

        } else if (tax > 32333 && tax <= 500_000) {
            payee = (24000 * 0.1) + (8333 * 0.25) + ((tax - 32333) * 0.30) - relief;

        } else if (tax > 500_000 && tax <= 800_000) {
            payee = ((24000 * 0.1) + (8333 * 0.25) + (467667 * 0.30) + (tax - 500_000) * 0.325) - relief;

        } else {
            payee = (24000 * 0.1) + (8333 * 0.25) + (467667 * 0.30) + (300_000 * 0.325) + ((tax - 800_000) * 0.35) - relief;
        }
        return payee;
    }
    let Payee = cal_payee(taxbale_income)
    document.getElementById("final payee").innerHTML = Payee


    function cal_netpay(gross, nssf, nhif,nhdf, payee) {
        let netpay = gross - (nhif + nhdf + nssf  + payee)
        return netpay


    }
    let net_pay = cal_netpay(gross_salary,NSSF,NHIF,NHDF,Payee)
    document.getElementById("net pay").innerHTML = net_pay

})




//  //nhif
//  function calcnhif(a) {
//     let nhif_contibution = 0
//     if (a >= 0 && a <= 5999) {
//         nhif_contibution = 150

//     }
//     else if (a >= 6000 && a <= 7999) {
//         nhif_contibution = 300
//     }
//     else if (a >= 8000 && a <= 11999) {
//         nhif_contibution = 400
//     }
//     else if (a >= 12000 && a <= 14999) {
//         nhif_contibution = 500
//     }
//     else if (a >= 15000 && a <= 19999) {
//         nhif_contibution = 600
//     }
//     else if (a >= 20000 && a <= 24999) {
//         nhif_contibution = 750
//     }
//     else if (a >= 25000 && a <= 29999) {
//         nhif_contibution = 850
//     }
//     else if (a >= 30000 && a <= 34999) {
//         nhif_contibution = 900
//     }
//     else if (a >= 35000 && a <= 39999) {
//         nhif_contibution = 950
//     }
//     else if (a >= 40000 && a <= 44999) {
//         nhif_contibution = 1000
//     }
//     else if (a >= 45000 && a <= 49999) {
//         nhif_contibution = 1100
//     }
//     else if (a >= 50000 && a <= 59999) {
//         nhif_contibution = 1200
//     }
//     else if (a >= 60000 && a <= 69999) {
//         nhif_contibution = 1300
//     }
//     else if (a >= 70000 && a <= 79999) {
//         nhif_contibution = 1400
//     }
//     else if (a >= 6000 && a <= 7999) {
//         nhif_contibution = 1500
//     }
//     else if (a >= 80000 && a <= 89999) {
//         nhif_contibution = 1600
//     }
//     else if (a >= 90000 && a <= 99999) {
//         nhif_contibution = 1700
//     }
//     else {
//         nhif_contibution = 1800
//     }
//     return nhif_contibution
// }



// let NHIF = calcnhif(gross)
// document.getElementById("nhif").innerHTML

// function calc_nssf(a) {
//     let nssfcontribution = 0
//     if (a >= 0 && a <= 18000) {
//         nssfcontribution = a * 0.06

//     }
//     else {
//         nssfcontribution = 18000 * 0.06
//     }
//     return nssfcontribution
// }



// function cal_nhdf(a) {
//     let nhdfcontribution = a * 0.015
//     return nhdfcontribution
// }




