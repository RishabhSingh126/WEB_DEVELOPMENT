console.log("Hello World")

//let boxes=document.getElementsByClassName("box")
//console.log(boxes)

//boxes[2].style.backgroundColor="red";

//document.getElementById("box4").style.backgroundColor="green"

//document.querySelector(".box").style.backgroundColor="blue"

console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e=>
{
    e.style.backgroundColor="blue"
})

console.log(document.getElementsByTagName("div"))

let a=document.getElementsByTagName("div")
console.log(a[4].matches("#box4"))
console.log(a[2].closest("html"))
console.log(document.querySelector(".container").contains("a[2]"))  