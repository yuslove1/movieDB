import React from 'react'

const Button = (props) => {
const {text, isRound, width, handleClick} = props;
  return (
    <div className="max-w-[50%] mx-auto flex justify-center py-2">
      <button className={`transition-all  bg-darkcyan hover:bg-transparent hover:border-2 hover:border-darkcyan hover:text-darkcyan font-bold p-4 text-white ${isRound ? 'rounded-full' : ''} ${width}`} onClick={handleClick}>{text}</button>
    </div>
  )
}

export default Button;
