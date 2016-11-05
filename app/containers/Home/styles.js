import { StyleSheet } from 'react-native'
import common from '../../_styles/common'

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
    paddingTop: common.paddingTop
  },
  mapContainer: {
    ...StyleSheet.absoluteFillObject
  },
  coordsOverlay: {
  }
})

export default styles
