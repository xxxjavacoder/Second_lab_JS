'use strict'

 function hosting(){
    var a = 8;
 for(var i = 0; i <= 100; i++){
   a++;
   console.log("Variable a is hosted!");
   if(a >= 11){
       break;
   }
  }
 }

hosting();
//1


function inc(n){
  var N = n;
  return N;
}

var a = 5;
var b = inc(a);
console.dir({a,b});

//2.1