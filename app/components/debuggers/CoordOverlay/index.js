import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

const CoordOverlay = ({
  title,
  latitude,
  longitude,
  latitudeDelta,
  longitudeDelta
}) => {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>{title}</Text>
      <Text>lat: {latitude}</Text>
      <Text>lon: {longitude}</Text>
      <Text>latDelta: {latitudeDelta}</Text>
      <Text>lonDelta: {longitudeDelta}</Text>
    </View>
  )
}

export default CoordOverlay
