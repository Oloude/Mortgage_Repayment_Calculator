function calculateMortgage(amount: number, rate: number, term: number): number {
    const monthlyRate = rate / 100 / 12; // Convert annual rate to monthly decimal
    const totalPayments = term * 12; // Total number of payments (months)
  
    // Mortgage payment formula
    const monthlyPayment = 
      (amount * monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
      (Math.pow(1 + monthlyRate, totalPayments) - 1);
  
    return monthlyPayment;
  }

  
  export default calculateMortgage