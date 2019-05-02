import React, { Component } from 'react';

class Restaurants extends Component {
  render() {
    return(
      <ul>
        Restaurants Component
      </ul>
    );
  }
};

export default Restaurants    
import React from 'react'
import Restaurant from './Restaurant'

const Restaurants = props => {

	const restaurants = props.restaurants.map(restaurant => 
			<Restaurant key={restaurant.id} 
			 restaurant={restaurant} 
			 deleteRestaurant={props.deleteRestaurant} 
			/>
	)
  
    return(
      <ul>
        {restaurants}
      </ul>
    )
}

export default Restaurants