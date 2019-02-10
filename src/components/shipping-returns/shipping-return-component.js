import  React,  { Component } from 'react';

class ShippingAndReturnComponent extends Component{

    render(){
        return(
                <div>
                    <h5>SHIPPING & RETURNS</h5>
                    <p>You have 365 days to return most Bloomingdale's purchases. The Final Offer items must be returned within 30 days of the shipment date.
                        For complete details, see our <a id="linkShip" className="pdp_service_link">Shipping</a> and
                      <a id="linkReturns" className="pdp_service_link">Returns </a>
                        policies.</p>
                </div>
        )


    }
}

export default ShippingAndReturnComponent
