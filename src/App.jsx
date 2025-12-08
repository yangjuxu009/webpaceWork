import { uniqBy } from 'lodash';
import React from 'react';

function App() {
  const testArray = [1, 2, 2, 3, 3, 4, 5];
  const uniqueArray = uniqBy(testArray);
  console.log(uniqueArray);
  return (
    <div className="App">{
      uniqueArray
    }
      <h1>Hello, Webpack + React!</h1>
    </div>
  );
}

export default App;