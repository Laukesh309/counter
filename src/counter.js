import React, { Component } from 'react'
import {inject,observer} from "mobx-react"

@inject("BirdStore")
@observer
class counter extends Component
{
    increament=(event,index)=>
    {
        console.log("event",event,index)
        let {BirdStore}=this.props
          BirdStore.store[index]=BirdStore.store[index]+1
    }
    decreament =(event,index)=>
    {
        console.log("index",index)
        let {BirdStore}=this.props
       BirdStore.store[index]--
    }
    render()
    {
        const {BirdStore}=this.props
        console.log("this is props",BirdStore)
        return(
            <div>  
            {
                BirdStore.storeCount.map((current,index)=>
                {
                   return (
                       <React.Fragment>
                       <h1>{current}</h1>
                    <button onClick={(evnet)=>
                        {
                           // console.log("eventdrive",event.target.id)
                            this.increament(evnet,index)
                        }}>increament</button>
                     <button onClick={(event)=>
                     {
                         this.decreament(event,index)
                    }}>decreament</button>
                     </React.Fragment>)
         
                })
             
            }
            </div>
        )
    }
}

export  default counter