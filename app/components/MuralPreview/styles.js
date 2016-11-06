import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  thumbnail: {
    width: 100,
    height: 100
  },
  contentBody: {
    flexGrow: 2,
    backgroundColor: '#f7f7f7'
  }
})
