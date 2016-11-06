import firebaseapi from '../_apis/firebaseapi'

const db = firebaseapi.database()
const gs = firebaseapi.storage()

const _getMuralListRequest = () => ({ type: 'GET_MURAL_LIST_REQUEST' })

const _getMuralListSuccess = items => ({ type: 'GET_MURAL_LIST_SUCCESS', items })

const _getMuralListFailure = error => ({ type: 'GET_MURAL_LIST_FAILURE', error })

const getMuralList = (sortOrder = 'default') => async dispatch => {
  dispatch(_getMuralListRequest())
  try {
    const snapshot = await db.ref('/murals').once('value')
    const items = []

    snapshot.forEach(child => {
      const childprops = child.val()
      items.push({ _key: child.key, ...childprops })
    })

    const parsedItems = await Promise.all(items.map(i => getthumburl(i)))

    dispatch(_getMuralListSuccess(parsedItems))
  } catch (err) {
    console.error(err)
    dispatch(_getMuralListFailure(err))
  }
}

const getthumburl = async child => {
  const thumb_url = await gs.ref(`murals/thumbnails/${child.mural_thumb}`).getDownloadURL()
  return { ...child, thumb_url }
}

export default getMuralList
