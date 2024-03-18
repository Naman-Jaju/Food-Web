import React from 'react';
import PhoneCard from './PhoneCard';
import "./style.css"

class MenuPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phones: [
        { id: 1, name: 'Phone 1', price: 500, imageUrl: 'phone1.jpg' },
        { id: 2, name: 'Phone 2', price: 600, imageUrl: 'phone2.jpg' },
        { id: 3, name: 'Phone 3', price: 700, imageUrl: 'phone3.jpg' },
        // Add more phones as needed
      ]
    };
  }

  render() {
    return (
      <div className="menu-page">
        <h1>Mobile Phones</h1>
        <div className="phone-list">
          {this.state.phones.map(phone => (
            <PhoneCard key={phone.id} phone={phone} />
          ))}
        </div>
      </div>
    );
  }
}

export default MenuPage;