//Bir funksiya olacaq, həmin funksiya 2 parameter qəbul edəcək.Funksiyanın görəcəyi iş nədir-Girinlən 2 parametr araligindaki ədədlərin cəmini tapacaq.İlk parameter 2ci parameterden kicik olmalidir.

// function muqayise(a, b) {
//     if (a < b) {
//         return a+b
//     } else {
//         return"Sert odenilmir.!";
//     }
// }

// console.log(muqayise(7,17));





// .Filter methodunu custom olaraq siz yazacaqsiz.Filter funksiyasi olacaq.Hazir funksiya olmayacaq.

// function filter(arr, callback) {
//     const newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i], i, arr)) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
// const arr = [1, 6,13,15,45,67,89,90];
// const onbeseebolunme =filter(arr, (num) => num % 15 === 0);
// console.log(onbeseebolunme);







// Map və Reducer methodlarinida custom olaraq yazacaqsiz.Hazir map reducer istifade etmeden.Bu funksiyalari sifirdan siz yazacaqsiz.s
// function Map(arr, callback) {
//     const newArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         newArray.push(callback(arr[i], i, arr));
//     }
//     return newArray;
// }

// const array = [2,3,7,8,9, 5];
// const kub = Map(array, (num) => num ** 3);
// console.log(kub);









// Map və Reducer methodlarinida custom olaraq yazacaqsiz.Hazir map reducer istifade etmeden.Bu funksiyalari sifirdan siz yazacaqsiz.
// function Reduce(arr, callback, ilkinDeyer) {
//     let container = ilkinDeyer;
//     let ilkIndex;

//     if (ilkinDeyer === undefined) {
//         ilkIndex = 1
//     } else {
//         ilkIndex = 0
//     }
//     for (let i = ilkIndex; i < arr.length; i++) {
//         container = callback(container, arr[i], i, arr);
//     }

//     return container;

// }

// const numbers = [1, 2, 3, 4, 5];
// const sum = Reduce(numbers, (con, ilk) => con + ilk,0);
// console.log(sum);