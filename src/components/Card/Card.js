import React from 'react';
import { Button} from 'react-bootstrap';

const Card=({shoe,click})=>(
   
    
    <div className="Card">
        <img src={shoe.grid_picture_url} alt="Shoes"/>
        <div className="shoe"><strong>{shoe.name}</strong></div>

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