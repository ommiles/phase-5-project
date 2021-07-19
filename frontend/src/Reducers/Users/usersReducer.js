const initialState = {
  users: [],
  loading: false,
  error: false,
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_USERS_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FETCH_USERS_SUCCESS':
      return {
        loading: false,
        users: action.users,
        error: false,
      };
    case 'FETCH_USERS_FAILURE':
      return {
        loading: false,
        error: true,
        users: [],
      };
    case 'FETCH_USER_REQUEST':
      return {
        ...state,
        loading: true,
        error: false,
      };
    case 'FETCH_USER_FAILURE':
      return {
        loading: false,
        error: true,
        users: [],
      };
    case 'EDIT_USER_SUCCESS':
      if (state.users.findIndex) {
        const index = state.users.findIndex(user => user.id === action.user.id);
        return {
          ...state,
          users: [
            ...state.users.slice(0, index),
            action.user,
            ...state.users.slice(index + 1),
          ],
          loading: false,
          error: false,
        };
      } else {
        return { ...state, loading: false, error: false };
      }
    case 'DELETE_USERS_SUCCESS':
      return {
        ...state,
        loading: false,
        errors: false,
        users: [],
      };
    default:
      return state;
  }
}
