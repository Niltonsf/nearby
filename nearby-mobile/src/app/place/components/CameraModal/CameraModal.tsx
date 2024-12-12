import Button from '@/components/Button/Button'
import { CameraView } from 'expo-camera'
import React, { MutableRefObject } from 'react'
import { StyleSheet, Modal, View } from 'react-native'

interface CameraModalProps {
  visible: boolean
  onClose: () => void
  handleUseCoupon: (id: string) => void
  qrLockRef: MutableRefObject<boolean>
}

const CameraModal = ({
  visible,
  onClose,
  handleUseCoupon,
  qrLockRef,
}: CameraModalProps) => {
  return (
    <Modal style={styles.container} visible={visible}>
      <CameraView
        style={styles.camera}
        facing="back"
        onBarcodeScanned={({ data }) => {
          if (data && !qrLockRef.current) {
            qrLockRef.current = true
            setTimeout(() => handleUseCoupon(data), 500)
          }
        }}
      />

      <View style={styles.buttonContainer}>
        <Button onPress={onClose}>
          <Button.Title>Voltar</Button.Title>
        </Button>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 32,
    left: 32,
    right: 32,
  },
})

export default CameraModal
