import React, { useState } from 'react'
import Dashboard from 'react-native-dashboard'
import { StyleSheet, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { ErrorService } from '../services/ErrorService'
import { FruitAPI } from '../api/services/FruitAPI'

const FruitView = props => {
  const [fruit, setFruit] = useState({});

  const findFruitInfo = () => {
    FruitAPI.get(fruit && fruit.fruit ? fruit.fruit.toLowerCase() : '')
      .then(fruit => setFruit(fruit))
      .catch(ErrorService.handleStatus)
  }

  return (    
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.view}>
          <Text style={styles.description}>Interesting facts about fruits</Text>
          <View style={styles.fruitView}>
            <TextInput
              placeholder="fruit name"
              placeholderTextColor="#AC8B67"
              autoCapitalize="none"
              autoFocus={true}
              style={styles.fruitName}
              returnKeyType='search'
              onChangeText={fruit => setFruit({fruit: fruit})}
              onSubmitEditing={findFruitInfo}
              clearButtonMode="while-editing"
            />
          </View>
          <TouchableOpacity
            style={styles.submitBtn}
            onPress={findFruitInfo}
          >
            <Text style={styles.submitText}>GET FACT</Text>
          </TouchableOpacity>
          {fruit.fact && (
            <Text style={[styles.fruitBox, styles.fruitFact]}>{fruit.fact}</Text>
          )}
          {fruit.tip && (
            <Text style={[styles.fruitBox, styles.fruitTip]}>Tip: {fruit.tip}</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4"
  },
  scrollContainer: {
    width: "100%"
  },
  view: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  description: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#AC8B67",
    marginTop: 20,
    marginBottom: 20
  },
  fruitView: {
    width: "90%",
    backgroundColor: "#DFE0DF",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  fruitName: {
    height: 50,
    color: "#AC8B67"
  },
  submitBtn: {
    width: "90%",
    backgroundColor: "#FFA400",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  submitText: {
    color: "#FFF8F0"
  },
  fruitBox: {
    width: "90%",
    fontSize: 16,
    padding: 20,
    borderWidth: 2,
    borderRadius: 25,
    marginTop: 20
  },
  fruitFact: {
    borderColor: "#AC8B67",
    color: "#AC8B67"
  },
  fruitTip: {
    borderColor: "#FFB088",
    color: "#FFB088"
  }
})

export default FruitView