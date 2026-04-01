// controller.mjs
import users from "./Data.mjs";

// TAMPILKAN DATA (map)
const index = () => {
  console.log("=== DAFTAR NAMA ===");

  users.map((user, i) => {
    const { nama, umur, alamat, email } = user; // destructuring

    console.log(
      `${i + 1}. ${nama} (${umur} tahun)\n   Alamat: ${alamat}\n   Email: ${email}`
    );
  });

  console.log("\n");
};

// TAMBAH DATA (push)
const store = (user) => {
  users.push(user);
  console.log(`Data ${user.nama} berhasil ditambahkan!\n`);
};

// HAPUS DATA
const destroy = (indexHapus) => {
  const nama = users[indexHapus]?.nama;

  if (nama) {
    users.splice(indexHapus, 1);
    console.log(`Data ${nama} berhasil dihapus!\n`);
  } else {
    console.log("Data tidak ditemukan!\n");
  }
};

export { index, store, destroy };
