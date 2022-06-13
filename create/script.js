const arr = ['Latifa', 'Antoine', 'Tanguy'];
const arrRandom = arr.sort((a, b) => 0.5 - Math.random());
const article = document.querySelector('article');
const section = document.createElement('section'); // Crée l'élément mais ne l'affiche pas
article.appendChild(section); //Mtn que createElement est crée, on peut insérer 'section' dans l'article

for (const learner of arrRandom) {
    const par = document.createElement('p');
    const currentPar = section.appendChild(par);
    const textNode = document.createTextNode(learner);
    currentPar.appendChild(textNode);
    const color = randomBgColor();
    currentPar.style.backgroundColor = color;
    if (lightOrDark(color) == 'light') {
        currentPar.style.color = 'black';
    }
    else {
        currentPar.style.color = 'white';
    }
}

function lightOrDark(color) {

    color = color.substring(4, color.length - 1).replace(/ /g, '').split(',');
    let r = color[0];
    let g = color[1];
    let b = color[2];

    // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
    hsp = Math.sqrt(
        0.299 * (r * r) +
        0.587 * (g * g) +
        0.114 * (b * b)
    );

    // Using the HSP value, determine whether the color is light or dark
    if (hsp > 127.5) {

        return 'light';
    }
    else {

        return 'dark';
    }
}
function randomBgColor() {
    let x = Math.floor(Math.random() * 255);
    let y = Math.floor(Math.random() * 255);
    let z = Math.floor(Math.random() * 255);
    return "rgb(" + x + "," + y + "," + z + ")"; //Permet de dire à randomBgColor() comment elle doit agir/ce qu'elle doit aff.
}