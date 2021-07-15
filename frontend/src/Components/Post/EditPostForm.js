import React, { useState } from "react";
import GoBackButton from "../GoBackButton";
import { fetchEditPost } from "../../Actions/postsAction";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

export default function EditPostForm(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const post_id = parseInt(props.post_id);
  const [post_type, setPostType] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [post_content, setPostContent] = useState("");
  const [subheader, setSubheader] = useState("");
  const [membership_level, setMembershipLevel] = useState("");
  const [listing, setListing] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      fetchEditPost({
        post_id,
        title,
        post_type,
        image,
        post_content,
        subheader,
        membership_level,
        listing,
      })
    );
    // TODO: Homepage component needs to be refreshed.
    history.push("/home");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "post_type":
        console.log(value);
        setPostType(value);
        break;
      case "subheader":
        console.log(value);
        setSubheader(value);
        break;
      case "image":
        console.log(value);
        setImage(value);
        break;
      case "title":
        console.log(value);
        setTitle(value);
        break;
      case "post_content":
        console.log(value);
        setPostContent(value);
        break;
      case "membership_level":
        // console.log(parseInt(value))
        // console.log(value.to_i)
        // TODO Number not converting to number
        setMembershipLevel(value);
        break;
      case "listing":
        console.log(value);
        setListing(value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h1>This is the EditPostForm.</h1>
      <p>Not ready to edit your post?</p>
      <GoBackButton />
      <form onSubmit={handleSubmit}>
        <div className="">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            className=""
            onChange={handleChange}
            value={title}
          />
        </div>

        <div className="">
          <label htmlFor="subheader">Subheader:</label>
          <input
            type="text"
            name="subheader"
            className=""
            onChange={handleChange}
            value={subheader}
          />
        </div>

        <div className="">
          <label htmlFor="image">Image:</label>
          <input
            type="text"
            name="image"
            className=""
            onChange={handleChange}
            value={image}
          />
        </div>

        <div className="">
          <label htmlFor="post_type">Post Type:</label>
          <select
            type="text"
            name="post_type"
            className=""
            onChange={handleChange}
            value={post_type}
          >
            <option value=""> Please choose an option </option>
            <option value="text">Text</option>
            <option value="video">Video</option>
            <option value="image">Image</option>
            <option value="poll">Poll</option>
            <option value="livestream">Livestream</option>
            <option value="audio">Audio</option>
            <option value="link">Link</option>
          </select>
        </div>

        <div className="">
          <label htmlFor="membership_level">Membership Level:</label>
          <select
            type="number"
            name="membership_level"
            className=""
            onChange={handleChange}
            value={membership_level}
          >
            <option value=""> Please choose an option </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="post_content">Post Content:</label>
          <textarea
            type="text"
            name="post_content"
            className=""
            onChange={handleChange}
            value={post_content}
          />
        </div>

        <div className="">
          <label htmlFor="listing">Listing:</label>
          <select
            type="text"
            name="listing"
            className=""
            onChange={handleChange}
            value={listing}
          >
            <option value=""> Please choose an option </option>
            <option value="block_list">For Subscribers Eyes Only :)</option>
            <option value="allow_list">Can be Viewed by the Public</option>
          </select>
        </div>

        <input type="submit" className="" value="Submit Post Edit" />
      </form>
    </div>
  );
}
