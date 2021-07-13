import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Clock from './Clock';

export default function NavBar(props) {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
    props.handleMenuClick();
  };
  return (
    <header className='db fixed top-0 right-0 left-0 z-5'>
      <div className='flex justify-center items-center relative pt3 pb2 pt2-l pb1-l z-1 bb'>
        <button
          className='absolute top-0 bottom-0 left-0 z-4 dn-l ph4 pv3 pointer bg-transparent bn dib'
          onClick={handleToggle}
        >
          <div
            className={
              toggle === true
                ? 'change div1 w2 bg-black mv2'
                : 'div1 w2 bg-black mv2'
            }
            style={{ height: '1px', transition: '0.4s' }}
          ></div>
          <div
            className={
              toggle === true
                ? 'change div2 w2 bg-black mv2'
                : 'div2 w2 bg-black mv2'
            }
            style={{ height: '1px', transition: '0.4s' }}
          ></div>
          <div
            className={
              toggle === true
                ? 'change div3 w2 bg-black mv2'
                : 'div3 w2 bg-black mv2'
            }
            style={{ height: '1px', transition: '0.4s' }}
          ></div>
        </button>
        <NavLink
          to='/'
          activeStyle={{
            fontWeight: 'bold',
            color: 'black',
          }}
          className='f2 f1-l link pointer'
        >
          CODINAIRE
        </NavLink>
        <Clock />
      </div>
    </header>
  );
}
