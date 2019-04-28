//まずはimport
import {INCREMENT, DECREMENT} from '../actions';

//次に状態の初期値を定義　状態はオブジェクトとして定義
const initialState = {value: 0};

//次にcountReducerを関数として定義（引数はstateとactionの２つ）　./index.jsに渡せるようにexportする
//関数の内部で受け取ったactionのタイプに応じて状態を変更して、その結果をrerturnで返していく。
export default (state = initialState, action) => {
  // actionのtypeはaction.typeで拾うことができる
  switch (action.type) {
    //状態を+1したものをobjectとして返す
    case INCREMENT:
      return {value: state.value + 1};

    //状態を-1したものをobjectとして返す
    case DECREMENT:
      return {value: state.value - 1};

    //何もないときはそのままstateを返す
    default:
      return state;
  }
};
