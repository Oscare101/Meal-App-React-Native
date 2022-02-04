import React from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native'

export default function CategoryGridTile(props) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[styles.gridItem, { backgroundColor: props.color }]}
      onPress={props.onSelect}
    >
      <View style={[styles.container]}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    elevation: 5,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 20,
    textAlign: 'right',
  },
})
