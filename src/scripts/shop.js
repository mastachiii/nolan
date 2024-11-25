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
async function updateCart({ item, method, key }) {
    let cart;

    await getCart().then((response) => {
        cart = response;
    });

    switch (method) {
        case "ADD":
            cart.items.find((a) => a.title === item.title) ? null : cart.items.push(item);
            break;
        case "DELETE":
            cart.items = cart.items.filter((a) => a.title !== key);
            break;
        case "UPDATE": {
            const itemIndex = cart.items.findIndex((a) => a.title === item.title);
            cart.items[itemIndex] = item;
        }
    }

    axios.put("http://localhost:3001/cart", cart);
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
