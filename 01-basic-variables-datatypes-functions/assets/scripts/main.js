const defaultNumber = 0;
let finalResult = defaultNumber;

// return the user_input as integer type
function getUserInput() {
  return parseInt(userInput.value);
}

function sum() {
  const userInput = getUserInput();
  finalResult += userInput;
  outputResult(finalResult, "");
}
function subtract() {
  const userInput = getUserInput();
  finalResult -= userInput;
  outputResult(finalResult, "");
}
function multiplay() {
  const userInput = getUserInput();
  finalResult *= userInput;
  outputResult(finalResult, "");
}
function divide() {
  const userInput = getUserInput();
  finalResult /= userInput;
  outputResult(finalResult, "");
}

addBtn.addEventListener("click", sum);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiplay);
divideBtn.addEventListener("click", divide);
