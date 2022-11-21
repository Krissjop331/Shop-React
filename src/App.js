import React, { Component } from 'react'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Items from './components/items/Items';
import Categories from './components/categories/Categories';
import ShowFullItem from './components/showFullItem/ShowFullItem';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: [],
      currentItem: [],
      items: [   // ! содержит в себе все товары сайта
        {
          id: 1,
          title: 'Стул серый',
          img: 'char-grey.jpg',
          desc: 'Lorem Ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.',
          category: 'char',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Стол',
          img: 'table.jpg',
          desc: 'Lorem Ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.',
          category: 'tables',
          price: '149.99'
        },
        {
          id: 3,
          title: 'Диван',
          img: 'sofa.jpg',
          desc: 'Lorem Ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.',
          category: 'Sofa',
          price: '249.99'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItem = this.state.items;  //! Изначально помещаем туда все элементы

    this.addOrder = this.addOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }


  render() {
    return (
      <div className="app">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItem} addOrder={this.addOrder}/>

        {this.state.showFullItem && <ShowFullItem item={this.state.fullItem} onShowItem={this.onShowItem} addOrder={this.addOrder}/>}

        <Footer/>
      </div>
    )
  }

  // ! Выводит полностью товар
  onShowItem(item) {
    this.setState({
      showFullItem: !this.state.showFullItem,
      fullItem: item
    })
  }


  // ! Показывает товары при определенной категории
  chooseCategory(category) {
    if(category == 'all') {
      this.setState({
        currentItem: this.state.items
      })
      return;
    }

    this.setState({
      currentItem: this.state.items.filter(el => el.category === category)
    })
  }


  // ! Добавляет в корзину товар
  addOrder(item) {
    // Делаем проверку чтобы не добавлялся несколько раз один и тот же товар
    let isArray = false;
    this.state.orders.forEach(el => {
      if(el.id === item.id) {
        isArray = true;
      }
    });
    if(!isArray) {
      this.setState({
        orders: [...this.state.orders, item]  // ! Добавляем новый элемент к текущему массиву
      });
    }

    // this.setState({
    //   orders: [...this.state.orders, item]  // ! Добавляем новый элемент к текущему массиву
    // });
  }

  // ! Удаляем с корзины товары
  deleteOrder(id) {
    this.setState({
      orders: this.state.orders.filter(el => el.id !== id)
    })
  }
}


export default App;
