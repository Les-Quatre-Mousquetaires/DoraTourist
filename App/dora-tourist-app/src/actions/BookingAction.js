import APICaller from "../utils/APICaller";
import {GET_ALL_BOOKING} from "../utils/Types";

const getAllBooking = ()=>{
    return async dispatch =>{
        let url = "api/booking";
        const response = await APICaller(url,'GET');
        dispatch({type: GET_ALL_BOOKING, payload: response });
    }
};
export  {getAllBooking};
