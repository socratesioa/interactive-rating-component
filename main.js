const form = document.getElementById("form");
const display = document.getElementById("selected-rating");
const radios = form.querySelectorAll('input[name="rating"]');
const submitBtn = form.querySelector('button[type="submit"]');
const rate = document.getElementById("rating-container");
const success = document.getElementById("thanks-container");

radios.forEach((radio) => {
  radio.addEventListener("change", () => {
    submitBtn.disabled = false;
  });
});

form.addEventListener("reset", () => {
  submitBtn.disabled = true;
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const selected = form.querySelector('input[name="rating"]:checked');
  const rating = selected.value;
  success.style.display = "flex";
  display.textContent = `You selected ${rating} out of 5`;
  rate.style.display = "none";
});
