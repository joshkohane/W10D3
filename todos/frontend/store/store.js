import { createStore } from 'redux';
// import reducer from '../reducers/reducer.js';
import rootReducer from '../reducers/root_reducer'

// export const store = createStore(reducer)

const configureStore = (preloadedState = {}) => {
    return createStore(rootReducer, preloadedState)
}

export default configureStore;

// return createStore(() => ({}), preloadedState)