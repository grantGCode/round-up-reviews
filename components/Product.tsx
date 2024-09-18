import React from 'react'
import Image from 'next/image'
import JacketOne from '../public/JacketOne.jpg'
import JacketTwo from '../public/JacketTwo.jpg'
import Button from '../components/button'

function Product() {
  return (
    <div>
        <ul>
            <li>
                <Image src={JacketOne} alt='Jacket One' />
                <h4>ROSA Jacket</h4>
                <Button>Rate</Button>
            </li>
            <li>
                <Image src={JacketTwo} alt='Jacket Two' />
                <h4>ROSA Jacket</h4>
                <Button>Rate</Button>
            </li>
        </ul>
    </div>
  )
}

export default Product