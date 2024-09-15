import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <div> 
        <h4>Round Up Reviews</h4>
        <p>Presents</p>
        <Image
        src='/ROSA.png'
        width={500}
        height={500}
        alt='ROSA'
        />
      
    </div>
  )
}

export default Header