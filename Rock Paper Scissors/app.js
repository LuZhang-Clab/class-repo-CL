// steps

//1. identify and select button
let button;
button = document.getElementById("button");

//2. listen to event click on the button
button.addEventListener("click", changeParaimg);

//3. change the img and paragraph in the container
function changeParaimg() {
    let result1 = document.getElementById("result1");
    result1.textContent = "She wins";

    let image = document.getElementById("result2");
    image.src = "pic2.png";
}

//4. button to change the background color
button = document.getElementById("button");
button.addEventListener("click", function(){
console.log("color changes");
document.body.style.background = "#36454F"
})

