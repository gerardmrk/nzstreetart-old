import React, { Component, PropTypes } from 'react'
import { View, Text, Image, TouchableHighlight } from 'react-native'

import firebaseapi from '../../_apis/firebaseapi'
import styles from './styles'

const gs = firebaseapi.storage()

class MuralPreview extends Component {
  constructor (props) {
    super(props)
    this.state = { isFetchingThumbnail: true, thumbUrl: '' }
  }

  componentDidMount () {
    gs.ref(`murals/thumbnails/${this.props.mural_thumb}`).getDownloadURL()
    .then(thumbUrl => { this.setState({ thumbUrl }) })
    .then(() => this.setState({ isFetchingThumbnail: false }))
  }

  _handlePreviewClick = () => {
    const { handlePreviewClick, index } = this.props
    return handlePreviewClick(index)
  }

  render () {
    const { mural_name, mural_blob, artist_name, artist_crew } = this.props
    const { isFetchingThumbnail, thumbUrl } = this.state
    return (
      <TouchableHighlight onPress={this._handlePreviewClick}>
        <View style={styles.main}>
          {isFetchingThumbnail
            ? <Image source={{uri: mural_blob}} style={styles.thumbnail} />
            : <Image source={{uri: thumbUrl}} style={styles.thumbnail} />
          }
          <View style={styles.contentBody}>
            <Text>{mural_name || ''}</Text>
            <Text>{artist_name || ''}</Text>
            <Text>{artist_crew || ''}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

MuralPreview.propTypes = {
  index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  handlePreviewClick: PropTypes.func.isRequired,
  mural_name: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  mural_thumb: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  mural_blob: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  artist_name: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  artist_crew: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
}

export default MuralPreview
