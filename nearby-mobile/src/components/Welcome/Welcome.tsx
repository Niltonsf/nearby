import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'
import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'

const Welcome = () => {
  return (
    <View>
      <Image
        source={require('@/assets/logo.png')}
        style={styles.logo} 
      />

      <Text style={styles.title}>Boas vindas ao Nearby!</Text>

      <Text style={styles.subtitle}>Tenha cupons de vantagem para usar em seus estabelecimentos favoritos.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 48,
    height: 48,
    marginTop: 24,
    marginBottom: 28
  },
  title: {
    fontSize: 24,
    fontFamily: fontFamily.bold
  },
  subtitle: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
    marginTop: 12
  }
})

export default Welcome