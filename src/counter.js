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
    deleteSingleElement=(event,index)=>
    {
        let {BirdStore}=this.props
        BirdStore. deleteSingleStore(index)
    }
    render()
    {
        const {BirdStore}=this.props
        console.log("this is props",BirdStore)
        return(
            <div>  
            {
                BirdStore.storeCount.map((current,index,array)=>
                {
                    console.log("array",array)
                   return (
                       <React.Fragment>
                       <h1 className="heading">{current}</h1>
                    <button onClick={(evnet)=>
                        {
                           // console.log("eventdrive",event.target.id)
                            this.increament(evnet,index)
                        }} className="increament">increament</button>
                     <button onClick={(event)=>
                     {
                         this.decreament(event,index)
                    }} className="decreament">decreament</button>
                    <button onClick={(event)=>
                    this.deleteSingleElement(event,index)
                    } className="delete">delete</button>
                     </React.Fragment>)
         
                })
             
            }
            </div>
        )
    }
}

export  default counter