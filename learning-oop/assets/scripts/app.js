class Product {
  title = "DEFAULT";
  imageUrl;
  price;
  description;

  constructor(title, imageUrl, price, description) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  render() {
    const productLI = document.createElement("li");
    productLI.classList.add("product-item");
    // -- with innerHTML `<div><img src=imageurl alt=title><div class=product-item__content>
    // h2 title h3 price with $ and production descriptio in p tag and button to add to cart`
    productLI.innerHTML = `<div>
        <img src="${this.product.imageUrl}" alt="${this.product.title}" />
        <div class="product-item__content">
          <h2>${this.product.title}</h2>
          <h3>\$${this.product.price}</h3>
          <p>${this.product.description}</p>
          <button>Add to Cart</p>
        </div>
      </div>`;

    return productLI;
  }
}
// create object about productList
class ProductList {
  products = [
    new Product(
      "IPHONE 17 Pro Max",
      "https://api2.zoomit.ir/media/68c0797d2e4b43cec3e90539?w=1920&q=80",
      1599.99,
      "Some description about iphone 17 pro max",
    ),
  ];

  render() {
    // -- in redner method select app
    const app = document.getElementById("app");
    // -- then create ul tag with class name 'product-list'
    const productUL = document.createElement("ul");
    productUL.classList.add("product-list");
    // -- for each of products create li with class name 'product-item'
    for (const product of this.products) {
      const productItem = new ProductItem(product);
      const productLI = productItem.render();
      productUL.appendChild(productLI);
    }
    app.appendChild(productUL);
  }
}

const productList = new ProductList();
productList.render();
