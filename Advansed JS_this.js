// function sum(){
//     var add = 2 + 2;
//     console.log("Sum of both numbers: ", + add)
//     console.log(this)
// }

// sum()

// const piyush = {
//     name: "Piyush Sharma",
//     age: 30,
//     city: "Noida",
//     sum: function(){
//         var add = 2 + 2;
//         console.log("Sum of two numbers: " + add)
//         console.log(this)
//     }
// }

// const piyush = {
//     name: "Piyush Sharma",
//     age: 30,
//     city: "Noida",
//     sum: function () {
//         console.log(this.name)
//         var add = 2 + 2;
//         console.log("Sum of two numbers: " + add)
//         console.log(this)
//         function max() {
//             var name = "Max";
//             console.log("My name is " + name)
//             console.log(this)
//         }
//         max();
//     },


// }


// piyush.sum();

const piyush = {
    name: "Piyush Sharma",
    age: 30,
    city: "Noida",
    sum: function () {
        console.log(this.name)
        var add = 2 + 2;
        console.log("Sum of two numbers: " + add)
        console.log(this)
        function max() {
            var name = "Max";
            console.log("My name is " + name)
            console.log(this)
        }
        max();
    },


}


piyush.sum();