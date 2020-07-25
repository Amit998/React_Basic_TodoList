import React,{ useState} from 'react';
import './App.css';


function Todo({todo,index,completeTodo,deleteTodo}){
  return <div style={{textDecoration: todo.isComplete ? 'line-through' : ''}}  className="todo">{todo.text}
  <div>
    <button onClick={() => completeTodo(index) }>COMPLETE</button>
    <button onClick={() => deleteTodo(index) }>DELETE</button>
  </div>
  </div>

}
function TodoForm({ addTodo}){
  const [value,setValue] =useState('');

  const handleSubmit = e =>{
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');

  }

  return (
    <form onSubmit={handleSubmit}>
    <input type="text" className="input" value={value} onChange={
      e => setValue(e.target.value)
      
    }
    placeholder="Add Your Details"
    ></input>
    </form>
  )

}


function App(){
  const [todos,setTodods] = useState([
    {
      text:'Learn About React',
      isComplete: false
    },
    {
      text:'Meet New Friend',
      isComplete: false
    },
    {
      text:'Learn New Things',
      isComplete: false
    },
    {
      text:'Take some rest',
      isComplete: false
    }
  ]);


  const addTodo= text =>{
    const newTodos=[...todos,{text}];
    setTodods(newTodos);
  };

  const completeTodo = index =>{
    const newTodos=[...todos];
    newTodos[index].isComplete=true;
    setTodods(newTodos)
    console.log(index);
  };
const deleteTodo = index =>{
  const newTodos=[...todos];
  newTodos.splice(index,1);
  setTodods(newTodos);
  
}


  return(
    <div className="app">
      <div className="todo-list">
        {todos.map((todo,index) =>(
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} />
        ))}
        <TodoForm addTodo={addTodo} />
      
      </div>
    </div>
  )
}

export default App;