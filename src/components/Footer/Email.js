import React from 'react';
import {InputGroup,FormControl,Button} from 'react-bootstrap';
 import {TiArrowForwardOutline} from 'react-icons/ti';
const Email=(props)=>(
    <React.Fragment>
        <InputGroup className="mb-3">
            <FormControl
            placeholder="Enter your email"
            aria-label="Email"
            />
            <Button variant="outline-light" id="button-addon2">
           <TiArrowForwardOutline/>
            </Button>
        </InputGroup>
    </React.Fragment>
)
export default Email;