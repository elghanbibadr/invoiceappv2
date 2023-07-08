import Navbar from "./componenet/Navbar/Navbar"
import Container from "./componenet/ui/Container"
import { Route, Routes } from "react-router-dom"
import Login from "./componenet/pages/Login/Login"

const App = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
    </>

  )
}

export default App