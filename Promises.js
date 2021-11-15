// // let data = new Promise((res,rej)=>{
// //    res('yes this is executed');
// // });

// // data.then((result)=>{
// //     console.log(result)
// // }) 
// // /// another method to call promiese
// // const getData=()=>{
// //     return new Promise((resolve,reject)=>{

// //         const arr = [1,2,3];

// //         resolve(arr);
// //       //  reject('not resolved')
// //     })
// // }

// // const obj = getData();

// // obj.then(res=>console.log(...res)).catch(err=>console.log(err));

// const obj = {
    
//     name :'sourabh',
//     sum : function(){
//         console.log('this is ',this);
//     }
// }

// obj.sum();

// const fn = ()=>{

//     const y=()=>{
//         console.log('this is called');
//     }
    
//     return y;
// };

// const getFn =(fn)=>{
//   return  fn();
// };

//  const d = getFn(fn);
//  console.log(d());

// const arr = [1,2,3];

// setTimeout((array) => {
//     console.log(array)
// }, 2000 ,arr);

// console.log(typeof(Promise));



// const obj = new Promise((resolve,reject)=>{

//       setTimeout(() => {
//           reject('yes this is solved')
//       }, 2000);

// });

// obj.then((response)=>{
//     console.log(response)
// }).catch((err)=>{
//     console.log(err);
// })

// const Asyn = async()=>{
//     const data = await obj;
//     console.log(data);
// }

// Asyn(); 



//use all or allSetteled or race
//all will return all after all promises relsoved but if one is reject it will 
//only  retun which is reject and igonre other how are rsloved
// in all sletlled it will return all with status fullfiled or rejected
//in race it will return that who is reloved or rejected first


// agar kbhi hum chahte hai ki resovle ho ya rejct hume koi frk nhi bas ye chlan we use finally keyword
const data = Promise.allSettled([
    new Promise((resolve,reject)=>{
        setTimeout(() => {
                resolve('this is first 1 second');
        }, 4000);
    }),
    new Promise((resolve,reject)=>{
        setTimeout(() => {
                resolve('this is first 2 second');
        }, 3000);
    }),
    new Promise((resolve,reject)=>{
        setTimeout(() => {
                reject('this is first 3 second');
        }, 1000);
    }),

]);

data.then((item)=>{
    console.log(item)
}).catch(err=>{
    console.log('error is' ,err);
})