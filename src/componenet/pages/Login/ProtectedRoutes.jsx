const ProtectedRoute = ({ component: Component, ...rest }) => {
    const user = auth.currentUser;

    return (
        <Route
            {...rest}
            render={(props) =>
                user ? <Component {...props} /> : <Redirect to="/signin" />
            }
        />
    );
};

export default ProtectedRoute;
