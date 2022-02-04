import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { enableScreens } from 'react-native-screens'

import MealsNavigator from './navigation/mealsNavigator'

enableScreens()

export default function App() {
  return (
    <NavigationContainer>
      <MealsNavigator />
    </NavigationContainer>
  )
}
