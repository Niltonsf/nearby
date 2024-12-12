import Button from '@/components/Button/Button'
import { colors } from '@/styles/colors'
import { IconArrowLeft } from '@tabler/icons-react-native'
import { router } from 'expo-router'
import React from 'react'
import { View, StyleSheet, ImageBackground } from 'react-native'

interface CoverProps {
  uri: string
}

const Cover = ({ uri }: CoverProps) => {
  return (
    <ImageBackground style={styles.container} source={{ uri }}>
      <View style={styles.header}>
        <Button style={styles.button} onPress={() => router.back()}>
          <Button.Icon icon={IconArrowLeft} />
        </Button>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 232,
    marginBottom: -32,
    backgroundColor: colors.gray[200],
  },
  header: {
    padding: 24,
    paddingTop: 56,
  },
  button: {
    width: 40,
    height: 40,
  },
})

export default Cover
