import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PublicHomePage() {
  // if the e.target.name or ID is X
  // then toggle the state for that
  // if home === true the change the height, width and remove display:none (dn) from className
  // home: true,
  // signup: false,
  // login: false,
  // cart: false,

  const history = useHistory();

  const [toggleHome, setToggleHome] = useState(true);
  const [toggleSignup, setToggleSignup] = useState(false);
  const [toggleLogin, setToggleLogin] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);

  const creators = useSelector(state =>
    state.users.users.filter(user => user.is_creator === true)
  );

  const handleClick = e => {
    switch (e.target.name) {
      case 'home':
        console.log(e.target.name);
        setToggleHome(true);
        setToggleSignup(false);
        setToggleLogin(false);
        setToggleCart(false);
        break;
      case 'signup':
        console.log(e.target.name);
        setToggleHome(false);
        setToggleSignup(true);
        setToggleLogin(false);
        setToggleCart(false);
        break;
      case 'login':
        console.log(e.target.name);
        setToggleHome(false);
        setToggleSignup(false);
        setToggleLogin(true);
        setToggleCart(false);
        break;
      case 'cart':
        console.log(e.target.name);
        setToggleHome(false);
        setToggleSignup(false);
        setToggleLogin(false);
        setToggleCart(true);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div
        className='w-third dn flex-l flex-column fixed top-0 bottom-0'
        style={{ marginTop: '48px' }}
      >
        <div className='pt5 h-100 bb ph4'>
          <p className='f3 lh-title domaine-sans-fine-thin'>
            Off Season is a design and photo studio with a focus in music.
            Founded in New York City in 2018, Off Season takes a holistic and
            strategic approach in defining and developing an artist’s creative
            direction through design, photography and typography.
          </p>
        </div>
        <div className='aspect-ratio aspect-ratio--1x1'>
          <div
            className='aspect-ratio--object cover'
            style={{
              background: 'url(https://source.unsplash.com/random) center',
            }}
          ></div>
        </div>
      </div>

      <main
        className='w-two-thirds-l fixed right-0 bottom-0 top-0 br overflow-scroll'
        style={{ marginTop: '48px' }}
      >
        <div className='w-100 h-100 relative'>
          <div className='dn-l w-100 bb h4'>
            <p className='f4 f2-l domaine-sans-fine-thin'>
              Off Season is a design and photo studio with a focus in music.
              Founded in New York City in 2018, Off Season takes a holistic and
              strategic approach in defining and developing an artist’s creative
              direction through design, photography and typography.
            </p>
          </div>
          <div className='dn-l w-100 h4'>
            <h1>Creators</h1>
            {creators.map(creator => (
              <div>
                <Link
                  className='pointer link black'
                  onClick={() => history.push(`/${creator.username}`)}
                >
                  {creator.username}
                </Link>
                <h3>{creator.id}</h3>
                <h3>{creator.first_name}</h3>
                <h3>{creator.last_name}</h3>
              </div>
            ))}
          </div>
          <div className='dn-m dn-s absolute top-0 bottom-0 right-0 left-0 overflow-hidden flex justify-end mt6-m mt6-s'>
            <Link
              className='pointer sideways-text ma0 flex justify-end f3 f2-l link br outline-transparent black pb5 domaine-sans-fine-thin ph2 items-center'
              name='home'
              onClick={handleClick}
            >
              <span className='dot'></span>
              Home
            </Link>
            <p
              className={
                toggleHome === true
                  ? 'ma0 w-100 overflow-scroll pv5 ph6 fg-mono-light f4'
                  : 'dn ma0 w-100'
              }
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </p>

            <Link
              className='pointer sideways-text ma0 flex justify-end f3 f2-l link br outline-transparent black pb5 domaine-sans-fine-thin ph2 items-center'
              name='signup'
              onClick={handleClick}
            >
              <span className='dot'></span>
              Signup
            </Link>
            <p
              className={
                toggleSignup === true
                  ? 'ma0 w-100 overflow-scroll pv5 ph6 fg-mono-light f4'
                  : 'dn ma0 w-100'
              }
            >
              signup paragraph
            </p>

            <Link
              className='pointer sideways-text ma0 flex justify-end f3 f2-l link br outline-transparent black pb5 domaine-sans-fine-thin ph2 items-center'
              name='login'
              onClick={handleClick}
            >
              <span className='dot'></span>
              Login
            </Link>
            <p
              className={
                toggleLogin === true
                  ? 'ma0 w-100 overflow-scroll pv5 ph6 fg-mono-light f4'
                  : 'dn ma0 w-100'
              }
            >
              login paragraph
            </p>

            <Link
              className='pointer sideways-text ma0 flex justify-end f3 f2-l link br outline-transparent black pb5 domaine-sans-fine-thin ph2 items-center'
              name='cart'
              onClick={handleClick}
            >
              <span className='dot'></span>
              Cart
            </Link>
            <p
              className={
                toggleCart === true
                  ? 'ma0 w-100 overflow-scroll pv5 ph6 fg-mono-light f4'
                  : 'dn ma0 w-100'
              }
            >
              cart paragraph
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
