import React, { Component } from 'react'
import Item from '../item/Item'

export class Items extends Component {


  render() {
    return (
      <main className='items lists'>
        {this.props.items.map((el) => (
            <Item key={el.id} item={el} addOrder={this.props.addOrder} onShowItem={this.props.onShowItem}/>
        ))}
      </main>
    )
  }
}

export default Items;