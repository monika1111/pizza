import {cartConstants} from "./cartReducer";

export const updateCart = (data) => (
    {
        type: cartConstants.UPDATE_CART,
        payload: data
    }
);

export const removeItem = (data) => (
    {
        type: cartConstants.REMOVE_ITEM,
        payload: data
    }
);

export const emptyCart = () => (
    {
        type: cartConstants.EMPTY_CART
    }
);

export const removeConfirmation = () => (
    {
        type: cartConstants.REMOVE_ORDER_CONFIRM
    }
);