import React from 'react';

import StatusItem from './StatusItem';
import classes from './Status.module.css';


const Status = props => {
  return (
    <ul className={`${classes.list}`}>
      {props.items.map(status => (
        <StatusItem
          key={status.id}
          id={status.id}
          date={status.date}
          onDelete={props.onDeleteItem}
        >
          {status.text}
        </StatusItem>
      ))}
    </ul>
  );
};

export default Status;
