import React from 'react';
import Expenses from './components/Expenses';

function App() {
  // the following code is what JSX code gets converted to 'under the hood'
  return React.createElement(
    'div',
    {},
    React.createElement('h2', {}, 'Lets get started'),
    React.createElement(Expenses)
  );

  // return (
  //   <div>
  //     <h2>Let's get started!</h2>
  //     <Expenses />
  //   </div>
  // );
}

export default App;
