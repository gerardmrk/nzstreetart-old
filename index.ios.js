import React, { Component } from 'react'
import { AppRegistry, Navigator, View } from 'react-native'

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
        <Navigator
          initialRoute={routes[0]}
          initialRouteStack={routes}
          renderScene={(route, nav) => {
            const changeRoute = index => nav.push(index)
            return (
              <View>
                <NavBar navs={routes} handleRouteChange={changeRoute} />
              </View>
            )
          }}
        />

      </View>
    )
  }
}

AppRegistry.registerComponent('NzStreetArt', () => NzStreetArt)
