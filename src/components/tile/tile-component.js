import React from 'react';
import { Col, Image } from 'react-bootstrap';
import Classes from './tile-component.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router';

import { SET_SELECTED_PRODUCT } from '../../constants';


class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.setSelectedProductIndex = this.setSelectedProductIndex.bind(this);
    this.state = { redirect: false }
  }
  setSelectedProductIndex() {
    this.props.dispatch({
      type: SET_SELECTED_PRODUCT,
      value: this.props.obj
    });
    this.setState({ redirect: true });
  }
  render() {
    if (this.state.redirect) {
      return <Redirect push to="/page/product-description" />;
    }
    return (
      <Col xs={6} md={2} className={Classes.cA} onClick={this.setSelectedProductIndex}>
        <div >
          <a ><Image responsive src={this.props.obj.primaryImage} alt='' /> </a>
        </div>
        <div>
          <a  >{this.props.obj.name} id={this.props.obj.id}</a>
          <p>$ {this.props.obj.price}</p>
        </div>
      </Col>
    )
  }

}
const mapStateToProps = state => ({

})
const mapDispatchToProps = dispatch => bindActionCreators({
  dispatch
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Tile);