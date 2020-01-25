import React from 'react';


import {inject,observer} from "mobx-react"
import Counter from "./counter"
function App() {
 
  return (
    <div className="App">
    <Counter></Counter>
    </div>
  );
}

export default App;
