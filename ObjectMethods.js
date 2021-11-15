const obj = {
  name: "sourabh",
};

const obj2 = {
  value: "350",
  name: "krishna",
};
// Object.freeze(obj); //unable to overrite properties after freeze
// obj.name = "RadheyShyam";
// console.log(obj);

//Object.assign(target,source)

//Properties in the target object are overwritten by properties in the sources if they have the same key. Later sources' properties overwrite earlier ones.
// target, source
//  Object.assign(obj,obj2); // merge both object but it will overrite name of one object with other
// console.log(obj);

// Object.assign(obj2,obj);
// console.log(obj2);
//   const obj5 = {name :'vijay' ,...obj2};
//   console.log(obj5);
// const obj3 = {...obj2};
// console.log(obj3);

const object1 = {
  id: { a: "somestring", b: 42 },
  id1: { a: "anotherstring", b: 42 },
};

// console.log(
//   Object.keys(object1).map(item=>object1[item].a)
// );

console.log(Object.keys(object1).map((keys)=> object1[keys].a));
console.log(Object.values(object1).map((values)=> values.a));
console.log(Object.entries(object1).map(([keys,values])=> values.a));

//object.fromEntries, object.keys, object.values, object.entreies,object.is(),object.create, object.assign, object.freeze, object.seal