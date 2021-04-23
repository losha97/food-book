import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import { ErrorService } from '../services/ErrorService'
import * as Constants from '../constants'

const LoginView = props => {
  const onStart = () => {
    navigateTo('DashboardView')
  }

  const navigateTo = screen => {
    props.navigation.navigate(screen)
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.mainCircle} onPress={onStart}>
        <View style={styles.middleCicrle}>
          <View style={styles.textCicrle}>
            <Text style={styles.text}>START</Text>
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.COLOR.ORANGE,
    alignItems: "center",
    justifyContent: "center",
  },
  mainCircle:{
    width: "80%",
    backgroundColor: Constants.COLOR.ORANGE_LIGHT,
    borderRadius: 200 / 2,
    height: 200,
    width: 200,
    alignItems: "center",
    justifyContent: "center"
  },
  middleCicrle: {
    backgroundColor: Constants.COLOR.PINK_LIGHT,
    borderRadius: 150 / 2,
    height: 150,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  textCicrle:{
    backgroundColor: Constants.COLOR.PINK,
    borderRadius: 100 / 2,
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  text:{
    fontWeight: "bold",
    color: Constants.COLOR.BROWN
  }
})

export default LoginView