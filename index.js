const Bigger = index.querySelector("Bigger");
const showButton = index.querySelector("Bigger + button");
showButton.addEventListener("click", () => {
  bigger.showAlert();
  alert("Hello, world!");
});
