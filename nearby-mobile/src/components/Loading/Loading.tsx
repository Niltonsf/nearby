import { colors } from '@/styles/colors'
import React from 'react'
import { StyleSheet, ActivityIndicator } from 'react-native'

const Loading = () => {
  return (
    <ActivityIndicator color={colors.green.base} style={styles.container} />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.gray[100],
  },
})

export default Loading
