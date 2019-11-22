import {GET_TOURS, GET_TOUR, NEW_TOUR, UPDATE_TOUR} from "../utils/Types";
import APICaller from "../utils/APICaller";

const GetTours = () => {
    return async dispatch => {
        const response = await APICaller('api/tours/', 'GET');
        dispatch({type: GET_TOURS, payload: response});
    } 
};

const GetTour = (id) => {
    return async dispatch => {
        let uri = `api/tours/${id}`;
        const response = await APICaller(uri, 'GET');
        //console.log("TOUR ACTIONS:",response);
        dispatch({type: GET_TOUR, payload: response });
    
    }
};

const NewTour = (tour)=>{
    return async  dispatch => {
        let url = "api/tours";
        const response = await APICaller(url,'POST',tour);
        console.log(response);
        window.alert(" Tạo thành công");
        window.location.reload();
        dispatch({type: NEW_TOUR, payload: response });
    }
};
const UpdateTour = (tour)=>{
    return async dispatch=>{
        let url = "api/tours/"+tour._id;
        const  response = await  APICaller(url,'PATCH',tour);
        console.log(response);
        window.alert(" Update thành công");
        window.location.reload();
        dispatch({type: UPDATE_TOUR, payload: response });
    }
};


export {GetTours, GetTour, NewTour, UpdateTour}
