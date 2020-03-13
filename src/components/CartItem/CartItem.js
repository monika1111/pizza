import React, {Component} from 'react';
import {connect} from 'react-redux'
import Counter from "../Counter/Counter";
import './style.css'
import {updateCart, removeItem} from "../../reducers/cartActions";

class CartItem extends Component {
    constructor(props) {
        super(props);
        const {count} = this.props.item;
        this.state = {
            count: count
        };
    }

    setCount = (value) => {
        this.setState({
            count: value
        });

        this.props.updateCart({...this.props.item, count: value});
    };

    removeItem = () => {
        this.props.removeItem(this.props.item);
    };

    render() {
        const {item} = this.props;
        const {count} = this.state;
        return (
            <div>
                <div className='order-items'>
                    <div className='order-item'>
                        <p className='pizza-title'>{item.name}</p>
                        <div className='extra-ingredients'><span className='ingredients-title'>Extra Ingredients:</span> {
                            item.ingredients.map((value, index) =>
                                `${value.value}${index !== item.ingredients.length - 1 ? ', ' : ''}`
                            )
                        }
                        </div>
                        <Counter count={count} setCount={this.setCount}/>
                        <span>{item.price} ֏</span>
                        <span className='remove' onClick={this.removeItem}>Remove</span>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({totalPrice}) => {
    return {
        totalPrice
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

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);