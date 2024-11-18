import axios from "axios";

function getProducts() {
    const request = axios.get("http://localhost:3001/products");

    return request.then((r) => r.data);
}

function getCart() {
    const request = axios.get("http://localhost:3001/cart");

    return request.then((r) => r.data);
}

// Get current cart array first then append new item.
async function addItemsToCart(foo) {
    let cart;

    await getCart().then((r) => (cart = r));

    cart.items.push(foo);

    axios.put("http://localhost:3001/cart", cart);
}

export { getProducts, getCart, addItemsToCart };
