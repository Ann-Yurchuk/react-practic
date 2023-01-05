import React from 'react';
import PropTypes from 'prop-types';
import css from './TodoList.module.css';
import classNames from 'classnames';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => {
  return (
    <ul className={css.TodoList}>
      {todos.map(({ id, text, completed }) => (
        <li
          key={id}
          className={classNames('TodoList__item', {
            'TodoList__item--completed': completed,
          })}
        >
          <input
            type="checkbox"
            className={css.TodoList__checkbox}
            checked={completed}
            onChange={() => onToggleCompleted(id)}
          />

          <p className={css.TodoList__text}>{text}</p>
          <button type="button" onClick={() => onDeleteTodo(id)}>
            Видалити
          </button>
        </li>
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};

export default TodoList;
