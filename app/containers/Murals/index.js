import React, { Component } from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

export default class Murals extends Component {
  render () {
    return (
      <View style={styles.main}>
        <Text>{'MURALS'}</Text>
      </View>
    )
  }
}
