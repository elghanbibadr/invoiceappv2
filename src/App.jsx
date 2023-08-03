import Navbar from "./componenet/Navbar/Navbar"
import Container from "./componenet/ui/Container"
import Home from "./componenet/pages/Home/Home"
import { Router, Routes, Route, Navigate } from "react-router-dom";
import InvoiceDetailsPage from "./componenet/pages/invoiceDetailsPage/InvoiceDetailsPage";
import Login from "./componenet/pages/Login/Login"

const App = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/invoice/:id" element={<InvoiceDetailsPage />} />
        </Routes>
      </Container>
    </>
  )

}

export default App