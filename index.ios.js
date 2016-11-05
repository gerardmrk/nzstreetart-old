import React, { Component } from 'react'
import { AppRegistry, View } from 'react-native'
import { Scene, Router, Actions } from 'react-native-router-flux'

import styles from './styles.index'
import NavBar from './app/components/NavBar'
import Home from './app/containers/Home'
import Murals from './app/containers/Murals'
import Profile from './app/containers/Profile'

export default class NzStreetArt extends Component {
  routes = [
    { title: 'Map', key: 'home', component: Home, initial: true },
    { title: 'Murals', key: 'murals', component: Murals, initial: false },
    { title: 'Profile', key: 'profile', component: Profile, initial: false }
  ]

  _handleRouteChange = key => Actions[key]({})

  render () {
    return (
      <View style={styles.container}>
        <Router>
          <Scene
            key={'root'}
            titleStyle={styles.headerTitle}
            leftButtonTextStyle={styles.headerBackNav}
            navigationBarStyle={styles.headerBar}
          >
            {this.routes.map((r, i) => <Scene key={r.key} {...r} />)}
          </Scene>
        </Router>
        <NavBar navs={this.routes} handleRouteChange={this._handleRouteChange} />
      </View>
    )
  }
}

AppRegistry.registerComponent('NzStreetArt', () => NzStreetArt)
