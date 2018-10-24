import { SET_SELECTED_PRODUCT } from '../constants'

const initialState = {
    productData : {} 
 }

const SelectedProductReducer = (state = initialState, action) => {
    if (action.type === SET_SELECTED_PRODUCT) {
        return { productData: action.value };
    }      
        
    return state
  }

  export default SelectedProductReducer;
  