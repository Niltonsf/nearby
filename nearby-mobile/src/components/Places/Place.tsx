import { Place as IPlace } from '@/models/Place'
import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'
import { IconTicket } from '@tabler/icons-react-native'
import React from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  TouchableOpacityProps,
} from 'react-native'

export interface PlaceProps extends TouchableOpacityProps {
  data: IPlace
}

const Place = ({ data, ...rest }: PlaceProps) => {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Image style={styles.image} source={{ uri: data.cover }} alt="" />

      <View style={styles.content}>
        <Text style={styles.name}>{data.name}</Text>

        <Text style={styles.description}>{data.description}</Text>

        <View style={styles.footer}>
          <IconTicket size={16} color={colors.red.base} />
          <Text style={styles.tickets}>{data.coupons} cupons disponíveis</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: '100%',
    padding: 8,
    borderWidth: 1,
    borderColor: colors.gray[200],
    borderRadius: 12,
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  image: {
    width: 116,
    height: 104,
    backgroundColor: colors.gray[200],
    borderRadius: 8,
  },
  content: {
    flex: 1,
    gap: 4,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 12,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
  },
  footer: {
    flexDirection: 'row',
    gap: 7,
    marginTop: 10,
  },
  tickets: {
    fontSize: 12,
    fontFamily: fontFamily.regular,
    color: colors.gray[400],
  },
})

export default Place
