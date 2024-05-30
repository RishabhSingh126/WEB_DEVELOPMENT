console.log("He is good boy")
console.log("He is excellent boy");


//The both set time out will run at last in console
setTimeout(()=>{
    console.log("I am inside set time out")
},0)

setTimeout(() => {
    console.log("I am inside 2nd set time out")
}, 0);

console.log("The end")

const callback = (arg) => {
    console.log(arg)
}


const loadScript =(src, callback) => {
    let sc=document.createElement("script");
    sc.src= src;
    sc.onload=callback("Hii everyone");
    document.head.append(sc)
}

loadScript("https://www.google.co.in/",callback)

