import React from 'react'
import { receiveStep, removeStep } from '../../actions/step_actions'

class StepListItem extends React.Component {
    constructor(props) {
        super(props);
        this.updateStep = this.updateStep.bind(this);

    }

    updateStep(e) {
        e.preventDefault();
        let newStep = Object.assign({},
            this.props.step,
            {done: !this.props.step.done }
        )
        receiveStep(newStep)
    }

    render() {
        const {step, removeStep} = this.props
        return (
            <div>
                <li>{step.title}</li>
                <li>{step.body}</li>
                <button onClick={this.updateStep}>{(step.done) ? 'Undo' : 'Done'}</button>
                <button onClick={removeStep}>Delete Step</button>
            </div>
        )
    }
}

export default StepListItem;

// updateTodo(e) {
//     e.preventDefault();
//     let newTodo = Object.assign({},
//         this.props.todo,
//         { done: !this.props.todo.done }
//     )
//     this.props.receiveTodo(newTodo);
// }

{/* <button onClick={this.updateTodo}>{(this.props.todo.done) ? 'Undo' : 'Done'}</button> */}
