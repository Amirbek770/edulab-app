import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Auth = ({ navigation }) => {
  return (
    <View>
      <Button title='Navigation' onPress={() => navigation.navigate('TabNavigation')} />
    </View>
  )
}

export default Auth

const styles = StyleSheet.create({})