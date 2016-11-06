import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View } from 'react-native'
import { Actions, Scene, Router } from 'react-native-router-flux'

import * as actionCreators from '../actions'
import styles from './styles'
import NavBar from '../components/NavBar'
import Home from './Home'
import Murals from './Murals'
import Profile from './Profile'

class App extends Component {
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

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
