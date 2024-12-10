import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import Category from './Category'
import { Category as ICategory } from '@/models/Category'

interface CategoriesProps {
  categories: ICategory[]
  selected: string
  onPress: (id: string) => void
}

const Categories = ({ categories, selected, onPress }: CategoriesProps) => {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category
          iconId={item.id}
          name={item.name}
          onPress={() => onPress(item.id)}
          isSelected={selected === item.id}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
      style={styles.container}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 36,
    position: 'absolute',
    zIndex: 1,
    top: 64,
  },
  content: {
    gap: 8,
    paddingHorizontal: 24,
  },
})

export default Categories
