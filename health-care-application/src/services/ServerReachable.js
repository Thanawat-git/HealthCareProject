import { apiBase, NETWORK_CONNECTED, NETWORK_ERROR } from "../constants";

export const isReachable = async (dispatch) => {
  const timeout = new Promise((resolve, reject) => {
    setTimeout(reject, 0, "Request timed out");
  });
  const request = fetch(`${apiBase}`);
  try {
    const response = await Promise.race([timeout, request]);
    dispatch({ type: NETWORK_CONNECTED });
    return true;
  } catch (error) {
    return dispatch({ type: NETWORK_ERROR });
  }
};
