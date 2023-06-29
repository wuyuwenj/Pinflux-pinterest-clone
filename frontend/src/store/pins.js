import csrfFetch from "./csrf";

export const RECEIVE_PINS = "RECEIVE_PINS";
export const RECEIVE_PIN = "RECEIVE_PIN";
export const REMOVE_PIN = "REMOVE_PIN";

const receivePin = (pin) => ({
  type: RECEIVE_PIN,
  pin,
});
const receivePins = (pins) => ({
  type: RECEIVE_PINS,
  pins,
});
const removePin = (pinId) => ({
  type: REMOVE_PIN,
  pinId,
});

export const getPin = (id) => (state) => {
  return state.entitles.pins ? state.entitles.pins[id] : null;
};
export const getPins = (state) => {
  return state.entitles.pins ? Object.values(state.entitles.pins) : [];
};

export const fetchPins = () => async (dispatch) => {
  const res = await csrfFetch("/api/pins");

  if (res.ok) {
    const pins = await res.json();
    dispatch(receivePins(pins));
  }
};

export const fetchPin = (pinId) => async (dispatch) => {
  const res = await csrfFetch(`/api/pins/${pinId}`);

  if (res.ok) {
    const pin = await res.json();
    dispatch(receivePin(pin));
  }
};

export const createPin = (formData) => async (dispatch) => {
  const res = await csrfFetch(`/api/pins`, {
    method: "POST",
    body: formData,
  });

  if (res.ok) {
    const pin = await res.json();
    dispatch(receivePin(pin));
  }
};
export const updatePin = (pin) => async (dispatch) => {
  const res = await csrfFetch(`/api/pins/${pin.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(pin),
  });

  if (res.ok) {
    const pin = await res.json();
    dispatch(receivePin(pin));
  }
};

export const deletePin = (pinId) => async (dispatch) => {
  const res = await csrfFetch(`/api/pins/${pinId}`, {
    method: "DELETE",
  });

  if (res.ok) {
    dispatch(removePin(pinId));
  }
};

export default function pinsReducer(oldstate = {}, action) {
  const newState = { ...oldstate };
  switch (action.type) {
    case RECEIVE_PINS:
      return action.pins;
    case RECEIVE_PIN:
      newState[action.pin.id] = action.pin;
      return newState;
    case REMOVE_PIN:
      delete newState[action.pinId];
      return newState;
    default:
      return oldstate;
  }
}
