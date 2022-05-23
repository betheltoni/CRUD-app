import React from 'react'


type Props = {
    errorMessage:any;
}
const Error:React.FC<Props>  = ({errorMessage}) => {
  return (
    <div>
        <h1>This page cannot be loaded because of the error below:</h1>
        <h2>{errorMessage}</h2>
    </div>
  )
}

export default Error