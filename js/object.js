function myFunction() {
  //   var i = prompt("Masukan Input");
  var mahasiswa = {
    nama: "Febri ananda lubis",
    umur: 31,
    ips: [3.0, 2.5, 3.2],
    alamat: {
      jalan: "jln Berangir No.123",
      kota: "Medan",
      provinsi: "Sumatera utara",
    },
  };
  document.getElementById("jawaban").innerHTML =
    "nama : " + mahasiswa.nama + "<br>" + "umur : " + mahasiswa.umur + "<br>" + "ipk semester " + 1 + " : " + mahasiswa.ips[0] + "<br>" + "alamat : " + mahasiswa.alamat.jalan + " " + mahasiswa.alamat.kota + " " + mahasiswa.alamat.provinsi;
}

// var mahasiswa = {
//   nama: "Febri ananda lubis",
//   umur: 31,
//   ips: [3.0, 2.5, 3.2],
//   alamat: {
//     jalan: "jln Berangir No.123",
//     kota: "Medan",
//     provinsi: "Sumatera utara",
//   },
// };
