import { connect } from 'react-redux';
import { removeTodo } from '../../actions/todo_actions';
import { receiveSteps } from '../../actions/step_actions';
import TodoDetailView from './todo_detail_view';

const mapDispatchToProps = (dispatch, {todo}) => {
    return {
        removeTodo: () => dispatch(removeTodo(todo))
    };
}

export default connect(
    null, 
    mapDispatchToProps
)(TodoDetailView);