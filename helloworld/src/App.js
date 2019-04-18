import React from 'react';

// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="pig">pig</label>
//         <input
//           type="text"
//           onChange={() => {
//             console.log('I love micropig');
//           }}
//         />
//       </React.Fragment>
//     );
//   }
// }

const App = () => {
  return (
    <div>
      <Pig />
      <Pig />
      <Pig />
    </div>
  );
};

const Pig = () => {
  return <div>oink oink</div>;
};

export default App;
