// let fullName = 'Ulfat Zakirli Rovshen'


// // 1) Ad soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin(split)
// console.log(fullName.split(" ")) // string to array

// // 2) Herflere ayrilmish arrayda soyadinizi adinizin onune keciren alqoritm yazin
// let arr = fullName.split(" ")
// // let result= arr[1] +" "+ arr[0] +" " + arr[2]

// let result =`${arr[1]} ${arr[0]} ${arr[2]}`

// console.log(typeof result)





// // 3) Alinan yeni arrayi stringe cevirin ama ilk array deyishmesin(join)
// console.log(arr.join(" ")) // array to string
// console.log(arr.join` `)  // dirnaq+moterize evez olunur



// console.log(arr.length);
// // QEYD - Bu tasklarda "arr" arrayindan istifade edilecekdir.....

// //4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin

// // let repeat5=0 

// // for (let item of arr) {
// //     if (item==5) {
// //         repeat5++;
// //     }
    
// // }
// // console.log(repeat5)

// let repeat5=0
// arr.map(item => item!=5 || repeat5++  )
// console.log(repeat5);

// //5) Yuxaridaki arraydaki butun reqemlerin cemini tapin
// let sum=0
// // for (let item of arr) {
// //      sum+=item
// // // }
// // arr.map(item => sum+=item)
// // console.log(sum);
// console.log(arr.reduce((total,item)=> total+item,0))

// //6) arrayda tekrar olunan reqemleri artan sira ile duzun

// console.log(arr.sort((a,b)=>a-b) );
// //7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin(Math.max)
// let repeat6=0
//  let max=Math.max(...arr)
// // arr.map(item =>  item==7 ? repeat6++ : null) 
// // console.log(repeat6);
// console.log(arr.filter(item=> item==max).length);
//8) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Ulfat adinda 5 herf var ve 5 arrayda var(includes)

// let nam3="Farrukh"
// let count=nam3.length

// console.log(arr.some(item=> count==item));
//console.log(arr.includes(count));

//9) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin

// for (let i=0; i<arr.length; i++) {
//     if (arr[i] % 3==2 && arr[i]>=3 ) {
//         console.log(arr[i])
//         break;
//     }

// }
// console.log(arr.findIndex(item => item %3==2 && item >= 3 ));
// console.log(arr.find(item => item %3==2 && item >= 3 ));
// console.log(arr.findLastIndex(item => item %3==2 && item >= 3 ));
// console.log(arr.length);
// for (item of arr) {
//     if (item % 3 ==2 && item>=3 ){
//         console.log(arr.indexOf(item));
//         console.log(item);
//         break;
        

//     }
// }


//10) arraydaki en boyuk reqemin ilk indexini tapin
let arr = [4,2, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]

// let max= Math.max(...arr)
// console.log(arr.indexOf(max));
let newArr= []
//  arr.find((item,index) => item==Math.max(...arr) && newArr.push(index))
//  console.log(newArr);

//11) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin
arr.filter((item,index)=> item==4 &&  newArr.push(index))


//12) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin
arr.filter((item,index)=> item==5 &&  newArr.push(index))
console.log(newArr);
const result = [Math.min(...newArr), Math.max(...newArr)]
console.log(result);

//13) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin
 console.log(Math.abs(arr.filter(item => item>2).length - arr.length))
//14) 7 reqeminin indexleri cemini tapin.
console.log(arr.reduce((total,item,index)=> item ==7 ? total+index : total , 0 ));



let arr2 = [
    {
        name: 'test',
        key: 1
    },
    {
        name: 'task',
        key: 2
    },
    {
        name: 'tanqo',
        key: 3
    },
    {
        name: 'like',
        key: 4
    },
    {
        name: 'task',
        key: 5
    },
    {
        name: 'trust',
        key: 6
    },
    {
        name: 'test',
        key: 7
    },
    {
        name: 'last',
        key: 8
    },
    {
        name: 'tanqo',
        key: 9
    },
    {
        name: 'elephant',
        key: 10
    },
    {
        name: 'love',
        key: 11
    },
    {
        name: 'small',
        key: 12
    },
    {
        name: 'little',
        key: 13
    },
]


//Aşağıdakı hər bir taskı function icərisində yazın.

// //QEYD Bu tasklarda arr2 istifade edilecekdir
// // 16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin
//     arr3=arr2.filter(attribute => attribute.name.toLowerCase().startsWith("t"))
//     conso le.log(arr3);

// // 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin
  //  arr32=arr2.filter(attribute => attribute.name.toLowerCase().startsWith("t") && attribute.name.toLowerCase().endsWith("t"))
  //  console.log(arr32);

// // 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin
     //console.log(arr2.reduce((total,{name, key}) => name.toLowerCase().startsWith("t") && name.toLowerCase().endsWith("t") ? total+key : total , 0))

// // 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
 // console.log(arr2.map(attribute => attribute.name.toLowerCase().endsWith("e") ? name="Superdev" : attribute));


// // 20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin
 // let biggestKey=Math.max(arr2.map(attribute => attribute.name.length && attribute.key))
//     console.log(biggestKey);
     

// 21 arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin
//  names = arr2.map(item => item.name)
//  console.log(names);    // nameleri cixartdiq
// nameLength = names.map(name => name.length)
// console.log(nameLength);   // namelerin uzunlugunu cixartdiq
// maxLength= Math.max(...nameLength) 
// console.log(maxLength); // en uzun namei cixartdiq
// arr2.map((member,index) => {
//         if (member.name.length == maxLength) {
//             console.log(index**2); //81
//         }
        
//     })
 
// 22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.
// names = arr2.map(item => item.name)
// nameLength = names.map(name => name.length)

//  arr3=names.filter(subject => subject.length==4)

//  console.log(arr3);



// // 23 arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin
// keyz=arr2.map(item => item.key)
// b1gKey=Math.max(...keyz)
// console.log(b1gKey);
// keyName= arr2.filter(subject=> subject.key==b1gKey)
// console.log(keyName);



// 24 arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin.
// 25 arr2 de terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin.

















// let arr3
//  arr3=arr2.filter(firstname => firstname.name.toLowerCase().startsWith("t"))
//  console.log(arr3);