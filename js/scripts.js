const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");

nameInput.addEventListener("change", () => {
    nameInput.value = nameInput.value.toUpperCase();
});

emailInput.addEventListener("change", () => {
    emailInput.value = emailInput.value.toLowerCase();
});