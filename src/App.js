import React, { Component } from 'react'



import {inject,observer} from "mobx-react"
import Counter from "./counter"
@inject('BirdStore')
@observer
class App extends Component{
  
 render()
 {
   let {BirdStore}=this.props
   console.log("this is birstore",BirdStore.addStore())
  return (
    <div className="App">
    <button onClick={()=>
    {
      BirdStore.addStore()
     
    }}>addcounter</button>
    <button>deletecounter</button>
    <Counter></Counter>
    </div>
  );
 }
 
}

export default App;
