// Hoisting

var first = "first"
console.log("first", first)

function a(){
    var fa = "1st function o.p1";
    console.log(fa);
    debugger;
    b();
    console.log("Let see my execution on console")
}

function b(){
    debugger;
    console.log("2nd function is being called");
    c();
}

function c(){
    debugger;
    console.log("3rd function is being called")
    debugger;
}

a();