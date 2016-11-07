const initialState = {
  items: [],
  currentMuralIndex: 0,
  isLoadingMurals: false
}

const murals = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'GET_MURAL_LIST_REQUEST':
      return { ...state, isLoadingMurals: true }
    case 'GET_MURAL_LIST_FAILURE':
      return { ...state, isLoadingMurals: false }
    case 'GET_MURAL_LIST_SUCCESS':
      return { ...state, isLoadingMurals: false, items: action.items }
    case 'SET_CURRENT_MURAL':
      return { ...state, currentMuralIndex: action.muralIndex }
    default:
      return state
  }
}

export default murals
