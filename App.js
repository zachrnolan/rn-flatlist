import React from 'react'
import { StyleSheet, Text, FlatList, View } from 'react-native'
import _ from 'lodash'

const large_array = _.range(200).map((x, i) => ({id: i, title: 'List Item ' + i}))

export default class App extends React.Component {

  _renderItem({item}) {
    return (
      <View style={styles.rowContainer}>
        <Text>{item.title}</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>FlatList (Vertical)</Text>
        <FlatList
          data={large_array}
          keyExtractor={item => item.id}
          renderItem={this._renderItem} />
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
