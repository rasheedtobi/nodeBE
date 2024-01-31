
// const names =['ade', 'ola', 'Nike']

// const msFE = (arr, cb) => {
//     for(i=0; i<arr.length; i++) {
//         // console.log(arr[i])
//         ele = arr[i];
//         cb(ele)
//     }

//     console.log("Hello")
// }

// // cbf = (data) => {
// //     console.log(data)
// // }
// msFE(names, (data) => {
//     console.log(data)
// })


// const axios = require('axios');
// const loadPoke=(id, cb) =>{
//     axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    
//     .then(respo=>{
//         cb(respo.data)
//     })
// }

// loadPoke(65, (pok)=>{
//     console.log(pok.name)
// })


const numbers = [1, 2, 3, 4, 5];

// Using callback in the forEach method
numbers.forEach((num) => {
  console.log(num * 3);
});

// Using callback in the map method
const doubledNumbers = numbers.map((num) => {
  return num * 2;
});

console.log(doubledNumbers);
