// Dummy Shop API

import axios from "axios";

function getProducts() {
    const request = axios.get("http://localhost:3001/products");

    return request.then((r) => r.data);
}

function getCart() {
    const request = axios.get("http://localhost:3001/cart");

    return request.then((r) => r.data);
}

// Get current cart array first then do specified method.
async function updateCart(item, method) {
    let cart;

    await getCart().then((response) => {
        cart = response;
    });

    if (method === "ADD") {
        cart.items.find((a) => a.title === item.title) ? null : cart.items.push(item);
    } else {
        cart.items = cart.items.filter((a) => a !== item);
    }

    axios.put("http://localhost:3001/cart", cart);
}

export { getProducts, getCart, updateCart };
