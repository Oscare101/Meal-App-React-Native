import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { HeaderButtons, Item } from '../components/headerButton'

import { MEALS } from '../data/d-data'

export default function MealDetailScreen({ props, route, navigation }) {
  const { mealId } = route.params

  const selectedMeal = MEALS.find((meal) => meal.id === mealId)

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button
        title="go back to categories"
        onPress={() => navigation.popToTop()}
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
