import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import styles from './StatusInput.module.css';

const StatusInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const dropDownChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const statusInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddStatus(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles['form-control']} ${!isValid && styles.invalid}`}
      >
        <label>Status</label>
        <input type="text" onChange={statusInputChangeHandler} />
        <select value={props.selected} onChange={dropDownChangeHandler}>
          <option value='remote'>Remote</option>
          <option value='in-office'>In Office</option>
        </select>

      </div>
      <Button type="submit">Add Status</Button>
    </form>
  );
};

export default StatusInput;
