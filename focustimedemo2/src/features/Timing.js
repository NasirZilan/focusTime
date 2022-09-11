import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';
import { fontSizes } from '../utils/sizes'
export const Timing = ({onChangeTime})=>{

  return(
    <>
    <View style={styles.timingButton}>
    <RoundedButton title='5' size={70}  onPress={() => onChangeTime(5)}/>
    </View>
    <View style={styles.timingButton}>
    <RoundedButton title='15' size={70}  onPress={() => onChangeTime(15)}/>
    </View>
    <View style={styles.timingButton}>
    <RoundedButton title='25' size={70}  onPress={() => onChangeTime(25)}/>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center',
  },
});