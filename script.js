let range = document.getElementById("range");
let result = document.getElementById("sliderText");
let box = document.getElementById("box");

range.oninput = function () {
  input = range.value;
  result.innerHTML = range.value;
  box.style.left = `${range.value}%`;

  if (range.value == 20) {
    box.style.backgroundColor = "#007bff";
  } else if (range.value == 70) {
    box.style.backgroundColor = "#dc3644";
  } else if (range.value == 0) {
    box.style.backgroundColor = "#6c757d";
  } else if (range.value == 80) {
    box.style.left = `80%`;
  }
};
