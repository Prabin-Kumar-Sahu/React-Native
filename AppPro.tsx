import React from 'react';
import {View, Text, StyleSheet, useColorScheme} from 'react-native';

function AppPro(): JSX.Element {
  const isDarkMood = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <Text style={isDarkMood ? styles.whiteText : styles.darkText}>
        Hello World
        Hello World
        Hello World
   
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  whiteText: {
    color: '#FFFFFF',
  },
  darkText: {
    color: '#000000',
  },
});

export default AppPro;
