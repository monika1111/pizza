import React, {Component} from 'react';
import './style.css'
import {connect} from 'react-redux';
import {removeItem, updateCart} from "./../../reducers/cartActions";
import IngredientsDropDown from "../IngredientsDropDown/IngredientsDropDown";
import Basket from './../../images/basket.png';
import Counter from "../Counter/Counter";

class PizzaItem extends Component {
    constructor(props) {
        super(props);

        const {quantityProperties, id, price} = this.props;
        this.state = {
            count: 0,
            price: price,
            selectedIngredients: [],
            quantityProperties: quantityProperties,
            id: id
        };
    }

    static getDerivedStateFromProps(nextProps, prevState){
        const index = nextProps.cartItems.findIndex(item => item.id === prevState.id);
        if (index > -1) {
            return {
                count: nextProps.cartItems[index].count
            }
        } else{
            return {
                count: 0
            }
        }
    }

    setCount = (value) => {
        this.setState({
            count: value
        }, () => this.addBasket(value))
    };

    setIngredients = (ingredients) => {
        const {id, name, updateCart, price} = this.props;
        const {count} = this.state;
        const length = ingredients ? ingredients.length : 0;
        const extraPrice = ingredients ? ingredients.reduce((sum, item) => sum + (item.price || 0), 0) : 0;

        this.setState({
            selectedIngredients: ingredients,
            quantityProperties: this.props.quantityProperties + length,
            price: price + extraPrice
        });

        if(count !== 0){
            const data = {
                id: id,
                name: name,
                count: count,
                price: price + extraPrice,
                ingredients: ingredients
            };
            updateCart(data);
        }
    };

    addBasket = (count) => {
        const {id, name, updateCart, removeItem} = this.props;
        const {selectedIngredients, price} = this.state;
        const data = {
            id: id,
            name: name,
            count: count,
            price: price,
            ingredients: selectedIngredients
        };

        this.setState({
            count: count,
        });
        if(count === 0){
            removeItem(data);
        } else {
            updateCart(data);
        }

    };

    render() {
        console.log(this.state);
        const {name, weight, type, image} = this.props;
        const {count, selectedIngredients, quantityProperties, price, showSpinner} = this.state;
        return (
            <>
            {
            <div className='pizza-item'>
                <img alt='pizza' src={image} className='pizza-img'/>
                <h4>{name}</h4>
                <p><span>Weight: </span>{weight}</p>
                <p><span>Type: </span>{type}</p>
                <p><span>Quantity Properties: </span>{quantityProperties}</p>
                <p><span>Price: </span>{price} ֏</p>
                <IngredientsDropDown selectedIngredients={selectedIngredients} setIngredients={this.setIngredients}/>
                <div className='basket-part'>
                    {
                        count ?  <Counter count={count} setCount={this.setCount}/>:
                        <div onClick={() => this.addBasket(1)}>
                            <img alt='basket' src={Basket} className='basket'/>
                        </div>
                    }
                </div>
            </div>
            }
            </>
        );
    }
}

const mapStateToProps = ({cartItems}) => {
    return {
        cartItems
    }
};

const mapDispatchToProps  = (dispatch) => {
    return {
        updateCart: (data) => {
            dispatch(updateCart(data))
        },
        removeItem: (data) => {
            dispatch(removeItem(data))
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(PizzaItem);