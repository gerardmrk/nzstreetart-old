/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  View
} from 'react-native'
import MapView from 'react-native-maps'
import styles from './styles.index'

export default class NzStreetArt extends Component {
  state = {
    position: {
      latitude: 37.785834,
      longitude: -122.406417,
      latitudeDelta: 0.00004508521359580864,
      longitudeDelta: 0.000044915558749550845
    },
    region: {
      latitude: 37.785834,
      longitude: -122.406417,
      latitudeDelta: 0.00004508521359580864,
      longitudeDelta: 0.000044915558749550845
    }
  }

  watchID: ?number = null

  componentDidMount () {
    window.navigator.geolocation.getCurrentPosition(
      pos => {
        const regAndPos = regionFrom(pos)
        this.setState({ position: regAndPos, region: regAndPos })
      },
      err => window.alert(JSON.stringify(err)),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    )
    this['watchID'] = window.navigator.geolocation.watchPosition(pos => {
      const regAndPos = regionFrom(pos)
      this.setState({ position: regAndPos, region: regAndPos })
    })
  }

  componentWillUnmount () { window.navigator.geolocation.clearWatch(this['watchID']) }

  _handleRegionChange = region => {
    this.setState({ region, position: region })
  }

  render () {
    const { position, region } = this.state
    const { longitude, latitude } = position
    console.log(position)
    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapContainer}
          initialRegion={region}
          onRegionChange={this._handleRegionChange}
        >
          <MapView.Marker
            coordinate={{ latitude, longitude }}
            title={'YOU'}
            description={'Your current location'}
          />
        </MapView>
      </View>
    )
  }
}

const regionFrom = ({ coords }) => {
  const { latitude, longitude, accuracy } = coords

  const onDegreeOfLongitudeInMeters = 111.32 * 1000
  const circumference = (40075 / 360) * 1000

  const latDelta = accuracy * (1 / (Math.cos(latitude) * circumference))
  const lonDelta = (accuracy / onDegreeOfLongitudeInMeters)

  return {
    latitude,
    longitude,
    latitudeDelta: Math.max(0, latDelta),
    longitudeDelta: Math.max(0, lonDelta)
  }
}

AppRegistry.registerComponent('NzStreetArt', () => NzStreetArt)
