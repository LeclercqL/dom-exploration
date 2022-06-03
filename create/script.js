addElement()
function addElement () {
    let newSection = document.createElement('section');
    let apprenant1 = document.createTextNode('Latifa');
    newSection.appendChild(apprenant1);
    
    let article = document.getElementById("p");
    document.body.insertBefore(newSection, article);
}