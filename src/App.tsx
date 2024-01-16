// import MainLayout from "./Components/Layout/MainLayout"
// import Button from "./Components/Ui/Button"
// import { FormEvent, useState } from "react"
//import NormalForm from "./Components/NormalForm/NormalForm"
// import Modal from "./Components/Ui/Modal";
import {Form, FormSection, FormSubmit} from "./Components/ReusableForm";
import Container from "./Components/Ui/Container";

function App() {
  //modal function work

  // const [modal , setModal] = useState(false);
  // const handleModalClose = () => {
  //   setModal((prev) => !prev)
  // }
  // const handleSubmit = (e:FormEvent) => {
  //   e.preventDefault();
  //   console.log(e)
  //   if(true){
  //     handleModalClose();
  //   }
  // }
  // return (
  //   <Container >
  //        <div className="h-screen w-full flex justify-center items-center">
  //           <div className="w-96 border border-red-300 p-10">
  //              <button onClick={()=> setModal((prev) => !prev)}>Modal Open</button>
  //              <Modal isOpen={modal} onClose={handleModalClose} >
  //               <Modal.Header>
  //               <Modal.CloseButton></Modal.CloseButton>
  //               </Modal.Header>
  //               {/* <h1>this is a modal</h1>  */}
  //               <form onSubmit={handleSubmit}>
  //                 <input className="border border-red-400" type="text" />
  //                 <button type="submit">submit</button>
  //               </form>
  //               </Modal>
  //                {/* <Button variant="ghost" className={undefined} > click </Button>  */}
  //           </div>
  //       </div>
  //   </Container>
  // )

  // form component structure function
 
  return (
    <Container>
      <Form>
        <FormSection />
        <FormSubmit />
      </Form>
    </Container>
  );

  // NormalForm ar work
  //   return (
  //     <Container>
  //           <NormalForm />
  //     </Container>
  //   )
  // }
}

export default App;
