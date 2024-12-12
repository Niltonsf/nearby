import Categories from '@/components/Categories/Categories'
import Places from '@/components/Places/Places'
import { Place } from '@/models/Place'
import { api } from '@/services/api'
import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'
// import * as Location from 'expo-location'
import { router } from 'expo-router'
import React, { useCallback, useEffect, useState } from 'react'
import { View, StyleSheet, Alert, Text } from 'react-native'
import MapView, { Callout, Marker } from 'react-native-maps'

const CURRENT_LOCATION = {
  latitude: -23.561187293883442,
  longitude: -46.656451388116494,
}

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

  const fetchPlaces = useCallback(async () => {
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
  }, [category])

  // const getCurrentLocation = async () => {
  //   try {
  //     const { granted } = await Location.requestForegroundPermissionsAsync()

  //     if (!granted) {
  //       Alert.alert(
  //         'Localização',
  //         'É necessário permitir o acesso a localização.',
  //       )
  //       return
  //     }

  //     const location = await Location.getCurrentPositionAsync({})
  //   } catch (err) {
  //     console.log(err)
  //     Alert.alert('Localização', 'Não foi possivel obter sua localização.')
  //   }
  // }

  useEffect(() => {
    fetchCategories()
    // getCurrentLocation()
  }, [])

  useEffect(() => {
    fetchPlaces()
  }, [category, fetchPlaces])

  return (
    <View style={styles.container}>
      <Categories
        categories={categories}
        selected={category}
        onPress={(id) => setCategory(id)}
      />

      <MapView
        style={styles.mapView}
        initialRegion={{
          latitude: CURRENT_LOCATION.latitude,
          longitude: CURRENT_LOCATION.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          identifier="current"
          coordinate={{
            latitude: CURRENT_LOCATION.latitude,
            longitude: CURRENT_LOCATION.longitude,
          }}
          image={require('@/assets/location.png')}
        />

        {places.map((place) => (
          <Marker
            key={place.id}
            identifier={place.id}
            image={require('@/assets/pin.png')}
            coordinate={{
              latitude: place.latitude,
              longitude: place.longitude,
            }}
          >
            <Callout onPress={() => router.navigate(`/place/${place.id}`)}>
              <View>
                <Text style={styles.mapViewCalloutName}>{place.name}</Text>
                <Text style={styles.mapViewCalloutAddress}>
                  {place.address}
                </Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>

      <Places data={places} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  mapView: {
    flex: 1,
  },
  mapViewCalloutName: {
    fontSize: 14,
    color: colors.gray[600],
    fontFamily: fontFamily.medium,
  },
  mapViewCalloutAddress: {
    fontSize: 12,
    color: colors.gray[600],
    fontFamily: fontFamily.regular,
  },
})

export default Home
