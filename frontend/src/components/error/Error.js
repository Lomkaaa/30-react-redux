import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { clearError, selectErrorMessage } from "../../redux/slices/errorSlice";
import { useEffect } from "react";
export const Error = () => {
    //
    const errorMessange = useSelector(selectErrorMessage);
    const dispatch = useDispatch();
    //
    useEffect(() => {
        if (errorMessange) {
            toast.info(errorMessange);
            dispatch(clearError());
        }
    }, [errorMessange, dispatch]);

    return <ToastContainer position="top-right" autoClose={2000} />;
};
