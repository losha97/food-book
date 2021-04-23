import React from 'react'
import Dashboard from 'react-native-dashboard';
import { StyleSheet, SafeAreaView } from 'react-native'
import { ErrorService } from '../services/ErrorService'
import * as Constants from '../constants'

const DashboardView = props => {
  const dashboard = [{
    name: "Fruit Facts",
    view: "FruitView",
    icon: "leaf",
    iconColor: Constants.COLOR.BROWN_LIGHT,
    background: Constants.COLOR.GRAY,
    styleIcon: { color: Constants.COLOR.BROWN_LIGHT }
  }, {
    name: "Recipes",
    view: "RecipesListView",
    icon: "star",
    iconColor: Constants.COLOR.GRAY,
    background: Constants.COLOR.BROWN_LIGHT,
    styleName: { color: Constants.COLOR.GRAY }
  }]

  const navigateTo = screen => {
    props.navigation.navigate(screen)
  }

  return (    
    <SafeAreaView style={styles.container}>
      <Dashboard
        data={dashboard}
        background={true}
        card={({ view }) => navigateTo(view)}
        column={2}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.COLOR.GRAY_LIGHT
  }
})

export default DashboardView