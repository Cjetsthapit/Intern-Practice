import React from 'react';
import styles from './Footer.module.css';
import {Row,Col} from 'react-bootstrap';
import {FaCcVisa,FaCcMastercard,FaCcApplePay,FaCcPaypal,FaCcAmazonPay} from 'react-icons/fa';
const Links=(props)=>(
    <React.Fragment>
    <Row>
        <Col>
            <div className={styles.products}>
                <div className="sub-text white">
                    Products
                </div>
                <div className="sub-text">
                    MEN
                </div>
                <div className="sub-text">
                    WOMEN
                </div>
                <div className="sub-text">
                    BOY
                </div>
                <div className="sub-text">
                    GIRL
                </div>
                <div className="sub-text">
                    UNISEX
                </div>
            </div>
        </Col>
        <Col>
            <div className={styles.company}>
                <div className="sub-text white">
                        Company Details
                    </div>
                <div className="sub-text">
                    ABOUT US
                </div>
                <div className="sub-text">
                    CONTACT US
                </div>
                
                </div>
            
        </Col>
    </Row>
    <div className="sub-text " style={{marginTop:'10px',marginBottom:'-3px'}}>
                    Accepted Payment Methods
                </div>
        <span><FaCcVisa/></span>
        <span><FaCcMastercard/></span>
        <span><FaCcApplePay/></span>
        <span><FaCcPaypal/></span>
        <span><FaCcAmazonPay/></span>
    
    </React.Fragment>
    
);
export default Links;