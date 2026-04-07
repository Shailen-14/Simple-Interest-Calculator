const principal = document.getElementById("principal"),
  interest = document.getElementById("interest"),
  years = document.getElementById("years"),
  result = document.querySelector(".result");

function calculate() {
  if (
    principal.value < 0 ||
    isNaN(principal.value) ||
    interest.value < 0 ||
    isNaN(interest.value) ||
    years.value < 0 ||
    isNaN(years.value)
  ) {
    principal.value = 0;
    interest.value = 0;
    years.value = 0;
  }

  const calculation = principal.value * (interest.value / 100) * years.value;

  result.innerHTML = `Interest:<span>${calculation.toLocaleString("en-ZA", {
    style: "currency",
    currency: "ZAR",
  })}</span>`;
}
