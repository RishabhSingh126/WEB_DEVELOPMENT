let button=document.getElementById("btn");

//List of all mouse events
//https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events
button.addEventListener("click",()=>{
    //alert("I was clicked  yayyyyy!!!!")

    document.querySelector(".box").innerHTML="<b>Hey you are clicked </b>Enjoy your click"
})
button.addEventListener("contextmenu",()=>{
    alert("Don't do right click")
})

document.addEventListener("keydown",(e)=>{
    console.log(e,e.key, e.keyCode)
})