import React from 'react';
import { Oval } from 'react-loader-spinner';
import classes from './CustomLoader.module.css'

const CustomLoader = props => {
  return (
    <div className={classes['custom-loader']}>
      <Oval />
    </div>
  )
}

export default CustomLoader;