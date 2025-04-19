let selectedType = '';
let selectedHospital = '';

document.querySelectorAll('.hospital-list li').forEach(item => {
  item.addEventListener('click', () => {
    // Remove selection from all
    document.querySelectorAll('.hospital-list li').forEach(li => {
      li.classList.remove('selected');
    });

    // Add selected class to clicked one
    item.classList.add('selected');

    // Save selected hospital data
    selectedType = item.dataset.type;
    selectedHospital = item.dataset.name;

    // Enable button
    document.getElementById('proceedBtn').disabled = false;
  });
});

document.getElementById('proceedBtn').addEventListener('click', () => {
  if (!selectedHospital) {
    alert("Please select a hospital first.");
    return;
  }

  const query = `?type=${encodeURIComponent(selectedType)}&hospital=${encodeURIComponent(selectedHospital)}`;
  window.location.href = `payment.html${query}`;
});
