export const cartConstants = {
    UPDATE_CART: 'UPDATE_CART',
    REMOVE_ITEM: 'REMOVE_ITEM',
    EMPTY_CART: 'EMPTY_CART',
    REMOVE_ORDER_CONFIRM: 'REMOVE_ORDER_CONFIRM'
};

const initialState = {
    cartItems: [],
    total: 0,
    totalPrice: 0,
    orderConfirmed: false
};

const removeItemData = (state, {payload}) => {
    const index = state.cartItems.findIndex(item => item.id === payload.id);
    const {count, price} = state.cartItems[index];
    const items = state.cartItems.filter(item => item.id !== payload.id);

    return {
        ...state,
        cartItems : [...items],
        total: state.total - count,
        totalPrice: state.totalPrice - (count * price)
    }
};

const removeConfirmation = (state) => {
    return {
        ...state,
        orderConfirmed: false
    }
};

const emptyCartData = () => {
    return {
        cartItems: [],
        total: 0,
        totalPrice: 0,
        orderConfirmed: true
    }
};

const updateCartData = (state, {payload}) => {
    const cartItems = state.cartItems;
    const index = cartItems.findIndex(item => item.id === payload.id);
    let oldPriceItem = 0;
    let oldItemCount = 0;
    const newPriceItem = payload.price * payload.count;
    const newCountItem = payload.count;
    if (index > -1) {
        oldPriceItem = cartItems[index].count * cartItems[index].price;
        oldItemCount = cartItems[index].count;
        cartItems[index] = payload;
    }
    else {
        cartItems.push(payload);
    }

    return {
        ...state,
        cartItems: [...cartItems],
        total: state.total - oldItemCount + newCountItem,
        totalPrice: state.totalPrice - oldPriceItem + newPriceItem
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
            case cartConstants.UPDATE_CART:
                return updateCartData(state, action);
            case cartConstants.REMOVE_ITEM:
                return removeItemData(state, action);
            case cartConstants.EMPTY_CART:
                return emptyCartData(state);
            case cartConstants.REMOVE_ORDER_CONFIRM:
                return removeConfirmation(state);
            default:
            return state;

    }
}