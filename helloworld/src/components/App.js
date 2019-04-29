import React, {Component} from 'react';
import {connect} from 'react-redux';

import {textChange, textCount} from '../actions';

const App = () => <Counter />;

class Counter extends Component {
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
          onChange={e => props.textChange(e.target.value)}
          onKeyUp={e => props.textCount(e.target.value.length)}
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
const mapDispatchToProps = dispatch => ({
  textChange: () => dispatch(textChange()),
  textCount: () => dispatch(textCount()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
