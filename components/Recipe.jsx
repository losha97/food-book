import React, { useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

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
  );
}

const styles = StyleSheet.create({
  recipeWrapper: {
    flex: 1,
    paddingHorizontal: 20
  },
  recipeContainer: {
    flex: 1,
    justifyContent: "center",
    borderColor: "#615F4E"
  },
  recipeName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#494738"
  },
  recipeDescription: {
    fontSize: 12,
    paddingVertical: 10,
    color: "#494738",
    fontStyle: "italic"
  },
  tag: {
    alignSelf: "flex-start",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20
  },
  recipeTag: {
    backgroundColor: "#ffe8cf",
    borderColor: "#ffb959",
    marginBottom: 20
  },
  contributorsTag: {
    backgroundColor: "#e5fbb8",
    borderColor: "#6a9402"

  },
  recipeTagText: {
    fontSize: 12,
    color: "#ffb959"
  },
  contributorsTagText: {
    fontSize: 12,
    color: "#6a9402"
  }
})

export default Recipe