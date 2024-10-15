// Fungsi untuk menghitung jumlah dari bilangan ganjil yang dikalikan 3
function sumOfTripledOdds(array) {
    // Filter untuk mengambil bilangan ganjil dari array
    const oddNumbers = array.filter((number) => {
        return number % 2 !== 0;  // Hanya bilangan ganjil yang dikembalikan (return true jika ganjil)
    });

    // Map untuk mengalikan setiap bilangan ganjil dengan 3
    const tripled = oddNumbers.map((number) => {
        return number * 3;  // Kalikan setiap bilangan ganjil dengan 3
    });

    // Reduce untuk menjumlahkan semua bilangan yang telah dikalikan
    const sum = tripled.reduce((total, number) => {
        return total + number;  // Akumulasi jumlah dari bilangan yang telah dikalikan
    }, 0);  // Initial value dari total adalah 0

    return sum;  // Mengembalikan hasil penjumlahan
}

// Fungsi untuk menampilkan hasil pada halaman
function displayResult(result) {
    const mainContent = document.querySelector(".main-content");  // Pilih elemen dengan class "main-content"
    const h1 = document.createElement("h1");  // Buat elemen h1 baru
    h1.textContent = `The sum of tripled odds is: ${result}`;  // Set teks dari elemen h1 dengan hasil perhitungan
    mainContent.appendChild(h1);  // Tambahkan elemen h1 ke dalam elemen "main-content"
}

// Data array yang akan dihitung
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Menjalankan fungsi setelah halaman selesai dimuat
window.onload = function () {
    const result = sumOfTripledOdds(number);  // Hitung jumlah dari bilangan ganjil yang dikalikan 3
    console.log(result);  // Tampilkan hasil di console untuk debug
    displayResult(result);  // Tampilkan hasil di halaman
};
