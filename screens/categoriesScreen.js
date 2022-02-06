import React, { useEffect } from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import CategoryGridTile from '../components/categoryGridTile'
import colors from '../constants/colors'

import { CATEGORIES } from '../data/d-data'

export default function CategoriesScreen({ props, navigation }) {
  function renderGridItem(itemData) {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() =>
          navigation.navigate('CategoryMeals', {
            categoryID: itemData.item.id,
            categoryTitle: itemData.item.title,
          })
        }
      />
    )
  }

  return (
    <View style={{ backgroundColor: '#F5FFFD' }}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderGridItem}
        numColumns={2}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
