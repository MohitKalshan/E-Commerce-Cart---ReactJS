import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import { db } from "./FirebaseConfig";

class App extends React.Component {
  // State
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true
    };
  }

  componentDidMount() {
      db.collection("products").get().then(querySnapshot => {
        const products = querySnapshot.docs.map(doc => {
          const data = doc.data()
          data['id'] = doc.id;
          return data;
        });
        this.setState({ products: products, loading: false });
      });
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
  };
  getCartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;
    products.map((product) => {
      cartTotal = cartTotal + product.price * product.qty;
      return "";
    });
    return cartTotal;
  };

  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        {loading && <h2>Loading Products</h2>}
        <div style={{ fontSize: 20, padding: 10, fontWeight: "bold" }}>
          Total: {this.getCartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
