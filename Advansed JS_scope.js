// Scope Chain

var a = "Hello guys";
function first(){
    var b = "How are you?"
    second()

    function second(){
        var c = "My name is sharma"
        console.log(a + b + c)
        three()
    }
}

function three(){
    var d = "Sam"
    console.log(a + b + c + d)
}

first()