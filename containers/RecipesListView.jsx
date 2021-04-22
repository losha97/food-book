import React, { useEffect, useRef, useState } from 'react'
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Switch, Text, View, TouchableOpacity } from 'react-native'
import { ErrorService } from '../services/ErrorService'
import { SupportService } from '../services/SupportService'
import Recipe from '../components/Recipe'
import { RecipeAPI } from '../api/services/RecipeAPI'

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
          trackColor={{ false: "#5F4119", true: "#FFA400" }}
          thumbColor={"#FFF"}
          ios_backgroundColor="#5F4119"
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
          <ActivityIndicator size="large" color="#FFA400" />
        </View>
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
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
    borderColor: "#615F4E",
    paddingVertical: 20,
    alignItems: "center",
    backgroundColor: "#FFF",
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