import { DEMO_ACTION } from "../actions/types"

const initialState = {
    //setup initial state here
}

export default function (state = initialState, action) {
    switch (action.type) {
        //setup all action cases here
        case DEMO_ACTION:
            return state
        default:
            return state
    }
}