// Dummy Shop API

import axios from "axios";

function getProducts() {
    const request = axios.get("https://dummyjson.com/c/b9ca-b849-41f0-ab8e");

    return request.then((r) => r.data);
}

function getCart() {
    const cart = JSON.parse(localStorage.getItem("cart"));

    if (!cart) localStorage.setItem("cart", "[]");

    return cart;
}

// Get current cart array first then do specified method.
async function updateCart({ item, method, key }) {
    let cart = getCart();

    switch (method) {
        case "ADD":
            cart.find((a) => a.title === item.title) ? null : cart.push(item);
            console.log(cart);
            break;
        case "DELETE":
            cart.items = cart.filter((a) => a.title !== key);
            break;
        case "UPDATE": {
            const itemIndex = cart.findIndex((a) => a.title === item.title);
            cart[itemIndex] = item;
        }
    }

    cart = JSON.stringify(cart)
    localStorage.setItem("cart", cart);
}

const genres = [
    "Action",
    "Adventure",
    "Animation",
    "Comedy",
    "Crime",
    "Drama",
    "Family",
    "Fantasy",
    "History",
    "Horror",
    "Music",
    "Mystery",
    "Romance",
    "Science Fiction",
    "Thriller",
    "War",
    "Western",
];

export { getProducts, getCart, updateCart, genres };
