const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's' // Laps de temps entre les clics
}

const clickOnSquare = (e) => {
  const color = e.target.classList[1];
  const displayedSquare = document.querySelector('.displayedsquare-wrapper');
  const newSquare = document.createElement('div');
  newSquare.classList.add(e.target.classList[0]);
  newSquare.classList.add(color); // Le 1 = la 2e class => la couleur ici
  displayedSquare.appendChild(newSquare);
  newSquare.addEventListener('click', alertSquare);

  const list = document.querySelector('ul');
  const item = document.createElement('li');
  const text = '[' + getElapsedTime() + '] Created a new ' + color + ' square';
  const textNode = document.createTextNode(text);
  list.appendChild(item);
  item.appendChild(textNode);

  console.log(color)
  console.log(getElapsedTime()) // Affiche laps de temps entre les clics
}

const pressSpaceBar = (e) => {
  console.log('pressSpaceBar');
  document.body.style.backgroundColor = randomBgColor();
  const list = document.querySelector('ul');
  const item = document.createElement('li');
  const text = '[' + getElapsedTime() + '] Press spacebar';
  const textNode = document.createTextNode(text);
  list.appendChild(item);
  item.appendChild(textNode);
}

const pressL = () => {
  const list = document.querySelector('ul');
  list.remove();
  const sections = document.querySelectorAll('section');
  const newList = document.createElement('ul');
  sections[2].appendChild(newList);
}

const pressS = () => {
  const squares = document.querySelector('.displayedsquare-wrapper');
  squares.remove();
  const main = document.querySelector('main');
  const newSquares = document.createElement('section');
  newSquares.classList.add("displayedsquare-wrapper"); // Crée une classe à l'élément sélectionner
  main.insertBefore(newSquares, main.firstElementChild);
}

const alertSquare = (e) => {
  const color = e.target.classList[1];
  alert(color);
}

const randomBgColor = () => {
  let x = Math.floor(Math.random() * 255);
  let y = Math.floor(Math.random() * 255);
  let z = Math.floor(Math.random() * 255);
  return "rgb(" + x + "," + y + "," + z + ")"; //Permet de dire à randomBgColor() comment elle doit agir/ce qu'elle doit aff.
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare);
}
document.body.onkeyup = function (e) {
  if (e.key == " " || e.code == "Space" || e.keyCode == 32) { // https://www.toptal.com/developers/keycode
    pressSpaceBar();
  }
  else if (e.key == "l" || e.code == "KeyL" || e.keyCode == 76) {
    pressL();
  }
  else if (e.key == "s" || e.code == "KeyS" || e.keyCode == 83) {
    pressS();
  }
}
