import React from 'react'
import Dashboard from 'react-native-dashboard';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { ErrorService } from '../services/ErrorService'

const DashboardView = props => {
  const dashboard = [{
    name: "Recipes",
    view: "RecipesListView",
    icon: "star",
    iconColor: "#AC8B67",
    background: "#DFE0DF",
    styleName: { color: "#AC8B67" }
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
    backgroundColor: "#F4F4F4"
  }
})

export default DashboardView