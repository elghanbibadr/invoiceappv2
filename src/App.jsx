import Navbar from "./componenet/Navbar/Navbar"
import Container from "./componenet/ui/Container"
import Home from "./componenet/pages/Home/Home"
// import { Routes, Route } from 'react-router-dom';
import { Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./componenet/pages/Login/Login"
import PrivateRoute from "./componenet/ui/PrivateRoute";

const App = () => {

  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* Use PrivateRoute for the routes you want to protect */}
          <PrivateRoute path="/home" element={Home} />
          {/* Redirect to the login page for any unrecognized routes */}
          <Route path="/*" element={<Navigate to="/login" />} />
        </Routes>
      </Container>
    </>
  )

}

export default App