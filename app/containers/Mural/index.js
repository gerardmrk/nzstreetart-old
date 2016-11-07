import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View, Text, Image } from 'react-native'

import * as actionCreators from '../../actions'
import firebaseapi from '../../_apis/firebaseapi'
import styles from './styles'

const gs = firebaseapi.storage()

class Mural extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isFetchingPic: true,
      picUrl: ''
    }
  }

  componentDidMount () {
    gs.ref(`murals/pics/${this.props.mural.mural_pic}`).getDownloadURL()
    .then(picUrl => { this.setState({ picUrl }) })
    .then(() => this.setState({ isFetchingPic: false }))
  }

  render () {
    const { artist_name, mural_blob } = this.props.mural
    const { isFetchingPic, picUrl } = this.state
    console.log(this.props.index, picUrl)
    return (
      <View style={styles.main}>
        <View style={styles.imageContainer}>
          {isFetchingPic
            ? <Image source={{uri: mural_blob}} style={styles.pic} />
            : <Image source={{uri: picUrl}} style={styles.pic} />
          }
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
