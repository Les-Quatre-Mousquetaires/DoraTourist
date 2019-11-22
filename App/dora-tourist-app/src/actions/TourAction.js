import { GET_TOURS, GET_TOUR } from "../utils/Types";
import APICaller from "../utils/APICaller";

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
        console.log("TOUR ACTIONS:",response);
        dispatch({type: GET_TOUR, payload: response });
    
    }
};



export {GetTours, GetTour}
