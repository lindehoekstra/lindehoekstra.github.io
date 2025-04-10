let shoppingCart = [
  { name: "T-shirt", price: 20 },
  { name: "Jeans", price: 50 },
  { name: "Sneakers", price: 80 },
  { name: "Backpack", price: 30 },
];

function checkPrice() {
  let total = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    total = total + shoppingCart[i].price;
  }
  console.log(total);
  price.innerHTML = total;
  let discPrice = 0;
  if (total > 100) {
    discPrice = total - total * 0.1;
  }
  console.log(discPrice);
  discountPrice.innerHTML = discPrice;
}
