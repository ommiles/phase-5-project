import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PublicHomePage() {
  //   const [toggleHome, setToggleHome] = useState(true);
  //   const [toggleSignup, setToggleSignup] = useState(false);
  //   const [toggleLogin, setToggleLogin] = useState(false);
  //   const [toggleCart, setToggleCart] = useState(false);

  const creators = useSelector(state =>
    state.users.users.filter(user => user.is_creator === true)
  );

  //   const handleClick = e => {
  //     switch (e.target.name) {
  //       case 'home':
  //         console.log(e.target.name);
  //         setToggleHome(true);
  //         setToggleSignup(false);
  //         setToggleLogin(false);
  //         setToggleCart(false);
  //         break;
  //       case 'signup':
  //         console.log(e.target.name);
  //         setToggleHome(false);
  //         setToggleSignup(true);
  //         setToggleLogin(false);
  //         setToggleCart(false);
  //         break;
  //       case 'login':
  //         console.log(e.target.name);
  //         setToggleHome(false);
  //         setToggleSignup(false);
  //         setToggleLogin(true);
  //         setToggleCart(false);
  //         break;
  //       case 'cart':
  //         console.log(e.target.name);
  //         setToggleHome(false);
  //         setToggleSignup(false);
  //         setToggleLogin(false);
  //         setToggleCart(true);
  //         break;
  //       default:
  //         break;
  //     }
  //   };

  //   return (
  //     <>
  //       {/* SIDEBAR */}
  //       <div
  //         className='w-100 w-25-l dn flex-l flex-column fixed top-0 bottom-0'
  //         style={{ marginTop: '48px' }}
  //       >
  //         <div className='pt3-m pv5 h-100 bb ph4'>
  //           <p className='f3 lh-title domaine-sans-fine-thin'>
  //             Off Season is a design and photo studio with a focus in music.
  //             Founded in New York City in 2018, Off Season takes a holistic and
  //             strategic approach in defining and developing an artist’s creative
  //             direction through design, photography and typography.
  //           </p>
  //         </div>
  //         <div className='aspect-ratio aspect-ratio--1x1'>
  //           <div
  //             className='aspect-ratio--object cover'
  //             style={{
  //               background: 'url(https://source.unsplash.com/random) center',
  //             }}
  //           ></div>
  //         </div>
  //       </div>
  //       {/* START OF MAIN SECTION */}
  //       <main
  //         className='w-100 w-75-l fixed right-0 bottom-0 top-0  overflow-scroll'
  //         style={{ marginTop: '48px' }}
  //       >
  //         {/* RESPONSIVE SIDEBAR */}
  //         <div className='w-100 h-100 relative'>
  //           <div className='dn-l w-100 bb h4'>
  //             <p className='f3 domaine-sans-fine-thin mt4 mr5 ml5 mb3'>
  //               Off Season is a design and photo studio with a focus in music.
  //               Founded in New York City in 2018, Off Season takes a holistic and
  //               strategic approach in defining and developing an artist’s creative
  //               direction through design, photography and typography.
  //             </p>
  //           </div>
  //           {/* CREATORS LIST */}
  //           <div className='dn-l w-100 h4'>
  //             <h1>Creators</h1>
  //             {creators.map(creator => (
  //               <div key={creator.id}>
  //                 <Link
  //                   className='pointer link black'
  //                   to={`/${creator.username}`}
  //                 >
  //                   {creator.username}
  //                 </Link>
  //                 <h3>{creator.id}</h3>
  //                 <h3>{creator.first_name}</h3>
  //                 <h3>{creator.last_name}</h3>
  //               </div>
  //             ))}
  //           </div>

  //           {/* HOME SECTION */}
  //           <div className='dn-m dn-s absolute top-0 bottom-0 right-0 left-0 overflow-hidden flex justify-end mt6-m mt6-s'>
  //             <Link
  //               className='pointer sideways-text ma0 flex justify-end f3 f2-l link br outline-transparent black pb5 domaine-sans-fine-thin ph2 items-center'
  //               name='home'
  //               onClick={handleClick}
  //               to='/'
  //             >
  //               <span
  //                 className={toggleHome === true ? 'dot dot-active' : 'dot'}
  //               ></span>
  //               Home
  //             </Link>

  //             <div
  //               className={
  //                 toggleHome === true
  //                   ? 'ma0 w-100 overflow-scroll pv5 ph6 fg-mono-light f4'
  //                   : 'dn ma0 w-100'
  //               }
  //             >
  //               <p>
  //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  //                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  //                 enim ad minim veniam, quis nostrud exercitation ullamco laboris
  //                 nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
  //                 in reprehenderit in voluptate velit esse cillum dolore eu fugiat
  //                 nulla pariatur. Excepteur sint occaecat cupidatat non proident,
  //                 sunt in culpa qui officia deserunt mollit anim id est laborum.
  //               </p>
  //               <p>
  //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  //                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  //                 enim ad minim veniam, quis nostrud exercitation ullamco laboris
  //                 nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
  //                 in reprehenderit in voluptate velit esse cillum dolore eu fugiat
  //                 nulla pariatur. Excepteur sint occaecat cupidatat non proident,
  //                 sunt in culpa qui officia deserunt mollit anim id est laborum.
  //               </p>
  //               <p>
  //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  //                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  //                 enim ad minim veniam, quis nostrud exercitation ullamco laboris
  //                 nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
  //                 in reprehenderit in voluptate velit esse cillum dolore eu fugiat
  //                 nulla pariatur. Excepteur sint occaecat cupidatat non proident,
  //                 sunt in culpa qui officia deserunt mollit anim id est laborum.
  //               </p>
  //               <p>
  //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  //                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  //                 enim ad minim veniam, quis nostrud exercitation ullamco laboris
  //                 nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
  //                 in reprehenderit in voluptate velit esse cillum dolore eu fugiat
  //                 nulla pariatur. Excepteur sint occaecat cupidatat non proident,
  //                 sunt in culpa qui officia deserunt mollit anim id est laborum.
  //               </p>
  //             </div>

  //             {/* SIGNUP SECTION */}
  //             <Link
  //               className='pointer sideways-text ma0 flex justify-end f3 f2-l link br outline-transparent black pb5 domaine-sans-fine-thin ph2 items-center'
  //               name='signup'
  //               onClick={handleClick}
  //               //   to="/signup"
  //             >
  //               <span
  //                 className={toggleSignup === true ? 'dot dot-active' : 'dot'}
  //               ></span>
  //               Signup
  //             </Link>
  //             <p
  //               className={
  //                 toggleSignup === true
  //                   ? 'ma0 w-100 overflow-scroll pv5 ph6 fg-mono-light f4'
  //                   : 'dn ma0 w-100'
  //               }
  //             >
  //               signup paragraph
  //             </p>

  //             {/* LOGIN SECTION */}
  //             <Link
  //               className='pointer sideways-text ma0 flex justify-end f3 f2-l link br outline-transparent black pb5 domaine-sans-fine-thin ph2 items-center'
  //               name='login'
  //               onClick={handleClick}
  //               //   to="/login"
  //             >
  //               <span
  //                 className={toggleLogin === true ? 'dot dot-active' : 'dot'}
  //               ></span>
  //               Login
  //             </Link>
  //             <p
  //               className={
  //                 toggleLogin === true
  //                   ? 'ma0 w-100 overflow-scroll pv5 ph6 fg-mono-light f4'
  //                   : 'dn ma0 w-100'
  //               }
  //             >
  //               login paragraph
  //             </p>

  //             {/* CART SECTION */}
  //             <Link
  //               className='pointer sideways-text ma0 flex justify-end f3 f2-l link br outline-transparent black pb5 domaine-sans-fine-thin ph2 items-center'
  //               name='cart'
  //               onClick={handleClick}
  //               //   to="/checkout"
  //             >
  //               <span
  //                 className={toggleCart === true ? 'dot dot-active' : 'dot'}
  //               ></span>
  //               Cart
  //             </Link>
  //             <p
  //               className={
  //                 toggleCart === true
  //                   ? 'ma0 w-100 overflow-scroll pv5 ph6 fg-mono-light f4'
  //                   : 'dn ma0 w-100'
  //               }
  //             >
  //               cart paragraph
  //             </p>
  //           </div>
  //         </div>
  //       </main>
  //     </>
  //   );
  return (
    <div>
      <h1>PublicHomePage Component :)</h1>
      {/* CREATORS LIST */}
      <div className=''>
        <h1>Creators</h1>
        {creators.map(creator => (
          <div key={creator.id}>
            <Link className='pointer link black f1' to={`/${creator.username}`}>
              {creator.username}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
