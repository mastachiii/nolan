function productAnimate() {
    const products = document.querySelector("#products");

    products.classList.toggle("productAnimation");
    setTimeout(() => {
        products.classList.toggle("productAnimation");
    }, 400);
}

export { productAnimate };
