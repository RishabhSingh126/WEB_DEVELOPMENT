let arr=[1,4,7,9]

arr[0]=566;
console.log(arr)
console.log(arr.length)

console.log(arr[2])

console.log(arr.toString())
console.log(arr.join(" and "))   /*adds "and" between array elements*/

arr.pop()
console.log(arr)

arr.push(100)
console.log(arr)

arr.push("HII")
console.log(arr)

arr.shift()          /*works similar like pop but remove element from first*/ 
console.log(arr)

arr.unshift("HELLO") /*works similar like push but add element at first position*/ 
console.log(arr)

delete arr[4]
console.log(arr)

let arr1=[1,2,3,4,8,9]
let arr2=[3,4,5,6]
let arr3=[7,8,9]
console.log(arr1.concat(arr2,arr3)) /*used to concat arrays*/

let arr4=[6,2,9,1,8]
console.log(arr4.sort())
/* splice (start index,number of elements to be deleted) */
let arr5=[1,2,3,4,5,6,7,8]
console.log(arr5.splice(1,3)) /*used to print elements from array */

let arr6=[1,2,3,4,5,6,7,8]
console.log(arr6.splice(1,3,222,333))

let arr7=[1,2,3,4,5,6]
console.log(arr7.slice(1,3))
