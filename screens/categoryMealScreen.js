import React, { useEffect } from 'react'

import MealList from '../components/mealList'
import { CATEGORIES, MEALS } from '../data/d-data'

export default function CategoryMealScreen({ props, navigation, route }) {
  const { categoryID, categoryTitle } = route.params
  useEffect(() => {
    navigation.setOptions({
      title: categoryTitle,
    })
  })

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryID) >= 0
  )

  return <MealList listData={displayedMeals} navigation={navigation} />
}
