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
import Mural from './Mural'

class App extends Component {
  routes = [
    { title: 'Map', key: 'home', component: Home, initial: true },
    { title: 'Murals', key: 'murals', component: Murals, initial: false },
    { title: 'Profile', key: 'profile', component: Profile, initial: false },
    { title: 'Mural', key: 'mural', component: Mural, initial: false }
  ]

  navs = [
    { icon: 'public', key: 'home' },
    { icon: 'map', key: 'murals' },
    { icon: 'rate-review', key: 'profile' }
  ]

  _handleRouteChange = key => Actions[key]({})

  render () {
    return (
      <View style={styles.container}>
        <Router>
          <Scene
            key={'root'}
            titleStyle={styles.headerTitle}
            navigationBarStyle={styles.headerBar}
            backButtonImage={require('../assets/back_button.png')}
          >
            {this.routes.map((r, i) => <Scene key={r.key} {...r} />)}
          </Scene>
        </Router>
        <NavBar navs={this.navs} handleRouteChange={this._handleRouteChange} />
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
