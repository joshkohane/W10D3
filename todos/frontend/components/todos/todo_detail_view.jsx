import React from 'react';
import StepListContainer from '../step_list/step_list_container'

class TodoDetailView extends React.Component {
    render() {
        const { todo, removeTodo } = this.props;
        return (
            <div>
                <p>{todo.body}</p>
                <button onClick={ removeTodo }>Delete Todo</button>
                <StepListContainer todo_id={todo.id}/>
            </div>
        )
    }
}

export default TodoDetailView;