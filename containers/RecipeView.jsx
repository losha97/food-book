import React, { useEffect, useRef, useState } from 'react'
import { ActivityIndicator, ScrollView, SafeAreaView, StyleSheet, View } from 'react-native'
import { ErrorService } from '../services/ErrorService'
import { SupportService } from '../services/SupportService'
import Recipe from '../components/Recipe'
import { RecipeAPI } from '../api/services/RecipeAPI'

const RecipeView = props => {
  const [ recipe, setRecipe ] = useState(props.route.params.recipe)

  const onNavigateTo = (screen, attrs) => {
    props.navigation.navigate(screen, attrs)
  }

  return (
    <SafeAreaView style={styles.container}>
      {recipe ? (
        <ScrollView>
          <View style={styles.recipeContainer}>
            <Recipe recipe={recipe} onContributersShow={() => onNavigateTo('ContributorListView', {
              recipeName: recipe.name,
              recipeType: `${recipe.type}s`,
              recipeSlug: recipe.slug
            })} />
          </View>
        </ScrollView>
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
    alignItems: "center",
  },
  indicator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  recipeContainer: {
    flex: 1,
    borderColor: "#615F4E",
    paddingVertical: 20,
    alignItems: "center",
    backgroundColor: "#FFF",
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 20
  },
})

export default RecipeView