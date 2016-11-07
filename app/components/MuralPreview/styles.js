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
    width: 90,
    height: 90
  },
  placeholderThumb: {
    width: 90,
    height: 90,
    backgroundColor: '#777777'
  },
  contentBody: {
    flexGrow: 2,
    backgroundColor: '#f7f7f7',
    padding: 7
  }
})
