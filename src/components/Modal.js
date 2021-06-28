import React,{useEffect} from 'react';
import {Modal,Button} from 'react-bootstrap';
const Modals=({show,hide,shoe},props)=>{
    // useEffect(()=>console.log(clickedShoe),[]);
    // const sh = shoe.filter(s=> s.id===shoeId);
    // console.log(shoe);
    // const fun =()=>{
    //     for (const val in shoe){
    //         console.log
    //     }
    // }
    // const val =shoe[0].map(sh=>console.log(sh));
    // const name={shoe !== null ? }
    
return(
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {props.children}
      <Modal.Footer>
              <Button onClick={hide}>Close</Button>
            </Modal.Footer>
    </Modal>
)}
export default Modals;