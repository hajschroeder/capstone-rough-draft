import React from 'react';
import Card from '../../UI/Card/Card';
import StatusDate from './StatusDate';
import classes from './StatusItem.module.css';

const StatusItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <Card>
      <StatusDate date={props.date}/>
        <li className={`${classes.item}`} onClick={deleteHandler}>
          {props.children}
        </li>
  
    </Card>
  );
};

export default StatusItem;
