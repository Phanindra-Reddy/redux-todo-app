import React,{useState} from 'react';
import './App.css';

import {useSelector, useDispatch} from 'react-redux';
import { addTodo, deleteTodo, toggleTodo, editTodo } from './redux/actions/actions';


function Todo() {

  const todos = useSelector(state => state);
  const dispatch = useDispatch();

  console.log(todos);

  const [todo, setTodo] = useState('');

  const onSubmitForm = (e) => {
      e.preventDefault();
      dispatch(addTodo(todo));
      setTodo('')
  }

  return (
    <div className="App">
      <h1>React Redux TODO App</h1>

      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="Enter TODO"
          value={todo}
          onChange={(e)=>setTodo(e.target.value)}
        />
        <button>Add TODO</button>
      </form>


      <ol>
        <h5>Todos</h5>
        
        {
          todos.map(todo => 
            <TodoForm 
              key={ todo.id }
              id={ todo.id }  
              todoname={todo.todoname} 
              dispatch={dispatch}
              completed={todo.completed}
            />
          )
        }
      </ol>
 
    </div>
  );
}

const TodoForm = ({id, todoname, completed, dispatch}) => {

  const [todo, setTodo] = useState(todoname);
  const [edit, setEdit] = useState('list');

  return (
    <div>
      {
        edit === 'list' ?
        
        <div key={id}>
          <li style={{textDecoration:completed?'line-through':'none'}}>{todoname}</li>
    
          <button onClick={()=>dispatch(toggleTodo(id))}>Completed</button>
          <button onClick={()=>setEdit(dispatch(editTodo(id,todoname)))}>Edit</button>
          <button onClick={()=>dispatch(deleteTodo(id))}>Delete</button>
        </div> :

        <div>
          <input type="text" value={todo} onChange={e=>setTodo(e.target.value)}/>
          <button type="submit" onClick={()=>{dispatch(editTodo(id,todo));setEdit('list')}}>Save</button>
          <button onClick={()=>setEdit("list")} id="cancelBtn">Cancel</button>
        </div>
      }
    </div>
  )
}

export default Todo;
