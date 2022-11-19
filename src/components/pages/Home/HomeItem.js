import React from 'react';
import { Link } from 'react-router-dom';
import classes from './HomeItem.module.css';
//import CustomLink from '../../CustomLink';

const HomeItem = props => {
  const { url, label, description, img } = props
  console.log(url)
  return (
    <li className={classes['home-item']}>
      <img src={img} alt="#" />
      <div className={classes.content}>
        <Link to={url}>{label}</Link>
        <p>{description}</p>
      </div>
    </li>
  )
}

export default HomeItem