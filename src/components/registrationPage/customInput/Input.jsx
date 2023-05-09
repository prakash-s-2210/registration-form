import React from 'react';
import "../customInput/Input.scss";
import { useField } from "formik";

const Input = ({label, ...props}) => {
    const [field, meta] = useField(props);
  return (
    <div className='input-container'>
      <input 
      autoComplete='off'
        {...field}
        {...props}  
        className = {meta.touched && meta.error ? "input-error":""}
        
      />
      <label className = { !field.value ?  'label' : 'hide-label'} >{label}</label>
      {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
    </div>
  )
}

export default Input;