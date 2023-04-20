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
      loading: true,
    };
  }

  componentDidMount() {
    db.collection("products")
    // searching and sorting products
    // .where('price', '==',99) //query product
    // .where('title', '=','mobile') //query product
    // .orderBy('price', 'asc') //sort by price in ascending order
    // .startAt(99) //starting point of the query
    .onSnapshot((querySnapshot) => {
      const products = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        data["id"] = doc.id;
        return data;
      });
      this.setState({ products: products, loading: false });
    });
  }

  addProduct = () => {
    db.collection("products")
      .add({
        img: "",
        price: 99,
        qty: 3,
        title: "Washing Machine",
      })
      .then((docRef) => {
        console.log("Product added", docRef);
      })
      .catch((err) => {
        console.log("Error adding product", err);
      });
  };

  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    const docRef = db.collection("products").doc(products[index].id);
    docRef.update({
      qty: products[index].qty + 1,
    })
    .then(() => {
      console.log("Updated successfully");
    })
    .catch(err => {
      console.log("Error updating product",err);
    });
  };

  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    // base case
    if (products[index].qty === 0) {
      return;
    }
    const docRef = db.collection("products").doc(products[index].id);
    docRef.update({
      qty: products[index].qty - 1,
    })
    .then(() => {
      console.log("Updated successfully");
    })
    .catch(err => {
      console.log("Error updating product",err);
    });
  };

  handleDeleteProduct = (id) => {
    const docRef = db.collection("products").doc(id);
    docRef.delete()
    .then(() => {
      console.log("Deleted successfully");
    })
    .catch(err => {
      console.log("Error updating product",err);
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
        <button onClick={this.addProduct}>Add Product</button>
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
