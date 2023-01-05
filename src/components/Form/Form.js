import { Component } from 'react';
import shortid from 'shortid';
import css from './Form.module.css';

export default class Form extends Component {
  state = {
    name: '',
    tag: '',
    experience: 'junior',
    licence: false,
  };

  nameInputId = shortid.generate();
  tagInputId = shortid.generate();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', tag: '' });
  };

  handleLicenceChange = e => {
    this.setState({ licence: e.currentTarget.checked });
  };

  render() {
    return (
      <form className={css.Form} onSubmit={this.handleSubmit}>
        <div className={css.TextField}>
          <label className={css.TextField__label} htmlFor={this.nameInputId}>
            Ім'я
            <input
              className={css.TextField__input}
              type="text"
              name="name"
              id={this.nameInputId}
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label className={css.TextField__label} htmlFor={this.tagInputId}>
            Прізвище
            <input
              className={css.TextField__input}
              type="text"
              name="tag"
              id={this.tagInputId}
              value={this.state.tag}
              onChange={this.handleChange}
            />
          </label>

          <p>Ваш рівень:</p>
          <label>
            Junior
            <input
              type="radio"
              name="experience"
              value="junior"
              onChange={this.handleChange}
              checked={this.state.experience === 'junior'}
            />
          </label>
          <label>
            Middle
            <input
              type="radio"
              name="experience"
              value="middle"
              onChange={this.handleChange}
              checked={this.state.experience === 'middle'}
            />
          </label>
          <label>
            Senior
            <input
              type="radio"
              name="experience"
              value="senior"
              onChange={this.handleChange}
              checked={this.state.experience === 'senior'}
            />
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="licence"
              id="happy"
              checked={this.state.licence}
              onChange={this.handleLicenceChange}
            />
            Погоджуюсь з умовами
          </label>

          <br />
          <button
            className={css.ButtonForm}
            type="submit"
            disabled={!this.state.licence}
          >
            Відправити
          </button>
        </div>
      </form>
    );
  }
}
