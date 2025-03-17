import "../css/style.css";

console.log("Hello from main.js");

// Counter
const counterValue = document.querySelector("#counterValue");

// Buttons
const incrementButton = document.querySelector("#incrementButton");
const decrementButton = document.querySelector("#decrementButton");
const resetButton = document.querySelector("#resetButton");

let count = 0;

const renderCounter = () => {
  console.log("Counter value: ", count);
  counterValue.textContent = count;
};

renderCounter();

incrementButton.addEventListener("click", (event) => {
  count++;
  renderCounter();
});

decrementButton.addEventListener("click", (event) => {
  count--;
  renderCounter();
});

resetButton.addEventListener("click", (event) => {
  count = 0;
  renderCounter();
});
