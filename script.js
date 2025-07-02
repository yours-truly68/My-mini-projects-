const count = document.getElementById("count"); //the count h1 element
const plusBtn = document.getElementById("plus-btn"); // the plusBtn
const minusBtn = document.getElementById("minus-btn"); // the minusBtn
const resetBtn = document.getElementById("reset-btn"); //resetBtn
const stepInput = document.getElementById("step");

function getStepValue() {
  const step = parseInt(stepInput.value);
  return isNaN(step) ? 1 : step; // fallback to 1
}

plusBtn.addEventListener("click", () => {
  const step = getStepValue();
  count.innerText = parseInt(count.innerText) + step;
});

minusBtn.addEventListener("click", () => {
  const step = getStepValue();
  count.innerText = parseInt(count.innerText) - step;
});

resetBtn.addEventListener("click", () => {
  count.innerText = 0;
  step.value = 1;
});
