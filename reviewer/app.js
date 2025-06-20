const boxContent = document.getElementById("box");
const halaman = document.getElementById("halaman");

const content = [
  {
    id: 1,
    name: "dimas",
    img: "1.jpg",
    text: "nama saya dimas yaa",
  },
  {
    id: 2,
    name: "rafal",
    img: "2.jpg",
    text: "nama saya rafal ya",
  },
];

let currentIndex = 0;

const renderSlide = (index) => {
  // Cek batas index

  if (index >= content.length) index = 0;

  const item = content[index];
  boxContent.innerHTML = `
        <div class="contents">
          <img src="img/${item.img}" alt="${item.name}">
          <p><strong>${item.name}</strong></p>
          <p>${item.text}</p>
          <button id="nextBtn">Next</button>
        </div>
      `;

  // Tambahkan event listener ke tombol
  document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex++;
    renderSlide(currentIndex);
  });

  halaman.innerText = index;
};

// Inisialisasi pertama kali
renderSlide(currentIndex);
