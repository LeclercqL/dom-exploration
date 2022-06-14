const inputName = document.getElementById("firstname"); 
const firstName = document.getElementById("display-firstname");
inputName.addEventListener("keyup", () => { // Affiche le nom entré par l'utilisateur
    console.log(inputName.value);
    firstName.innerHTML = inputName.value;
});

const inputAge = document.getElementById("age"); // Affiche l'age + phrase si + de 18 ans
const firstAge = document.getElementById("a-hard-truth");
inputAge.addEventListener("keyup", () => {
    if (inputAge.value >= 18) {
        firstAge.style.visibility = "visible"; // Phrase visible
    } else {
        firstAge.style.visibility = "hidden"; // Phrase non visible
}});

const password = document.getElementById("pwd"); // 1er champ mdp
const passwordConfirm = document.getElementById("pwd-confirm"); // 2e champ mdp

password.addEventListener('keyup', () => { // Event - de 6 caractères sur le mdp
    if (password.value.length < 6) {
        password.style.backgroundColor = 'rgb(207, 190, 255)';
    } else {
        password.style.backgroundColor ='white';
    }
});

passwordConfirm.addEventListener('keyup', () => { // Event - de 6 caractères sur le match. mdp
    if (passwordConfirm.value.length < 6) {
        passwordConfirm.style.backgroundColor = 'rgb(207, 190, 255)';
    } else {
        passwordConfirm.style.backgroundColor ='white';
    }
});

passwordConfirm.addEventListener('keyup', () => { // 
    if (password.value === passwordConfirm) {
        passwordConfirm.style.borderColor = 'green';
    } else {
        passwordConfirm.style.borderColor = 'red';
    }
});