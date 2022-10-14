export const showNotification = (state, action) => {
  state.notification = {
    message: action.payload.message,
    type: action.payload.type,
    open: action.payload.open,
  };
};
export const showCart = (state, action) => {
  state.showCart = !state.showCart;
};

export const cartChanged = (state, action) => {
  state.cartChanged.change = action.payload.change;
  state.cartChanged.message = action.payload.message;
};
