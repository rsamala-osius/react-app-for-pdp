import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Radio, Button } from 'react-bootstrap';
import ProductDetailsomponent from '../product-details/product-details-component';
import ShippingAndReturnComponent from '../shipping-returns/shipping-return-component';

class ProductDisplayDescriptionComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { product: this.props.productData };
    };

    render() {
        return (

            <div>
                <b>{this.state.product["productName"]}</b>
                <h1>{this.state.product["product-description"]}</h1>
                <div><span>USD {this.state.product.price}</span></div>
                <div>
                    <span className="color-code">
                        Color : </span>
                    <span>{this.state.product.color}</span>
                </div>
                <div>
                    <div className="row">
                        <div className="col-md-8">
                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel>Size:</ControlLabel>
                                <FormControl componentClass="select" placeholder="select">
                                    {this.state.product.size.map(value => <option key={value} value={value}>{value}</option>)}
                                </FormControl>
                            </FormGroup>
                        </div>
                        {this.state.product.quantity ? 
                            <div className="col-md-4">
                                <FormGroup controlId="formControlsSelect">
                                    <ControlLabel>Qty</ControlLabel>
                                    <FormControl componentClass="select" placeholder="select">
                                        {this.state.product.quantity.map(value => <option key={value} value={value}>{value}</option>)}
                                    </FormControl>
                                </FormGroup>
                            </div>
                        : ""}
                    </div>
                    <div>
                        <FormGroup>
                            <Radio name="radioGroup" inline>
                                Ship
                            </Radio>{' '}

                        </FormGroup>
                    </div>
                    <div>
                        <Button bsSize="large" style={{
                            background: "#000", color: "#fff"
                        }} block>
                            ADD TO BAG
                        </Button>
                        <hr />
                    </div>
                    <div>
                        <h5>PRODUCT DETAILS</h5>
                    </div>
                    <div>
                        {
                            this.state.product.details ? <ProductDetailsomponent details={this.state.product.details} /> : ""
                        }

                        <hr />
                    </div>
                    <ShippingAndReturnComponent />
                </div>

            </div>
        );
    }
}


export default ProductDisplayDescriptionComponent;