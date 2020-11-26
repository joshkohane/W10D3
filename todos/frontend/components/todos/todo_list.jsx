import React from 'react';
import TodoListItem from './todo_list_item'
import TodoForm from './todo_form'

const TodoList = ({todos, receiveTodo}) => {
    return (
        <div>
            <ul>
                {todos.map((todo, idx) => {
                    return <li key={idx} ><TodoListItem todo={todo} /></li>
                })}
            </ul>
            <TodoForm receiveTodo={receiveTodo} />
        </div>
    )
}

export default TodoList;