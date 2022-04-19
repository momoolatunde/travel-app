import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import tw from 'twrnc';

export default function HomeScreen() {
  return (
    <>
      <View style={styles.centerContainer}>
        <Text style={styles.header}>Home Screen</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  centerContainer: tw`
    flex-auto
    justify-center
    items-center
    bg-white
  `,

  header: tw`
    text-3xl font-bold text-black
   `,
});
