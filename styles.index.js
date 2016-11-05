import { StyleSheet } from 'react-native'

import colors from './app/_styles/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF'
  },
  headerBar: {
    backgroundColor: colors.base
  },
  headerTitle: {
    color: colors.headerText
  },
  headerBackNav: {
    color: colors.headerText
  },
  mapContainer: {
    ...StyleSheet.absoluteFillObject
  }
})

export default styles
