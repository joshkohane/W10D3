import { RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP } from '../actions/step_actions';

const initialState = {
    1: { // this is the step with id = 1
        id: 1,
        title: 'walk to store',
        body: 'QUICKLY',
        done: false,
        todo_id: 1
    },
    2: { // this is the step with id = 2
        id: 2,
        title: 'buy soap',
        body: 'MORE SOAP',
        done: false,
        todo_id: 1
    }
}

const todosReducer = (currentState = initialState, action) => {
    Object.freeze(currentState);
    let nextState = Object.assign({}, currentState);
    switch (action.type) {
        case RECEIVE_STEP:
            nextState[action.step.id] = action.step;
            return nextState;
        case RECEIVE_STEPS:
            let newSteps = {}
            action.steps.forEach((step, idx) => {
                newSteps[idx] = step;
            });
            nextState = newSteps;
            return nextState
        case REMOVE_STEP:
            nextState = Object.assign({}, currentState)
            delete nextState[action.step.id];
            return nextState;
        default:
            return currentState;
    }
}

export default todosReducer;