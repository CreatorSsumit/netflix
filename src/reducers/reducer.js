var initialstate = {};

const Reducer = (state = initialstate, action) => {


    switch (action.type) {


        case 'data':

            return { ...state,profile: action.payload }
        default:
            return state

    }
}

export default Reducer