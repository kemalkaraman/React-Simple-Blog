import { store } from "../../index"

export function SetDetailId(detailId) {
  store.dispatch({
    type: 'SET_DetailId',
    payload: {
      detailId
    }
  });
}
