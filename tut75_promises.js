console.log("This is promises")

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a < 0.5) {
        reject("No the number is generated is not supporting")
    }
    else {
        setTimeout(() => {
            console.log("I am done");
            resolve("Hii everyone")
        }, 3000);
    }
})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a < 0.5) {
        reject("No the number is generated is not supporting")
    }
    else {
        setTimeout(() => {
            console.log("I am done 2");
            resolve("Hii everyone 2")
        }, 1000);
    }
})

//let p3=  Promise.all([prom1,prom2])
//let p3=  Promise.allSettled([prom1,prom2])
let p3=  Promise.race([prom1,prom2])
p3.then ((a) => {
    console.log(a)
}).catch ((err) => {
    console.log(err)
})


//prom1.then((a) => {      //the value of a is Hii everyone which is written above in resolve 
//    console.log(a)
//}).catch((err) => {
//    console.log(err)
//})


