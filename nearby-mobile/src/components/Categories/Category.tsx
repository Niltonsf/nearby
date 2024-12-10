import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'
import { categoriesIcons } from '@/utils/categories-icons'
import React from 'react'
import { StyleSheet, Pressable, Text, PressableProps } from 'react-native'

interface CategoryProps extends PressableProps {
  iconId: string
  name: string
  isSelected?: boolean
}

const Category = ({ iconId, name, isSelected, ...rest }: CategoryProps) => {
  const Icon = categoriesIcons[iconId]

  return (
    <Pressable
      style={[styles.container, isSelected && styles.containerSelected]}
      {...rest}
    >
      <Icon size={16} color={colors.gray[isSelected ? 100 : 400]} />

      <Text style={[styles.name, isSelected && styles.nameSelected]}>
        {name}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 36,
    backgroundColor: colors.gray[100],
    borderWidth: 1,
    borderColor: colors.gray[300],
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 12,
    gap: 10,
  },
  name: {
    fontSize: 14,
    color: colors.gray[500],
    fontFamily: fontFamily.regular,
  },
  containerSelected: {
    backgroundColor: colors.green.base,
    borderWidth: 0,
  },
  nameSelected: {
    color: colors.gray[100],
  },
})

export default Category
