import "./App.css";
import React, { useState } from "react";
function App() {
  var [todoInput,upadteInput]=useState()
  var [todolist, updateList] = useState([
    {
      id: 1,
      task: "Learn React",
    },
    {
      id: 2,
      task: "Make React Project",
    },
  
  ]);
  let nextID=3
  function AddNew(){
    if (todoInput===""){
      alert("Field is Empty")
    }else{
      updateList([
        ...todolist,
        {
          id:nextID,
          task:todoInput
        }
      ]
    )
    upadteInput("")
    nextID++
    }
  }

  function Deletetodo(id){
    let newtodos=todolist.filter(
      (todo)=>{
        return todo.id!==id
      }
    )
    updateList(newtodos)
  }
  return (
    <div className="container mt-5 w-50">
      <h3 className="text-center">Todo App using react</h3>
      <div className="input-group">
        <input className="form-control" type="text" onChange={(e)=>{upadteInput(e.target.value)}} value={todoInput} />
        <button className="btn btn-primary" onClick={AddNew}>Add</button>
      </div>
      <ul className="list-group mt-4">
        {todolist.map(
          (item)=>{
            return(
              <li className="list-group-item"><p>{item.task}</p><button className="btn" onClick={()=>Deletetodo(item.id)}>❌</button></li>
            )
          }
        )}
      </ul>
    </div>
  );
}

export default App;
