import React, { Component, PropTypes } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import styles from './styles'
import colors from '../../_styles/colors'

export default class NavBar extends Component {
  render () {
    const { navs, handleRouteChange } = this.props
    return (
      <View style={styles.main}>
        {navs.map((n, i) => <Nav nav={n} key={i} onPress={handleRouteChange} />)}
      </View>
    )
  }
}

NavBar.propTypes = {
  navs: PropTypes.array.isRequired,
  handleRouteChange: PropTypes.func.isRequired
}

const Nav = ({ nav, onPress }) => {
  const handlePress = () => onPress(nav.key)
  return (
    <TouchableHighlight
      onPress={handlePress}
      style={styles.navWrapper}
      underlayColor={colors.baseActive}
    >
      <Icon name={nav.icon} size={30} color={'#fff'} />
    </TouchableHighlight>
  )
}
