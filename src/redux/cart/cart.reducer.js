import CartActionTypes from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  item: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEMS:
      return {
        ...state,
        item: addItemToCart(state.item, action.payload),
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        item: removeItemFromCart(state.item, action.payload),
      };
    case CartActionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        item: state.item.filter((i) => i.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default cartReducer;
