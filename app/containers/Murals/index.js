import React, { Component } from 'react'
import { View, ListView } from 'react-native'

import styles from './styles'
import MuralPreview from '../../components/MuralPreview'

export default class Murals extends Component {
  state = {
    dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
  }

  componentDidMount () {
    // const { api } = this.props
    // const db = api.database()
    // const gs = api.storage()
    // gs.ref('murals/thumbnails').getDownloadURL().then(url => {
    //   db.ref('/murals').once('value').then(snapshot => {
    //     let items = []
    //     snapshot.forEach(child => {
    //       const childprops = child.val()
    //       items.push({
    //         _key: child.key,
    //         thumb_url: `${url}/${childprops.mural_thumb}`,
    //         ...childprops
    //       })
    //     })
    //     this.setState({ dataSource: this.state.dataSource.cloneWithRows(items) })
    //   })
    // })
  }

  render () {
    return (
      <View style={styles.main}>
        <ListView
          pageSize={4}
          dataSource={this.state.dataSource}
          renderRow={rowData => <MuralPreview {...rowData} />}
        />
      </View>
    )
  }
}
