/* eslint-disable @typescript-eslint/no-unused-vars */
import Loading from '@/components/Loading/Loading'
import { api } from '@/services/api'
import { Redirect, useLocalSearchParams } from 'expo-router'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { View, StyleSheet, Alert, StatusBar, ScrollView } from 'react-native'
import Cover from './components/Cover/Cover'
import Details from './components/Details/Details'
import { Place as IPlace } from '@/models/Place'
import Coupon from './components/Coupon/Coupon'
import Button from '@/components/Button/Button'
import CameraModal from './components/CameraModal/CameraModal'
import { useCameraPermissions } from 'expo-camera'

const Place = () => {
  const params = useLocalSearchParams<{ id: string }>()
  const [_, requestPermission] = useCameraPermissions()

  const qrLock = useRef(false)

  const [loading, setLoading] = useState(true)

  const [data, setDate] = useState<IPlace>()
  const [coupon, setCoupon] = useState<string | undefined>()
  const [isCameraModalVisible, setIsCameraModalVisible] = useState(false)

  const loadPlace = useCallback(async () => {
    try {
      const { data } = await api.get(`/markets/${params.id}`)

      setDate(data)
    } catch (error) {
      console.error(error)
      Alert.alert('Error', 'Não foi possível carregar o local.')
    } finally {
      setLoading(false)
    }
  }, [params.id])

  const handleOpenCamera = async () => {
    try {
      const { granted } = await requestPermission()

      if (!granted) {
        Alert.alert('Câmera', 'É necessário permitir o acesso a câmera.')
        return
      }

      qrLock.current = false

      setIsCameraModalVisible(true)
    } catch (error) {
      console.log('Place [id]: ', error)
      Alert.alert('Câmera', 'Não foi possível abrir a câmera.')
    }
  }

  const getCoupon = async (id: string) => {
    try {
      const { data } = await api.patch(`/coupons/${id}`)

      Alert.alert('Cupom', data.coupon)

      setCoupon(data.coupon)
    } catch (error) {
      console.log('CameraModal: ', error)
      Alert.alert('Error', 'Não foi possível utilizar o cupom')
    }
  }

  const handleUseCoupon = (id: string) => {
    setIsCameraModalVisible(false)

    Alert.alert(
      'Cupom',
      'Não é possível reutilizar um cupom resgatado. Deseja realmente resgatar um cupom?',
      [
        {
          style: 'cancel',
          text: 'Não',
        },
        { text: 'Sim', onPress: () => getCoupon(id) },
      ],
    )
  }

  useEffect(() => {
    loadPlace()
  }, [params.id, coupon, loadPlace])

  if (loading) {
    return <Loading />
  }

  if (!data) {
    return <Redirect href={'/home'} />
  }

  return (
    <React.Fragment>
      <CameraModal
        visible={isCameraModalVisible}
        onClose={() => setIsCameraModalVisible(false)}
        handleUseCoupon={handleUseCoupon}
        qrLockRef={qrLock}
      />

      <StatusBar barStyle={'light-content'} hidden={isCameraModalVisible} />

      <View style={styles.container}>
        <ScrollView>
          <Cover uri={data.cover} />

          <Details data={data} />

          {coupon && <Coupon code={coupon} />}
        </ScrollView>

        <View style={styles.buttonContainer}>
          <Button onPress={handleOpenCamera}>
            <Button.Title>Ler QR Code</Button.Title>
          </Button>
        </View>
      </View>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    padding: 32,
  },
})

export default Place
