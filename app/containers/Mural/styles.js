import { StyleSheet } from 'react-native'
import common from '../../_styles/common'

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
    paddingTop: common.headerPadding
  },
  imageContainer: {
    height: 370,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageWrapper: {
    position: 'relative',
    width: 320,
    height: 320
  },
  pic: {
    width: 320,
    height: 320,
    borderRadius: 3
  }
})

export default styles
