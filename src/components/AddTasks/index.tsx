import { Plus } from "phosphor-react";
import React, { FormEvent } from "react";
import "./styles.css";

const AddTask = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <>
      <form onClick={handleSubmit}>
        <input placeholder="adicione uma nova Tarefa" />
        <button type="submit">
          Criar <Plus />
        </button>
      </form>
    </>
  );
};

export default AddTask;
