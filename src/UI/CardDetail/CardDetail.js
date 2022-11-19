import React from 'react';
import classes from './CardDetail.module.css';

const CardDetail = props => {
  return <div className={`border-2 rounded-lg border-gray-200 shadow-lg ${classes["card-detail"]}`}>
    {props.children}
  </div>
}

export default CardDetail;