console.log("Arpan")

let boxes = document.getElementsByClassName("box");

console.log(boxes);

boxes[0].style.backgroundColor = "red";

document.querySelector(".box").style.backgroundColor = "blue";

let allBoxes = document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "green";
})

