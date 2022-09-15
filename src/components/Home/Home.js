import React, { useState, useContext } from 'react';
import AuthContext from '../../store/auth-context';
import Button from '../UI/Button/Button';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import Status from './Status/Status';
//import v4 from 'uuid';
import StatusInput from './Status/StatusInput';



const Home = (props) => {
  const [userStatus, setUserStatus] = useState('');
  const authCtx = useContext(AuthContext);

  const addStatusHandler =  enteredText => {
    setUserStatus(prevStatus => {
      const updatedStatus = [...prevStatus];
      updatedStatus.unshift({text: enteredText, id: Math.random()});
      return updatedStatus;
    })
  }

  const deleteStatusHandler = statusId => {
    setUserStatus(prevStatus => {
      const updatedStatus = prevStatus.filter(status => status.id !== statusId)
      return updatedStatus
    })
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No status found. Maybe add one?</p>
  );
  if (userStatus.length > 0) {
    content = (
      <Status items={userStatus} onDeleteItem={deleteStatusHandler} />
    )
  }

  return (
    <React.Fragment>
      <Card className={classes.home}>
        <h1>Welcome to Work, Worker!</h1>
        <Button onClick={authCtx.onLogout}>Log Out</Button>
      </Card>
      <div>
        <section id="form">
          <StatusInput onAddStatus={addStatusHandler} />
        </section>
        <section id="satuses">
          {content}
        </section>
      </div>
    </React.Fragment>



  )
};

export default Home;
