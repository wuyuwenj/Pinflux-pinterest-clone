import csrfFetch from "./csrf";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user,
});

export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users,
});
export const getUser = (id) => (state) => {
  return state.entitles.users ? state.entitles.users[id] : null;
};
export const getUsers = (state) => {
  return state.entitles.users ? Object.values(state.entitles.users) : [];
};

export const fetchUsers = (users) => async (dispatch) => {
  const res = await csrfFetch("/api/users");
  if (res.ok) {
    const users = await res.json();
    dispatch(receiveUsers(users));
  }
};

export const updateUser = (userpayload, userId) => async (dispatch) => {
  const res = await csrfFetch(`/api/users/${userId}/setting`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userpayload),
  });

  if (res.ok) {
    const user = await res.json();
    dispatch(receiveUser(user));
  }
};

export const fetchUser = (userId) => async (dispatch) => {
  const res = await csrfFetch(`/api/users/${userId}`);

  if (res.ok) {
    const user = await res.json();
    dispatch(receiveUser(user));
  }
};

export default function UsersReducer(oldstate = {}, action) {
  const newState = { ...oldstate };
  switch (action.type) {
    case RECEIVE_USERS:
      return action.users;
    case RECEIVE_USER:
      newState[action.user.id] = action.user;
    default:
      return oldstate;
  }
}
