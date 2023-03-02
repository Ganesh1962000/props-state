import React from 'react'

const Header = (props) => {
  console.log(props.obj);
  console.log(props.ject);

  const getData =()=>{
    props.get("Value1","Value2","Value3")
  }

  return (
    <div>Header {props.obj.name}

      <button onClick={() => getData()}>Click</button>
    </div>

  )
}

export default Header