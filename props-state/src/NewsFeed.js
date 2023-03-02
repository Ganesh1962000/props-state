import React from 'react'

const NewsFeed = (props) => {
  console.log(props.pro);
  const getData = ()=>{
    props.ggg("V1","V2","V3");
  }
  return (
    <div>NewsFeed
      <button onClick={()=>getData()}>Click</button>
    </div>
  )
}

export default NewsFeed