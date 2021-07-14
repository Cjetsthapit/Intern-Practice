import React from 'react';
import { Modal, Button} from 'react-bootstrap';



const Modals = (props) => {
  
  if (props.shoe == null) {
    return <div></div>;
  }
  const renderSize = props.shoe.size_range.map((size) => {
    return (
      <option key={size} value={size}>
          {size}
      </option>
    );
});
 
  const renderModal = (shoe) => {
    if (shoe != null) {
      return (
        <Modal
          show={props.show}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              {/* {shoe.0.name} */}
              
          {shoe.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-12 col-md-6">
              <img src={shoe.grid_picture_url} alt="Shoes"/>
              </div>
              <div className="col-12 col-md-6 pl-2" style={{fontWeight:'bold', fontSize:'18px'}}>
              <div>{shoe.brand_name}</div>
              <div>
                <label for="size" style={{marginRight:'10px'}}>Choose appropriate size</label>
                <select id="size" >
                  {renderSize}
                </select>
              </div>
              </div>
            </div>
          
          </Modal.Body>
          <Modal.Footer>
          <Button onClick={props.hide} variant="success">Add to Cart</Button>
            <Button onClick={props.hide} variant="danger" >Cancel</Button>
            
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
    {renderModal(props.shoe)}
  </React.Fragment>
)
}
export default Modals;



