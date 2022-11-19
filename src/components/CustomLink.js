import React from 'react';
import { Link } from 'react-router-dom';

import classes from './CustomLink.module.css';

const CustomLink = props => {

  return (
    <div className={classes.link}>
      <Link to={props.link}>
        {props.children}
      </Link>
    </div>
  )
}

export default CustomLink;