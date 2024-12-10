import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'
import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Step from './Step'
import { IconMapPin, IconQrcode, IconTicket } from '@tabler/icons-react-native'

const steps = [
  {
    icon: IconMapPin,
    title: 'Encontre estabelecimentos',
    description: 'Veja locais perto de você que são parceiros Nearby'
  },
  {
    icon: IconQrcode,
    title: 'Ative o cupom com QR Code',
    description: 'Escaneie o código no estabelecimento para usar o benefício'
  },
  {
    icon: IconTicket,
    title: 'Garanta vantagens perto de você',
    description: 'Ative cupons onde estiver, em diferentes tipos de estabelecimento '
  }
]

const Steps = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Veja como funciona</Text>

      {steps.map((step, index) => (
        <Step 
          key={index} 
          icon={step.icon}
          title={step.title} 
          description={step.description} 
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 24
  },
  title: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.gray[500]
  }
})

export default Steps