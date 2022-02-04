import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import CategoriesScreen from '../screens/categoriesScreen'
import CategoryMealsScreen from '../screens/categoryMealScreen'
import MealDetailScreen from '../screens/mealDetailScreen'
import colors from '../constants/colors'

const Stack = createStackNavigator()

export default function MealsNavigator({ props, route }) {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerStyle: { backgroundColor: '#fff' },
        headerTintColor: colors.primary,
      })}
    >
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={() => ({ title: 'Meal Category' })}
      />
      <Stack.Screen
        name="CategoryMeals"
        component={CategoryMealsScreen}
        options={({ route }) => ({
          title: route.params.categoryTitle,
        })}
      />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={({ route }) => ({
          title: route.params.mealTitle,
        })}
      />
    </Stack.Navigator>
  )
}
