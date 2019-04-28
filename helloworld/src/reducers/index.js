//これで、他のReducerを結合する機能を持つことができる
import {combineReducers} from 'redux';
import count from './count';

//storeを作成する際に使用するのでexportする
export default combineReducers({count});
