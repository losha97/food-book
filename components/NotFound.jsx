import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const NotFound = props => {
  const message = props.message

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message || 'Not found'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20
  },
  message: {
    color: "#494738"
  }
})

export default NotFound