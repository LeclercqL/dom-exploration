console.log(document.title);
document.title = "Modifiyng the DOM";
document.body.style.backgroundColor = "#FF69B4";
randomBgColor();
function randomBgColor() { // https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php
    var x = Math.floor(Math.random() * 255);
    var y = Math.floor(Math.random() * 255);
    var z = Math.floor(Math.random() * 255);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    document.body.style.background = bgColor;
    }

for(const child of document.body.children) {
    console.log(child);
}