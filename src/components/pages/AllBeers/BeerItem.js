import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../../UI/Card';
import classes from './BeerItem.module.css';

const BeerItem = props => {
  return (
    <Card>
      <div className={classes['beer-item']}>
        <Link to={`${props.id}`} className={classes['beer-item__link']}>
          <img src={props.img} alt="#"/>
          <div className={classes['beer-item__content']}>
            <h3>{props.name}</h3>
            <h4>{props.tagline}</h4>
          </div>
        </Link>
      </div>
    </Card>
  )
};

export default BeerItem;