// Pilih elemen container tempat elemen <p> dan elemen lainnya akan ditambahkan
const container = document.querySelector("#container");

// Buat elemen <p> untuk teks merah dan <h3> untuk teks biru
const redText = document.createElement("p");
const blueText = document.createElement("h3");

// Buat elemen <div> untuk menampung elemen <h1> dan <p> di dalamnya
const divContainer = document.createElement("div");
const h1Text = document.createElement("h1");
const pText = document.createElement("p");

// Tambahkan teks ke dalam elemen
redText.textContent = "Hey I’m red!";
blueText.textContent = "I’m a blue h3!";
// Dalam <div>
h1Text.textContent = "I’m in a div";
pText.textContent = "ME TOO";

// Ubah warna teks menggunakan properti style
redText.style.color = "red";
blueText.style.color = "blue";

// Tambahkan style pada <div> (border hitam dan background pink)
divContainer.style.border = "1px solid black";
divContainer.style.backgroundColor = "pink";
divContainer.style.padding = "5px";

// Tambahkan elemen <h1> dan <p> ke dalam <div>
divContainer.appendChild(h1Text);
divContainer.appendChild(pText);

// Tambahkan elemen <p>, <h3>, dan <div> ke dalam container utama
container.appendChild(redText);
container.appendChild(blueText);
container.appendChild(divContainer);
