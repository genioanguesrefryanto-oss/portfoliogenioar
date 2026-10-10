import React from 'react'

const PText = ({text, aos = 'fade-right'}) => {
  return (
      <div data-aos={aos} data-aos-duration="500">
          <p className="text-gold font-bold tracking-[0.3rem]" >{text}</p>
      </div>
  )
}

export default PText