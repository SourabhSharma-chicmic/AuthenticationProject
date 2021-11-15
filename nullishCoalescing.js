
const obj = {

    score : 0,
     valid :false
}

var val1 = obj.score ?? 100;
var val3 = obj.valid ??true;
var val2 =obj.score || 100;
var val4 = obj.valid || true;
console.log(val1 , val2);
console.log(val3 , val4);