import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  thumbnail: {
    width: 100,
    height: 100
  },
  contentBody: {
    flexGrow: 2,
    backgroundColor: '#f7f7f7',
    padding: 8
  }
})
