
  function confirmAppointment() {
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const family = document.getElementById("family").value;
    const msg = document.getElementById("confirmationMsg");
  
    if (date && time && family) {
      msg.textContent = `✅ Appointment booked for ${family} on ${date} at ${time}`;
      msg.style.color = "#28a745";
    } else {
      msg.textContent = "⚠️ Please select family member, date and time.";
      msg.style.color = "#dc3545";
    }
  }
    