//__________________________________________CALL (borrow function)_____________________________

const obj1 = {
  name: "sourabh",
  rollno: 1,
  display: function () {
    console.log(`Name is ${this.name} and rollno is ${this.rollno} and extra `);
  },
};

const obj2 = {
  name: "Radhey",
  rollno: "Shyam",
};

obj1.display();

obj1.display.call(obj2);


                               //OR  declare funtion outside

const obj3 = {
  names: "sourabh",
  rollno: 1,
};

const obj4 = {
  names: "Radhey",
  rollno: "Shyam",
};

//create fn outside unlike above method where we make in an object
let display = function (oldfee, newfee) {
  console.log(`Name is ${this.names} and rollno is ${this.rollno}  and old fees ${oldfee} and new fee is ${newfee} `);
};

// after ob3 we can pass parameters for the function aslo (optional if we need fn with parmeter) 
display.call(obj3 ,"300" ,"500");
display.call(obj4 ,"600","1300");

//____________________________Apply (same as call just diffrence in way of passsing parameters here we pass array)

display.apply(obj3,["3000" ,"5000"]);


//_______________________BIND (same as call but it didnt call method it just return a fn whci may be call later)

let newFunction = display.bind(obj4 ,"30","90");
newFunction();


//summary call directyly call function and is use to borrow function 
// in call we can pass fn and after that we can pass argument for function by adding , 
//apply is same as call but the way of passing arguemnt is here we pass array of arrgument unlike call where we directyly add argument and add aonterh argument by adding , 
//bind gives a copy of  function that we can store in any varibale and call it any other time it doestnot
//directyly called like call and aplly.