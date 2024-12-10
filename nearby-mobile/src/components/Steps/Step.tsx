import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'
import { IconProps } from '@tabler/icons-react-native'
import React, { ReactNode } from 'react'
import { View, StyleSheet, Text } from 'react-native'

interface StepProps {
  icon: React.ComponentType<IconProps>
  title: string
  description: string
}

const Step = ({ icon: Icon, title, description }:StepProps) => {
  return (
    <View style={styles.container}>
      {Icon && <Icon size={32} color={colors.red.base}/>}

      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    gap: 16
  },
  details: {
    flex: 1
  },
  title: {
    fontSize: 16,
    fontFamily: fontFamily.semiBold,
    color: colors.gray[600]
  },
  description: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
    marginTop: 4
  }
})

export default Step