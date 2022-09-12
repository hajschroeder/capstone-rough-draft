import React from 'react';
import classes from './StatusItem.module.css';

const StatusItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className={`${classes.item}`} onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default StatusItem;
