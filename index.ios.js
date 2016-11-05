import React, { Component } from 'react'
import { AppRegistry, Navigator, View, Text, TouchableHighlight } from 'react-native'

import styles from './styles.index'
import Header from './app/components/Header'
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
        <Navigator
          initialRoute={routes[0]}
          initialRouteStack={routes}
          navigationBar={
            <Navigator.NavigationBar
              routeMapper={{
                LeftButton: (route, navigator, index, navState) => <Text>{'Cancel'}</Text>,
                RightButton: (route, navigator, index, navState) => <Text>{'Done'}</Text>,
                Title: (route, navigator, index, navState) => <Text>{'Awesome Nav Bar'}</Text>
              }}
              style={{backgroundColor: 'gray'}}
            />
          }
          renderScene={(route, nav) => (
            <TouchableHighlight
              onPress={() => {
                if (route.index === 0) {
                  nav.push(routes[1])
                } else {
                  nav.pop()
                }
              }}
            >
              <Text>{route.title}</Text>
            </TouchableHighlight>
          )}
        />
      </View>
    )
  }
}

AppRegistry.registerComponent('NzStreetArt', () => NzStreetArt)
