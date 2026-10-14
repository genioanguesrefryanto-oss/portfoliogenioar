import React from 'react'

const SocialCard = ({link, social, className = ''}) => {
  return (
      <div className='skills-card-wrap mb-16 max-[480px]:mb-8'>
        <div className={`border bg-putih/[0.02] backdrop-blur rounded-[20px] flex items-center gap-4 transition duration-300 hover:-translate-y-[3px] hover:shadow-[0_0_10px_1px_rgba(255,210,77,0.4)] ${className}`}>
              <i className={link}></i>
              <h2 className="font-light">{ social }</h2> 
        </div>
    </div>
  )
}

export default SocialCard