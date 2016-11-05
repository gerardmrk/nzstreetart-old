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
      <Text style={styles.values}>lat: {latitude}</Text>
      <Text style={styles.values}>lon: {longitude}</Text>
      <Text style={styles.values}>latDelta: {latitudeDelta}</Text>
      <Text style={styles.values}>lonDelta: {longitudeDelta}</Text>
    </View>
  )
}

export default CoordOverlay
