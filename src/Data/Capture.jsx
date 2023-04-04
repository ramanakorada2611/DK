import React from 'react'

const Capture = (props) => {
  return (
    <>
    <div style={{textAlign:"center"}}>
    <h1>{props.title}</h1>
    <h3>{props.name}</h3>
    <h3>{props.age}</h3>
    <h3>{props.qualification}</h3>
    <h3>{props.descripition}</h3>
    </div>
    </>
  )
}

export default Capture