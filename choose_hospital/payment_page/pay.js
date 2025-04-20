// Fee amounts (can be dynamic later)
const vaccineFee = 500;
const convenienceCharge = 50;

// Update values
document.getElementById('vaccine-fee').textContent = `₹${vaccineFee}`;
document.getElementById('convenience-charge').textContent = `₹${convenienceCharge}`;
document.getElementById('total-payment').textContent = `₹${vaccineFee + convenienceCharge}`;

// Handle pay button
document.getElementById('pay-button').addEventListener('click', () => {
  const selectedMethod = document.querySelector('input[name="payment"]:checked').nextElementSibling.textContent;
  alert(`Payment of ₹${vaccineFee + convenienceCharge} via ${selectedMethod} is being processed.`);
});
