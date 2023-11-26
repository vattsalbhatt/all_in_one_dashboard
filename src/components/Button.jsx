import React from 'react'

const Button = ({color, bgColor, borderRadius, size, text}) => {
  return (
    <div>
      <button type='button' 
      style={{backgroundColor: bgColor, color: color, borderRadius: borderRadius}}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
      >
        {text}
      </button>
    </div>
  )
}

export default Button