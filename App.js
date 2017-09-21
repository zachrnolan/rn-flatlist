import React from 'react'
import { StyleSheet, Text, FlatList, View } from 'react-native'
import { get_data } from './src/utils/data'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
  }

  componentWillMount() {
    this.setState({data: get_data(10, 0)})
  }

  _renderItem({item}) {
    return (
      <View style={styles.rowContainer}>
        <Text>{item.title}</Text>
      </View>
    )
  }

  onEndReached() {
    console.log('onEndReached()')
    // let data = this.state.data
    // let newData = data.concat(get_data(10, data.length))
    // this.setState({data: newData})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>FlatList (Vertical)</Text>
        <FlatList
          data={this.state.data}
          keyExtractor={item => item.id}
          renderItem={this._renderItem}
          onEndReached={this.onEndReached} />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    paddingTop: 20
  },
  title: {
    color: '#000',
    fontSize: 18,
    padding: 20
  },
  rowContainer: {
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    padding: 20
  }
})
