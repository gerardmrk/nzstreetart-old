import firebaseapi from './firebaseapi'

const _getMuralListRequest = () => ({ type: 'GET_MURAL_LIST_REQUEST' })

const _getMuralListSuccess = items => ({ type: 'GET_MURAL_LIST_SUCCESS', items })

const _getMuralListFailure = error => ({ type: 'GET_MURAL_LIST_FAILURE', error })

const getMuralList = () => async dispatch => {
  dispatch(_getMuralListRequest())
  try {
    const snapshot = await firebaseapi.database().ref('/murals').once('value')
    const items = []

    snapshot.forEach(child => {
      items.push({ _key: child.key, ...child.val() })
    })

    dispatch(_getMuralListSuccess(items))
  } catch (err) {
    dispatch(_getMuralListFailure(err))
  }
}

export default getMuralList
