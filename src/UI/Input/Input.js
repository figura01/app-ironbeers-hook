import React from 'react';

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  console.log('props input: ', props)
  return <div className={`${classes.input} ${
    props.isValid === false ? classes.invalid : ''
  }`}>
    <label htmlFor={props.input.id}>{props.label}</label>
    {props.type === 'textarea' ? (
      <textarea ref={ref} {...props.input}></textarea>
    ) : (
      <input ref={ref} {...props.input} />
    )}
    
  </div>
})

export default Input