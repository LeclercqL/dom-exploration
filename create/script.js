function addElement () {
    let newSection = document.createElement('section');
    let apprenant1 = document.createTextNode('Latifa');
    newSection.appendChild(Latifa);
    let article = document.getElementById("p");
    document.body.insertBefore(newSection, article);
}