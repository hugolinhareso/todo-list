import React from 'react';
import './Task.css';

const Task = (props) => {
  return (
    <div className="task-container">
      <p className="task-title">{props.title}</p>
      <p className="task-description">{props.description}</p>
      <button
        className={'task-finish-button' + (!props.finished ? '-open' : '')}
        onClick={props.handleFinishTask(props.id)}
      >
        {props.finished ? 'Reabrir' : 'Finalizar'}
      </button>
    </div>
  );
};

export default Task;
