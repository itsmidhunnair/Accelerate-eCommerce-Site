import React from 'react'

const TopFooter = ({content}) => {
  return (
    <div className="w-full bg-gray-100 px-2 py-5">
    <div className="mx-auto flex max-w-xl items-center max-md:block max-md:px-3">
      <div>
        <div className="text-2xl">{content?.heading}</div>
        <div className="text-gray-500">{content?.subHeading}</div>
      </div>
      <button className="max-md:w-full max-md:m-0 ms-6 bg-red-700 px-4 py-3 font-bold uppercase tracking-widest text-white transition-colors duration-500 hover:bg-black">
        {content?.buttonText}
      </button>
    </div>
  </div>
  )
}

export default TopFooter