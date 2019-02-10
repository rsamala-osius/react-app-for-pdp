import React, { Component } from 'react';
import { Breadcrumb } from 'react-bootstrap';
// import jeans from '../../images/jeans.tif';

class ProductDisplayImagesComponent extends Component {
    state = {}
    render() {
        return (<div className="product">
            <div>
                <Breadcrumb style={{
                    background: "#fff"
                }}>
                    <Breadcrumb.Item>Men</Breadcrumb.Item>
                    <Breadcrumb.Item>Jeans</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div>
                <img width="100%" height={600} alt="900x500" src={this.props.srcURL} />
            </div>
        </div>);
    }
}

export default ProductDisplayImagesComponent;
