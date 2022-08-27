import { useState } from "react";
import "./App.css";
import CreateTask from "./components/CreateTasks";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <CreateTask />
      </div>
    </div>
  );
}

export default App;
