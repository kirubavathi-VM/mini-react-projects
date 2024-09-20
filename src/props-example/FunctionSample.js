import React from 'react'

const FunctionSample = (props) => {
    const {handleClick} = props;
  return (
    <>
    <h1>This is a function component.</h1>
    <button onClick={handleClick}>Click me!</button>
    </>
  )
}

export default FunctionSample