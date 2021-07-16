import React, { useState, useEffect } from 'react';

export default function Clock() {
  const [clock, setClock] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClock(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return <p className='absolute right-0 dn db-l f3 pr4 ma0'>{clock} Time to code ⏰</p>;
}
