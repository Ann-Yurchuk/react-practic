import React from 'react';
import PropTypes from 'prop-types';
import css from './TodoList.module.css';

const TodoList = ({ todos, onDeleteTodo }) => {
    return (
        <ul className={css.TodoList}>
            {todos.map(({ id, text }) => (
                <li key={id} className={css.TodoList__item}>
                    <p className={css.TodoList__text}>{text}</p>
                    <button type='button' onClick={() => onDeleteTodo(id)}>Видалити</button>
                </li>
            ))}
        </ul>
    )
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    })),
}

export default TodoList;