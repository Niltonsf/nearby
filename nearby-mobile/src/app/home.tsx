import Categories from '@/components/Categories/Categories'
import Places from '@/components/Places/Places'
import { Place } from '@/models/Place'
import { api } from '@/services/api'
import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Alert } from 'react-native'

const Home = () => {
  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState('')
  const [places, setPlaces] = useState<Place[]>([])

  const fetchCategories = async () => {
    try {
      const { data } = await api.get('/categories')

      setCategories(data)
      setCategory(data?.[0]?.id)
    } catch (err) {
      console.log(err)
      Alert.alert('Categorias', 'Não foi possivel carregar as categorias.')
    }
  }

  const fetchPlaces = async () => {
    try {
      if (!category) {
        return
      }

      const { data } = await api.get(`/markets/category/${category}`)

      setPlaces(data)
    } catch (err) {
      console.log(err)
      Alert.alert('Locais', 'Não foi possivel carregar os locais.')
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  useEffect(() => {
    fetchPlaces()
  }, [category])

  return (
    <View style={styles.container}>
      <Categories
        categories={categories}
        selected={category}
        onPress={(id) => setCategory(id)}
      />

      <Places data={places} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
})

export default Home
