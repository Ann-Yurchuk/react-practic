import { Component } from 'react';

// import initialTodos from '.././todos.json';
// import Counter from "./Counter";
// import  DropDown  from "./DropDown/DropDown";
// import { colorPickerOptions } from 'color/color';
// import ColorPicker from './ColorPicker/ColorPicker';
// import TodoList from './TodoList';
// import LoginForm from './LoginForm/LoginForm';
import { ProductReviewForm } from './ProductReviewForm/ProductReviewForm';

class App extends Component {
  // state = {
  //   todos: initialTodos,
  // };

  // deleteTodo = todoId => {
  //   this.setState(prevState => ({
  //     todos: prevState.todos.filter(todo => todo.id !== todoId),
  //   }));
  // };

  render() {
    // const { todos } = this.state;
    // const totalTodoLength = todos.length;
    // const completedTodoCount = todos.reduce(
    //   (acc, todo) => (todo.completed ? acc + 1 : acc),
    //   0,
    // );
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        {/* <Counter />  */}
        {/* <DropDown /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
        {/* <div>
          <p>
            <span>Загальна к-ть:{totalTodoLength}</span>
          </p>
          <p>
            <span>К-ть виконаних:{completedTodoCount}</span>
          </p>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} /> */}
        {/* <LoginForm/> */}
        
        <ProductReviewForm/>
      </div>
    );
  }
}

export default App;
