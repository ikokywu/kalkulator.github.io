const input = document.querySelector(".input input"),
  btnNumbers = document.querySelectorAll(".btn"),
  screen = document.querySelector(".screen p");

let valueA, valueB, operation, result;

btnNumbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (number.classList.contains("number")) {
      input.value += number.innerHTML;
    } else if (number.classList.contains("operation")) {
      if (input.value === "") return;
      valueA = parseInt(input.value);
      operation = number.innerHTML;
      screen.innerHTML = `${valueA} ${operation}`;
      input.value = "";
    } else if (number.classList.contains("result")) {
      if (input.value === "") return;
      valueB = parseInt(input.value);
      screen.innerHTML = `${valueA} ${operation} ${valueB} =`;
      input.value = getResult();
    } else {
      input.value = "";
      screen.innerHTML = "";
      valueA = null;
      valueB = null;
      operation = null;
      result = null;
    }
  });
});

const getResult = () => {
  if (operation === "+") {
    result = valueA + valueB;
  } else if (operation === "-") {
    result = valueA - valueB;
  } else if (operation === "x") {
    result = valueA * valueB;
  } else if (operation === "/") {
    result = valueA / valueB;
  }
  return result;
};
