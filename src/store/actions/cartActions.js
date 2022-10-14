import { getCarts, updateCart } from "../../api";
import { cartActions, uiActions } from "../slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    try {
      const data = await getCarts();
      if (!data.itemList) {
        data.itemList = [];
      }
      dispatch(cartActions.replaceData(data));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sending request failed",
          type: "error",
        })
      );
    }
  };
};

export const sendCartData = (cart,message="updated") => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        open: true,
        message: "Sending request",
        type: "warning",
      })
    );
    try {
      await updateCart(cart);
      dispatch(
        uiActions.showNotification({
          open: true,
          message: message,
          type: "success",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sending request failed",
          type: "error",
        })
      );
    }
  };
};
