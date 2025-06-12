const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const numbers = document.getElementById("number");
let result = 0;

increase.addEventListener("click", function () {
  result = result + 1;

  numbers.innerText = result;
});

reset.addEventListener("click", () => {
  result = 0;

  numbers.innerText = result;
});

decrease.addEventListener("click", function () {
  result = result - 1;

  numbers.innerText = result;
});
