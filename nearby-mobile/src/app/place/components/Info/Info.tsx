import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'
import { IconProps } from '@tabler/icons-react-native'
import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

interface InfoProps {
  description: string
  icon: React.ComponentType<IconProps>
}

const Info = ({ icon: Icon, description }: InfoProps) => {
  return (
    <View style={styles.container}>
      <Icon size={16} color={colors.gray[400]} />

      <Text style={styles.text}>{description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  text: {
    color: colors.gray[500],
    flex: 1,
    fontSize: 14,
    fontFamily: fontFamily.regular,
    lineHeight: 22.4,
  },
})

export default Info
