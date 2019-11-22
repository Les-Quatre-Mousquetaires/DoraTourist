import { GET_TOURS, GET_TOUR, SET_FILTER_PARAMS } from "../utils/Types";
import APICaller from "../utils/APICaller";
import { get } from "lodash";

const GetTours = () => {
    return async dispatch => {
        const response = await APICaller('api/tours/', 'GET');
        dispatch({type: GET_TOURS, payload: response});
    } 
}

const GetTour = (id) => {
    return async dispatch => {
        let uri = `api/tours/${id}`;
        const response = await APICaller(uri, 'GET');
        dispatch({type: GET_TOUR, payload: response });
    
    }
}

const SetFilterParams = (searchValue) => {
    return async dispatch => {
        dispatch({
            type: SET_FILTER_PARAMS, 
            payload: searchValue
        });
    };
}





export {GetTours, GetTour, SetFilterParams}
