// create object about productList
const productList = {
  products: [
    {
      title: "IPHONE 17 Pro Max",
      imageUrl:
        "https://api2.zoomit.ir/media/68c0797d2e4b43cec3e90539?w=1920&q=80",
      price: 1599.99,
      description: "Some description about iphone 17 pro max",
    },
  ],
  // make method for render
  render() {
    // -- in redner method select app
    const app = document.getElementById("app");
    // -- then create ul tag with class name 'product-list'
    const productUL = document.createElement("ul");
    productUL.classList.add("product-list");
    // -- for each of products create li with class name 'product-item'
    for (const product of this.products) {
      const productLI = document.createElement("li");
      productLI.classList.add("product-item");
      // -- with innerHTML `<div><img src=imageurl alt=title><div class=product-item__content>
      // h2 title h3 price with $ and production descriptio in p tag and button to add to cart`
      productLI.innerHTML = `<div>
        <img src="${product.imageUrl}" alt="{product.title}" />
        <div class="product-item__content">
          <h2>${product.title}</h2>
          <h3>\$${product.price}</h3>
          <p>${product.description}</p>
          <button>Add to Cart</p>
        </div>
      </div>`;
      productUL.appendChild(productLI);
    }
    app.appendChild(productUL);
  },
};

productList.render();
