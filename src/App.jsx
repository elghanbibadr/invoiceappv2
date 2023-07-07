import Navbar from "./componenet/Navbar/Navbar"
import Container from "./componenet/ui/Container"

import InvoiceDetailsPage from "./componenet/pages/invoiceDetailsPage/InvoiceDetailsPage"
import DropDown from "./componenet/ui/DropDown"
const App = () => {
  return (
    <>
      <Navbar />
      <Container>
        <DropDown />
      </Container>
    </>

  )
}

export default App