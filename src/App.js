import { Button } from 'bootstrap';
import React, { useState } from 'react';
import './App.css';
import Card from './componets/Card.js';
import Todo from './componets/Todo.js'


function App() {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])

  const addTodoHandler = () => {
    const newTodo = {
      id: todos.length - 1,
      title: input,
    }
    setTodos([...todos, newTodo]);
    setInput('')
  }

const deleteHandler = (id)=>{
  const result = todos.filter((todo)=>{
    if(todo.id !== id){
      return todo;
    }
  })
  setTodos(result);
}

  return (
    <div className="App container">
      <h2 className='text-center my-3'>Todo App</h2>
      <div className='card'>
        <div className='card-header'>
          <input
            value={input}
            onChange={(evt) => setInput(evt.target.value)}
            type="text"
            placeholder='Add todo'
            className='form-control'>
          </input>
          <button onClick={addTodoHandler} className='btn btn-primary form-control my-2'>Add todo</button>
        </div>
        <div className='card-body'>
          <ul className='list-group'>
            {todos.map((todo) => (
              <Todo 
                deleteTodo={deleteHandler}
                todo={todo} 
                key={todo.id} 
              />))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;