let textInput = document.getElementById("textInput")
let ausgabe = document.getElementById("ausgabe")
let slider = document.getElementById("fontSize");

function changeFontsSize(font){
    ausgabe.style.fontFamily = font.value
    ausgabe.style.color = font.value
    ausgabe.innerHTML = textInput.value
}

slider.addEventListener("input", function(){
    let size = slider.value
    ausgabe.style.fontSize = size + "px"
})
