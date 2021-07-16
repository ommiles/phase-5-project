import React from 'react';

export default function Sidebar() {
  return (
    <div
      className='w-100 w-25-l dn flex-l flex-column fixed top-0 bottom-0'
      style={{ marginTop: '48px' }}
    >
      <div className='pt3-m pv5 h-100 bb ph4'>
        <p className='f3 lh-title domaine-sans-fine-thin'>
          CODINAIRE is a platform for digital creators to gain subscribers and
          earn money. Create tutorials, paid repositories, tutoring sessions,
          livestream coding sessions and polls. Join for free!
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
  );
}
