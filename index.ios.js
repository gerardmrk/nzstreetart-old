import React, { Component } from 'react'
import { AppRegistry, View } from 'react-native'
import { Scene, Router, Actions } from 'react-native-router-flux'
import firebase from 'firebase'

import styles from './styles.index'
import NavBar from './app/components/NavBar'
import Home from './app/containers/Home'
import Murals from './app/containers/Murals'
import Profile from './app/containers/Profile'

const config = {
  apiKey: 'AIzaSyDN4RaOfHOH12eZ0NfFUd3vxfknZCaToLk',
  authDomain: 'nzstreetart-test-1d8f7.firebaseapp.com',
  databaseURL: 'https://nzstreetart-test-1d8f7.firebaseio.com',
  storageBucket: 'nzstreetart-test-1d8f7.appspot.com',
  messagingSenderId: '347466129293'
}

const firebaseAPI = firebase.initializeApp(config)

export default class NzStreetArt extends Component {
  routes = [
    { title: 'Map', icon: 'public', key: 'home', component: Home, initial: true },
    { title: 'Murals', icon: 'map', key: 'murals', component: Murals, initial: false },
    { title: 'Profile', icon: 'rate-review', key: 'profile', component: Profile, initial: false }
  ]

  state = {
    muralList: []
  }

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
