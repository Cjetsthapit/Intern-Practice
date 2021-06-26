import React from 'react';
import {Dropdown, Button} from 'react-bootstrap';

const Card=({shoe,click})=>(
   
    
    <div className="Card">
        <img src={shoe.grid_picture_url} alt="Shoes"/>
        <div className="shoe"><strong>{shoe.name}</strong></div>
        {/* <div className="available">
        <Dropdown>
            <Dropdown.Toggle  id="dropdown-basic">
                Available Sizes
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {shoe.size_range.map(size=><Dropdown.Item>{size}</Dropdown.Item>)}
            </Dropdown.Menu>
        </Dropdown>
        </div> */}
        <div className="releaseYear">
            <strong>Released Year : </strong>{shoe.release_year}
        </div>
        <div className="targetGroup">
            <strong>Target Group : </strong>{shoe.gender}
        </div>
        <div className="button">
            <Button variant="primary" size="md" className="mr-3" onClick={()=>click()}>
                More Details
            </Button>{' '}
            <Button variant="primary" size="md">
                Buy
            </Button>
        </div>
            
        
    </div>
)
export default Card;