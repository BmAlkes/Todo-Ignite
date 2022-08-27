import { Trash } from "phosphor-react";
import React from "react";
import "./styled.css";

interface Content {
  id: string;
  tasks: string;
  isComplete: boolean;
}
interface TaskProps {
  content: Content;
  onDeleteTask: ({}) => {};
  handleChangeState: ({}) => {};
}

const Tasks = ({ content, onDeleteTask, handleChangeState }: TaskProps) => {
  const handleDeleteTask = () => {
    onDeleteTask(content);
  };

  const handleFinishTask = () => {
    handleChangeState(content.id);
  };

  return (
    <div className="taskLine">
      <div>
        <input type="checkbox" onClick={handleFinishTask} />
        <li className={content.isComplete ? "active" : "desactive"}>
          {content.tasks}
        </li>
      </div>
      <Trash onClick={handleDeleteTask} />
    </div>
  );
};

export default Tasks;
