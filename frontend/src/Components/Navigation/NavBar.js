import React from 'react';
import { NavLink } from 'react-router-dom';
import Clock from './Clock';
import { toggleHomeState } from '../../Actions/toggleAction';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../../Actions/toggleAction';

export default function NavBar(props) {
  const dispatch = useDispatch();
  const toggle = useSelector(state => state.toggle.toggleMenu)
  // const handleToggle = () => {
  //   dispatch(toggleMenu())
  // }
  const handleHome = () => {
    dispatch(toggleHomeState());
  };
  return (
    <header className='db fixed top-0 right-0 left-0 z-3 domaine-tx-light'>
      {/* <header className='db fixed top-0 right-0 left-0 z-3 domaine-sans-fine-thin'> */}
      <div className='flex justify-center items-center relative pt2 pb2 pt2-l pb1-l z-1 bb'>
        <button
          className='absolute top-0 bottom-0 left-0 pl4 z-2 dn-l  pointer bg-transparent bn dib'
          // onClick={handleToggle}
          onClick={() => dispatch(toggleMenu())}
        >
          <div
            className={
              toggle === true ? 'change div1 w2 bg-black' : 'div1 w2 bg-black'
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
              toggle === true ? 'change div3 w2 bg-black' : 'div3 w2 bg-black'
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
          className='f2 link pointer'
          onClick={handleHome}
        >
          CODINAIRE
        </NavLink>
        <Clock />
      </div>
    </header>
  );
}
