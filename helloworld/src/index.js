import React from 'react';
import ReactDOM from 'react-dom';
//storeを作るための関数
import {createStore} from 'redux';
//作成したstoreを全Componentに適用させる
import {Provider} from 'react-redux';
import './index.css';
import App from './components/App';
//reducerのimport
import reducer from './reducers';
import * as serviceWorker from './serviceWorker';

//storeの作成 ここで作られるstoreはアプリケーション内部のもので唯一のもの
//さらに全てのstateはここに集約されている
const store = createStore(reducer);

ReactDOM.render(
  //使用するComponentを<Provider>でラップしてあげて、store属性に上で定義したstoreを使う。
  //Reactで状態を渡す際のpropsのバケツリレーがなくなる。
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
