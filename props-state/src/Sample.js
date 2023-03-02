import React from 'react'
import Header from './Header'
import Profile from './Profile'
import NewsFeed from './NewsFeed'
import Chat from './Chat'

const Sample = () => {
    const data = {
        name: "Ganesh",
        age: 25,
        id: 100,
    };

    const datas = {
      name: "ganesh",
      age: 22,
    };

  const getData = (param1,param2,param3)=>{
    console.log(param1,param2,param3);
  }

  const aaa = {
    name:"subash",
    age: 25
  };


  return (
    <div>
        <h1>Hiii</h1>
        <Header obj={data} ject={datas} value="Gopi" get={getData}/>
        <Profile obj={data} value="Subash"/>
        <NewsFeed pro={aaa} ggg={getData}/>
        <Chat/>
    </div>
  )
}


export default Sample