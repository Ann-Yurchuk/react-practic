import { Component } from 'react';
import classNames from 'classnames';
import './ColorPicker.css';
import PropTypes from 'prop-types';

class ColorPicker extends Component {
  state = {
    activeOptionIndex: 0,
  };

  setActiveIndex = index => {
    this.setState({ activeOptionIndex: index });
  };

  makeOptionClassName = index => {
    return classNames('ColorPicker__options', {
      'ColorPicker__options--active': index === this.state.activeOptionIndex,
    });

    // const optionClasses = ['ColorPicker__options'];
    // if (index === this.state.activeOptionIndex) {
    //   optionClasses.push('ColorPicker__options--active');
    // }
    // return optionClasses.join(' ');
  };

  render() {
    const { label } = this.props.options[this.state.activeOptionIndex];

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">ColorPicker</h2>
        <p>
          Обраний колір:<span>{label}</span>
        </p>
        <div>
          {this.props.options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionClassName(index)}
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

ColorPicker.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      label: PropTypes.string,
      index: PropTypes.string,
    })
  ),
};

export default ColorPicker;
