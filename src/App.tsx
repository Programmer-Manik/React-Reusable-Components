
// import MainLayout from "./Components/Layout/MainLayout"
// import Button from "./Components/Ui/Button"
import { useState } from "react"
import Container from "./Components/Ui/Container"
import Modal from "./Components/Ui/Modal";

function App() {
 
  const [modal , setModal] = useState(false);

  const handleModalClose = () => {
    setModal((prev) => !prev)
  }

  return (
    <Container >
          <div className="h-screen w-full flex justify-center items-center">
            <div className="w-96 border border-red-300 p-10">
               <button onClick={()=> setModal((prev) => !prev)}>Modal Open</button>
               <Modal isOpen={modal} onClose={handleModalClose} >
               <Modal.CloseButton />
                <h1>this is a modal</h1> 
                </Modal>
               
                {/* <Button variant="ghost" className={undefined} > click </Button> */}
            </div>
          </div>
    </Container>
  )
}

export default App
