import getMuralList from './getMuralList'

const setCurrentMural = muralIndex => ({
  type: 'SET_CURRENT_MURAL',
  muralIndex
})

export {
  setCurrentMural,
  getMuralList
}
