const search = document.getElementById("search");
const pilihan = document.getElementById("pilihan");
const cart = document.querySelector(".cart");
const box = document.getElementById("box");
const listCart = document.getElementById("cart-list");
const cartBox = document.getElementById("cart-box");
const total = document.getElementById("total");

cart.addEventListener("click", () => {
  cartBox.classList.add("open");
});

let item = [
  { id: 1, name: "product 1", img: "1.png", price: 10000 },
  { id: 2, name: "product 2", img: "2.png", price: 15000 },
  { id: 3, name: "product 3", img: "3.png", price: 16000 },
  { id: 4, name: "product 4", img: "4.png", price: 14000 },
  { id: 5, name: "product 5", img: "5.png", price: 12000 },
];

let listItem = [];

const initApp = () => {
  item.forEach((item, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("items");
    newDiv.innerHTML = `
        <img src="img/${item.img}">
        <h1>${item.name}</h1>
        <h3>${item.price}</h3>
        <button onclick="addToCart(${key})">Buy</button>
    `;
    box.appendChild(newDiv);
  });
};

initApp();

const addToCart = (key) => {
  if (!listItem[key]) {
    listItem[key] = {
      ...item[key],
      quantity: 1,
    };
  } else {
    listItem[key].quantity++;
  }
  reloadCart();
};

const reloadCart = (filterIn) => {
  listCart.innerHTML = "";
  let price = 0;
  let counts = 0;
  let count = 0;

  listItem.forEach((value, key) => {
    if (value && (!filterIn || filterIn(value, key))) {
      price += value.price * value.quantity;
      counts += value.quantity;
      count = value.quantity;

      let li = document.createElement("li");
      li.classList.add("item-cart");
      li.innerHTML = `
        <img src="img/${value.img}">
        <div class="describe">
          <div class="cartTitle">${value.name}</div>
          <div class="cartPrice">${value.price}</div>
        </div>
        <div class="quantity-box">
          <button class="buttonCart" onclick="changeQuantity(${key}, ${
        value.quantity - 1
      })">-</button>
      <div>${count}</div>
          <button class="buttonCart" onclick="changeQuantity(${key}, ${
        value.quantity + 1
      })">+</button>
        </div>
      `;

      listCart.appendChild(li);
    }
  });

  total.innerText = price;
};

const changeQuantity = (key, quantity) => {
  // const infoBox = document.getElementById("totals");

  // Ambil jumlah sebelumnya
  const previousQuantity = listItem[key]?.quantity || 0;

  // Logika update atau hapus item
  if (quantity <= 0) {
    delete listItem[key];
  } else {
    listItem[key].quantity = quantity;
  }

  // infoBox.innerText = item[key].id;
  reloadCart();

  //Tampilkan info perubahan
  // if (quantity > 0) {
  //   infoBox.innerText = `Jumlah "${item[key].name}" berubah dari ${previousQuantity} menjadi ${quantity}`;
  // } else {
  //   infoBox.innerText = `"${item[key].name}" dihapus dari keranjang.`;
  // }

  // console.log(infoBox);
};

const pay = () => {
  listItem = [];
  listCart.innerHTML = "";
  total.innerText = 0;
  addEventListener("dblclick", () => {
    cartBox.classList.remove("open");
  });
  alert("terimaksih telah belanja di sini:)");
};

console.log(total);
