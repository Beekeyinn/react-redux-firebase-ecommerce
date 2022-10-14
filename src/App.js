import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notification from "./components/Notification";
import { fetchCartData, sendCartData } from "./store/actions/cartActions";
let firstRender = true;
function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const { change, message } = useSelector((state) => state.ui.cartChanged);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (firstRender) {
      firstRender = false;
      return;
    }
    if (change) {
      dispatch(sendCartData(cart, message));
    }
    return () => {};
  }, [cart, dispatch, change, message]);
  return (
    <div className="App">
      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}

      {!isLoggedIn ? <Auth /> : <Layout />}
    </div>
  );
}

export default App;
