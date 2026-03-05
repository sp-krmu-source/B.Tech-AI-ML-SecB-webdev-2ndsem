var a=10;
console.log(a);
function demo(){
    let b=20;
    console.log(b)
}
demo()

//callback hell
setTimeout(()=>{
    console.log("a");
    setTimeout(()=>{
        console.log("b");
        setTimeout(()=>{
            console.log("c");
            setTimeout(()=>{
                console.log("d");
                setTimeout(()=>{
                    console.log("e")
                },1000)
            },1000)
        },1000)
    },1000)
},1000)

//promises

// if promise fullfilled then it will go to .then() method.
// if promise is rejected then it will go to .catch() method



// let pro = new Promise((resolve,reject)=>{
//     let proposal="false"
//     if(proposal==="true"){
//         resolve()
//     }
//     else{
//         reject()
//     }
// })
// pro.then(()=>console.log("proposal accepted"))
// .catch(()=>console.log("proposal rejected"))

// same code with function syntax

// function pro(){
//  return new Promise((resolve,reject)=>{
//     let proposal="false"
//     if(proposal==="false"){
//         resolve()
//     }
//     else{
//         reject()
//     }
// })
// }
// pro().then(()=>console.log("proposal accepted"))
// .catch(()=>console.log("proposal rejected"))


// Event loop:  it is a constantly running process



// Interview Trap Question: find the reason behind it
setTimeout(()=>{
    console.log("setTimeout 1")
},0)
    
function delay() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Timeout Done");
      resolve();
    }, 0);
  });
}

function test() {
  console.log("Start");
  delay();
  console.log("After Delay");
}

test();
console.log("End");

