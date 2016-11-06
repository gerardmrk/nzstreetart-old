import { StyleSheet } from 'react-native'
import colors from '../../_styles/colors'

export default StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: colors.base,
    borderTopWidth: 1,
    borderTopColor: '#82B4B0',
    height: 48.8
  },
  navWrapper: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  navItem: {
    color: '#fff'
  }
})
