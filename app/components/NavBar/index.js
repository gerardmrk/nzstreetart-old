import React, { Component, PropTypes } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

import styles from './styles'
import colors from '../../_styles/colors'

export default class NavBar extends Component {
  render () {
    const { navs } = this.props
    return (
      <View style={styles.main}>
        {navs.map((n, i) => <Nav nav={n} key={i} onPress={() => {}} />)}
      </View>
    )
  }
}

NavBar.propTypes = {
  navs: PropTypes.array.isRequired
}

const Nav = ({ nav, onPress }) => (
  <TouchableHighlight
    onPress={onPress}
    style={styles.navWrapper}
    underlayColor={colors.baseActive}
  >
    <Text style={styles.navItem}>{nav.title}</Text>
  </TouchableHighlight>
)
