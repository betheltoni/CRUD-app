import React from 'react'

type Props = {
    text:string;
    style: React.CSSProperties;
}

const Button:React.FC<Props> = ({text, style}) => {
  return (
    <button style={style} className="button">
        {text}
    </button>
  )
}

export default Button