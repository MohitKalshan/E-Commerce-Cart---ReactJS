import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
  // State
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: "99",
          title: "Watch",
          qty: 1,
          img: "",
          id: 1,
        },
        {
          price: "999",
          title: "Phone",
          qty: 4,
          img: "",
          id: 2,
        },
        {
          price: "999",
          title: "Laptop",
          qty: 10,
          img: "",
          id: 3,
        },
      ],
    };
  }
  handleIncreaseQuantity = (product) => {
    // console.log(product);
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;

    this.setState({
      //  products : products, OR shorthand
      products,
    });
  };
  handleDecreaseQuantity = (product) => {
    // console.log(product);
    const { products } = this.state;
    const index = products.indexOf(product);
    // base case
    if (products[index].qty === 0) {
      return;
    }
    products[index].qty -= 1;

    this.setState({
      //  products : products, OR shorthand
      products,
    });
  };
  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const item = products.filter((item) => item.id !== id); // filter returns a new array
    this.setState({
      products: item,
    });
  };

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar />
        <h1>Cart</h1>
        <Cart 
        products={products}
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteProduct={this.handleDeleteProduct}
        />
      </div>
    );
  }
}

export default App;
