import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Ionicon} from '../../base/icon';
import tw from 'twrnc';

export default function ScreenHeader() {
  return (
    <View style={styles.screen}>
      <Ionicon icon="menu-outline" style={styles.icon} />
      <Text>Hey</Text>
      <Ionicon icon="notifications-outline" style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: tw`
  flex-row
  items-center
  justify-between
  bg-white
  pt-8
  `,

  icon: tw`
  text-black
  text-3xl
  `,
});
