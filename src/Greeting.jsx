import React from 'react';

const Greeting = ({ userName }) => {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  let greeting;
  if (currentHour < 12) {
    greeting = 'Good morning';
  } else if (currentHour < 18) {
    greeting = 'Good afternoon';
  } else {
    greeting = 'Good evening';
  }

  return <div>{`${greeting}, ${userName}`}</div>;
};

export default Greeting;
