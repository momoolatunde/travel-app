import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <>
      <View style={styles.centerContainer}>
        <Text style={styles.text}>Hello World</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default App;
