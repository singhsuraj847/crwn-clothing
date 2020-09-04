import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.item
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector([selectCartItems], (item) =>
  item.reduce((accumalatedQuantity, i) => accumalatedQuantity + i.quantity, 0)
);

export const selectCartItemTotal = createSelector([selectCartItems], (item) =>
  item.reduce(
    (accumalatedQuantity, i) => accumalatedQuantity + i.quantity * i.price,
    0
  )
);
