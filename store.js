import { createStore, applyMiddleware, compose } from redux
import rootReducer from "./reducers"

//create initial state
const initialState = {}

//create array for all middleware
const middleware = []

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...midleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store