import React from 'react';
import ProductDisplayDescriptionComponent from '../product-display-description/product-display-description-component';
import ProductDisplayImagesComponent from '../product-display-images/product-display-images-component';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ProductDescription extends React.Component {

    render() {
        return (
            <div>
                {!this.props.productData._id ?
                    <div> No product is selected</div>
                    :
                    <div className="m-pdp">
                        <div className="row">
                            <div className="col-lg-6">
                                <ProductDisplayImagesComponent srcURL={this.props.productData.primaryImage} />
                            </div>
                            <div className="col-lg-4">
                                <ProductDisplayDescriptionComponent productData={this.props.productData} />
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    productData: state.SelectedProductReducer.productData
})
const mapDispatchToProps = dispatch => bindActionCreators({
    dispatch
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ProductDescription);