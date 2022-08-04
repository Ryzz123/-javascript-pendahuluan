// membuat object

// cara 1 function declaration
// function halo() {
//   console.log("halo");
// }
// halo();

// // cara 2 - object literal
// var obj = {};
// obj.halo = function () {
//   console.log("halo");
// };
// obj.halo();

// // cara 3 - constructor
// function Halo() {
//   console.log("halo");
// }
// new Halo();

//  this
// this - cara 1 function declaration
function halo() {
  console.log(this);
  console.log("halo");
}
this.halo();
// this mengembalikan object global

// this - cara 2 object literal
var obj = { a: 10, nama: "sandhika" };
obj.halo = function () {
  console.log(this);
  console.log("halo");
};
obj.halo();
// this mengembalikan object yang bersangkutan

// this - cara 3 constructor
function Halo() {
  console.log(this);
  console.log("halo");
}
var obj1 = new Halo();
var obj2 = new Halo();
// this mengembalikan object yang baru dibuat
