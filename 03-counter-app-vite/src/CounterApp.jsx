import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ( { value } ) => {

    const [ counter, setCounter ] = useState( value );

    const handleAdd = () => {
        //console.log(event);
        setCounter( counter + 1);
        //setCounter((c) => c + 1)
    } 

    const handleSubtract = () => {
      setCounter( counter - 1)
    } 

    const handleReset = () => {
      setCounter(value)
    } 
  
    return (
      <>
        <h1>CounterApp</h1>
        <h1> { counter } </h1>

        <button onClick= { handleAdd }> +1  </button>
        <button onClick= { handleSubtract }> -1 </button>
        <button onClick= { handleReset }> resest </button>
      </>
    )
  }
  
  CounterApp.propTypes = {
    value: PropTypes.number.isRequired
  }