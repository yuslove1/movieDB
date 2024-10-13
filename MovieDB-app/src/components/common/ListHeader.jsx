import React from 'react'

const ListHeader = (props) => {
    const {count, title} = props;
  return (
    <div className='text-white font-roboto font-bold border-b border-myred'>
      <p className='bg-myred p-2 rounded-tl-xl inline-block'>{title}</p>
      {count? (<p className='bg-darkcyan p-2 rounded-tr-xl inline-block'>{count}</p>) : null}
    </div>
  )
}

export default ListHeader