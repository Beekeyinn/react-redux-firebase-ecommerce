import { Alert } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/slice";
export default function Notification({ type, message }) {
  const open = useSelector((state) => state.ui.notification.open);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(uiActions.showNotification({}));
  };
  return (
    <div>
      {open ? (
        <Alert onClose={handleClose} severity={type}>
          {message}
        </Alert>
      ) : null}
    </div>
  );
}
