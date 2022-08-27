import { ChatCentered, Plus, Trash } from "phosphor-react";
import React, { FormEvent, useState } from "react";
import "./styles.css";
import { v4 as uuidv4 } from "uuid";
import Tasks from "../Tasks";

interface TasksII {
  id: string;
  task: string;
  isComplete: boolean;
}

const CreateTask = () => {
  const [tasks, setTasks] = useState([]);
  const [newTasks, setNewTasks] = useState("");

  const handleNewTask = (event: FormEvent) => {
    setNewTasks({
      id: event.target.id,
      tasks: event.target.value,
      isComplete: false,
    });
  };

  const handleCreateNewTask = (e: FormEvent) => {
    e.preventDefault();

    setTasks([...tasks, newTasks]);

    setNewTasks("");
  };

  const handleChangeState = (id) => {
    const changeState = tasks.filter((task) => {
      return task.id === id;
    });
    setNewTasks([...tasks, (changeState[0].isComplete = true)]);
  };

  const deleteTask = (taskToDelete) => {
    const taskWithoutDeleteOne = tasks.filter((task) => {
      return task != taskToDelete;
    });
    setTasks(taskWithoutDeleteOne);
  };

  const numberOfTask = tasks.reduce((counter, obj) => {
    return (counter += 1);
  }, 0);

  const filteredTask = tasks
    .filter((task) => {
      return task.isComplete === true;
    })
    .reduce((counter) => {
      return (counter += 1);
    }, 0);

  return (
    <>
      <form onSubmit={handleCreateNewTask}>
        <input
          id={uuidv4()}
          placeholder="adicione uma nova Tarefa"
          required
          name="task"
          onChange={handleNewTask}
          isComplete={false}
        />
        <button type="submit">
          Criar <Plus />
        </button>
      </form>
      <div>
        <div className="totalTasks">
          <p>
            Tarefas criadas <span>{numberOfTask}</span>
          </p>
          <p>
            Concluidas <span>{filteredTask}</span>
          </p>
        </div>
        {tasks.length ? (
          <ul>
            {tasks.map((task) => {
              return (
                <Tasks
                  content={task}
                  key={task.id}
                  onDeleteTask={deleteTask}
                  handleChangeState={handleChangeState}
                />
              );
            })}
          </ul>
        ) : (
          <>
            <div className="withoutTask">
              <ChatCentered />
              <p>Voce ainda nao tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CreateTask;
