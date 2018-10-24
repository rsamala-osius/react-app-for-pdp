import GET_ITEMS  from '../constants';
import {GET_ITEMS_ERROR}  from '../constants';
import {config} from '../config'

export const getItems = () => {
    var user = JSON.parse(localStorage.user);

    return dispatch => {
        console.log("user",user, user.token)
        fetch(`${config.apiUrl}/product/products`, {headers: new Headers({
            'x-access-token': user.token
                })}
            )
            .then((resp) => {
                if(resp.status !==200){
                    throw new Error(resp);
                }else{
                    return resp.json();
                }
               
            }) // Transform the data into json
            .then(function(data) {
                dispatch({
                    type: GET_ITEMS,
                    data: data
                })
        }).catch((error) => {
            dispatch({
                type: GET_ITEMS_ERROR,                
            })
        })    
    }
  }