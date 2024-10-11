import React from 'react'

const MobileNav = (props) => {
    const {navLinks, open} = props;
  return (
    <div>
      {open ? (
            <div className="sm:hidden">
                <div className='flex flex-col items-center'>
                {navLinks.map((link, index) => (
                <a key={index}  href={link.link} 
                className='block mb-4'>
                  {link.text}
                </a>
              ))}
                </div>
            </div>
          ) : (
            ""
          )}
    </div>
  )
}

export default MobileNav
