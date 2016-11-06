const initialState = {
  items: [],
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
    default:
      return state
  }
}

export default murals
