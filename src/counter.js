import React, { Component } from 'react'
import {inject,observer} from "mobx-react"

@inject("BirdStore")
@observer
class counter extends Component
{
    increament=()=>
    {
        let {BirdStore}=this.props
        BirdStore.store++
    }
    decreament =()=>
    {
        let {BirdStore}=this.props
        BirdStore.store--
    }
    render()
    {
        const {BirdStore}=this.props
        console.log("this is props",BirdStore)
        return(
            <div>  
                <h1>{BirdStore.storeCount}</h1>
                <button onClick={()=>
                {
                    this.increament()
                }}>increament</button>
                <button onClick={this.decreament}>decreament</button>
            </div>
        )
    }
}

export  default counter