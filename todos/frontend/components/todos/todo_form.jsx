import React from 'react';
import { receiveTodo } from '../../actions/todo_actions';
import { uniqueId } from '../../util/util'

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: uniqueId(),
            title: '',
            body: '',
            done: false,
        }
        this.updateTitle = this.updateTitle.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateTitle(e) {
        this.setState({ title: e.target.value });
    }

    updateBody(e) {
        this.setState({ body: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.receiveTodo(this.state);
        this.setState({
            id: uniqueId(),
            title: '',
            body: '',
            done: false,
        })
    }

    render() {
        return (
            <div>
                <h1>New Todo</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Title:
                        <input type="text" value={this.state.title} onChange={this.updateTitle} />
                    </label>
                    <br/>
                    <label>Body:
                        <input type="text" value={this.state.body} onChange={this.updateBody} />
                    </label>
                    <br/>
                    <input type="submit" value="Add Todo" />
                </form>
            </div>
        )
    }
}

export default TodoForm;