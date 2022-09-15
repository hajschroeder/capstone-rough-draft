import React from 'react';
import classes from './StatusDate.module.css'

const StatusDate = (props) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const days = ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun"]
  const now = new Date()
  const day = days[now.getDay()]
  const month = months[now.getMonth()]
  const date = now.getDate()
  const year = now.getFullYear()
  const time = now.getHours()+':'+now.getMinutes()+':'+now.getSeconds()

  return (
  <div className={`${classes.date}`}>
    <div className="status-date__day">{day}</div>
    <div className="status-date__month">{month}</div>
    <div className="status-date__date">{date}</div>
    <div className="status-date__year">{year}</div>
    <div classname="status-date__time">{time}</div>
  </div>
  )
}

export default StatusDate;