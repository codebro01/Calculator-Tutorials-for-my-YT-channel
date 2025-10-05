const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clearBtn = document.getElementById("clear");
const equalBtn = document.getElementById("equal");
const toggleBtn = document.getElementById("toggle-mode");
const scientificSection = document.querySelector(".scientific");

let currentInput = "";
let scientificMode = false;

buttons.forEach(button => {
  const value = button.dataset.value;
  const func = button.dataset.func;

  button.addEventListener("click", () => {
    if (value) {
      currentInput += value;
      display.value = currentInput;
    } else if (func) {
      handleFunction(func);
    }
  });
});

function handleFunction(func) {
  try {
    switch (func) {
      case "sin":
        currentInput = Math.sin(eval(currentInput) * Math.PI / 180);
        break;
      case "cos":
        currentInput = Math.cos(eval(currentInput) * Math.PI / 180);
        break;
      case "tan":
        currentInput = Math.tan(eval(currentInput) * Math.PI / 180);
        break;
      case "log":
        currentInput = Math.log10(eval(currentInput));
        break;
      case "sqrt":
        currentInput = Math.sqrt(eval(currentInput));
        break;
      case "square":
        currentInput = Math.pow(eval(currentInput), 2);
        break;
      case "pi":
        currentInput += Math.PI;
        break;
      case "exp":
        currentInput += Math.E;
        break;
    }
    display.value = currentInput;
  } catch (error) {
    display.value = "Error";
    currentInput = "";
  }
}

clearBtn.addEventListener("click", () => {
  currentInput = "";
  display.value = "";
});

equalBtn.addEventListener("click", () => {
  try {
    currentInput = eval(currentInput);
    display.value = currentInput;
  } catch (error) {
    display.value = "Error";
    currentInput = "";
  }
});

toggleBtn.addEventListener("click", () => {
  scientificMode = !scientificMode;
  scientificSection.style.display = scientificMode ? "grid" : "none";
  toggleBtn.textContent = scientificMode
    ? "Switch to Basic"
    : "Switch to Scientific";
});
