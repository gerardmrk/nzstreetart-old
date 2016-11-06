import React from 'react'
import { View, Text, Image, TouchableHighlight } from 'react-native'

import styles from './styles'

const MuralPreview = ({
  mural_name,
  mural_coords,
  mural_desc,
  mural_likes,
  mural_links,
  mural_pic,
  mural_thumb,
  artist_name,
  artist_crew,
  thumb_url
}) => {
  return (
    <TouchableHighlight onPress={() => {}}>
      <View style={styles.main}>
        <Image source={{uri: thumb_url}} style={styles.thumbnail} />
        <View style={styles.contentBody}>
          <Text>{mural_name || ''}</Text>
          <Text>{artist_name || ''}</Text>
          <Text>{artist_crew || ''}</Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}

export default MuralPreview
