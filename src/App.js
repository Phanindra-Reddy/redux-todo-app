import React,{useState} from 'react';
import './App.css';

function App() {

  const [todo, setTodo] = useState('')
  return (
    <div className="App">
      <h1>React Redux TODO App</h1>

      <form>
        <input
          type="text"
          placeholder="Enter TODO"
          value={todo}
          onChange={(e)=>setTodo(e.target.value)}
        />
        <button>Add TODO</button>
      </form>

        
    </div>
  );
}

export default App;
