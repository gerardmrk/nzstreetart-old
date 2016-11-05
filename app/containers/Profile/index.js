import React, { Component } from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

export default class Profile extends Component {
  render () {
    return (
      <View style={styles.main}>
        <Text>{'PROFILE PAGE'}</Text>
      </View>
    )
  }
}
