import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'
import React from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  TextProps,
  Text,
  TouchableOpacityProps,
  ActivityIndicator,
} from 'react-native'
import { IconProps as TablerIconProps } from '@tabler/icons-react-native'

interface ButtonProps extends TouchableOpacityProps {
  loading?: boolean
}

interface IconProps {
  icon: React.ComponentType<TablerIconProps>
}

const Button = ({ children, style, loading, ...rest }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      activeOpacity={0.8}
      disabled={loading}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator size={'small'} color={colors.gray[100]} />
      ) : (
        children
      )}
    </TouchableOpacity>
  )
}

const Title = ({ children }: TextProps) => {
  return <Text style={styles.title}>{children}</Text>
}

const Icon = ({ icon: Icon }: IconProps) => {
  return <Icon size={24} color={colors.gray[100]} />
}

Button.Title = Title
Button.Icon = Icon

const styles = StyleSheet.create({
  container: {
    height: 56,
    maxHeight: 56,
    backgroundColor: colors.green.base,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 14,
  },
  title: {
    color: colors.gray[100],
    fontSize: 16,
    fontFamily: fontFamily.semiBold,
  },
})

export default Button
