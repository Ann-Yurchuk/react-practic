import { Component } from 'react';
import css from './DropDown.module.css';

export default class DropDown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

    render() {
        const { visible } = this.state;
    return (
      <div className={css.DropDown}>
        <buttton
          type="button"
          className={css.DropDown__toggle}
          onClick={this.toggle}
        >
          {visible ? 'Сховати' : 'Показати'}
        </buttton>

        {this.state.visible && (
          <div className={css.DropDown__menu}>Випадаюче меню</div>
        )}
      </div>
    );
  }
}
