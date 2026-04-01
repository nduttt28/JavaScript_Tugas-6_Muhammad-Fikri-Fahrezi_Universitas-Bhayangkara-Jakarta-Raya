// main.mjs
import { index, store, destroy } from "./Controller.mjs";

const main = () => {

  console.log("DATA AWAL:");
  index();

  // TAMBAH 2 DATA (ARTIS)
  store({
    nama: "Dian Sastrowardoyo",
    umur: 42,
    alamat: "Jl. Melati No. 11",
    email: "dian@gmail.com"
  });

  store({
    nama: "Nicholas Saputra",
    umur: 40,
    alamat: "Jl. Mawar No. 12",
    email: "nicholas@gmail.com"
  });

  console.log("SETELAH TAMBAH DATA:");
  index();

  // HAPUS DATA (contoh: hapus data ke-2)
  destroy(1);

  console.log("SETELAH HAPUS DATA:");
  index();
};

main();