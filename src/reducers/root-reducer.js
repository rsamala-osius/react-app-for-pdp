
import { combineReducers } from 'redux';
import itemsReducer  from './search-list-reducer';
import SelectedProductReducer  from './selected-product-reducer';
import { alert }  from './alert.reducer';
import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';



  const RootReducer = combineReducers({
    itemsReducer,
    SelectedProductReducer,
    alert,
    authentication,
    registration,
    users
  })
  export default RootReducer;