function faktorial(n) {
  if (n === 0) return 1;
  return n * faktorial(n - 1);
}
var nilai = prompt("masukan angka");
document.getElementById("jawaban").innerHTML = "Faktorial dari " + nilai + "<br>" + "Hasilnya : " + faktorial(nilai);
