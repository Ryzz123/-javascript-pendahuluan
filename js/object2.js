// membuat object
// object literal
var mhs1 = {
  nama: "Febri ananda lubis",
  nrp: "12345678",
  email: "febryananda17@gmail.com",
  jurusan: "Teknologi Informasi",
};

var mhs2 = {
  nama: "Valntino Rossi",
  nrp: "12345678",
  email: "valentino@gmail.com",
  jurusan: "Teknologi Informasi",
};

// Function Declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
  var mhs = {};
  mhs.nama = nama;
  mhs.nrp = nrp;
  mhs.email = email;
  mhs.jurusan = jurusan;
  return mhs;
}

var mhs3 = buatObjectMahasiswa("Nofariza", "09876544", "nofariza@gmail.com", "teknik informatika");

// Constuctor
function Mahasiswa(nama, nrp, email, jurusan) {
  // var = this {};
  this.nama = nama;
  this.nrp = nrp;
  this.email = email;
  this.jurusan = jurusan;
  // return this;
}

var mhs4 = new Mahasiswa("Erik", "6542316", "erik@gmail.com", "Teknik Mesin");
