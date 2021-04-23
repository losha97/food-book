import React, { useEffect, useState } from 'react'
import { ActivityIndicator, ScrollView, SafeAreaView, StyleSheet, View } from 'react-native'
import { Cell, Section, TableView } from 'react-native-tableview-simple'
import { ErrorService } from '../services/ErrorService'
import { SupportService } from '../services/SupportService'
import NotFound from '../components/NotFound'
import { RecipeAPI } from '../api/services/RecipeAPI'
import * as Constants from '../constants'

const UserContributionsView = props => {
  const [ contributions, setContributions] = useState(undefined)
  const [ error, setError ] = useState(false)
  const username = props.route.params.username

  useEffect(() => {
    loadContributions()
  }, [])

  const loadContributions = () => {
    RecipeAPI.userContributions(username)
      .then(setContributions)
      .catch(ErrorService.handleStatus)
  }

  const onNavigateTo = screen => {
    props.navigation.navigate(screen)
  }

  const capitalize = str => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  return (
    <SafeAreaView style={styles.container}>
      {contributions ? (
        !!Object.keys(contributions).length ? (
          <ScrollView>
            {Object.keys(contributions).map(contributionId => {
              let contribution = contributions[contributionId];
              return Array.isArray(contribution) && !!contribution.length ? (
                <TableView appearance="light" key={contributionId}>
                  <Section header={capitalize(contributionId)}>
                    {contribution.map((contribution, contributionIndex) => {
                      return (
                        <Cell
                          key={contributionIndex}
                          title={contribution}
                          titleTextColor={Constants.COLOR.BLACK_LIGHT}
                        />
                      )
                    })}
                  </Section>
                </TableView>
              ) : null
            })}
          </ScrollView>
        ) : <NotFound message="No contributions found" />
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

export default UserContributionsView