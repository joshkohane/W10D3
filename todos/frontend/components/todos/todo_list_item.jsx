import React from 'react'
import TodoDetailView from './todo_detail_view';
import TodoList from './todo_list'

class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: false
        }
        this.updateTodo = this.updateTodo.bind(this);
        this.renderDetail = this.renderDetail.bind(this);
    }

    updateTodo(e) {
        e.preventDefault();
        let newTodo = Object.assign({}, 
            this.props.todo,
            {done: !this.props.todo.done}
            )
        this.props.receiveTodo(newTodo);
    }

    renderDetail(e) {
        e.preventDefault()
        this.setState({ detail: !this.state.detail })
    }

    render() {

        return (
            <ul>
                <li onClick={this.renderDetail}>{this.props.todo.title}</li>
                <button onClick={this.updateTodo}>{(this.props.todo.done) ? 'Undo' : 'Done'}</button>
                {(this.state.detail) ? <TodoDetailView todo={this.props.todo} /> : ''}
            </ul>
        )
    }
}

export default TodoListItem