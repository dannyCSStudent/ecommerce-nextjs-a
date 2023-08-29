import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '../lib/client';

const FooterBanner = ({ footerBanner: { 
  discount, largerText1, largeText2, saleTime, smallText, midText, 
  product, buttonText, desc, image }}) => {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <p>{discount}</p>
          <h3>{largerText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className='right'>
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link passHref href={`/product/${product}`}>
            <button type='button'>{buttonText}</button>
          </Link>
        </div>
        <div className='footer-banner-image'>
          <Image 
            src={urlFor(image).url()}
            alt='footer-banner'
            width={450}
            height={450}
          />


        </div>

      </div>
      
    </div>
  )
}

export default FooterBanner