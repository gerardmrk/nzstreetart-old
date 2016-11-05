import React, { Component } from 'react'
import { AppRegistry, Navigator, View, Text, TouchableHighlight } from 'react-native'

import styles from './styles.index'
import Header from './app/components/Header'
import NavBar from './app/components/NavBar'
import Home from './app/containers/Home'

export default class NzStreetArt extends Component {
  render () {
    const routes = [
      { title: 'First Scene', index: 0 },
      { title: 'Second Scene', index: 1 },
      { title: 'Third Scene', index: 2 }
    ]
    return (
      <View style={styles.container}>
        <Header />
        <NavBar />
      </View>
    )
  }
}

AppRegistry.registerComponent('NzStreetArt', () => NzStreetArt)
