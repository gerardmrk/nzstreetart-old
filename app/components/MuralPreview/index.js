import React from 'react'
import { View, Text } from 'react-native'

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
    <View style={styles.main}>
      <View><Text>{mural_name}</Text></View>
    </View>
  )
}

export default MuralPreview
