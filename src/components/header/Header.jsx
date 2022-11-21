import React, { Component } from 'react'
import {FaShoppingCart} from 'react-icons/fa';
import Order from '../order/Order';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartOpen: false
    };
  }

   // !Состояние
  toggleCart = () => {
    this.setState({
      cartOpen: !this.state.cartOpen
    })
  }


  showOrder = () => {
    return (
      <div>
        {this.props.orders.map(el => (
          <Order key={el.id} item={el} onDelete={this.props.onDelete}/>
        ))}
      </div>
    )
  }

  showNothing = () => {
    return(
      <div className='empty'>
        <h2>Товаров  нет</h2>
      </div>
    )
  }

  render() {
    let active;

    if(this.state.cartOpen) {
      active = 'active';
    } else {
      active = '';
    }

    return (
      <header className="header">
        <div className="header_wrapper">
            <span className='logo'>House Staff</span>
            <ul className="nav">
                <li>Про нас</li>
                <li>Контакты</li>
                <li>Кабинет</li>
            </ul>
            <FaShoppingCart onClick={this.toggleCart} className={`shop-cart-button ${active}`}/>
            {this.state.cartOpen &&
              <div className='shop-cart'>
                {this.props.orders.length > 0 ? 
                this.showOrder() : this.showNothing()}
              </div>
            }
        </div>
        <div className="presentation"></div>
      </header>
    )
  }
}

export default Header;
