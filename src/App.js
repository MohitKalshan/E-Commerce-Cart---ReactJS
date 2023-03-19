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
          img: "https://images.unsplash.com/photo-1584208124193-df98a65afaf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=484&q=80",
          id: 1,
        },
        {
          price: "999",
          title: "Phone",
          qty: 4,
          img: "https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
          id: 2,
        },
        {
          price: "999",
          title: "Laptop",
          qty: 10,
          img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
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

  getCartCount = () => {
    const { products } = this.state;
    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    });

    return count;
  }
  getCartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;
    products.map((product) => {
      cartTotal = cartTotal + product.price * product.qty;
  });
  return cartTotal;
}


  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar
        count={this.getCartCount()} 
         />
        <Cart 
        products={products}
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{fontSize: 20, padding : 10, fontWeight: 'bold'
        }}>Total: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
