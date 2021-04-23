import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, ScrollView, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Cell, Section, TableView } from 'react-native-tableview-simple'
import { ErrorService } from '../services/ErrorService'
import { SupportService } from '../services/SupportService'
import NotFound from '../components/NotFound'
import { RecipeAPI } from '../api/services/RecipeAPI'
import * as Constants from '../constants'

const ContributorListView = props => {
  const [ contributors, setContributors ] = useState(undefined)
  const [ error, setError ] = useState(false)
  const recipeName = props.route.params.recipeName
  const recipeType = props.route.params.recipeType
  const recipeSlug = props.route.params.recipeSlug

  useEffect(() => {
    loadContributors()
  }, [])

  const loadContributors = () => {
    RecipeAPI.contributors(recipeType, recipeSlug)
      .then(setContributors)
      .catch(ErrorService.handleStatus)
  }

  const onNavigateTo = (screen, attrs) => {
    props.navigation.navigate(screen, attrs)
  }

  const onUserPress = username => {
    onNavigateTo('UserContributionsView', {
      username: username
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      {contributors ? (
        contributors.length ? (
          <ScrollView>
            <TableView appearance="light">
              <Section header={`Contributors of "${recipeName}" recipe`}>
                {contributors.map(contributor => {
                  return (
                    <Cell
                      key={contributor.username}
                      cellStyle="RightDetail"
                      title={contributor.full_name}
                      detail={contributor.username}
                      image={
                        <Image
                          style={{ borderRadius: 5 }}
                          source={{
                            uri: contributor.gravatar,
                          }}
                        />
                      }
                      titleTextColor={Constants.COLOR.BLACK_LIGHT}
                      onPress={() => onUserPress(contributor.username)}
                    />
                  )
                })}
              </Section>
            </TableView>
          </ScrollView>
        ) : <NotFound message="No contributors found" />
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
    backgroundColor: Constants.COLOR.GRAY_LIGHT
  },
  contributorsContainer: {
    flex: 1,
    alignItems: "center"
  },
  indicator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})

export default ContributorListView