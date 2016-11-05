import { StyleSheet } from 'react-native'
import colors from '../../_styles/colors'

export default StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: colors.base,
    height: 40
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
