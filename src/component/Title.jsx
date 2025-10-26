import React from 'react'

export default function Title(props) {
    const {showT,showAct,scolor} = props
  return (
    <div className='text-center text-3xl text-blue-700'>
        {showT} 
      <span style={{border:'2px solid black'}} className={`${scolor} rounded-x1`} >
        {showAct}
      </span>
      
      <hr className='w-4/5 mx-auto'/>
    </div>
  )
}
