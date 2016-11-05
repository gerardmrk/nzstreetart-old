import { StyleSheet } from 'react-native'

import colors from '../../_styles/colors'

export default StyleSheet.create({
  main: {
    height: 66,
    backgroundColor: colors.base,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    paddingTop: 12,
    color: colors.headerText
  }
})
