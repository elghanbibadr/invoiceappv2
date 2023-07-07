import Navbar from "./componenet/Navbar/Navbar"
import Container from "./componenet/ui/Container"
import InvoiceDetailsPage from "./componenet/pages/invoiceDetailsPage/InvoiceDetailsPage"
const App = () => {
  return (
    <>
      <Navbar />
      <Container>
        <InvoiceDetailsPage />
      </Container>
    </>

  )
}

export default App