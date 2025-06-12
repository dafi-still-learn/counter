const number = document.querySelectorAll(".number");
const operasi = document.querySelectorAll(".operasi");
const display = document.getElementById("display");
const hasil = document.getElementById("hasil");
const hapus = document.getElementById("hapus");

number.forEach((item) => {
  item.addEventListener("click", () => {
    display.value += item.value;
  });
});

operasi.forEach((item) => {
  item.addEventListener("click", () => {
    display.value += item.value;
  });
});

hasil.addEventListener("click", () => {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.innerText = "Error";
  }
});

hapus.addEventListener("click", () => {
  display.value = "";
});
