import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Step into a world of fashion with our versatile family collection, offering a wide array of stylish apparel for every member of your household. From sophisticated men's attire and elegant women's wear to adorable and durable kids' clothing, our curated selection ensures that everyone can find something they love.</p>
          <p>
          Elevate your wardrobe with our range of men's essentials, designed for the modern gentleman. Whether you're searching for tailored suits, casual shirts, or comfortable loungewear, our collection combines classic craftsmanship with contemporary style, ensuring you look sharp and feel confident for any occasion.
          </p>
      </div>
    </div>
  )
}

export default DescriptionBox
