import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            //! храним все категории внутри массива
            categories: [
                {
                    key: "all",
                    name: "Все"
                },
                {
                    key: "chairs",
                    name: "Стулья"
                },
                {
                    key: "tables",
                    name: "Столы"
                },
                {
                    key: "sofa",
                    name: "Диваны"
                } 
            ]
        };
    }

    render() {
        return (
            <div className='categories'>
                {this.state.categories.map(el => (
                    <div key={el.key} onClick={() => this.props.chooseCategory(el.key)} >{el.name}</div>
                ))}
            </div>
        )
    }
}

export default Categories;