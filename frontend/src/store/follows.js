import csrfFetch from "./csrf";

// export const updateFollow = user => {
//     return {
//         type: "RECEIVE_USER",
//         board
//     }
// };

export const addFollow = (followerId, followeeId) => async (dispatch) => {
    const response = await csrfFetch(`/api/follows`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ followerId, followeeId })
    });
    // const data = await response.json();
    // dispatch(updateFollow(data));
};



export const deleteFollow = (followeeId, followerId) => async (dispatch) => {
    const response = await csrfFetch(`/api/follows/${followeeId}/${followerId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }

    });
    // if (response.ok) {
    //     const data = await response.json();
    //     dispatch(updateFollow(data));
    // } else {
    //     // handle error
    // }
};