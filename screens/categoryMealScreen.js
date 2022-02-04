import React, { useEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

import MealItem from '../components/mealItem'
import colors from '../constants/colors'
import { CATEGORIES, MEALS } from '../data/d-data'

export default function CategoryMealScreen({ props, navigation, route }) {
  const { categoryID, categoryTitle } = route.params
  useEffect(() => {
    navigation.setOptions({
      title: categoryTitle,
    })
  })

  function renderMealItem(itemData) {
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {
          navigation.navigate('MealDetail', {
            mealId: itemData.item.id,
            mealTitle: itemData.item.title,
          })
        }}
      />
    )
  }

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryID) >= 0
  )

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
        style={{ width: '100%' }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
})
