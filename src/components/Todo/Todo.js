import React from "react";
import css from './Todo.module.css';


const Todo = ({text,completed, onToggleCompleted, onDelete}) => {
    return (
        <>
            <input
            type="checkbox"
            className={css.TodoList__checkbox}
            checked={completed}
            onChange={onToggleCompleted}
          />

          <p className={css.TodoList__text}>{text}</p>
          <button type="button" onClick={onDelete}>
            Видалити
          </button> 
        </>
    )
}


export default Todo;