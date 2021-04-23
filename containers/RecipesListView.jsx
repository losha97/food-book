import React, { useEffect, useRef, useState } from 'react'
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Switch, Text, View, TouchableOpacity } from 'react-native'
import { ErrorService } from '../services/ErrorService'
import { SupportService } from '../services/SupportService'
import Recipe from '../components/Recipe'
import { RecipeAPI } from '../api/services/RecipeAPI'
import * as Constants from '../constants'

const RecipesListView = props => {
  const [ recipes, setRecipes ] = useState(undefined)
  const [isEnabled, setIsEnabled] = useState(false)

  useEffect(() => {
    loadRecipes()
  }, [])

  const loadRecipes = fullTaco => {
    RecipeAPI.getAll(fullTaco || undefined)
      .then(recipes => setRecipes(toArray(recipes)))
      .catch(ErrorService.handleStatus)
  }

  const onNavigateTo = (screen, attrs) => {
    props.navigation.navigate(screen, attrs)
  }

  const toArray = recipes => {
    return Object.keys(recipes).map(key => {
      if (recipes[key] !== null && typeof recipes[key] === "object") {
        recipes[key].type = key
        return recipes[key]
      } else {
        delete recipes[key]
      }
    }).filter(recipe => recipe !== undefined)
  }

  const toggleSwitch = () => {
    let isEnabledSwitcher = !isEnabled
    loadRecipes(isEnabledSwitcher)
    setIsEnabled(isEnabledSwitcher)
  }


  const renderItem = ({ item }) => (
    <TouchableOpacity
      key={item.name}
      style={styles.recipeContainer}
      onPress={() => onNavigateTo('RecipeView', { recipe: item })}
    >
      <Recipe recipe={item} showMiniVersion />
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.switcherContainer}>
        <Switch
          trackColor={{ false: Constants.COLOR.BROWN, true: Constants.COLOR.ORANGE }}
          thumbColor={Constants.COLOR.WHITE}
          ios_backgroundColor={Constants.COLOR.BROWN}
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={styles.switcher}
        />
        <Text>Show only Taco recipes</Text>
      </View>
      {recipes ? (
        <FlatList
          data={recipes}
          renderItem={renderItem}
          keyExtractor={item => item.name}
          style={styles.recipeListContainer}
        />
      ) : (
        <View style={styles.indicator}>
          <ActivityIndicator size="large" color={Constants.COLOR.ORANGE} />
        </View>
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.COLOR.GRAY_LIGHT,
    alignItems: "center"
  },
  switcherContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    marginVertical: 10
  },
  switcher: {
    marginHorizontal: 10
  },
  recipeListContainer: {
    width: "100%"
  },
  recipeContainer: {
    paddingVertical: 20,
    alignItems: "center",
    backgroundColor: Constants.COLOR.WHITE,
    marginBottom: 10,
    borderRadius: 20
  },
  indicator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})

export default RecipesListView