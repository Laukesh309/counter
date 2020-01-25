import {observable,action,computed} from "mobx-react"

class BirdStore
{
    @observable store=0;
    @action count =()=>
    {
       this.store++
    }
    @computed get storeCount()
    {
        return this.store
    }
}


const birdStore=new BirdStore()
export default birdStore
