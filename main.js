let celsius = document.querySelector("#celsius");
let fahrenheit = document.querySelector("#fahrenheit");
let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let formula = celsius.value * 1.8 + 32;
  if (celsius.value === "") {
    fahrenheit.value = "";
  } else {
    fahrenheit.value = formula;
  }
});
