import {observable,action,computed} from "mobx"

class BirdStore
{
    @observable store=[]
    @action addStore = ()=>
    {
          let counter=0
        this.store.push(counter)
    }
    @action count =()=>
    {
      
    }
    @computed get storeCount()
    {
        return this.store
    }
}


const birdStore=new BirdStore()
export default birdStore
