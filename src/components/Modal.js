import React,{useEffect} from 'react';
import {Modal,Button} from 'react-bootstrap';
const Modals=({show,hide,clickedShoe})=>{
    // useEffect(()=>console.log(clickedShoe),[]);
return(
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
            Under Construction
            {/* {clickedShoe.map(shoe=>{
                return(
                    {shoe.name}
                )
            })} */}{clickedShoe}
            {clickedShoe}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
        <p>
          Being Built
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={hide}>Close</Button>
      </Modal.Footer>
    </Modal>
)}
export default Modals;