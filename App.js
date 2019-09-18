import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>clean project</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282a36',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: '#f8f8f2',
    fontWeight: '200',
    fontSize: 20,
  },
});

export default App;
