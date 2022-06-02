document.title = "Modifying the DOM";
console.log(document.title);
document.body.style.backgroundColor = "#FF69B4";
for(const element of document.body.getElementsByTagName("*")){
    console.log(element)
}