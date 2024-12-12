import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'
import { IconTicket } from '@tabler/icons-react-native'
import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

interface CouponProps {
  code: string
}

const Coupon = ({ code }: CouponProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Utilize esse cupom</Text>

      <View style={styles.content}>
        <IconTicket size={24} color={colors.green.light} />

        <Text style={styles.code}>{code}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
  },
  title: {
    color: colors.gray[500],
    fontFamily: fontFamily.medium,
    marginBottom: 12,
    fontSize: 14,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.green.soft,
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 8,
    gap: 10,
  },
  code: {
    color: colors.gray[600],
    fontSize: 16,
    fontFamily: fontFamily.semiBold,
    textTransform: 'uppercase',
  },
})

export default Coupon
