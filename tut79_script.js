alert("Hii everyone")
let a = prompt("Enter the first number")
let b = prompt("Enter the second number")

if (isNaN(a) || isNaN(b)) 
{
    throw SyntaxError("Sorry this is not allowed")
}
let sum = parseInt(a) + parseInt(b) 
//This is used to handle errors

//try {
//    console.log("The sum is",sum*x)
//} catch (error) {
//    console.log("Here error occurs")
//    alert(error.name)
//    alert(error.message)
//    alert(error.stack)
//}

//Using finally
//After the return statement the finally is executed
function main()
{
    let x=0;
    try {
        console.log("The sum is",sum*x)
        return true;
    } catch (error) {
        console.log("Here error occurs")
        return false;
    }
    finally
    {
        console.log("File are closed and db connection is closed")
    }
}
let c=main();

//ParseInt is used to convert string to number
//console.log("The sum is", sum*x)