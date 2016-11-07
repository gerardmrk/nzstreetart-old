import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View, ListView } from 'react-native'
import { Actions } from 'react-native-router-flux'

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

  _handlePreviewClick = index => { Actions['mural']({ index }) }

  _renderPreview = (rowData, sectionID, rowID) => {
    return (
      <MuralPreview
        {...rowData}
        index={rowID}
        handlePreviewClick={this._handlePreviewClick}
      />
    )
  }

  render () {
    return (
      <View style={styles.main}>
        <ListView
          enableEmptySections
          dataSource={this.state.dataSource}
          renderRow={this._renderPreview}
        />
      </View>
    )
  }
}

Murals.propTypes = {
  getMuralList: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  isLoadingMurals: PropTypes.bool.isRequired,
  setCurrentMural: PropTypes.func
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
