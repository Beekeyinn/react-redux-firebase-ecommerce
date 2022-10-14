export const updateCart = async (cart) => {
  const res = await fetch(
    "https://react-redux-ecommerce-37fe3-default-rtdb.asia-southeast1.firebasedatabase.app/cartItems.json",
    {
      method: "PUT",
      body: JSON.stringify(cart),
    }
  );
  const data = await res.json();
  return data;
};

export const getCarts = async () => {
  const res = await fetch(
    "https://react-redux-ecommerce-37fe3-default-rtdb.asia-southeast1.firebasedatabase.app/cartItems.json"
  );
  const data = await res.json();
  return data;
};
