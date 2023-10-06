

let user = "Ulfat Zakirli Rovshen"

// 1.Loop user for each letter 

for (i in user) {
    console.log(user[i]);
}


 let arr = [4, 8, '9', 2, '5']

// 2.remove a number from  end of 'arr'
 arr.pop()
 console.log(arr)
// 3.add two numbers 4 and 8 to 'arr' (end of arr)
arr.push(4,8)
console.log(arr)
// 4.add three numbers in front of 'arr' ('7',9,0)
arr.unshift('7',9,0)
console.log(arr)
// 5.remove one item in front of 'arr'
arr.shift()
console.log(arr)
// 6.Find the sum of arr's all numbers (both way: for loop and map)
//for version
let sum = 0
for (let item of arr) {
    sum=sum+item;
}
console.log(sum);
//map version
let sum1 = 0
arr.map(item => sum1+=item)
console.log(sum1);

// 7.Multiply all numbers  (both way: for loop and map)
// for version
let mult = 1
for (item in arr) {
    mult=mult*item
}
console.log(mult)
//map version
let mult1=1
arr.map(item => mult1=mult1*item)
console.log(mult1)
// 8.Console only numbers
for (item of arr) {
    if (typeof(item)=='number'){
        console.log(item);
    }
}
// 9.Console only strings
for (item of arr) {
    if (typeof(item)=='string'){
        console.log(item)
    }
}

// 10.Sum of only numbers
let sum2=0
for (item of arr) {
    if (typeof item =='number') {
        sum2=sum2+item
        
    }
    console.log(sum2);
}
// 11.Multipy only strings
 let mult2=1
 for (item of arr) {
    if (typeof item=='string') {
        mult2*=item
        console.log(mult2)
    }
  }


let user2 = 'ulfat'

// 12.Uppercase (user2) only first letter(slice) // Ulfat
console.log(user2.slice(0,1).toUpperCase()+user2.slice(1))
// 13.Uppercase (user2) only last letter(slice) // ulfaT
console.log(user2.slice(0,-1)+user2.slice(-1).toUpperCase())


// 14.Create a new object
const newobj={}
// 15.add firstName,lastName,gender,age,city to this object
newobj.firstName="Farrukh"
newobj.lastName="Mammadov"
newobj.gender="Male"
newobj.age="24"
newobj.city="baku"
console.log(newobj)
// 16.Delete gender value from this object
delete newobj.gender

// 17.Console only values of this object
console.log(Object.values(newobj))

// 18.Console only keys of this object
console.log(Object.keys(newobj))

// 19.Create new object from this object with(Object.assign() method)

newobj2=Object.assign(newobj)
console.log(newobj2)


const arr2 = ['U', 'u', 'o', 'p', 't', 's', 'y', 'u', 'o', 'p']
// 20.Replace all 'u' or 'U' with 'a' in 'arr2' (map and replace method)
console.log(arr2.map((item,index)=> arr2[index]= item.toLowerCase().replaceAll("u", "a")));


// 21.Create new array from 'arr2' that contains only unique values(map and includes methods)  //["U","u","o","p","t","s","y"]
//with for
const arrNew = []

for (let item of arr2) {

    if (arrNew.includes(item) == false) {
        arrNew.push(item)
    }
}

 console.log(arrNew);

//with map
const arrNew1 = [];

 arr2.map((item) => {
  if (!arrNew1.includes(item)) {
    arrNew1.push(item);
  }
});

 console.log(arrNew1);



const arr3 = ['i', 9, 0, 'o', 'true', true, false, 7]
// //23.Check arr3 if item type is equal number mutiply it with 10 else concat with this word "is String"(with: map, ternary operator,typeof)
 let bin
for (item of arr3) {
    if (typeof item=="number") {
        bin=item*10
    } 
    if (typeof item == "string") {
        bin=item+" Is String"
    }
    console.log(bin)
}
// 24.Create new array from 'arr3' that contains only boolean value

const arrFresh1 = []

 arr3.map(item => typeof(item) == 'boolean' ? arrFresh1.push(item) : null  )
 console.log(arrFresh1)


 for