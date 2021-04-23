import 'react-native-gesture-handler'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ContributorListView from './containers/ContributorListView'
import DashboardView from './containers/DashboardView'
import FruitView from './containers/FruitView'
import RecipeView from './containers/RecipeView'
import RecipesListView from './containers/RecipesListView'
import MainView from './containers/MainView'
import UserContributionsView from './containers/UserContributionsView'
import * as Constants from './constants'

import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'

export default function App() {
  const isLoadingComplete = useCachedResources()
  const Stack = createStackNavigator()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="MainView">
            <Stack.Screen
              name="ContributorListView"
              component={ContributorListView}
              options={{
                title: "Contributors",
                headerStyle: {
                  backgroundColor: Constants.COLOR.ORANGE
                },
                headerTintColor: Constants.COLOR.BROWN
              }}
            />
            <Stack.Screen
              name="DashboardView"
              component={DashboardView}
              options={{
                title: "Dashboard",
                headerStyle: {
                  backgroundColor: Constants.COLOR.ORANGE
                },
                headerTintColor: Constants.COLOR.BROWN
              }}
            />
            <Stack.Screen
              name="FruitView"
              component={FruitView}
              options={{
                title: "Fruit Facts",
                headerStyle: {
                  backgroundColor: Constants.COLOR.ORANGE
                },
                headerTintColor: Constants.COLOR.BROWN
              }}
            />
            <Stack.Screen
              name="UserContributionsView"
              component={UserContributionsView}
              options={{
                title: "Contributions",
                headerStyle: {
                  backgroundColor: Constants.COLOR.ORANGE
                },
                headerTintColor: Constants.COLOR.BROWN
              }}
            />
            <Stack.Screen
              name="RecipeView"
              component={RecipeView}
              options={{
                title: "Recipe",
                headerStyle: {
                  backgroundColor: Constants.COLOR.ORANGE
                },
                headerTintColor: Constants.COLOR.BROWN
              }}
            />
            <Stack.Screen
              name="RecipesListView"
              component={RecipesListView}
              options={{
                title: "Recipes",
                headerStyle: {
                  backgroundColor: Constants.COLOR.ORANGE
                },
                headerTintColor: Constants.COLOR.BROWN
              }}
            />
            <Stack.Screen
              name="MainView"
              component={MainView}
              options={{
                title: "Food Book",
                headerStyle: {
                  backgroundColor: Constants.COLOR.ORANGE
                },
                headerTintColor: Constants.COLOR.BROWN
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}