import csrfFetch from "./csrf";


export const updatePinBoardMapping = board => {
    return {
        type: "RECEIVE_BOARD",
        board
    }
};

export const addPinBoardMapping = (pinId, boardId) => async (dispatch) => {
    const response = await csrfFetch(`/api/pin_board_relations`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ pinId, boardId })
    });
    const data = await response.json();
    dispatch(updatePinBoardMapping(data));
};

