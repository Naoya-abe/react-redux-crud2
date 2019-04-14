//Reactをimportしていないとトランスパイル後のReact.element()が実行できないので、このReactは必要。
//逆に言うとJSXを使わないとこのReactは不必要
import React, {Component} from 'react';

class App extends Component {
  render() {
    return (
      // Reactでは返すJSXは一つでなければならない
      // <div> 余計なdivタグが生まれる
      <React.Fragment>
        {/* <React.Fragment>を使うことで、余計なdivタグを作らずにJSXを包むことができる */}
        {/* labelのfor属性：ラジオボタンを置いた時などに、ラジオボタンのラベルにラジオボタンのid属性をfor属性として付与することで、ラベルを押した時でもラジオボタンが反応するようになる */}
        <label htmlFor="bar">bar</label>
        <input
          type="text"
          //onClick：クリック時  onChange:インプットの中身が変わった時
          onChange={() => {
            console.log('I love micropig');
          }}
        />
      </React.Fragment>
      // </div>
    );
  }
}

export default App;
