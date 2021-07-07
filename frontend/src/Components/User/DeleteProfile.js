import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteUser } from '../../Actions/usersAction'

export default function DeleteProfile(props) {
    
    const history = useHistory()
    const dispatch = useDispatch()
    console.log(history)
    // useSelector((state) => state.login.currentUser.id
    // need to dispatch an action that deletes a profile

    const handleClick = () => {
        dispatch(deleteUser(props.userId))
        history.push("/");
    }
    return (
        <div>
            <button onClick={handleClick} >Delete My Profile</button>
        </div>
    )
}
