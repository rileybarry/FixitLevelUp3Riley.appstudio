function carLoanPayment(p, r, n) {
  return p * (r*((1+r)**n))/(((1+r)**n)-1)
}

function homeLoanPayment(p, r, n) {
  return p * (r*((1+r)**n))/(((1+r)**n)-1)
}
//home 200000 30 5.7 = 1160.80 and car 30000 60 3.2 = 542
loop = true

while(loop = true) {
  let question = prompt(`Enter 'car' to use the Car Loan Payment Calculator or 'home' to use the Home Loan Payment Calculator. Enter 'stop' if you would like to exit the calculator program.`);
  if(question == 'car') {
    let rate = parseFloat(prompt(`Please enter the interest rate of your loan (percent without "%").`));
    let rateAdj = (rate / 12) / 100;
    let amount = parseInt(prompt(`Please enter the amount of your loan.`));
    let months = parseInt(prompt(`Please enter how many months your loan's duration is.`));
    alert(`A car loan for ${amount} over ${months} months at ${rate}% interest would have a monthly payment of $${carLoanPayment(amount, rateAdj, months).toFixed(2)}.`);
    
  } else if(question == 'home') {
    let rateOne = parseFloat(prompt(`Please enter the interest rate of your loan (percent without "%").`));
    let rateAdjOne = (rateOne / 12) / 100;
    let amountOne = parseInt(prompt(`Please enter the amount of your loan.`));
    let yearsOne = parseInt(prompt(`Please enter how many years your loan's duration is (either 15 or 30).`));
    let monthsOne = yearsOne * 12;
    alert(`A home loan for ${amountOne} over ${yearsOne} years at ${rateOne}% interest would have a monthly payment of $${homeLoanPayment(amountOne, rateAdjOne, monthsOne).toFixed(2)}.`);
    
  } else if(question == 'stop') {
    alert(`You have exited the program.`);
    break;
  }
}