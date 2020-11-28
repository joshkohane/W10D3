import React from 'react';
import { uniqueId } from '../../util/util'

class StepForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: uniqueId(),
            title: '',
            body: '',
            done: false,
            todo_id: this.props.todo_id
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
        // debugger
        e.preventDefault()
        this.props.receiveStep(this.state);
        this.setState({
            id: uniqueId(),
            title: '',
            body: '',
            todo_id: this.props.todo_id,
            done: false,
        })
    }

    render() {
        return (
            <div>
                <h1>New Step</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Title:
                        <input type="text" value={this.state.title} onChange={this.updateTitle} />
                    </label>
                    <br />
                    <label>Body:
                        <input type="text" value={this.state.body} onChange={this.updateBody} />
                    </label>
                    <br />
                    <input type="submit" value="Add Step" />
                </form>
            </div>
        )
    }
}

export default StepForm;