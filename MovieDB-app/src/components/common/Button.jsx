import React from 'react'

const Button = (props) => {
const {text, isRound, width, handleClick,} = props;
  return (
    <div className="max-w-[80%] mx-auto flex justify-center">
      <button className={`bg-darkcyan p-4 text-white ${isRound ? 'rounded-lg' : ''} ${width}`} onClick={handleClick}>{text}</button>
    </div>
  )
}

export default Button
