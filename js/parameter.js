// function tambah() {
//   var hasil = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     hasil += arguments[i];
//   }
//   return hasil;
// }

// var coba = tambah(1, 2, 3, 4);
// console.log(coba);

// function kali() {
//   var hasil = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     hasil += arguments[i];
//   }
//   return hasil;
// }

// var coba = kali(4, 6, 7, 8);
// console.log(coba);

function iniAdalahFunction() {
  var hasil = 0;
  for (var o = 0; o < arguments.length; o++) {
    hasil += arguments[o];
  }
  return hasil;
}

var nilai = iniAdalahFunction(20, 40, 30);

alert(nilai);
