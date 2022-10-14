import { Alert } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/slice";
import "./notification.css";

export default function Notification({ type, message }) {
  const open = useSelector((state) => state.ui.notification.open);
  const dispatch = useDispatch();
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(uiActions.showNotification({}));
    }, [3000]);

    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);

  const handleClose = () => {
    dispatch(uiActions.showNotification({}));
  };
  return (
    <div className="notification">
      {open ? (
        <Alert onClose={handleClose} severity={type}>
          {message}
        </Alert>
      ) : null}
    </div>
  );
}
