import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { CATEGORIES, MEALS } from '../data/d-data'
import MealList from '../components/mealList'

export default function FavoritesScreen({ props, navigation }) {
  const favMeals = MEALS.filter((meal) => meal.id === 'm1' || meal.id === 'm2')

  return <MealList listData={favMeals} navigation={navigation} />
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
