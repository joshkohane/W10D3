import React from 'react';
import TodoListItem from './todo_list_item'
import TodoForm from './todo_form'

const TodoList = ({todos, receiveTodo }) => {
    return (
        <div>
            <TodoForm receiveTodo={receiveTodo} />
            <br/>
            <h1>Todo List</h1>
            <ul>
                {todos.map((todo, idx) => {
                    return <TodoListItem todo={todo} receiveTodo={receiveTodo} key={idx} />
                })}
            </ul>
        </div>
    )
}

export default TodoList;