import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import tw from 'twrnc';

export default function ProfileScreen() {
  return (
    <>
      <View style={styles.centerContainer}>
        <Text style={styles.header}>Profile Screen</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  centerContainer: tw`
    flex-auto
    justify-center
    items-center
    bg-red-500
  `,

  header: tw`
    text-3xl font-bold text-white
   `,
});
