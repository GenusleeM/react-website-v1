import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Typical Houses!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/houseimage.png'
              text='Get one of the best houses like these'
              label='Mansion'
              path='/'
            />
            <CardItem
              src='images/houseimage1.png'
              text='Get one of the best houses like these'
              label='Luxury'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/houseimage2.png'
              text='Get one of the best houses like these'
              label='Mansion'
              path='/'
            />
            <CardItem
              src='images/houseimage3.png'
              text='Get one of the best houses like these'
              label='Luxury'
              path='/'
            />
            <CardItem
              src='images/houseimage4.png'
              text='Get one of the best houses like these'
              label='Mansion'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
