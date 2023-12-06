const button = document.querySelector("input");
button.addEventListener("click", updateButton);

function updateButton() {
    if(button.value == "Bigger") {
        alert("Hello, world!");
    }
}

