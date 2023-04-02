import React from "react";

import './styles.css';
import { useState } from "react";

import Todo from "./components/Todo";

function App() {

  const [todo, setTodo] = useState("");
  const [array, setArray] = useState(["football", "cricket", "basketball"]);
  

  const handleAdd = () => {
    setArray((oldItems)=>{
      return [...oldItems, todo];
    })
    console.log(array);
    setTodo("");
  }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1 className="heading">To Do List</h1>
          <div className="inputContainer" >
            <input value={todo} className="inputField" onChange={e => setTodo(e.target.value)} type="text" placeholder="Enter your task" />
            <button onClick={handleAdd} className="addButton">Add</button>
          </div>

          {/* <span>{todo}</span> */}



          <div>{array.map((todo,index) => {
            return (
              <Todo key={index} list={array} setArray={setArray} name={todo} />
            )
          })}</div>
        </div>
      </div>

    </>
  );
}

export default App;
