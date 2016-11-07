import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View, Text, Image, Animated } from 'react-native'

import * as actionCreators from '../../actions'
import firebaseapi from '../../_apis/firebaseapi'
import styles from './styles'

const gs = firebaseapi.storage()

class Mural extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isFetchingPic: true,
      picOpacity: new Animated.Value(0)
    }
  }

  componentDidMount () {
    gs.ref(`murals/pics/${this.props.mural.mural_pic}`).getDownloadURL()
    .then(picUrl => { this.setState({ picUrl }) })
    .then(() => this.setState({ isFetchingPic: false }))
  }

  _onLoad = () => {
    Animated.timing(this.state.picOpacity, { toValue: 0, duration: 250 }).start()
  }

  _onPicLoad = () => {
    Animated.timing(this.state.picOpacity, { toValue: 1, duration: 250 }).start()
  }

  render () {
    const { artist_name, mural_blob, _key } = this.props.mural
    const { picUrl, picOpacity } = this.state
    return (
      <View style={styles.main}>
        <View style={styles.imageContainer}>
          <View style={styles.imageWrapper}>
            <Animated.Image
              resizeMode={'contain'}
              key={_key}
              style={[{ position: 'absolute' }, styles.pic]}
              source={{uri: mural_blob}}
              onLoad={this._onLoad}
            />
            <Animated.Image
              resizeMode={'contain'}
              key={`${_key}1`}
              style={[{ opacity: picOpacity }, styles.pic]}
              source={{uri: picUrl}}
              onLoad={this._onPicLoad}
            />
          </View>
        </View>
        <Text>{artist_name}</Text>
      </View>
    )
  }
}

Mural.propTypes = {
  mural: PropTypes.object
}

const mapStateToProps = (state, ownProps) => {
  return {
    mural: state.murals.items[parseInt(ownProps.index, 8)]
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Mural)
