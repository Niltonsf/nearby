import Button from '@/components/Button/Button'
import Steps from '@/components/Steps/Steps'
import Welcome from '@/components/Welcome/Welcome'
import { router } from 'expo-router'
import { View } from 'react-native'

export default function Index() {
  const onComecar = () => {
    router.navigate('/home')
  }

  return (
    <View style={{ flex: 1, padding: 40, gap: 40 }}>
      <Welcome />

      <Steps />

      <Button onPress={onComecar}>
        <Button.Title>Começar</Button.Title>
      </Button>
    </View>
  )
}
