import React, { Component } from 'react'
import { AppRegistry, Navigator, View, Text, TouchableHighlight } from 'react-native'

import styles from './styles.index'
import Header from './app/components/Header'
import NavBar from './app/components/NavBar'
import Home from './app/containers/Home'

export default class NzStreetArt extends Component {
  render () {
    const routes = [
      { title: 'Home', index: 0 },
      { title: 'List', index: 1 },
      { title: 'User', index: 2 }
    ]
    return (
      <View style={styles.container}>
        <Header />
        <NavBar navs={routes} />
      </View>
    )
  }
}

AppRegistry.registerComponent('NzStreetArt', () => NzStreetArt)
