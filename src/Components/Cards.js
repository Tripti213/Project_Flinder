import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>Check this out !</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem 
                src="images/hc1.png"
                text="Leverages unique preferences, interests, and daily habits to suggest the perfect roommates, making the search more efficient and stress-free."
                label='Intelligent Pairing Process'
                path='/services'
                />
                <CardItem 
                src="images/hc2.png"
                text="Skip the stress of traditional roommate searches! Our advanced algorithm considers your routine, social habits, and personal preferences to connect you with like-minded flatmates—making co-living a breeze."
                label='Effortless Roommate Search'
                path='/services'
                />
          </ul>
          <ul className='cards__items'>
                <CardItem 
                src="images/hc1.png"
                text="Leverages unique preferences, interests, and daily habits to suggest the perfect roommates, making the search more efficient and stress-free."
                label='Intelligent Pairing Process'
                path='/services'
                />
                <CardItem 
                src="images/hc2.png"
                text="Skip the stress of traditional roommate searches! Our advanced algorithm considers your routine, social habits, and personal preferences to connect you with like-minded flatmates—making co-living a breeze."
                label='Effortless Roommate Search'
                path='/services'
                />
                 <CardItem 
                src="images/hc2.png"
                text="Skip the stress of traditional roommate searches! Our advanced algorithm considers your routine, social habits, and personal preferences to connect you with like-minded flatmates—making co-living a breeze."
                label='Effortless Roommate Search'
                path='/services'
                />
          </ul>
          
            </div>
    </div>
    </div>
  )
}

export default Cards
