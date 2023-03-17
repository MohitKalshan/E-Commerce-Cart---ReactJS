import React from "react";
// Class components
class CartItem extends React.Component {
  
// arrow function for auto bind
  increaseQty= () => {
    console.log('this',this.state);
    this.setState((prevState)=>({
      qty: prevState.qty + 1
    }));
  }
  decreaseQty= () => {
    const {qty} = this.state;
    if(qty===0){
      return;
    }
    this.setState((prevState)=>({
      qty: prevState.qty - 1   
    }));
  }
  render() {
    const { price, title, qty, img } = this.props.product;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}> {title}</div>
          <div style={{ color: "#777" }}>Rs {price}</div>
          <div style={{ color: "#777" }}>Qty: {qty}</div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img
              className="action-icons"
              src="https://as2.ftcdn.net/v2/jpg/01/07/62/07/1000_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg"
              alt="increase"
              onClick={this.increaseQty}
            />
            <img
              className="action-icons"
              src="https://as1.ftcdn.net/v2/jpg/03/73/49/86/1000_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg"
              alt="decrease"
              onClick={this.decreaseQty}
            />
            <img
              className="action-icons"
              src="https://as2.ftcdn.net/v2/jpg/01/90/89/15/1000_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg"
              alt="delete"
            />
          </div>
        </div>
      </div>
    );
  }
}
const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 10,
    backgroundColor: "#ccc",
  },
};

export default CartItem;
