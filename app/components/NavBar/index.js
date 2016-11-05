import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

import styles from './styles'

export default class NavBar extends Component {
  render () {
    return (
      <View style={styles.main}>
        <Text>{'NavBar'}</Text>
      </View>
    )
  }
}

const Nav = () => (
  <TouchableHighlight>
  </TouchableHighlight>
)
