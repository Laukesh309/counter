import {observable,action,computed} from "mobx"

class BirdStore
{
    @observable store=[]
    @action addStore = ()=>
    {
          let counter=0
        this.store.push(counter)
    }
    @action deleteStore =(index)=>
    {
    //   this.store.splice(0,this.store.length)
          this.store.length=0
    }
    @action deleteSingleStore=(index)=>
    {
        this.store.splice(index,1)
    }
    @computed get storeCount()
    {
        return this.store
    }
}


const birdStore=new BirdStore()
export default birdStore
