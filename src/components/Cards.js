import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Here are the famous scenic spots of Vietnam</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/HaLong-bay.jpg'
              text='Ha Long Bay is one of the 7 natural wonders of the world'
              label='Nature'
              path='/services'
            />
            <CardItem
              src='images/Northwest.jpg'
              text='Northwest Vietnam is famous for its terraced fields and indigenous features'
              label='Nature'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/HN.jpg'
              text='Hanoi'
              label='Capital'
              path='/services'
            />
            <CardItem
              src='images/DN.jpg'
              text='Danang'
              label='Big City'
              path='/products'
            />
            <CardItem
              src='images/HCM.jpg'
              text='Saigon'
              label='Biggest City'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;