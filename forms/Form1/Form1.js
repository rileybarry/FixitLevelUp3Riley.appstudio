function carLoanPayment(p, r, n) {
  return p * (r*((1+r)**n))/(((1+r)**n)-1)
}

function homeLoanPayment(p, r, n) {
  return p * (r*((1+r)**n))/(((1+r)**n)-1)
}

let question = prompt(`Enter 'car' to use the Car Loan Payment Calculator or 'home' to use the Home Loan Payment Calculator. Enter 'stop' if you would like to exit the calculator program.`);

while(question == 'car' || question == 'home' || question == 'stop') {
  if(question == 'car') {
    let rate = prompt(`Please enter the interest rate of your loan (percent without "%").`);
    let rateAdj = rate / 100;
    let amount = parseInt(prompt(`Please enter the amount of your loan.`));
    let months = parseInt(prompt(`Please enter how many months your loan's duration is.`));
    console.log(`A car loan for ${amount} over ${months} months at ${rate}% interest would have a monthly payment of $${carLoanPayment(amount, rateAdj, months).toFixed(2)}.`);
    let question = prompt(`Enter 'car' to use the Car Loan Payment Calculator or 'home' to use the Home Loan Payment Calculator. Enter 'stop' if you would like to exit the calculator program.`);
    if(question = 'stop') {
      console.log(`You have exited the program.`);
      break;
    }
  } else if(question == 'home') {
    let rate = prompt(`Please enter the interest rate of your loan (percent without "%").`);
    let rateAdj = rate / 100;
    let amount = parseInt(prompt(`Please enter the amount of your loan.`));
    let years = parseInt(prompt(`Please enter how many years your loan's duration is (either 15 or 30).`));
    let months = years * 12;
    alert(`A home loan for ${amount} over ${years} years at ${rate}% interest would have a monthly payment of $${homeLoanPayment(amount, rateAdj, months).toFixed(2)}.`);
    let question = prompt(`Enter 'car' to use the Car Loan Payment Calculator or 'home' to use the Home Loan Payment Calculator. Enter 'stop' if you would like to exit the calculator program.`);
    if(question = 'stop') {
    console.log(`You have exited the program.`);
      break;
    }
  } else if(question == 'stop') {
    console.log(`You have exited the program.`);
    break;
  }
}