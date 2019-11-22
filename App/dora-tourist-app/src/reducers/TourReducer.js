import {GET_TOURS, GET_TOUR, NEW_TOUR, UPDATE_TOUR} from "../utils/Types";


let tourNull = {
    _id: '',
    name: '',
    location: '',
    description: '',
    image: '',
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
};

let tours = [tourNull];


let toursInitState = tours ? tours : {
    tours: [tourNull]
};

let tourReducer = (state = toursInitState, action) => {
    switch (action.type) {
        case GET_TOURS:
            let tours = action.payload.data;
            return tours;
        case GET_TOUR:
            let tour = [action.payload.data];
            return tour;
        case NEW_TOUR:
            return action.payload.data;
        case UPDATE_TOUR:
            return action.payload.data;
        default:
            return state;
    }
};

export default tourReducer;
