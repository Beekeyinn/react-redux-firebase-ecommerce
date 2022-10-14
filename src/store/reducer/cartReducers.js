export const addToCart = (state, action) => {
  const newItem = action.payload;
  const existingItem = state.itemList.find((item) => item.id === newItem.id);
  if (existingItem) {
    existingItem.quantity += 1;
    existingItem.totalPrice = newItem.price * existingItem.quantity;
  } else {
    state.itemList.push({
      id: newItem.id,
      price: newItem.price,
      quantity: 1,
      name: newItem.name,
      totalPrice: newItem.price * 1,
    });
  }
  state.totalQuantity = state.itemList.length;
};
export const removeFromCart = (state, action) => {
  const id = action.payload;
  const existingItem = state.itemList.find((item) => item.id === id);
  if (existingItem.quantity === 1) {
    state.itemList = state.itemList.filter(
      (item) => item.id !== existingItem.id
    );
    state.totalQuantity -= 1;
  } else {
    existingItem.quantity -= 1;
    existingItem.totalPrice = existingItem.quantity * existingItem.price;
  }
};

export const replaceData = (state, action) => {
  state.totalQuantity = action.payload.totalQuantity;
  state.itemList = action.payload.itemList;
};
