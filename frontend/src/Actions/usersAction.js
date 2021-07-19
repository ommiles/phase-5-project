export const fetchUsers = () => {
  return dispatch => {
    dispatch({ type: 'FETCH_USERS_REQUEST' });
    fetch('http://localhost:3000/api/v1/users')
      .then(resp => resp.json())
      .then(users => dispatch({ type: 'FETCH_USERS_SUCCESS', users }));
  };
};

export const fetchUserEdit = user => {
  return dispatch => {
    const token = localStorage.token;
    dispatch({ type: 'FETCH_USER_REQUEST' });
    if (token) {
      return fetch(`http://localhost:3000/api/v1/users/${user.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          first_name: user.first_name,
          last_name: user.last_name,
        }),
      })
        .then(resp => {
          return resp.json();
        })
        .then(user => dispatch({ type: 'EDIT_USER_SUCCESS', user }));
    }
  };
};

export const fetchPasswordEdit = passwordTokenObj => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/users/${passwordTokenObj.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${passwordTokenObj.token}`,
      },
      body: JSON.stringify({
        password: passwordTokenObj.password,
        password_confirmation: passwordTokenObj.password_confirmation,
      }),
    })
      .then(resp => {
        return resp.json();
      })
      .then(data => {
      });
  };
};

export const deleteUser = userId => {
  return dispatch => {
    dispatch({ type: 'FETCH_USER_REQUEST' });
    fetch(`http://localhost:3000/api/v1/users/${userId}`, {
      method: 'DELETE',
    })
      .then(resp => resp.json())
      .then(posts => {
        localStorage.removeItem('token');
        dispatch({ type: 'DELETE_USER_SUCCESS' });
      });
  };
};
