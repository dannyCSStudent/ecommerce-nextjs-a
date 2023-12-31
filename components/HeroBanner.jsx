import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner}) => {

  return (
    <div className='hero-banner-container'>
      <div>
        <p className='items-solo'>{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <div className='hero-banner-image'>
          <Image 
            src={urlFor(heroBanner.image).url()} 
            alt='watches' 
            width={450} 
            height={450} 
          />
        </div>
        <div>
          <Link passHref href={`/product/${heroBanner.product}`}>
            <button type='button'>{heroBanner.buttonText}</button>
          </Link>
          <div className='desc'>
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner