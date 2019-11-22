import {GET_TOURS, GET_TOUR, SET_FILTER_PARAMS} from "../utils/Types";


let tourNull = {
    _id: '',
    name: '',
    location: '',
    description: '',
    creator: {
        role: '',
        tours: [],
        name: '',
        phoneNumber: '',
        comments: [],
        _id: '',
        email: '',
        password: ''

    },
    price: '',
    advantages: [],
    info: {
        days: 0,
        maxPerson: 0,
    },
    comments: [],
    searchValue: ''
}

let tours = [tourNull];

let toursInitState = tours ? tours : {
    tours: [tourNull]
};

let tourReducer = (state = toursInitState, action) => {
    switch(action.type) {
        case GET_TOURS:
            let tours = action.payload.data;
            return tours;  
        case GET_TOUR:
            let tour = [action.payload.data];
            return tour;
        case SET_FILTER_PARAMS:
            let  searchValue = action.payload;
            console.log("SEARCH", searchValue);
            let tours2 = [tourNull];
            tours2 = state.filter( (tours) => 
            {
                return tours.location === searchValue;
            });
            console.log("TOUR2",tours2);
            return tours2;
        default:
            return state;
    }
}

export default tourReducer;