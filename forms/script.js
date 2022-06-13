const inputName = document.getElementById("firstname");
const firstName = document.getElementById("display-firstname");
inputName.addEventListener("keyup", () => {
    console.log(inputName.value);
    firstName.innerHTML = inputName.value;
});

const inputAge = document.getElementById("age");
const firstAge = document.getElementById("a-hard-truth");
inputAge.addEventListener("keyup", () => {
    if (inputAge.value >= 18) {
        firstAge.style.visibility = "visible";
    } else {
        firstAge.style.visibility = "hidden";
}});

const password = document.getElementById("pwd");
const passwordConfirm = document.getElementById("pwd-confirm");

password.addEventListener('keyup',() => {
    
})