import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { AppContext } from "../../store/AppContext";

const PrivateRoute = ({ path, element: Element }) => {
    const user = useContext(AppContext);

    return (
        <Route
            path={path}
            element={user ? <Element /> : <Navigate to="/login" />}
        />
    );
};


export default PrivateRoute;
