import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import tw from 'twrnc';

const App = () => {
  return (
    <>
      <View style={styles.centerContainer}>
        <Text style={styles.header}> Hello World</Text>
        <AntDesign name="upcircle" size={32} color="white" />
      </View>
    </>
  );
};

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

export default App;
