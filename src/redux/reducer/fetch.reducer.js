const INITIAL_STATE = {
    loading: false,
    data: null,
    error: null
};

const fetchReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "DATA":
            return {...state, data: action.payload }
        case "FETCH_DATA":
            return {...INITIAL_STATE,loading : true, error: null}
        case "FETCH_DATA_KO":
            return {...INITIAL_STATE, loading: false , error : action.payload}
        case "FETCH_DATA_OK":
            return {...INITIAL_STATE, loading: false , data: action.payload}
        default : 
        return state;
    }
}

export default fetchReducer;