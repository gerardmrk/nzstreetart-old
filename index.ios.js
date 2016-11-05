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
    { title: 'Home', key: 'home', component: Home, initial: true },
    { title: 'Murals', key: 'murals', component: Murals, initial: false },
    { title: 'Profile', key: 'profile', component: Profile, initial: false }
  ]
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
            {this.routes.map((r, i) => (
              <Scene
                key={r.key}
                title={r.title}
                initial={r.initial}
                component={r.component}
              />
            ))}
          </Scene>
        </Router>
        <NavBar navs={this.routes} handleRouteChange={key => Actions[key]({})} />
      </View>
    )
  }
}

AppRegistry.registerComponent('NzStreetArt', () => NzStreetArt)
