const defaultNumber = 0;
let finalResult = defaultNumber;

// return the user_input as integer type
function getUserInput() {
  return parseInt(userInput.value);
}

function sum() {
  const userInput = getUserInput();
  const prevNumber = finalResult;
  finalResult += userInput;
  outputResult(finalResult, `${prevNumber} + ${userInput}`);
}
function subtract() {
  const userInput = getUserInput();
  const prevNumber = finalResult;
  finalResult -= userInput;
  outputResult(finalResult, `${prevNumber} - ${userInput}`);
}
function multiplay() {
  const userInput = getUserInput();
  const prevNumber = finalResult;
  finalResult *= userInput;
  outputResult(finalResult, `${prevNumber} * ${userInput}`);
}
function divide() {
  const userInput = getUserInput();
  const prevNumber = finalResult;
  finalResult /= userInput;
  outputResult(finalResult, `${prevNumber} / ${userInput}`);
}

addBtn.addEventListener("click", sum);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiplay);
divideBtn.addEventListener("click", divide);
