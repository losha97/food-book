import React, { useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import * as Constants from '../constants'

const Recipe = props => {
  const recipe = props.recipe
  const showMiniVersion = props.showMiniVersion

  const toTag = tag => {
    return `#${tag}`
  }

  return (
    <View style={styles.recipeWrapper}>
      <View style={styles.recipeContainer}>
        <Text style={styles.recipeName}>{recipe.name}</Text>
        {!showMiniVersion && (
          <View>
            <Text style={styles.recipeDescription}>Recipe: {recipe.recipe}</Text>
            <View style={[styles.tag, styles.recipeTag]}>
              <Text style={styles.recipeTagText}>{toTag(recipe.slug)}</Text>
            </View>
            <TouchableOpacity style={[styles.tag, styles.contributorsTag]}
              onPress={props.onContributersShow}
            >
              <Text style={styles.contributorsTagText}>Show Contributors</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  recipeWrapper: {
    flex: 1,
    paddingHorizontal: 20
  },
  recipeContainer: {
    flex: 1,
    justifyContent: "center"
  },
  recipeName: {
    fontSize: 16,
    fontWeight: "bold",
    color: Constants.COLOR.BROWN_MEDIUM
  },
  recipeDescription: {
    fontSize: 12,
    paddingVertical: 10,
    color: Constants.COLOR.BROWN_MEDIUM,
    fontStyle: "italic"
  },
  tag: {
    alignSelf: "flex-start",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20
  },
  recipeTag: {
    backgroundColor: Constants.COLOR.ORANGE_TRANSPARENT,
    borderColor: Constants.COLOR.ORANGE_MEDIUM,
    marginBottom: 20
  },
  contributorsTag: {
    backgroundColor: Constants.COLOR.GREEN_LIGHT,
    borderColor: Constants.COLOR.GREEN

  },
  recipeTagText: {
    fontSize: 12,
    color: Constants.COLOR.ORANGE_MEDIUM
  },
  contributorsTagText: {
    fontSize: 12,
    color: Constants.COLOR.GREEN
  }
})

export default Recipe