import React from 'react';
import "./style.css"

class PhoneCard extends React.Component {
  render() {
    const { name, price, imageUrl } = this.props.phone;
    return (
      <div className="phone-card">
        <img src="https://i.gadgets360cdn.com/large/iphone_16_series_x_majinbu_1708160153419.jpg"  />
        <h3>IPHONE 16</h3>
        <p>$1000</p>
        <button onClick={() => this.addToCart()}>Add to Cart</button>
        <button onClick={() => this.buyNow()}>Buy Now</button>
      </div>
    );
  }

  addToCart() {
    // Implement add to cart functionality
    alert('Added to cart');
  }

  buyNow() {
    // Implement buy now functionality
    alert('Redirecting to checkout');
  }
}

export default PhoneCard;