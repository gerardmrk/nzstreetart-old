import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF'
  },
  mapContainer: {
    ...StyleSheet.absoluteFillObject
  },
  coordsOverlay: {
  }
})

export default styles
