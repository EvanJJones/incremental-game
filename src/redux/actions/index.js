import { CHANGE_COUNT } from "../constants/actionTypes";

export function changeCount(payload) {
  return { type: CHANGE_COUNT, payload };
}
