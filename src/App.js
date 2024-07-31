import './App.css';
import { useState } from 'react';

function App() {
  let [todoList, setTodoList] = useState([]);
  let [newTask, setNewTask] = useState("");

  let handleChanges = (event) => {
    setNewTask(event.target.value);
  }

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length -1].id + 1,
      taskName: newTask,
      complited: false,
    }
    setTodoList([...todoList, task]);
  }
  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => {
      return task.id !== id;
    }));
  }
  const complite = (id) => {
    setTodoList(
      todoList.map((task) => {
        if(task.id === id){
          return {...task, complited: true}
        }
        else{
          return task;        
        }
      })
    )
  }

  return (
    <div className="App">
      <div>
        <input onChange={handleChanges}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div>
        {todoList.map((task) => {
          return <div style={{backgroundColor: task.complited ? "green" : "whith"}}>
            <h1>{task.taskName}</h1>
            <button onClick={() => deleteTask(task.id)}>X</button>
            <button onClick={() => complite(task.id)}>Complited</button>
            </div>
        })}
      </div>
    </div>
  );
}


export default App;
