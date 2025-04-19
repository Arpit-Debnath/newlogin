const fill = document.getElementById("progressFill");
const totalSteps = 5;
let currentStep = 0;

function goToNextStep() {
  if (currentStep < totalSteps) {
    currentStep++;
    const widthPercent = (currentStep / totalSteps) * 100;
    fill.style.width = widthPercent + "%";
  } else {
    clearInterval(interval); 
  }
}

const interval = setInterval(goToNextStep, 1000); 

// Wait until the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const bookBtn = document.getElementById("book-btn");
  const dateInput = document.getElementById("vaccine-date");
  const vaccineSelect = document.getElementById("vaccine-select");

  bookBtn.addEventListener("click", () => {
    const date = dateInput.value;
    const vaccine = vaccineSelect.value;

    if (!date || !vaccine) {
      alert("❗ Please select both a date and a vaccine before booking.");
      return;
    }

    alert(`✅ Appointment booked for "${vaccine}" on ${date}`);
    
    // Reset fields
    dateInput.value = "";
    vaccineSelect.selectedIndex = 0;
  });

  // Optional: log all selected vaccines when checkboxes change
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(cb => {
    cb.addEventListener("change", () => {
      const selected = Array.from(checkboxes)
        .filter(c => c.checked)
        .map(c => c.parentElement.textContent.trim());
      console.log("Vaccines marked complete:", selected);
    });
  });
});
