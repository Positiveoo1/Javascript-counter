document.addEventListener("DOMContentLoaded", function () {
    const counter = document.getElementById("counter");
    const countDisplay = document.querySelector(".count");
    const resetButton = document.getElementById("reset");
  
    let count = 0;
  
    counter.addEventListener("click", function () {
      count++;
      countDisplay.textContent = count;
    });
  
    resetButton.addEventListener("click", function () {
      count = 0;
      countDisplay.textContent = count;
    });
  });