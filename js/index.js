const example = (e) => {
  e.preventDefault();
  const fromInput = document.getElementById("example").value;
  document.getElementById("text").textContent = fromInput;
};

document.getElementById("btn").addEventListener("click", example);
