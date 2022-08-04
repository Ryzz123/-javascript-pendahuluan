// var jmlAngkot = 10;
// var angkotBeroperasi = 6;

// for( var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++ ) {
//     if( noAngkot <= 6 ) {
//         console.log('Angkot Nomor ' + noAngkot + ' beroperasi dengan baik.');
//     } else if( noAngkot === 8 ) {
//         console.log('Angkot Nomor '+ noAngkot + ' Sedang Lembur');
//     } else if( noAngkot === 10 ) {
//         console.log('Angkot Nomor '+ noAngkot + ' Sedang Lembur');
//     }
//     else {
//         console.log('Angkot Nomor ' + noAngkot + ' sedang tidak beroperasi');
//     }
// }

// var jmlAngkot = 10;
// var angkotBeroperasi = 6;

// for( var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++ ) {
//     if( noAngkot <= 6 ) {
//         console.log('Angkot Nomor ' + noAngkot + ' beroperasi dengan baik.');
//     } else if( noAngkot === 8 || noAngkot === 10 ) {
//         console.log('Angkot Nomor '+ noAngkot + ' Sedang Lembur');
//     } else {
//         console.log('Angkot Nomor ' + noAngkot + ' sedang tidak beroperasi');
//     }
// }

// var jmlAngkot = 10;
// var angkotBeroperasi = 6;

// for( var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++ ) {

//     if( noAngkot <= 6 && noAngkot !== 5 ) {
//         console.log('Angkot Nomor ' + noAngkot + ' beroperasi dengan baik.');
//     } else if( noAngkot === 8 || noAngkot === 10 || noAngkot === 5 ) {
//         console.log('Angkot Nomor '+ noAngkot + ' Sedang Lembur');
//     } else {
//         console.log('Angkot Nomor ' + noAngkot + ' sedang tidak beroperasi');
//     }
// }

// var jmlHp = 10;
// var hpRusak = 5;

// for (hpKita = 1; hpKita <= jmlHp; hpKita++) {
//   if (hpKita <= hpRusak && hpKita !== 3) {
//     console.log("Hp ke " + hpKita + " dalam kondisi bagus");
//   } else if (hpKita === 7 || hpKita === 9 || hpKita === 3) {
//     console.log("Hp ke " + hpKita + " dalam perbaikan");
//   } else {
//     console.log("Hp ke " + hpKita + " dalam kondisi rusak");
//   }
// }

var stikerDinding = 16;
var stikerRusak = 7;

for (stiker = 1; stiker <= stikerDinding; stiker++) {
  if (stiker <= stikerRusak && stiker !== 2) {
    console.log("Stiker Ke " + stiker + " Dalam kondisi bagus");
  } else if (stiker === 7 || stiker === 8 || stiker === 2 || stiker === 15) {
    console.log("Stiker Ke " + stiker + " Dalam kondisi di perjalanan");
  } else {
    console.log("Stiker Ke " + stiker + " Dalam Kondisi Rusak");
  }
}
