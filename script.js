// Array Methods

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(num)
console.log(num.length)
delete num[0]
console.log(num)

let b = num.toString()
console.log(b, typeof (b))    // b is now a string

let c = num.join(" _ ")
console.log(c, typeof c)

let r = num.pop()
console.log(num, r)   // pop returns the popped element

let w = num.push(11)
console.log(num, w)    // push returns the new array length

let u = num.shift()
console.log(num, num.length)   // Removes an element from the start of the array

let u1 = num.unshift(88)
console.log(num, u1)   //The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.


let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19]
let num_even_more = [211, 212, 213, 214, 415, 416, 417, 418, 419]
// console.log(num1.length)
// delete num1[0]
// console.log(num1.length)

let newArray = num1.concat(num_more, num_even_more)
console.log(newArray)
console.log(num1, num_more)

//sort method
let v = [22, 27, 3, 1, 7, 3, 288, 555]
v.sort()
console.log(v)          // sort it by alphabetical order

let compare = (a, b)=>{
  return b - a
}
let z = [551, 22, 3, 14, 5, 6, 7, 8, 229]
z.sort(compare)
// z.reverse()
console.log(z)


//splice()....it is used to add new element to an array
let sp = [1,2,44,4,56,7,8]
sp.splice(3,0,22,27,77,33)
console.log(sp)

//slice()
let sl = [99,88,77,66,55,44,33,22,11]
let newnum = sl.slice(2,8)
console.log(newnum)

//Array methoda --------loops n all

let p = [3, 5, 1, 2, 4]

for(let i=0; i<num.length;i++){
  console.log(p[i])
}

//ForEach Loop
p.forEach((element) => {
    console.log(element * element)
  })

//Array.from
let f = "Coppercloud"
let array = Array.from(f)
console.log(array)

//for ...of
let o = [23,54,754,234]
for(let item of o){
    console.log(item)
}

//for ...in
let h = [95,3,15,16,26,55,29,13]
for(let i in h){
    console.log(i)
}

//map()_filter()_reduce()

//01_Array map method
let arr = [45,23,21]
//console.log(arr)
let a = arr.map((value, index,array)=>{
    console.log(value, index,array)
    return value + 1
})
console.log(a)                          //map returns an array

//02_Array filter method
let arr2 = [45,23,21,0,3,5]
let a2 = arr2.filter((b)=>{
    return b<10
})
console.log(a2)                         //filter returns an array

//03_Array reduce method
let arr3 = [1,2,3,5,2,1]
const reduce_func = (h1,h2)=>{
    return h1 +h2
}
let newarr3 = arr3.reduce(reduce_func)
console.log(newarr3)                   //reduce returns a value


