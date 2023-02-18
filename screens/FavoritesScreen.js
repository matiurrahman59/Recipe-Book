import { useContext } from 'react';

// internal import
import { MEALS } from '../data/dummy-data';
import MealsList from '../components/MealsList/MealsList';

// store
import { FavoritesContext } from '../store/context/favorites-context';
import { StyleSheet, Text, View } from 'react-native';

const FavoritesScreen = () => {
  const favoriteMealsCtx = useContext(FavoritesContext);

  // filtering favorite meals
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You have no favorite meals</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
