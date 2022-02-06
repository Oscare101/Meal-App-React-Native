import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import CategoriesScreen from '../screens/categoriesScreen'
import CategoryMealsScreen from '../screens/categoryMealScreen'
import MealDetailScreen from '../screens/mealDetailScreen'

import FavoritesScreen from '../screens/favoritesScreen'
import colors from '../constants/colors'

const Stack = createStackNavigator()

function MealsStackNavigator({ props, route }) {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerStyle: { backgroundColor: '#E0FFF9' },
        headerTintColor: '#005CFF',
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
          headerRight: () => (
            <TouchableOpacity
              style={{ padding: 10 }}
              onPress={() => console.log('Favorite!')}
            >
              <Ionicons name="star" size={23} />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  )
}

function Favorite({ props, route }) {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerStyle: { backgroundColor: '#E0FFF9' },
        headerTintColor: '#005CFF',
      })}
    >
      <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={() => ({ title: 'My Favorites' })}
      />
      <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

export default function MealsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: '#A3EDFF',
        tabBarInactiveBackgroundColor: '#E0FFF9',
      }}
    >
      <Tab.Screen
        name="MealsNavigator"
        component={MealsStackNavigator}
        options={{
          tabBarLabel: () => {
            return null
          },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="restaurant" color={'#000'} size={25} />
            ) : (
              <Ionicons name="restaurant-outline" color={'#000'} size={25} />
            ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="FavoritesScreen"
        component={Favorite}
        options={{
          tabBarLabel: () => {
            return null
          },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="star" color={'#000'} size={25} />
            ) : (
              <Ionicons name="star-outline" color={'#000'} size={25} />
            ),

          headerShown: false,
        }}
      />
    </Tab.Navigator>
  )
}
