import React from 'react'
import { Link } from 'react-router-dom'

export default function NewBuild() {
  return (
    <>
    <div className='container'>
        <div><Link className='nav-link' to='/warframebuild'>Warframe</Link></div>
        <div><Link className='nav-link' to='/primarybuild'>Primary</Link></div>
    </div>
    </>
  )
}
