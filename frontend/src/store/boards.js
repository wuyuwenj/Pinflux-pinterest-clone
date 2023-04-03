import csrfFetch from "./csrf";


const RECEIVE_BOARD = 'RECEIVE_BOARD'
const RECEIVE_BOARDS = 'RECEIVE_BOARDS'
const REMOVE_BOARD = 'REMOVE_BOARD'


export const receiveBoards = boards => {
    return {
        type: RECEIVE_BOARDS,
        boards
    }
};

export const receiveBoard = board => {
    return {
        type: RECEIVE_BOARD,
        board
    }
};
const removeBoard = boardId => {
    return {
        type: REMOVE_BOARD,
        boardId
    }
}

export const getBoard = (id) => (state) => {

    return state.entitles.boards ? state.entitles.boards[id] : null
}
export const getBoards = (state) => {
    return state.entitles.boards ? Object.values(state.entitles.boards) : []
}

export const fetchBoards = (userId) => async dispatch => {
    const res = await csrfFetch(`/api/users/${userId}/boards`);
    const data = await res.json();
    console.log(data,"data")
    dispatch(receiveBoards(data));
}


export const fetchBoard = (boardId) => async dispatch => {
    const res = await csrfFetch(`/api/boards/${boardId}`);
    const data = await res.json();
    dispatch(receiveBoard(data));
}

// export const fetchUserBoards = (userId) => async dispatch => {
//     const res = await csrfFetch(`/api/boards/user/${userId}`);
//     const data = await res.json();
//     dispatch(receiveBoards(data));
// }

export const createBoard = (boardData) => async dispatch => {
    const res = await csrfFetch(`/api/boards`, {
        method: 'POST',
        body: JSON.stringify(boardData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    
    const data = await res.json();

    dispatch(receiveBoard(data))
}




export const updateBoard = (boardData) => async dispatch => {
    const res = await csrfFetch(`/api/boards/${boardData.id}`, {
        method: 'PATCH',
        body: JSON.stringify(boardData),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const data = await res.json();
    dispatch(receiveBoard(data))
}




export const deleteBoard = (boardId) => async dispatch => {
    const res = await csrfFetch(`/api/boards/${boardId}`, {
        method: 'DELETE'
    })
    dispatch(removeBoard(boardId))
}



const boardsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = { ...state };

    switch (action.type) {
        case RECEIVE_BOARDS:
            return { ...nextState, ...action.boards };
        case RECEIVE_BOARD:
            nextState[action.board.id] = action.board
            return nextState
        case REMOVE_BOARD:
            delete nextState[action.boardId];
            return nextState
        default:
            return nextState;
    }
}

export default boardsReducer