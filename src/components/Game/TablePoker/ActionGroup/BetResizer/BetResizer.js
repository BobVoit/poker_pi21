import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-rangeslider';
import './index.css';

class BetResizer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      val: props.min,
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(value) {
    this.setState({
      val: value,
    });
  }

  render() {
    const { val } = this.state;
    return (
      <Slider
        value={val}
        min={this.props.min}
        max={this.props.max}
        step={this.props.step}
        onChange={this.handleOnChange}
      />
    );
  }
}

BetResizer.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
};

export default BetResizer;
