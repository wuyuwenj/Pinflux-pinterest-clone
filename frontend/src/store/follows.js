import csrfFetch from "./csrf";

const ADD_FOLLOW = "follows/ADD_FOLLOW";
const REMOVE_FOLLOW = "follows/REMOVE_FOLLOW";

export const addFollowAction = (follow) => ({
  type: ADD_FOLLOW,
  payload: follow,
});

export const removeFollowAction = (followeeId, followerId) => ({
  type: REMOVE_FOLLOW,
  payload: { followeeId, followerId },
});

export const addFollow = (followerId, followeeId) => async (dispatch) => {
  const res = await csrfFetch(`/api/follows`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ followerId, followeeId }),
  });
  if (res.ok) {
    const data = await res.json(); 
    dispatch(addFollowAction(data));
  }
};

export const deleteFollow = (followeeId, followerId) => async (dispatch) => {
  const res = await csrfFetch(`/api/follows/${followeeId}/${followerId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.ok) {
    dispatch(removeFollowAction(followeeId, followerId));
  }
};

export default function followsReducer(oldstate = {}, action){
  const newState = { ...oldstate };
  switch (action.type) {
    case ADD_FOLLOW: 
      
      return newState
    case REMOVE_FOLLOW: {
      
      Object.values(newState).forEach((follow) => {
        if (
          follow.followerId === action.payload.followerId &&
          follow.followeeId === action.payload.followeeId
        ) {
          delete newState[follow.id];
        }
      });
      return newState;
    }
    default:
      return oldstate;
  }
};
