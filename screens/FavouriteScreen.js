import { StyleSheet, Text, View } from 'react-native';

const FavouriteScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>This is Favourite Screen!</Text>
    </View>
  );
};

export default FavouriteScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
