import axios from "axios";

function getProducts() {
    const request = axios.get("http://localhost:3001/products");

    return request.then((r) => r.data.items);
}

function getCart() {
    const request = axios.get("http://localhost:3001/cart");

    return request.then((r) => r.data.items);
}

// Get current cart array first then append new item.
async function addItemsToCart(foo) {
    let cart;

    await getCart().then((r) => (cart = r));

    cart.push(foo);

    const request = axios.put("http://localhost:3001/cart", cart);

    return request.then((r) => console.log(r.data));
}

addItemsToCart("123");

export { getProducts };
