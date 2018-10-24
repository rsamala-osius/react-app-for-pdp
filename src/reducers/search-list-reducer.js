import GET_ITEMS  from '../constants';
import {GET_ITEMS_ERROR}  from '../constants';

const initialState = {
    items:[],
    isCallFailed: false,
    isPending : true 
 }

const itemsReducer = (state = initialState, action) => {
    if (action.type === GET_ITEMS) {
        return { items: action.data, isCallFailed: false, isPending: false};
    }else if(action.type === GET_ITEMS_ERROR){
        return {items : [], isCallFailed: true, isPending: false};
    }
          
        
    return state
  }

  export default itemsReducer;
  
  