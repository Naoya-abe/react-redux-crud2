import React, {Component} from 'react';

const App = () => <Counter />;

class Counter extends Component {
  //Componentの初期化時にcallされる
  constructor(props) {
    super(props);
    this.state = {count: 0};
    console.log(this.state.count);
  }

  handlePlusButton = () => {
    //絶対にやってはいけないパターン
    // this.state = {count: this.state.count + 1};

    //状態を変更したいときに使うおきまりのメソッド
    //setStateを使ってさえいれば、その状態に関連するDOMが勝手に再描画される
    this.setState({count: this.state.count + 1});
  };

  handleMinusButton = () => {
    this.setState({count: this.state.count - 1});
  };

  //setState実行された時にrender()が再度実行される
  render() {
    console.log('render');

    return (
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    );
  }
}

export default App;
