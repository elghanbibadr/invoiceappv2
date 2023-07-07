import Navbar from "./componenet/Navbar/Navbar"
import Container from "./componenet/ui/Container"
import FilterInvoicesBar from "./componenet/pages/Home/FilterInvoicesBar/FilterInvoicesBar"
const App = () => {
  return (
    <>
      <Navbar />
      <Container>
        <FilterInvoicesBar />
      </Container>
    </>

  )
}

export default App