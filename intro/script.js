
document.title = "Modifying the DOM";
console.log(document.title);
document.body.style.backgroundColor = "#FF69B4";
document.body.style.backgroundColor = "rgb(" + randomNumber() + ", " + randomNumber() + ", " + randomNumber() + ")";
function randomNumber(min = 0, max = 255) {
    return Math.floor(Math.random() * (max - min) + min);
};
var bodyChildren = document.body.children;
var i = 0;
for (const element of bodyChildren) { //i : index ; v = valeur tabl.
    if (i === 1) {

        console.log(element.children)
    }
    i++
}