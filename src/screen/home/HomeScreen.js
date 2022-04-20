import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import tw from 'twrnc';
import ScreenHeader from '../../components/header/ScreenHeader';

export default function HomeScreen() {
  return (
    <View style={styles.screen}>
      <ScreenHeader />
      <Text style={styles.header}>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: tw`
  flex-auto
  bg-white
  p-4
  `,

  header: tw`
    text-3xl
    font-bold
    text-black
   `,
});
