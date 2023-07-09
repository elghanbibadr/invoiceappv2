import Navbar from "./componenet/Navbar/Navbar"
import Container from "./componenet/ui/Container"
import Home from "./componenet/pages/Home/Home"
import ProtectedRoute from "./componenet/pages/Login/ProtectedRoutes"
import { Routes, Route } from 'react-router-dom';
import Login from "./componenet/pages/Login/Login"


const App = () => {

  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={< Login />} />
          {/* <Route path="/home" element={<Login />} /> */}
          {/* <ProtectedRoute path="/home" element={<Invoices />} /> */}
        </Routes>
      </Container>
    </>

  )
}

export default App