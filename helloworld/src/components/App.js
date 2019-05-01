import React, {Component} from 'react';
import {connect} from 'react-redux';
import {textChange} from '../actions';

class App extends Component {
  render() {
    const props = this.props;
    console.log(props);

    return (
      <React.Fragment>
        <div>文字数： {props.textLength}</div>
        <textarea
          type="text"
          onChange={e =>
            props.textChange(e.target.value, e.target.value.length)
          }
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    textValue: state.text.textValue,
    textLength: state.text.textLength,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    textChange: (textValue, textLength) =>
      dispatch(textChange(textValue, textLength)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
