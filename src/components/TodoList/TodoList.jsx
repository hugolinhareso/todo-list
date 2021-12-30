import React, { useState } from 'react';
import Task from '../Task';
import './TodoList.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    if (taskTitle && taskDescription) {
      setTasks([
        ...tasks,
        { title: taskTitle, description: taskDescription, finished: false },
      ]);
      setTaskTitle('');
      setTaskDescription('');
    }
  };

  const handleTaskFinish = (id) => {
    const newTasks = [...tasks];
    newTasks[id].finished = !newTasks[id].finished;
    setTasks(newTasks);
  };

  return (
    <div className="todolist-container">
      <div className="todolist-title">Todo List App</div>
      <form className="todolist-task-form" onSubmit={handleTaskSubmit}>
        <input
          className="todolist-task-form-input"
          type="text"
          placeholder="Título da tarefa"
          value={taskTitle}
          onChange={(event) => setTaskTitle(event.target.value)}
          required
        />
        <input
          className="todolist-task-form-input"
          type="text"
          placeholder="Descrição da tarefa"
          value={taskDescription}
          onChange={(event) => setTaskDescription(event.target.value)}
          required
        />
        <input
          type="submit"
          className="todolist-task-form-button"
          value="Criar tarefa"
        />
      </form>
      <div className="todolist-tasks-container">
        {tasks.map((task, index) => {
          return (
            <Task
              id={index}
              title={task.title}
              description={task.description}
              finished={task.finished}
              handleTaskFinish={handleTaskFinish}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
