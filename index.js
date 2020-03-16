// setTimeout(()=>{
//   console.log("a")

//   setTimeout(()=>{
//     console.log("b")

//     setTimeout(()=>{
//       console.log("c")

//       setTimeout(()=>{
//         console.log("d")

//       },1000)
//     },1000)
//   },1000)
// },1000)

//-----------------------------------------

// const setTimeoutAndLog = input => {
//   return new Promise(function(resolve, reject) {
//      if(input !== "tong") {
//     resolve(input);
//   }else{
//   reject("Error");
//   }
// })
// };

// setTimeoutAndLog("a")
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//-------------------------------------------------
// const setTimeoutAndLog = (input) => {
//   return new Promise((resolve, reject) => {
    
//       setTimeout(() => {
//         console.log(input);
//         resolve();
//       }, 1000)
      
//   });
// };

// setTimeoutAndLog("a")
// .then(result => {
//   return setTimeoutAndLog("b")
// }).then(result => {
//   return setTimeoutAndLog("c")
// }).then(result => {
//   return setTimeoutAndLog("d")
// })


//---------------------------------------------

// fetch('homework1.json').then(response => {
//   return response.json();
// })
// .then(myJson => {
//   console.log(myJson);
// })
// .catch(error => {
//   console.error('Error:', error);
// });

//-------------------------------------------
// const fs = require('fs');

// fetch('homework1.json').then(response => {
//   console.log(response)
// })


// function fetch(path){
//   return new Promise(function(resolve,reject) {
//     const response = fs.readFileSync(path, "utf-8");
//     resolve(response);
//   })
// }

//---------------------------------------------

// $("#show").click(function(){
//   $("p").show();
// });

// async function getTemp () {
//   try {

//     navigator.geolocation.getCurrentPosition(function(position) {  
//       const lat = position.coords.latitude
//       const long = position.coords.longitude

//       return lat, long ;
//   })

//   fetch(`https://cors-anywhere.herokuapp.com/
// https://api.darksky.net/forecast/5b0669fa2b50528e6e0cd5f1c8d81d45/${lat},${long}`)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//     }) 

//   } catch (err) {
//     console.log(err)
//   }
//  }

 
//  getTemp();