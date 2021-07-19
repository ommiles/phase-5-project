import React, { useState } from 'react';
import GoBackButton from '../GoBackButton';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { fetchAddPost } from '../../Actions/postsAction';
// import { toggleHomeState } from '../../Actions/toggleAction';

export default function AddPostForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user_id = useSelector(state => state.login.currentUser.id);
  const [post_type, setPostType] = useState('');
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [post_content, setPostContent] = useState('');
  const [subheader, setSubheader] = useState('');
  const [membership_level, setMembershipLevel] = useState(0);
  const [listing, setListing] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      fetchAddPost({
        title,
        post_type,
        image,
        post_content,
        subheader,
        membership_level,
        listing,
        user_id,
      })
    );
    history.push(`/home`);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'post_type':
        console.log(value);
        setPostType(value);
        break;
      case 'subheader':
        console.log(value);
        setSubheader(value);
        break;
      case 'image':
        console.log(value);
        setImage(value);
        break;
      case 'title':
        console.log(value);
        setTitle(value);
        break;
      case 'post_content':
        console.log(value);
        setPostContent(value);
        break;
      case 'membership_level':
        // console.log(value);
        // console.log(typeof value);
        // console.log(parseInt(value));
        // console.log(value.to_i);
        // TODO Number not converting to number
        setMembershipLevel(value);
        break;
      case 'listing':
        console.log(value);
        setListing(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className='ph7'>
      <p className='soehne-breit-leicht'>Not ready to upload your post?</p>
      <GoBackButton />
      <form onSubmit={handleSubmit}>
        <div className='flex flex-column f1 f3-m f2-l soehne-breit-leicht mv4'>
          <label htmlFor='title'>Title:</label>
          <input
            type='text'
            name='title'
            onChange={handleChange}
            value={title}
            className='bt-0 bl-0 br-0 bb f3 gray'
            style={{ backgroundColor: '#f1f1f1', outline: 'transparent' }}
          />
        </div>

        <div className='flex flex-column f1 f3-m f2-l soehne-breit-leicht mv4'>
          <label htmlFor='subheader'>Subheader:</label>
          <input
            type='text'
            name='subheader'
            onChange={handleChange}
            value={subheader}
            className='bt-0 bl-0 br-0 bb f3 gray'
            style={{ backgroundColor: '#f1f1f1', outline: 'transparent' }}
          />
        </div>

        <div className='flex flex-column f1 f3-m f2-l soehne-breit-leicht mv4'>
          <label htmlFor='image'>Image:</label>
          <input
            type='text'
            name='image'
            onChange={handleChange}
            value={image}
            className='bt-0 bl-0 br-0 bb f3 gray'
            style={{ backgroundColor: '#f1f1f1', outline: 'transparent' }}
          />
        </div>

        <div className='flex flex-column f1 f3-m f2-l soehne-breit-leicht mv4'>
          <label htmlFor='post_type'>Post Type:</label>
          <select
            type='text'
            name='post_type'
            onChange={handleChange}
            value={post_type}
            className='bt-0 bl-0 br-0 bb f3 gray'
            style={{ backgroundColor: '#f1f1f1', outline: 'transparent' }}
          >
            <option value=''> Please choose an option </option>
            <option value='text'>Text</option>
            <option value='video'>Video</option>
            <option value='image'>Image</option>
            <option value='poll'>Poll</option>
            <option value='livestream'>Livestream</option>
            <option value='audio'>Audio</option>
            <option value='link'>Link</option>
          </select>
        </div>

        <div className='flex flex-column f1 f3-m f2-l soehne-breit-leicht mv4'>
          <label htmlFor='membership_level'>Membership Level:</label>
          <select
            type='number'
            name='membership_level'
            onChange={handleChange}
            value={membership_level}
            className='bt-0 bl-0 br-0 bb f3 gray'
            style={{ backgroundColor: '#f1f1f1', outline: 'transparent' }}
          >
            <option value='0'> Please choose an option </option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
        </div>

        <div className='flex flex-column f1 f3-m f2-l soehne-breit-leicht mv4'>
          <label htmlFor='post_content'>Post Content:</label>
          <textarea
            type='text'
            name='post_content'
            onChange={handleChange}
            value={post_content}
            className='bt-0 bl-0 br-0 bb f3 gray'
            style={{ backgroundColor: '#f1f1f1', outline: 'transparent' }}
          />
        </div>

        <div className='flex flex-column f1 f3-m f2-l soehne-breit-leicht mv4'>
          <label htmlFor='listing'>Listing:</label>
          <select
            type='text'
            name='listing'
            onChange={handleChange}
            value={listing}
            className='bt-0 bl-0 br-0 bb f3 gray'
            style={{ backgroundColor: '#f1f1f1', outline: 'transparent' }}
          >
            <option value=''> Please choose an option </option>
            <option value='block_list'>For Subscribers Eyes Only :)</option>
            <option value='allow_list'>Can be Viewed by the Public</option>
          </select>
        </div>

        <input
          type='submit'
          className='mv2 f6 link dim br3 ph3 pv2 mb2 dib white bg-black fg-text-light'
          value='Submit Post'
        />
      </form>
    </div>
  );
}
