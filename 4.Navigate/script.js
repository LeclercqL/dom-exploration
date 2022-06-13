const list = document.querySelector('ol');
const lastItem = document.querySelector('li:last-child'); // querySelector = écriture css
list.insertBefore(lastItem, list.firstElementChild); // (élément, position d'élément)

const sections = document.querySelectorAll('section');
const title2 = sections[1].querySelector('h2');
const title3 = sections[2].querySelector('h2');
sections[1].insertBefore(title3, sections[1].firstElementChild);
sections[2].insertBefore(title2, sections[2].firstElementChild);

sections[2].remove();