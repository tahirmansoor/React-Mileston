import React, { useState } from "react";
import "./App.css";
import Menu from "./Components/Menu";
import Card from "./Components/Card";
import TodoList from "./Components/TodoList";
import Listcard from "./Todo/Listcard";






const data = '(1605)'


function App() {

  
  return (
    <>
   
      <Menu />
      <Card props={data} />
      <TodoList />
      <Listcard />
   
     
    {/* <Container>
       <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter a new task"  />
      <button onClick={addtask}>  Add  </button>
    </Container> */}
      
    </>
  );
}

export default App;
