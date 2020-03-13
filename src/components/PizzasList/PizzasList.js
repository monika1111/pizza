import React, {Component} from 'react';
import {pizzas} from './../../configs/constants'
import PizzaItem from "../PizzaItem/PizzaItem";
import './style.css'

class PizzasList extends Component {
    render() {
        return (
            <div className='pizzas-list'>
                {
                    pizzas.map(value =>
                            <PizzaItem key={value.id} {...value}/>
                    )
                }
            </div>
        );
    }
}

export default PizzasList;