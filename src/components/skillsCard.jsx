import React from 'react'

const SkillsCard = ({img, language}) => {
  return (
      <div className='skills-card-wrap mb-16 max-[480px]:mb-8'>
        <div className="skills-card px-[1.1rem] py-[0.7rem] border border-gold/40 bg-putih/[0.02] backdrop-blur rounded-[20px] flex items-center gap-4 text-putih transition duration-300 hover:-translate-y-[3px] hover:border-dark-gold hover:shadow-[0_0_10px_1px_rgba(59,130,246,0.4)]">
              <img className="w-8 h-8" src={img} alt="" />
              <h2 className="font-light">{ language }</h2>
        </div>
    </div>
  )
}

export default SkillsCard