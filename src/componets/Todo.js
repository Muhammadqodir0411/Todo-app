import React from 'react'

const Todo = ({todo, deleteTodo}) => {
    return (
        <li key={todo.id}
        className='list-group-item d-flex justify-content-between'>
            <p>{todo.title}</p>
            <div className='d-flex gap-2'>
                <button className='btn btn-info text-white'>Edit</button>
                <button onClick={()=>deleteTodo(todo.id)} className='btn btn-danger'>Delete</button>
            </div>
        </li>
    )
}

export default Todo
