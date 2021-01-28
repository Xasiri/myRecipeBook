import React from 'react';

import { StyleSheet, Text, View, Button } from 'react-native';

const CategoryMealsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text> This is Category Meals Screen</Text>
      <Button
        title="Tap here"
        onPress={() => {
          props.navigation.navigate('Meal Deatil Screen');
        }}
      />
      <Button
        title="Go Back"
        onPress={() => {
          props.navigation.pop();
        }}
      />
    </View>
  );
};

export default CategoryMealsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
