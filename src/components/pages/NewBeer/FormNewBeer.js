import React, { useRef, useState, useReducer } from 'react';
import Input from '../../../UI/Input/Input';

import classes from './FormNewBeer.module.css';
// name - must be type text
// tagline - must be type text
// description - must be type text
// first_brewed - must be type text
// brewers_tips - must be type text
// attenuation_level - must be type number !!!
// contributed_by - must be type text

const nameReducer  = (state, action) => {
  if(action.type === 'NAME_INPUT') {
    return {
      value: action.value,
      isValid: action.value.length > 3
    }
  }

  if(action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.length > 3}
  }


  return { value: '', isValid: false };
}

const taglineReducer  = (state, action) => {
  if(action.type === 'TAGLINE_INPUT') {
    return {
      value: action.value,
      isValid: action.value.length > 3
    }
  }

  if(action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.length > 3}
  }


  return { value: '', isValid: false };
}

const FormNewBeer = (props) => {
  const inputNameRef = useRef()
  const inputTaglineRef = useRef()
  const inputDescriptionRef = useRef()

  const [formIsValid, setFormIsValid] = useState(false)

  const [nameState, dispatchName] = useReducer(nameReducer, {
    value: '',
    isValid: false
  })
  const [taglineState, dispatchTagline] = useReducer(taglineReducer, {
    value: '',
    isValid: false
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit');
  }

  const nameHandlerChange = (e) => {
    e.preventDefault();
    console.log('InputNameChange');
    console.log(inputNameRef.current.value)

    dispatchName({type: 'NAME_INPUT', value: inputNameRef.current.value });
  }

  const nameIsValid = (e) => {
    e.preventDefault();
    console.log('InputnameIsValid');
    console.log(inputNameRef.current.value)
    dispatchName({type: 'INPUT_BLUR'})
  }

  const taglineHandlerChange = (e) => {
    e.preventDefault();

    dispatchTagline({type: 'TAGLINE_INPUT', value: inputTaglineRef.current.value });
  }

  const taglineIsValid = (e) => {
    e.preventDefault();
    dispatchName({type: 'INPUT_BLUR'})
  }

  return (
    <form className={classes['form_new-beer']} onSubmit={handleSubmit}>
      <Input  
        label="Name" 
        ref={inputNameRef}
        isValid={nameState.isValid}
        input={{
          id: 'input_name',
          type: 'text',
          name: "name",
          value: nameState.value,
          onChange: nameHandlerChange,
          onBlur: nameIsValid,
        }}
      />

      <Input  
        label="Tagline" 
        ref={inputTaglineRef}
        isValid={taglineState.isValid}
        input={{
          id: 'input_tagline',
          type: 'text',
          name: "tagline",
          value: taglineState.value,
          onChange: taglineHandlerChange,
          onBlur: taglineIsValid,
        }}
      />

      <Input  
        label="Description" 
        ref={inputDescriptionRef}
        isValid={taglineState.isValid}
        type="textarea"
        input={{
          id: 'input_tagline',
          type: 'text',
          name: "tagline",
          value: taglineState.value,
          onChange: taglineHandlerChange,
          onBlur: taglineIsValid,
        }}
      />
      <button type="submit">Add New Beer</button>
    </form>
  )
}

export default FormNewBeer;