import React, {Component} from 'react';
//まずはconnectをimport
import {connect} from 'react-redux';
//actionのimport
import {increment, decrement} from '../actions';

//次に、このファイルで定義したいComponentはCounter１つだけなのでrenameしましょう！
class App extends Component {
  //Componentの初期化時にcallされる
  // ここの状態の初期化はreducerの方で行なっているので
  // constructor自体がいらなくなる
  // constructor(props) {
  //   super(props);
  // this.state = {count: 0};
  // }

  //actionCreatorで処理の名称を確保して、reducerで適切な状態遷移を行なっているのでいらない
  // handlePlusButton = () => {
  //   //絶対にやってはいけないパターン
  //   // this.state = {count: this.state.count + 1};

  //   //状態を変更したいときに使うおきまりのメソッド
  //   //setStateを使ってさえいれば、その状態に関連するDOMが勝手に再描画される
  //   this.setState({count: this.state.count + 1});
  // };

  // handleMinusButton = () => {
  //   this.setState({count: this.state.count - 1});
  // };

  //setState実行された時にrender()が再度実行される
  render() {
    //インスタンスのpropsにはstateやactionをこれから渡していくので
    //propsをこれから変数に入れていく。
    const props = this.props;

    return (
      <React.Fragment>
        {/* これから表示する値はのはreduser内のcountのオブジェクトのvalueの値になる */}
        <div>value: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    );
  }
}
//stateの情報からこのComponentに必要な情報を取り出してComponent内のpropsとしてmappingする機能を持つ関数
//引数には状態のトップレベルを示すstateを書いて、どういったオブジェクトをpropsとして対応させるのかということを関数の戻り値として定義。
//今回はcountの現在の値であるstate.valueを参照したいのでvalueをkeyにstate.count.valueを値にもつオブジェクトを返します。
const mapStateToProps = state => ({value: state.count.value});

//あるアクションが発生した時にreducerにtypeに応じた状態遷移を実行させるための関数がdispatch
//このdispatch関数を引数において、このComponentで必要になるdispach関数を宣言
//今回はincrementとdecrementの二つのボタンがあるので、これらのボタンが押された時に該当のアクションをdispatchに渡して実行させることで状態遷移ができます。
//incrementをkeyにincrement関数を引数に持つdispatch関数を値に。。。
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
});

// stateとactionをComponentに関連付ける部分の実装
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
