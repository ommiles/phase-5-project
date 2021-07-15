import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PublicHomePage() {
  const creators = useSelector(state =>
    state.users.users.filter(user => user.is_creator === true)
  );

  return (
    <div>
      <h1>PublicHomePage Component</h1>
      {/* CREATORS LIST */}
      <div className=''>
        <h1>Creators</h1>
        {creators.map(creator => (
          <div key={creator.id}>
            <Link className='pointer link black f2 f1-l' to={`/${creator.username}`}>
              {creator.username}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
