import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTasks";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <AddTask />
      </div>
    </div>
  );
}

export default App;
