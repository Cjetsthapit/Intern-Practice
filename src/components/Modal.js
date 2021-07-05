import React, { useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
const Modals = ({ show, hide, shoe }, props) => {
  useEffect(()=>console.log(shoe[0].id),[]);
  // const sh = shoe.filter(s=> s.id===shoeId);
  // console.log(shoe);
  // const fun =()=>{
  //     for (const val in shoe){
  //         console.log
  //     }
  // }
  // const val =shoe[0].map(sh=>console.log(sh));
  // const name={shoe !== null ? }
  if (shoe == null) {
    return <div></div>;
  }
  const renderModal = (shoe) => {
    if (shoe != null) {
      return (
        <Modal
          show={show}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              {/* {shoe.0.name} */}
              

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
      );
    }
    else{
      return(
        <div></div>
      );
    }
  }

  return (
  <React.Fragment>
    {renderModal(shoe)}
  </React.Fragment>
)
}
export default Modals;



