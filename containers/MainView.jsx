import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import { ErrorService } from '../services/ErrorService'

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
            <Text style={styles.text}>RECIPES</Text>
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFA400",
    alignItems: "center",
    justifyContent: "center",
  },
  mainCircle:{
    width: "80%",
    backgroundColor: "#FFA754",
    borderRadius: 200 / 2,
    height: 200,
    width: 200,
    alignItems: "center",
    justifyContent: "center"
  },
  middleCicrle: {
    backgroundColor: "#FFB088",
    borderRadius: 150 / 2,
    height: 150,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  textCicrle:{
    backgroundColor: "#FFC0B8",
    borderRadius: 100 / 2,
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  text:{
    fontWeight: "bold",
    color: "#5F4119"
  }
})

export default LoginView