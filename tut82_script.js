async function sleep()
{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

function sum(a,b,c)
{
    return a+b+c;
}

//This function invokes immediatly
//Concept of IIF(Immediate Invoking Function)
(async function main()
    {
        //let a= await sleep()
        //console.log(a)
        //let b= await sleep()  
        //console.log(b)  

        //Concept of destructing
        //let [x,y, ...rest]=[1,5,7,10,12,14,18]  // Numbers other than 1 and 5 will be in rest
        //console.log(x,y,rest)

        let obj={
            a:1,
            b:2,
            c:3
        }
        let {a,b}={obj};
        console.log(a,b);

        let arr=[1,4,8];
        console.log(arr[0]+arr[1]+arr[2]);
        console.log(sum(arr[0],arr[1],arr[2]));
        console.log(sum(...arr));
    }
)
()       //Invoking the function