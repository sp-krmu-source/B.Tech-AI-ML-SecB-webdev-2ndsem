// setTimeout(()=>{
//     console.log("a");
//     setTimeout(()=>{
//         console.log("b");
//         setTimeout(()=>{
//             console.log("c");
//             setTimeout(()=>{
//                 console.log("d");
//                 setTimeout(()=>{
//                     console.log("e")
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },1000)

// Promise chaining
// function print(num){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log(num);
//            res();
//         },1000)
//     })
// }

// print(1)
// .then(()=>print(2))
// .then(()=>print(3))
// .then(()=>print(4))
// .then(()=>print(5))


const pro = new Promise((res, rej) => {
    setTimeout(() => {
        res("Promise resolved");
    }, 1000)
})

// function getData(){
//    pro.then((res)=>console.log(res))
//    console.log("After promise");
// }

// why async and await exist ?

// 1. to avoid promise chaining
// 2. to execute the asynchronous code properly without confusion
// 3. to handle the promise in a better way


// Important!
// async function always return a promise 

// async function demo(){
//     return "Async Intro"
// }
// console.log(demo());


// await:

// It will pause the async function until the promise returns a result.

// usecase:
// 1. always use infront of promise

// const pro =  new Promise((res,rej)=>{
//         setTimeout(()=>{
//            res("Promise resolved");
//         },1000)
// })
// function getData(){
//    pro.then((res)=>console.log(res))
//    console.log("After promise");
// }
// it will print after promise then promise resolve, which is logically not understandable
// async function getData(){
//    const value = await pro;
//    console.log(value);
//    //logic of asunc function code
//    console.log("After promise");
// }
// it will print promise resolve first then after promise
// getData();


// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())
// .then(data => console.log(data))

// API fetching using async and await
// async function fetchData() {
//     try {
//         const response = await fetch('https://jsonplaceholde.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch (err) {
//         console.error(err);
//     }
// }
// fetchData()   


// weather data fetching
async function fetchData(city) {
    try {
        const API_key = "af9f63c59a649f27d602b96a43d0bd14";
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`);

        const data = await response.json();
        console.log(city);
        console.log(data.main.temp);
        console.log(data.main.humidity);
    } catch (err) {
        console.error(err);
    }
}
fetchData("london")  
