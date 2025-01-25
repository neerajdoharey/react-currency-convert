import React from 'react'
import type { PropsWithChildren } from 'react'

import { View, Text, StyleSheet } from 'react-native'

type CurrenctBtnProps = PropsWithChildren<{
  name: string;
  flag: string;
}>

const CurrenctBtn = (props: CurrenctBtnProps) => {
  return(
    <View></View>
  )
}

export default CurrenctBtn