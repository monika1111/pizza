import React, {Component} from 'react';
import BasketImg from '../../images/WhiteBasket.png';
import './style.css'
import {connect} from 'react-redux';
import CartItem from "../CartItem/CartItem";
import {emptyCart, removeConfirmation} from "../../reducers/cartActions";

class Basket extends Component{
    constructor(props) {
        super(props);

        this.state= {
            showOrders: false
        }
    }

    showOrders = () => {
        if(this.state.showOrders){
            this.props.removeConfirmation();
        }
        this.setState({
            showOrders: !this.state.showOrders
        })
    };

    confirm = () => {
        this.props.emptyCart();
    };

    render() {
        const {showOrders} = this.state;
        const {total, cartItems, totalPrice, orderConfirmed} = this.props;
        return (
            <div className={`order-block ${showOrders ? 'cover': ''}`}>
                <div className='round-basket-block' onClick={this.showOrders}>
                    { showOrders ?
                        <span>X</span>:
                        <>
                        <div>
                            <img alt='basket' src={BasketImg} className='white-basket'/>
                        </div>
                        <span className='ordered-count'>{total}</span>
                        </>
                    }

                </div>
                { showOrders ?
                    <div className='ordered-list'>
                        <p className='ordered-title'>Ordered Items</p>
                        <div className='list-content'>
                        { cartItems.length ?
                                cartItems.map(value =>
                                    <CartItem key={value.id} item={value}/>
                                )
                            : orderConfirmed ? <p className='empty-order-message'>Your Order Confirmed</p>
                            :<p className='empty-order-message'>Your Cart Is Empty</p>
                        }
                        </div>
                        { cartItems.length ?
                            <>
                            <div className='total-price'>General Price {totalPrice} ֏</div>
                            <button className='confirm' onClick={this.confirm}>Confirm Order</button>
                            </> : null
                        }
                    </div>  : null
                }
            </div>
        )
    }
}

const mapStateToProps = ({total, cartItems, totalPrice, orderConfirmed}) => {
    return {
        total,
        cartItems,
        totalPrice,
        orderConfirmed
    }
};

const mapDispatchToProps  = (dispatch) => {
    return {
        emptyCart: () => {
            dispatch(emptyCart());
        },
        removeConfirmation: () => {
            dispatch(removeConfirmation());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket)