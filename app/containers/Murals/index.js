import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View, ListView, Text } from 'react-native'

import * as actionCreators from '../../actions'
import styles from './styles'
import MuralPreview from '../../components/MuralPreview'

class Murals extends Component {
  state = {
    dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
  }

  componentDidMount () {
    this.props.getMuralList()
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(nextProps.items)
    })
  }

  render () {
    if (this.props.isLoadingMurals) {
      return (
        <View style={styles.main}>
          <Text>{'LOADING'}</Text>
          <Text>{'LOADING'}</Text>
          <Text>{'LOADING'}</Text>
          <Text>{'LOADING'}</Text>
        </View>
      )
    } else {
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
}

Murals.propTypes = {
  getMuralList: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  isLoadingMurals: PropTypes.bool.isRequired
}

const mapStateToProps = state => {
  const { isLoadingMurals, items } = state.murals
  return {
    isLoadingMurals,
    items
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Murals)
