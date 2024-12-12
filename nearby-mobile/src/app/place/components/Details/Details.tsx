import { Place } from '@/models/Place'
import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'
import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Info from '../Info/Info'
import { IconMapPin, IconPhone, IconTicket } from '@tabler/icons-react-native'

interface DetailsProps {
  data: Place
}

const Details = ({ data }: DetailsProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{data.name}</Text>

      <Text style={styles.description}>{data.description}</Text>

      <View style={styles.group}>
        <Text style={styles.title}>Informações</Text>

        <Info
          icon={IconTicket}
          description={`${data.coupons} cupons disponíveis`}
        />
        <Info icon={IconMapPin} description={data.address} />
        <Info icon={IconPhone} description={data.phone} />
      </View>

      <View style={styles.group}>
        <Text style={styles.title}>Regulamento</Text>

        {data.rules.map((rule) => (
          <Text key={rule.id} style={styles.rule}>
            {`\u2022`} {rule.description}
          </Text>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 32,
    paddingBottom: 0,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    backgroundColor: colors.gray[100],
  },
  name: {
    fontSize: 20,
    fontFamily: fontFamily.bold,
    color: colors.gray[600],
  },
  description: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
    marginTop: 12,
    marginBottom: 32,
    lineHeight: 22,
  },
  group: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[200],
    paddingBottom: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 14,
    fontFamily: fontFamily.medium,
    color: colors.gray[500],
    marginBottom: 12,
  },
  rule: {},
})

export default Details
