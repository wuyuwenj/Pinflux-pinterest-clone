import csrfFetch from "./csrf";

export const addFollow = (followerId, followeeId) => async (dispatch) => {
  await csrfFetch(`/api/follows`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ followerId, followeeId }),
  });
};

export const deleteFollow = (followeeId, followerId) => async (dispatch) => {
  await csrfFetch(`/api/follows/${followeeId}/${followerId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
