import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetalScreen from '../screens/MealDetalScreen';

const MealsNavigator = createStackNavigator();

export default () => (
  <NavigationContainer>
    <MealsNavigator.Navigator>
      <MealsNavigator.Screen
        name="Catogories Screen"
        component={CategoriesScreen}
      />
      <MealsNavigator.Screen
        name="Catogories Meals Screen"
        component={CategoryMealsScreen}
      />
      <MealsNavigator.Screen
        name="Meal Deatil Screen"
        component={MealDetalScreen}
      />
    </MealsNavigator.Navigator>
  </NavigationContainer>
);
