import React, {Component} from 'react';
import './style.css'
import {connect} from 'react-redux';
import {updateCart} from "./../../reducers/cartActions";
import IngredientsDropDown from "../IngredientsDropDown/IngredientsDropDown";
import Basket from './../../images/basket.png';
import Counter from "../Counter/Counter";

class PizzaItem extends Component {
    constructor(props) {
        super(props);

        const {quantityProperties} = this.props;
        this.state = {
            count: 1,
            selectedIngredients: [],
            quantityProperties: quantityProperties
        };
    }

    setCount = (value) => {
        this.setState({
            count: value
        })
    };

    setIngredients = (selectedIngredients) => {
        const length = selectedIngredients ? selectedIngredients.length : 0;
        this.setState({
            selectedIngredients: selectedIngredients,
            quantityProperties: this.props.quantityProperties + length
        })
    };

    addBasket = () => {
        const {id, name, price} = this.props;
        const {count, selectedIngredients} = this.state;
        const data = {
            id: id,
            name: name,
            count: count,
            price: price,
            ingredients: selectedIngredients
        };
        this.props.updateCart(data);
    };

    render() {
        console.log(this.state);
        const {id, name, weight, price, type, image} = this.props;
        const {count, selectedIngredients, quantityProperties} = this.state;
        return (
            <div className='pizza-item'>
                <img alt='pizza' src={image} className='pizza-img'/>
                <h4>{name}</h4>
                <p><span>Weight: </span>{weight}</p>
                <p><span>Type: </span>{type}</p>
                <p><span>Quantity Properties: </span>{quantityProperties}</p>
                <p><span>Price: </span>{price} ֏</p>
                <IngredientsDropDown selectedIngredients={selectedIngredients} setIngredients={this.setIngredients}/>
                <div className='basket-part'>
                    <Counter count={count} setCount={this.setCount}/>
                    <div onClick={this.addBasket}>
                        <img alt='basket' src={Basket} className='basket'/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps  = (dispatch) => {
    return {
        updateCart: (data) => {
            dispatch(updateCart(data))
        }
    }
};


export default connect(null, mapDispatchToProps)(PizzaItem);