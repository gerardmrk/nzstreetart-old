import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'

import * as actionCreators from '../../actions'
import styles from './styles'

class Profile extends Component {
  render () {
    return (
      <View style={styles.main}>
        <Text>{'PROFILE PAGE'}</Text>
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
