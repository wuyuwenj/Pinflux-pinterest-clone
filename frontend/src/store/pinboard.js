import csrfFetch from "./csrf";

export const addPinBoardMapping = (pinId, boardId) => async (dispatch) => {
  await csrfFetch(`/api/pin_board_relations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ pinId, boardId }),
  });
};
