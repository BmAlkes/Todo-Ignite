import { Trash } from "phosphor-react";
import React from "react";
import "./styled.css";

const Tasks = ({ content, onDeleteTask, handleChangeState }) => {
  const handleDeleteTask = () => {
    onDeleteTask(content);
  };

  const handleFinishTask = (e) => {
    handleChangeState(content.id);
  };

  return (
    <div className="taskLine">
      <div>
        <input type="checkbox" onClick={handleFinishTask} />
        <li className={content.isComplete ? "active" : null}>
          {content.tasks}
        </li>
      </div>
      <Trash onClick={handleDeleteTask} />
    </div>
  );
};

export default Tasks;
