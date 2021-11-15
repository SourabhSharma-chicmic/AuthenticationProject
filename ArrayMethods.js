const arr = [
  {
    id: 1,
    name: "krishna",
  },
  {
    id: 2,
    name: "RadheyShayam",
  },
  {
    id: 3,
    name: "Keshav",
  },
  {
    id: 4,
    name: "Keshav",
  },
];

// array.filter, array.find, array.map
//array find jithe v value match hoi nal hi return kr dinda agge traverse nhi krda
// console.log(arr.find(item=>item.name=="Keshav"));

// //array filter value match hove tad v check krda kite hor ta nnhi same value then agar hove ta ek array return
//// karda jide vich oh values hundiya jithe match hove
// console.log(arr.find(item=>item.name=="Keshav"));

//checks and return true of false if any item it found less then or greater then 1 depding on the sign used > or <
// const val = arr.some(item=>item.id >1);
// console.log(val);

// it checks each item if any item is not fullfil this conditon it return false
// const val = arr.every(item=>item.id >=1);
//  console.log(val);



const obj = [1,2,3,4]

const includeItems = obj.includes(1);



console.log(includeItems);
