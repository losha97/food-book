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
                  backgroundColor: "#FFA400"
                },
                headerTintColor: "#5F4119"
              }}
            />
            <Stack.Screen
              name="DashboardView"
              component={DashboardView}
              options={{
                title: "Dashboard",
                headerStyle: {
                  backgroundColor: "#FFA400"
                },
                headerTintColor: "#5F4119"
              }}
            />
            <Stack.Screen
              name="FruitView"
              component={FruitView}
              options={{
                title: "Fruit Facts",
                headerStyle: {
                  backgroundColor: "#FFA400"
                },
                headerTintColor: "#5F4119"
              }}
            />
            <Stack.Screen
              name="UserContributionsView"
              component={UserContributionsView}
              options={{
                title: "Contributions",
                headerStyle: {
                  backgroundColor: "#FFA400"
                },
                headerTintColor: "#5F4119"
              }}
            />
            <Stack.Screen
              name="RecipeView"
              component={RecipeView}
              options={{
                title: "Recipe",
                headerStyle: {
                  backgroundColor: "#FFA400"
                },
                headerTintColor: "#5F4119"
              }}
            />
            <Stack.Screen
              name="RecipesListView"
              component={RecipesListView}
              options={{
                title: "Recipes",
                headerStyle: {
                  backgroundColor: "#FFA400"
                },
                headerTintColor: "#5F4119"
              }}
            />
            <Stack.Screen
              name="MainView"
              component={MainView}
              options={{
                title: "Recipes Book",
                headerStyle: {
                  backgroundColor: "#FFA400"
                },
                headerTintColor: "#5F4119"
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}