function scrollToForm() {
  document.getElementById('donationForm').scrollIntoView({ behavior: 'smooth' });
}

function handleSubmit(event) {
  event.preventDefault(); // Prevents actual form submission
  alert("Thank you for your donation!");
  document.getElementById("form").reset(); // Optional: clears the form
}

document.getElementById('form').addEventListener('submit', async function (e) {
  e.preventDefault();
  const formData = {
    donorName: this.donorName.value,
    foodType: this.foodType.value,
    quantity: this.quantity.value,
    address: this.address.value,
    contact: this.contact.value
  };

  try {
    const res = await fetch('http://localhost:5000/api/donate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    const result = await res.json();
    document.getElementById('formMsg').textContent = result.message;
    this.reset();
  } catch (err) {
    document.getElementById('formMsg').textContent = 'Submission failed. Please try again!';
  }
});
