import { Component } from 'react';
import shortid from 'shortid';
import initialTodos from '.././todos.json';
// import Counter from "./Counter";
// import Clock from './Clock/Clock';
// import  DropDown  from "./DropDown/DropDown";
// import { colorPickerOptions } from 'color/color';
// import ColorPicker from './ColorPicker/ColorPicker';
import TodoList from './TodoList';
import TodoEditor from './TodoEditor/TodoEditor';
// import LoginForm from './LoginForm/LoginForm';
// import { ProductReviewForm } from './ProductReviewForm/ProductReviewForm';
// import Form from './Form/Form';
import Filter from './Filter/Filter';
import Modal from './Modal/Modal';
import IconButton from './IconButton/IconButton';
class App extends Component {
  state = {
    todos: initialTodos,
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    const todos = localStorage.getItem('todos');
    const parsetTodos = JSON.parse(todos);
    if (parsetTodos) {
      this.setState({ todos: parsetTodos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.todos !== prevState.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

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

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { todos, filter, showModal } = this.state;
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
        <IconButton  onClick={this.toggleModal}>Открить модалку</IconButton>
        {/* <Clock/> */}
        {/* <button type="button" onClick={this.toggleModal}>
          Відкрити модалку
        </button> */}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Опис товару</h1>
            <p>
              безкоштовній, порівняно дешевій або просто дуже зручній доставці
              товарів; післягарантійному або недорогому обслуговуванні від
              магазину протягом певної кількості місяців; нарахуванні акційних
              балів, додатковій знижці на аксесуари, подарунку тощо; інформації
              про офіційне представництво бренду і гарантії оригінальності
              товару та гарантійного обслуговування; повідомленні про наявність
              офлайн-точок видачі, в яких зручно отримувати товари тощо.
            </p>
            <button type="button" onClick={this.toggleModal}>Закрити</button>
          </Modal>
        )}
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
