// var tanya = true;
// while (tanya) {
// menangkap pilihan palyer
function myFunction() {
  var p = prompt("pilih : 1 - 10");

  // menangkap pilihan computer
  // membangkitkan bilangan random
  var comp = Math.floor(Math.random() * 11);

  if (comp < 1) {
    comp = 1;
  } else if (comp >= 1 && comp < 2) {
    comp = 2;
  } else if (comp >= 2 && comp < 3) {
    comp = 3;
  } else if (comp >= 3 && comp < 4) {
    comp = 4;
  } else if (comp >= 4 && comp < 5) {
    comp = 5;
  } else if (comp >= 5 && comp < 6) {
    comp = 6;
  } else if (comp >= 6 && comp < 7) {
    comp = 7;
  } else if (comp >= 7 && comp < 8) {
    comp = 8;
  } else if (comp >= 8 && comp < 9) {
    comp = 9;
  } else {
    comp = 10;
  }

  var hasil = "";
  //   // menentukan rules
  if (p == comp) {
    hasil = "Jawaban Anda Benar";
  } else if (p == 1 || p == 2 || p == 3 || p == 4 || p == 5) {
    hasil = comp > 5 ? "jawaban anda salah & terlalu rendah" : "jawaban anda salah, padahal sedikit lagi";
  } else if (p == 6 || p == 7 || p == 8 || p == 9 || pp == 10) {
    hasil = comp < 5 ? "jawaban anda salah & terlalu tinggi" : "jawaban anda salah, padahal sedikit lagi";
  } else {
    hasil = "Memasukan Pilihan Yang Salah!";
  }

  //   // tampilkan hasil
  document.getElementById("jawaban").innerHTML = " Kamu memilih : " + p + "<br>" + "Jawabannya : " + comp + "<br>" + "Maka hasilnya : " + hasil + " dari" + " " + comp;

  // tanya = confirm("lagi?");
  //}
}
// alert("Terimakasih sudah bermain");
