var initialState = {
  detailId: null
};
/* https://www.youtube.com/watch?v=RRjVOg555qE*/
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_DetailId':
      return Object.assign({}, state, { detailId: action.payload.detailId });
    default:
      return state;
  }
}
