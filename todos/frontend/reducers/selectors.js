export const allTodos = ({todos}) => Object.keys(todos).map(id => todos[id]);

export const stepsByTodoId = ({steps}, todoId) => {
    let stepsINeed = [];
    Object.keys(steps).forEach(stepId => {
        if (steps[stepId].todo_id === todoId) stepsINeed.push(steps[stepId])
    })
    return stepsINeed;
}