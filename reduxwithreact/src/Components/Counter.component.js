import React from 'react';
import { connect } from 'react-redux';
import '../Components/Counter.css';
import Button from '@mui/material/Button';
import { Input, TextField } from '@mui/material';

// Action creators
const increment = () => ({ type: 'INCREMENT' });
const decrement = () => ({ type: 'DECREMENT' });

// Counter component
const Counter = ({ value, onIncrement, onDecrement }) => (
  <div className='centercontent'>
    <Input type='text' readOnly value={value} />
    <Button variant="contained" onClick={onIncrement}>+</Button>
    <Button variant="contained" onClick={onDecrement}>-</Button>
    <TextField id="standard-basic" label="Standard" variant="standard" />
  </div>
);

// Map state and dispatch to props
const mapStateToProps = (state) => ({
  value: state,
});

const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch(increment()),
  onDecrement: () => dispatch(decrement()),
});

// Connect component to store
const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);

export default CounterContainer;
