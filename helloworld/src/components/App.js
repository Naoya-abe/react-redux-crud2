import React, {Component} from 'react';
import {connect} from 'react-redux';

// import {textChange, textCount} from '../actions';
import {textChange} from '../actions';

class App extends Component {
  //reducerで初期化を行うため不要
  // constructor(props) {
  //   super(props);
  //   this.state = {count: 0, textValue: 'initial value'};
  // }

  // reducerないで適切な状態遷移を行なっていくため不要
  // handleTextChange(textValue) {
  //   this.setState({textValue});
  // }
  // handleCountChange(textLength) {
  //   this.setState({count: textLength});
  // }
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
          // onKeyUp={e => props.textCount(e.target.value.length)}
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
    // textCount: textLength => dispatch(textCount(textLength)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
