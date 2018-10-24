import React, { Component } from 'react';
import Tiles from '../tile/tile-component';
import { Grid, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getItems} from '../../actions/search-list-actions';



class SearchFormComponent extends Component {
    constructor(props){
        super(props);
       // this.state = {items: this.props.items};
        this.props.getItems();
    }
    // static getDerivedStateFromProps(props, state){
    //     console.log(props, state)
    //    return props;
    // }
    tiles() {
        let tilesList ="";
        if(this.props.isPending){
            tilesList = <div> LOADING...............................</div>
        }else if( !this.props.isPending && this.props.isCallFailed) {
            tilesList = <div>Failed to fetch details</div>
        }else if( !this.props.isPending && !this.props.isCallFailed && !this.props.items.length){
            tilesList = <div>there are no products to show</div>
        }else if( !this.props.isPending && !this.props.isCallFailed && this.props.items.length){
             tilesList = this.props.items.map((curr, index)=> {
                      return <Tiles key={index} obj={curr} index={index}/>
                     });
        }
        return tilesList;
    }

    render(){

        return(
            <div>
                <Grid>
                    <Row className="show-grid">
                    {  this.tiles()}
                    </Row>
                </Grid>
            </div>

        )
    }

}


const mapStateToProps = state => ({
    items: state.itemsReducer.items,
    isCallFailed : state.itemsReducer.isCallFailed,
    isPending: state.itemsReducer.isPending
  })
  const mapDispatchToProps = dispatch => bindActionCreators({
    getItems
  }, dispatch)



export default  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchFormComponent)