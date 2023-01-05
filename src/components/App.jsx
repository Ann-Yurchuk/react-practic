import { Component } from 'react';
import shortid from 'shortid';
import initialTodos from '.././todos.json';
// import Counter from "./Counter";
// import  DropDown  from "./DropDown/DropDown";
// import { colorPickerOptions } from 'color/color';
// import ColorPicker from './ColorPicker/ColorPicker';
import TodoList from './TodoList';
import TodoEditor from './TodoEditor/TodoEditor';
// import LoginForm from './LoginForm/LoginForm';
// import { ProductReviewForm } from './ProductReviewForm/ProductReviewForm';
// import Form from './Form/Form';
import Filter from './Filter/Filter';
class App extends Component {
  state = {
    todos: initialTodos,
    filter: '',
  };

  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };
    this.setState(prevState => ({
      todos: [todo, ...prevState.todos],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  formSubmit = data => {
    console.log(data);
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  toggleCompleted = todoId => {
    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }
    //     return todo;
    //   }),
    // }));

    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;
    return todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
  };

  render() {
    const { todos, filter } = this.state;
    const totalTodoLength = todos.length;
    const completedTodoCount = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();
    return (
      <div
        style={{
          width: '100wh',
          height: '100vh',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          flexDirection: 'column',
          gap: '10px',
          fontSize: 40,
          color: '#010101',
        }}
      >
        {/* <Form onSubmit={this.formSubmit} /> */}
        {/* <Counter />  */}
        {/* <DropDown /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}

        <div>
          <p>
            <span>Загальна к-ть:{totalTodoLength}</span>
          </p>
          <p>
            <span>К-ть виконаних:{completedTodoCount}</span>
          </p>
        </div>
        <TodoEditor onSubmit={this.addTodo} />
        <Filter value={filter} onChange={this.changeFilter} />
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
        {/* <LoginForm/>  */}

        {/* <ProductReviewForm/> */}
      </div>
    );
  }
}

export default App;
