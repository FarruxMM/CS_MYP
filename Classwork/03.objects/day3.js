// letters, $,_
// let _username = 'Ulfat'
// let $username = 'Ulfat'

// console.log(_username);
// console.log($username);

// includes ES7
// let username = 'Ulfat'

// // if (~username.indexOf('u')) {
// //     console.log('yes');
// // } else {
// //     console.log('no');
// // }


// // double ~~

// // Math.floor // alternative ~~


// // console.log(Math.ceil(6.1));

// // console.log(~~7.9);



// Object(key value pair)

// const obj2 = new Object() //constructor object
// const obj1 = {} //literal object (most use)

// obj2.name = 'Natiq'
// obj2.city = "Baku"
// obj2.name = 'Vidadi'



// obj.age = 25
// obj.age = 23
// remove value from object

// console.log(obj);

// delete obj.isAdmin

// console.log(obj.info.contry);

// console.log(obj["first-myName"]);

// console.log(obj.age);
// console.log(obj['age']);



// const obj = {
//     "first-myName": 'Nicat', //string
//     "age": 24, //number
//     "isAdmin": true, //boolean,
//     salary: null,
//     info: {
//         city: 'Baku',
//         contry: 'Azerbaijan'
//     }
// }


// console.log(obj[55]);
// console.log(obj['55']);

// const arr = [[2, 'a'], ['b', 1]]



//  console.log(Object.values(obj));
// console.log(Object.keys(obj));
// console.log(Object.entries(obj));
// console.log(Object.fromEntries(arr));

// let username = 'Natiq'
// for (let i = 0; i < username.length; i++) {
//     console.log(username[i]);
// }


// const obj = {
//     55: 'Vidadi',
//     city: 'Baku'
// }


// // to get keys
// // for (let key in obj) {
// //     console.log(key); 
// // }


// //

// for (let key in obj) {
//     console.log(obj[key]);
// }


// let salary = 900



//shalow copy
// console.log(obj == obj2);
// console.log({} == {});


// destructuring
// const obj2 = { ...obj }

// obj.firstName = 'Ferrux'
// obj.info.city = 'Baku'


// console.log('obj', obj);
// console.log('obj2', obj2);


// ==,=== true,false

// by referance
// const obj2 = obj
// const obj3 = obj2
// obj.firstName = 'Natiq'

// console.log(obj);
// console.log(obj2);
// console.log(obj3);

// console.log();


// by value
//     let a = 8
// let b = 8
// a = 4
// a = 99

// console.log(a === b);

// console.log(a);
// console.log(b);


// const obj = {
//     firstName: 'Nicat',
//     age: '24',
//     info: {
//         city: 'Gence',
//         test: {
//             contry: 'Azerbaijan'
//         }

//     }
// }

// const obj2 = obj  //copy
// const obj2 = { ...obj } //shalow copy (1)

// const obj2 = Object.assign({}, obj)  (1)
// obj.firstName = 'Ulfat'
// obj.info.city = 'Quba'
// obj.info.test.contry = 'Itily'

// // console.log(obj);
// // console.log(obj2);


// // deep Clone

// const obj2 = structuredClone(obj)  //deep clone
// console.log(obj);
// console.log(obj2);



// const users = [
//     {
//         id: 1,
//         username: 'Nicat',
//         info: {
//             city: 'Baku'
//         }
//     },
//     {
//         id: 2,
//         username: 'Natiq'
//     },
//     {
//         id: 3,
//         username: 'Vidadi'
//     },
// ]


// const users = {
//     username: 'Ulfat',
//     city: 'Shamkir'
// }

// let key = "city"

// console.log(key in users);

// nan-primitv(object)
// Date
// Array(ordered list)
// Error etc...
// const obj2 = new Object()

// const obj1 = {
//     surname: 'ss'
// }

// obj1.info = 'jfnunf'
// obj1.age = 'jfnunf'
// obj1.city = 'jfnunf'

// console.log(obj1);

// const arr1 = new Array(99)
// const arr2 = [] (most use)


// console.log(arr1);


// Both(string and array): at,indexOf,lastIndexOf,includes
// Array method:push,pop,shift,unshift


// const arr = ['5', 7, 'ulfat']

// arr[1] ='falseString'
//     console.log(arr);
// console.log(arr[arr.length - 1]);
// console.log(arr.at(-1));

// arr[10] = 'Nicat'
// console.log(arr);


// const arr2 = [...arr]

// console.log(arr2 == arr);
// console.log([] == []);

// arr.push('Vidadi', 'Natiq', 'Nicat', 'Ulfat') //add item to end of array
// arr.pop()  remove item end of array
// arr.pop()  remove item end of array

// arr.unshift('Fariz', '9', true, undefined) //add item to front of array
// arr.shift() remove item front of array


// arr.push(99)
// arr.push(9, undefined, null, true)

// console.log('index of 5:', arr.indexOf('5'));
// console.log(arr);



// const obj = {
//     firstName: 'ulfat',
//     lastName: 'zakirli'
// }

// console.log(obj.length);
// console.log(Object.keys(obj).length);





// // console.log(users.lastIndexOf('Nicat'));


// if (users.includes('Vidad')) {
//     console.log('it is true');
// }


// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
// }

// for...in

// for (let user in users) {
//     console.log(user);
// }

// for...of

// for (let user of users) {
//     console.log(user);
// }

// const numbers = [4, 8, 0, 19]


// map mehtod(strong method)
// =>  arrow function
// users.map(user => console.log(user))
// users.map((first, second, third) => console.log(third))
// first - item(values of array)
// second- index(indexs of array)
// third- array(itself array)

// const result = numbers.map((item) => item + '5')

// console.log(result);
