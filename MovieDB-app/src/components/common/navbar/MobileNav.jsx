import React from 'react'

const MobileNav = (props) => {
    const {navLinks, isOpen} = props;
  return (
    <div>
      {isOpen ? (
            <div className="sm:hidden z-20 p-10 absolute top-14 rounded-tl-lg rounded-bl-lg left-[50%] w-[50%] bg-black bg-opacity-40 text-white text-center"
            style={{ backdropFilter: "blur(5px)" }}
            >
                <div className='flex flex-col '>
                {navLinks.map((link, index) => (
                <a key={index}  href={link.link} 
                className='block mb-4 font-bold hover:border-b-2 border-myred hover:text-4xl transition-all'>
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

// absolute top-1 rounded-tl-lg rounded-bl-lg z-10 left-[50%] w-[50%] bg-mywhite bg-opacity-90 text-black text-center h-[100vh]