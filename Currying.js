

let multiply = function(x,y){
    console.log(x*y) 
}

let mul = multiply.bind(this,2);
let mul2 = multiply.bind(this,5,7);
mul(3);
mul2(3);

//way of calling function is currying like let z =  f(); =>z() or  f()()
//currying is just make a fn fn(a,b,c) callable like this fn(a)(b)(c) nothing else
//Currying is an advanced technique of working with functions. It’s used not only in JavaScript, but in other languages as well.
//the way of passing argument or claling like this is currying or sometime 
// when a fn return a fn and saved into another variable we use 
// const d = x()() // this way is curryin also

