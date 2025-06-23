import React, { useContext } from 'react'
import { myContext } from '../context/context'

const Button = () => {

   const nameing = useContext(myContext)
  return (
    <div>
      <button className='px-3 py-3 text-white font bold m-5 bg-amber-700'>{nameing}</button>
    </div>
  )
}

export default Button
