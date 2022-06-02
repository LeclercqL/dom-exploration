const title = document.querySelectorAll('[class="important"]');
title.forEach(function(element) {
    element.setAttribute('title', 'This is an important item');
});

const image = document.querySelectorAll('img');
for (let i = 0; i < image.length; i++) {
    if (!image[i].classList.contains('important')) {
        image[i].style.display = 'none';
    }
}

const paragraph = document.querySelectorAll('p');

randomColor = () => {
    let r = Math.floor(Math.random() * 200);
    let g = Math.floor(Math.random() * 250);
    let b = Math.floor(Math.random() * 172);
}

for (let i = 0; i < paragraph.length; i++) {
    if (paragraph[i].classList.contains('important')) {
        paragraph[i].style.color = 'blue';
    } else {
        paragraph[i].style.color = random()
    }
}